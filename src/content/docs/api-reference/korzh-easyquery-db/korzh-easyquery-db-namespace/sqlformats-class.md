---
title: SqlFormats class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class
sidebar:
  order: 100
---

Represents different formats of SQL statements.
```csharp
public class Korzh.EasyQuery.Db.SqlFormats

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SqlFormats() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.SqlFormats](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| QuotedTypes | [DataTypeList](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatypelist-class) | Represents list of data types that must be quoted in result SQL. | 
| SqlSyntax | [SqlSyntax](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/sqlsyntax-enum) | Gets or sets the type of SQL syntax. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AlphaAlias | `bool` | Gets or sets a value indicating whether column alias should have only "alpha" symbols. | 
| AlwaysQuote | `bool` | Determines whether columns and tables should be always quoted in SQL. | 
| BracketJoins | `bool` | Gets or sets a value indicating whether `Korzh.EasyQuery` must bracket joins in result SQL statement. | 
| DateFormat | `string` | Gets or sets the format of date constant values in generated SQL statements. | 
| DateTimeFormat | `string` | Gets or sets the format of date/time constant values in generated SQL statements. | 
| DefaultSchemaName | `string` | Gets or sets the name of the default schema. | 
| EOL | [EOLSymbol](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/eolsymbol-enum) | Gets or sets the end-of-line symbol(s) | 
| EscapeSymbol | `string` | Gets or sets the escape symbol. | 
| FalseValue | `string` | Gets or sets the text used for "False" value in SQL expressions. | 
| FilterMode | `bool` | Gets or sets a value indicating whether we should generate the query for filter (e.g. without table names in field representations). | 
| FormatType | [FormatType](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/formattype-enum) | Gets or sets the format type. | 
| GroupByCalcColumns | `bool` | Gets or sets a value indicating whether SQL generator should use calculated columns "as is" in GROUP BY clause | 
| IdentQuote1 | `Char` | Gets or sets the left quote symbol for identifiers (double-quote by default). | 
| IdentQuote2 | `Char` | Gets or sets the right quote symbol for identifiers (double-quote by default). | 
| JoinsOrder | [JoinsOrder](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/joinsorder-enum) | Gets or sets the type of table order in the FROM clause of generated SQL statement | 
| LegacyPaging | `bool` | Get or sets value indicating whether paging should be made using ROW_NUMBER() function. | 
| LimitClauseTemplate | `string` | Gets or sets template clause for pagination (default value depends on database). | 
| LowerFuncName | `string` | Gets or sets the name of the LOWER function. | 
| MaxIdentLen | `int` | Gets or sets a maximum length of identifiers (e.g. table or column aliases) in generated queries. 0 - means that this options is ignored | 
| MoneySuffix | `string` | Gets or sets the suffix for the values with "money" or "currency" types. | 
| OrderByStyle | [OrderByStyles](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/orderbystyles-enum) | Gets or sets the style of ORDER BY clause. | 
| ParameterPrefix | `string` | Gets or sets the prefix symbol which precedes the parameter names in generated SQL statement.  Usually it's '@' symbol but for some databases it must be set to ':' | 
| PrefixUnicodeConsts | `bool` | Gets or sets a value indicating whether SQL generator should add 'N' prefix before string constants with Unicode characters | 
| QuoteBool | `bool` | Gets or sets a value indicating whether currently used SQL syntax requires to quote the boolean values. | 
| QuoteColumnAlias | `bool` | Gets or sets a value indicating whether all columns aliases must be quotes in result SQL. | 
| QuoteTime | `bool` | Gets or sets a value indicating whether currently used SQL syntax requires to quote the date and time values. | 
| RecordCountTemplate | `string` | Gets or sets template clause for count records (default value depends on database). | 
| RowNumberAlias | `string` | Gets or sets the alias for ROW_NUMBER column.  This option is used only when LegacyPaging is turned on. | 
| SqlQuote1 | `Char` | Gets or sets the left quote symbol (double-quote by default). | 
| SqlQuote2 | `Char` | Gets or sets the right quote symbol (double-quote by default). | 
| SupportHashJoin | `bool` | Gets or sets a value indicating wether DB supports (LEFT | INNER | RIGHT) HASH JOINs | 
| SupportPaging | `bool` | Gets or sets a value indicating whether paging commands (like OFFSET/FETCH) are supported. | 
| SupportRightJoin | `bool` | Gets or sets a value indicating wether DB supports RIGHT JOINs. | 
| TimeFormat | `string` | Gets or sets the format of time constant values used in generated SQL statements. | 
| TrueValue | `string` | Gets or sets the text used for "True" value in SQL expressions. | 
| UseAsInFrom | `bool` | Gets or sets a value indicating whether we must add AS conjuction between table name and alias in the FROM clause. | 
| UseColumnAliases | [ColumnAliasesUsage](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/columnaliasesusage-enum) | Gets or sets the value that determine when column aliases must be used in result SQL. | 
| UseDbName | `bool` | Gets or sets a value indicating whether `Korzh.EasyQuery` will add database name into table names in result SQL statememnt. | 
| UseSchema | `bool` | Gets or sets a value indicating whether `Korzh.EasyQuery` will use schema in result SQL statememnt. | 
| UseTableAlias | `bool` | Gets or sets a value indicating whether we will use table aliases in generated queries. | 
| WildcardAny | `Char` | Gets or sets the wild symbol used in LIKE SQL operator (% by default). | 
| WildcardSingle | `Char` | Gets or sets the wildcard symbol used in LIKE SQL operator to match any single charcter (_ by default). | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CopyFrom([SqlFormats](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) source) | `void` | Copies the formats from another formats object. | 
| CopyFromCore([SqlFormats](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) source) | `void` | Copies all formats from some [Korzh.EasyQuery.Db.SqlFormats](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) object. | 
| Equals(`object` obj) | `bool` | Determines whether the specified `System.Object` is equal to this instance. | 
| GetEolSymbol() | `string` | Gets the string representation of end-of-line symbol(s) | 
| GetHashCode() | `int` | Returns a hash code for this instance. | 
| IsQuotedType([DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) type) | `bool` | Determines whether the specified type must be quoted. | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads formats from XML reader. | 
| LoadNode(`string` nodeName, `string` nodeValue) | `void` | Loads the root node of the [Korzh.EasyQuery.Db.SqlFormats](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) object. | 
| QuoteIdentifier(`string` ident) | `string` | Returns the string passed in paraters wrapped with IdentQuote1 and IdentQuote2 symbols | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Loads QueryFormats from JSON (asynchronous way).  Calls [Korzh.EasyQuery.Db.SqlFormats.ReadOnePropFromJsonAsync(Newtonsoft.Json.JsonReader,System.String)](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) function. | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Loads a property of QueryFormats (asynchronous way). | 
| SaveNodes(`XmlWriter` writer) | `void` | Saves [Korzh.EasyQuery.Db.SqlFormats](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) object to XML writer. | 
| SaveToXmlWriter(`XmlWriter` writer, `string` rootNodeName) | `void` | Saves formats to XML writer. | 
| SetDefaultFormats([FormatType](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/formattype-enum) formatType) | `void` | Sets the default formats for different types of databases. | 
| WriteContentToJsonAsync(`JsonWriter` writer) | `Task` | Saves the properties of QueryFormats to JSON (asynchronous way). | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Saves QueryFormats to JSON (asynchronous way).  Calls [Korzh.EasyQuery.Db.SqlFormats.WriteContentToJsonAsync(Newtonsoft.Json.JsonWriter)](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) function. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Default | [SqlFormats](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) | Gets the default set of formats. |
