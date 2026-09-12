---
title: Full-text search
slug: how-to/full-text-search
sidebar:
  order: 30
---

## Overview

Starting from version 7.5, EasyQuery.NET can add a full-text search to any query. The text typed by an end-user
is turned into a group of conditions linked with OR — one "contains" condition for each searchable attribute —
so the query returns only the records that contain the text in at least one of those attributes.

It's done by the `AddFullTextSearchConditions` extension method (namespace `Korzh.EasyQuery`). It works the same way
for SQL queries (`EasyQueryManagerSql`) and for LINQ ones (`EasyQueryManagerLinq`):

```csharp
var group = query.AddFullTextSearchConditions("London || Berlin", new DbFullTextSearchOptions {
    IncludeDateTimeFields = true,
    IncludeNumericFields = true
});
```

Several search terms can be combined with `||`: a record matches if it contains any of them.
The method returns the added group of conditions, or `null` if nothing was added
(the text is empty or there is no attribute to search in).

By default the group goes to the query's `ExtraConditions`: it's included in the result SQL (or LINQ expression)
but it's not shown to end-users in the query builder.

## Using it with the EasyQuery middleware

The search text is sent by the client with each "fetch data" request and applied on the server in a query tuner.

On the client side, add the text to the request's `data` object in the `beforeFetchData` handler:

```js
const viewOptions = {
    handlers: {
        beforeFetchData: function (context, options) {
            options.data = options.data || {};
            options.data.text = document.getElementById('SearchText').value;
        }
    }
};
```

On the server side, read it from the manager's `ClientData` and add the search conditions:

```csharp
app.MapEasyQuery(options => {
    // ...

    options.UseQueryTuner(manager => {
        var query = manager.Query;

        // Needed only if the query is kept in the cache between requests (StoreQueryInCache = true):
        // otherwise every new search would add one more group on top of the previous ones.
        // Note that it removes all extra conditions of the query, not only the search ones.
        query.ExtraConditions.Conditions.Clear();

        if (manager.ClientData.TryGetValue("text", out var text) && !string.IsNullOrWhiteSpace(text?.ToString())) {
            query.AddFullTextSearchConditions(text.ToString(), new DbFullTextSearchOptions {
                IncludeDateTimeFields = true,
                IncludeNumericFields = true
            });
        }
    });
});
```

## What is searched

The search scope is defined by the query itself:

1. If the query has result columns, only those columns are searched. In a typical search page these are exactly
   the fields shown in the result grid. For an aggregate column (e.g. `SUM(Orders.Freight)`) the attribute of its argument is used.
2. If the query has no columns, all the attributes of the entities used in its conditions are searched.
3. If the query is empty (no columns and no conditions), the entities listed in `Entities` are searched
   (all entities of the model if the list is empty), plus the attributes of the root entity if `IncludeRootEntity` is on.

Text attributes are always searched. Date/time and numeric ones are searched only when
`IncludeDateTimeFields` / `IncludeNumericFields` is turned on — by the string representation of their values,
so `2024-07` finds the dates of July 2024 and `32.38` finds that exact amount.
A search term with no digits in it is never matched against a numeric attribute.

Neither the attribute's `UseInConditions` flag nor its list of operators narrows the search:
they restrict what end-users can pick in the query builder, while the full-text search covers everything
that can be matched as text.

## Options

All options are the properties of the `DbFullTextSearchOptions` class (namespace `Korzh.EasyQuery`).

| Property | Default | Description |
| --- | --- | --- |
| `IgnoreCase` | `true` | Search the text attributes regardless of the letter case. See [Case-insensitive search](#case-insensitive-search) below. |
| `IncludeDateTimeFields` | `false` | Search in date/time attributes too, by the string representation of their values. |
| `IncludeNumericFields` | `false` | Search in numeric attributes (integers, floats, currency) too, by the string representation of their values. Only the search terms that contain a digit are matched against them. |
| `UseExtraConditions` | `true` | Add the search group to the query's `ExtraConditions` (hidden from end-users). If `false`, the group is added to the query's root conditions. |
| `Entities` | empty | The entities to search in when the query is empty (see [What is searched](#what-is-searched)). If the list is empty, all entities are searched. |
| `IncludeRootEntity` | `true` | Search in the attributes of the root entity when the query is empty. For a model built with `UseEntity<Order>()` these are the attributes of `Order` itself. |
| `OrderBy`, `IsDescendingOrder` | — | The attribute to sort by and the direction. Used by `CreateFullTextSearchQuery` (see below). |

## Case-insensitive search

With `IgnoreCase` turned on (the default), the text attributes are matched regardless of the letter case:
`london`, `London` and `LONDON` find the same records.

To do that, the search conditions use the `ContainsIgnoreCase` operator instead of the regular `Contains` one.
It's a "contains" operator marked as case-insensitive, so both the attribute's value and the search term are compared
in lower case:

* for SQL queries both parts are wrapped in the LOWER function of the current SQL dialect
  (`SqlFormats.LowerFuncName`), e.g. `LOWER(Customers.CompanyName) LIKE LOWER('%london%')`;
* for LINQ queries the condition is `CompanyName.Contains(text) || CompanyName.ToLower().Contains(text.ToLower())`.
  The exact comparison is kept on purpose: EF Core lowers the search term in .NET but the column in the database,
  and the two don't always agree — without it a value typed exactly as it's stored could be missed.

Things to keep in mind:

* The lower-casing is done by the database, so it's as good as the database's LOWER function.
  SQLite's `lower()`, for example, handles only the ASCII (Latin) letters: on SQLite `münster` finds `Münster`,
  but `київ` doesn't find `Київ` (`Київ` itself is still found).
* The date/time and numeric attributes are not affected: they are matched by their string representation as is.
  This matters for databases that convert dates to text with month names (e.g. `Jul  4 2024` in SQL Server).
* `ContainsIgnoreCase` is one of the default operators (it's added by `AddDefaultOperators`), but it's not offered
  for any attribute, so it never appears in the query builder UI. A model loaded from a file saved before this
  operator existed gets it added automatically on the first search.

To search case-sensitively, turn the option off:

```csharp
query.AddFullTextSearchConditions(text, new DbFullTextSearchOptions {
    IgnoreCase = false
});
```

The conditions then use the regular `Contains` operator, and whether the search is case-sensitive depends on the
database: for example, SQL Server compares according to the column's collation (case-insensitive by default),
while PostgreSQL's `LIKE` is case-sensitive. For LINQ queries on SQLite, EF Core translates `Contains` into
`instr()`, which is case-sensitive.

> __NB__: `IgnoreCase` is available starting from the 7.5.0 release. The 7.5.0 release candidates (up to rc04) don't have it:
> their full-text search always uses the regular `Contains` operator.

## A standalone search query

For a `DbModel`, the `Korzh.EasyQuery.Db` package can also build a separate search query (or just its SQL)
over the model's entities. Unlike `AddFullTextSearchConditions`, the query gets result columns as well:
all the attributes of the searched entities.

```csharp
var options = new DbFullTextSearchOptions {
    Entities = { "Customer" },
    OrderBy = "Customers.CompanyName"
};

DbQuery query = model.CreateFullTextSearchQuery("London", options);

// or just the SQL
string sql = model.BuildFullTextSearchSql("London", options).SQL;
```

All the options above (including `IgnoreCase`) apply here as well.

> __NB__: The `FullTextSearchQuery` extension method of `Korzh.EasyQuery.Linq` (with its own `FullTextSearchOptions` class)
> is a separate, older feature: it searches the properties of an `IQueryable` directly, without a data model.
> The options described on this page don't apply to it.
