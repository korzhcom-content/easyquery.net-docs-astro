---
title: Version 7.5 release notes
slug: release-notes/version-7-5
sidebar:
  order: 2
---

Version 7.5 is a minor update of **EasyQuery.NET**. This version continues our goal of providing a platform-independent solution for embedding ad hoc reporting and advanced search functionality into web applications while hiding the complexity of SQL from end-users.

These notes cover everything released after the 7.4 line: the 7.4.2 maintenance update and the 7.5.0 release. For 7.4.0 and 7.4.1 see the [Version 7.4 release notes](/easyquery/docs/release-notes/version-7-4); the full list of changes is in the [Changelog](/easyquery/docs/release-notes/changelog).

Here is the list of the most important changes we want to focus your attention on:

### 1. Full-Text Search for SQL Queries
Until now, the full-text search was available only in the LINQ scenario. Version 7.5.0 brings it to SQL queries (`EasyQueryManagerSql`) as well, with one API that works the same way for both SQL and LINQ:
*   **AddFullTextSearchConditions Extension**: Adds the search conditions to an existing query. The text is turned into a group of "contains" conditions linked with OR — one for each searchable attribute. Several terms can be combined with `||`. By default the group goes to the query's `ExtraConditions`, so it's applied to the result but not shown to end-users in the query builder.
*   **Standalone Search Queries**: The new `DbModel.CreateFullTextSearchQuery()` and `DbModel.BuildFullTextSearchSql()` methods build a separate search query (or a ready SQL statement) over the model's entities.
*   **Search Scope Taken from the Query**: The search covers the query's result columns if it has any, otherwise the entities used in its conditions, and only for an empty query — the entities listed in the options.
*   **DbFullTextSearchOptions**: A single options class tunes the search: the list of entities, the root entity, extra conditions and sorting.

```csharp
options.UseQueryTuner(manager => {
    if (manager.ClientData.TryGetValue("text", out var text) && !string.IsNullOrWhiteSpace(text?.ToString())) {
        manager.Query.AddFullTextSearchConditions(text.ToString(), new DbFullTextSearchOptions {
            IncludeDateTimeFields = true,
            IncludeNumericFields = true
        });
    }
});
```

See the [Full-text search](/easyquery/docs/how-to/full-text-search) article for the complete guide. To see the full-text search for SQL queries in action, try our new [Data Filtering demo](https://demo.korzh.com/data-filtering2) web application.

### 2. Searching Beyond Text Fields
The full-text search is no longer limited to text attributes:
*   **Case-Insensitive by Default**: The new `IgnoreCase` option (on by default) makes `london`, `London` and `LONDON` find the same records. It relies on the new `ContainsIgnoreCase` operator, which is added to the default operators but never appears in the query builder UI.
*   **Date/Time and Numeric Fields**: With `IncludeDateTimeFields` and `IncludeNumericFields` turned on, these attributes are searched by the string representation of their values, so `2024-07` finds the dates of July 2024 and `32.38` finds that exact amount. A search term without digits is never matched against a numeric field.
*   **ContainsAsText Operator and CastToString Function**: The new `ContainsAsText` operator works like "Contains" but converts its left operand to text first. On the SQL side it's rendered through the new `CastToString` function, implemented for SQL Server, MySQL, PostgreSQL, SQLite, Oracle and MS Access; on the LINQ side it becomes a `ToString()` call.

### 3. Sorting and Resizing Columns Right in the Result Grid
End-users can now arrange the query result directly in the result grid, without going back to the query builder. These features are available thanks to the latest changes in the **EasyQuery.JS** (7.5.0) and **EasyData** (1.6.0) libraries that EasyQuery.NET 7.5 works with:
*   **Column Sorting**: A click on a column header changes the sorting of that column (ascending → descending → none), and a sort indicator shows the current direction. The sorting is written into the query itself and the data is re-fetched from the server, so it's applied to the whole result set, not just the current page. Several columns can be sorted at once, and the sorting bar and columns panel stay in sync with the grid. If the server fails to sort by the chosen column, the previous sorting is restored.
*   **Column Width**: Columns can be resized by dragging the edge of the header. The widths are remembered (by default in the browser's local storage) and restored the next time the result is shown. They're kept per data model or per query (`columnWidthPersistence` grid option), and you can plug in your own storage via the `columnWidthStoreResolver` context option — for example, to keep the widths on the server. The persistence also works for auto-generated columns, thanks to the `AttrId` that EasyQuery.NET now assigns to them (see [LINQ Improvements](#7-linq-improvements) below).

### 4. Cascading Value Lists
Starting from version 7.4.2, SQL-based value lists (`SQLLIST` value editors) support cascading: when a value editor depends on another attribute (its `DependsOnAttrId` property), the value selected for that parent attribute is sent with the value list request and used to filter the list on the server. The new `ParentValue` property of the `ListRequestOptions` class holds that value.

### 5. Security Fixes
*   **SQL Injection in Value Lists**: Version 7.5.0 fixes a SQL injection vulnerability in `SqlValueListResolver`: the names of the extra parameters of a value list request were inserted into the SQL statement as is. Now only the extra parameters declared for the value editor in the data model are accepted; everything else is ignored. **We strongly recommend upgrading** if your application uses SQL-based value lists.
*   **Cancelled Requests**: An EasyQuery API request cancelled by the client could end up with an unhandled "Synchronous operations are disallowed" exception that masked the original error. The response writers are now always disposed asynchronously, so such requests end with a proper error response.

### 6. SQL Generation Fixes
This release resolves a number of issues in the generated SQL:
*   **Date Functions on Various Databases**: The `AddHours`, `AddDays`, `AddMonths` and `AddYears` functions (used by the "Last N days" and similar operators) now produce correct SQL for **PostgreSQL** (`INTERVAL` with a typed left operand instead of SQL Server's `DATEADD`) and **MS Access** (`DateAdd()`). `AddHours` works again on **SQLite**.
*   **Function Markers**: Several function markers in one expression are all resolved now, and function arguments that contain nested calls with commas are no longer split apart.
*   **Aggregate Columns**: The tables used inside aggregate function arguments (e.g. `SUM` over a custom SQL expression) are now included in the `FROM` clause, and `COUNT(*)` is handled properly.
*   **Quoted Attributes in Joins**: The attribute's `IsQuoted` flag is now respected in the `JOIN` conditions, not only in the column list and `WHERE` clause.
*   **Case-Insensitive Filter Expressions**: `FilterExpressionBuilder` wrapped an operand in `LOWER()` when the operator was *not* case-insensitive. Now it does so only for case-insensitive operators, and only for string operands.
*   **Sub-select Detection**: Identifiers like `SELECTED_QTY` are no longer mistaken for a sub-select when building the `GROUP BY` clause.
*   **Unreachable Tables**: Building a query no longer hangs or exhausts memory when a table used in the query can't be reached through the model's links.

### 7. LINQ Improvements
*   **Correct Result Columns**: The rows in the LINQ result set are now built by the query's columns, so the values always land under the right headers, even when the query includes only some of the entity's properties or lists them in a different order.
*   **Column Identity**: Auto-generated LINQ result columns now get the `AttrId` (`originAttrId` on the client side), which enables per-column features such as column width persistence.
*   **Full-Text Search in LINQ**: The LINQ query builder now processes `Query.ExtraConditions` and supports the `ContainsAsText` operator, so the new full-text search works in the LINQ scenario as well.

### 8. Other Changes
*   **EasyData 1.6.0**: EasyQuery.NET 7.5.0 is built on top of the EasyData 1.6.0 packages.
*   **ExportResult Constant**: The `EqAction.ExportResult` constant is back (marked as obsolete) for backward compatibility with the code written for previous versions. Use `EqAction.ExportTotal` instead.
*   **Data Model Editor**: The DME no longer clears the previously selected table when the filter is applied.
