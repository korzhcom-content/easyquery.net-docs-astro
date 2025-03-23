---
title: Customizing SQL query formats
slug: how-to/customizing-sql-query-formats
---


## Problem Overview

Working with EasyQuery, you can use different DB systems, such as MS SQL Server, My SQL, Oracle, etc. All these systems support SQL,
but can use slightly different syntax for table joins, different quoting symbol or different formats for some particular types of values (date/time, boolean and so on). 

Sometimes you need to define some special requirements, for example, you may want to make all columns in generated query have clear and readable titles.

All such requirement can be controlled by special `Formats` property exposed in `SqlQueryBuilder` and `EqServiceProviderDb` classes.

## Default Formats

There is `SetDefaultFormats` method in EasyQuery which gives an opportunity to set formats for the most popular DB systems into defaults. The primary parameter for this method is enumeration `FormatType`. These are possible values:

* MsAccess
* MsSqlServer
* Oracle
* MySQL

Example for MVC projects:

```
eqService.Formats.SetDefaultFormats(FormatType.MsSqlServer);
```

## Formatting date/time values

You can set different Date/Time Formats, according to settings you are used to in your country, or even according to your practice.

If you need to format the date/time values in result SQL, then you can do it via `Formats.DateFormat` and `Formats.DateTimeFormat` properties of a DbQuery object. Additionally, you may specify if date/time values should be quoted via `QuoteTime` property.

Here is an example of setting date/time formats in MVC application (via EqServiceProviderDb object in EasyQueryController's constructor):

```
var eqService = new EqServiceProviderDb();
. . . . . . .
eqService.Formats.DateFormat = "dd/MM/yyyy";
eqService.Formats.DateTimeFormat = "dd/MM/yyyy HH:mm:ss";
```

For other versions you should use this code:

```
var builder = new SqlQueryBuilder(query);
builder.Formats.DateFormat = "MM/dd/yyyy";
builder.Formats.DateTimeFormat = "MM/dd/yyyy HH:mm:ss";
builder.Formats.TimeFormat = "HH:mm:ss";
builder.QuoteTime = true;
builder.BuildSQL();
```

## Boolean values

To format boolean values you can use `QuoteBool` property (with obvious meaning) and `FalseValue` and `TrueValue` properties to specify the constants that will be used as 'false' and 'true' correspondingly:

```c#
  ...Formats.QuoteBool = false;
  ...Formats.FalseValue = "0";
  ...Formats.TrueValue = "1";
```

## Column aliases formatting
Sometimes it is necessary to make user-friendly column aliases (since they can be used as column headers when showing query result in some grid).
In other cases, there can be a requirement to use alphanumeric names for column aliases. 
`Formats` has few sub-properties which allow you to control such things:

**UseColumnAliases** : *ColumnAliasesUsage* 
This property allows you to turn column aliases on/off. Possible values are:
 - *Never* - EasyQuery will not add column aliases. This option is useful only when you generate a filter string for one table/data set.
 - *IfNecessary* - default value. Column aliases will be added only if it's necessary: either there is an ambiguity between columns from different tables or the aliases is necessary for other statement clauses.
 - *Always* - aliases will be generated for all columns

**QuoteColumnAlias** : *bool* 
If true - all column aliases will be taken into quotes whether it's necessary or not.

**AlphaAlias** : *bool*
Specifies whether column aliases should be alphanumeric only. So no spaces or other symbols in alias names.

Here is an example of code for (MVC project) which turns on aliases for all columns and allows to use more "friendly" aliases (with spaces and other symbols):

```c#
eqService.Formats.QuoteColumnAlias = true;
eqService.Formats.UseColumnAliases = ColumnAliasesUsage.Always;
eqService.Formats.AlphaAlias= false;
```

## Other Options

Here is the set of additional options for DB Query Formats:

* **EOL**: *public* 
Determines the end-of-line symbol(s).

* **EscapeSymbol**: *string* 
Allows to set up the escape symbol.

* **FilterMode**: *bool* 
Specifies a value indicating whether we should generate the query for a filter (e.g. without table names in field representations). 

* **LowerFuncName**: *string* 
Assigns the name of the LOWER function.

* **MaxIdentLen**: *public int* 
Determines a maximum length of identifiers (e.g. table or column aliases) in generated queries. 0 - means that this option is ignored.

* **MoneySuffix**: *string* 
Gets or sets the suffix for the values with "money" or "currency" types.

* **OrderByStyle**: *public* 
Defines the style of ORDER BY clause.

* **WildSymbol**: *char* 
Specifies the wild symbol used in LIKE SQL operator (% by default).