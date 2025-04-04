---
title: DbQueryFormats class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbqueryformats-class
sidebar:
  order: 100
---

Represents different formats of SQL statements.
```csharp
public class Korzh.EasyQuery.Db.DbQueryFormats
    : QueryFormats

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | SubQueryLevel | Indicates the level of sub-query for the query we are generating currently.  Default value is 0 which means we generate the main query. | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | BracketJoins | Gets or sets a value indicating whether `Korzh.EasyQuery` must bracket joins in result SQL statement. | 
| `String` | DefaultSchemaName | Gets or sets the name of the default schema. | 
| `FormatType` | FormatType | Gets or sets the format type. | 
| `Boolean` | GroupByCalcColumns | Gets or sets a value indicating whether SQL generator should use calculated columns "as is" in GROUP BY clause | 
| `Char` | IdentQuote1 | Gets or sets the left quote symbol for identifiers (double-quote by default). | 
| `Char` | IdentQuote2 | Gets or sets the right quote symbol for identifiers (double-quote by default). | 
| `String` | LimitClauseTemplate | Gets or sets template clause for pagination (default value depends on database). | 
| `String` | ParameterPrefix | Gets or sets the prefix symbol which precedes the parameter names in generated SQL statement.  Usually it's '@' symbol but for some databases it must be set to ':' | 
| `Boolean` | PrefixUnicodeConsts | Gets or sets a value indicating whether SQL generator should add 'N' prefix before string constants with Unicode characters | 
| `String` | RecordCountTemplate | Gets or sets template clause for count records (default value depends on database). | 
| `Char` | SqlQuote1 | Gets or sets the left quote symbol (double-quote by default). | 
| `Char` | SqlQuote2 | Gets or sets the right quote symbol (double-quote by default). | 
| `SqlSyntax` | SqlSyntax | Gets or sets the type of SQL syntax. | 
| `Boolean` | UseAsInFrom | Gets or sets a value indicating whether we must add AS conjuction between table name and alias in the FROM clause. | 
| `Boolean` | UseDbName | Gets or sets a value indicating whether `Korzh.EasyQuery` will add database name into table names in result SQL statememnt. | 
| `Boolean` | UseEntityContainerName | Gets or sets a value indicating whether SQL generator should use entity container name for table definitions in FROM clause | 
| `Boolean` | UseSchema | Gets or sets a value indicating whether `Korzh.EasyQuery` will use schema in result SQL statememnt. | 
| `Boolean` | UseTableAlias | Gets or sets a value indicating whether we will use table aliases in generated queries. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CopyFrom(`QueryFormats` source) | Copies all formats from some [Korzh.EasyQuery.Db.DbQueryFormats](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbqueryformats-class) object. | 
| `Boolean` | Equals(`Object` obj) | Determines whether the specified `System.Object` is equal to this instance. | 
| `Int32` | GetHashCode() | Returns a hash code for this instance. | 
| `void` | LoadFromJsonDict(`JsonDict` dict) | Loads DbQueryFormats from the IDictionary&lt;string, object&gt; object.  Used for deserialization from JSON | 
| `void` | LoadNode(`String` nodeName, `String` nodeValue) | Loads the root node of the [Korzh.EasyQuery.Db.DbQueryFormats](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbqueryformats-class) object. | 
| `String` | QuoteIdentifier(`String` ident) | Returns the string passed in paraters wrapped with IdentQuote1 and IdentQuote2 symbols | 
| `void` | SaveNodes(`XmlWriter` writer) | Saves [Korzh.EasyQuery.Db.DbQueryFormats](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbqueryformats-class) object to XML writer. | 
| `void` | SaveToJsonDict(`JsonDict` dict) | Saves DbQueryFormats to IDictionary&lt;string, object&gt; object.  Used for serialization to JSON | 
| `void` | SetDefaultFormats(`FormatType` formatType) | Sets the default formats for different types of databases. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DbQueryFormats` | Default | Gets the default set of formats. |
