---
title: Table class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class
---

Table class represents one table in a [Korzh.EasyQuery.Db.DbModel](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) object
```csharp
public abstract class Korzh.EasyQuery.Db.Table
    : IComparable<Table>

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| Table() | `void` | Default constructor of the [Korzh.EasyQuery.Db.Table](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) class | 
| Table([Table](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) source) | `void` | Default constructor of the [Korzh.EasyQuery.Db.Table](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) class | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Params | [QueryParamList](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) | The list of parameters associated with this table. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Alias | `string` | Gets or sets the alias. | 
| Category | [TableCategory](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablecategory-class) | Gets or sets the table category. | 
| DBName | `string` | Gets or sets the name of the database. | 
| DesignLayout | `string` | Gets or sets the design layout (left, top and width, height of the table window in Data Model Editor). | 
| ExtraCondition | `string` | Gets or sets the extra condition. | 
| FullName | `string` | Gets the full name of the table. | 
| Info | `IDictionary`&lt;`string`, `object`&gt; | Stores additional information associated with this entity | 
| Links | [TableLinkList](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinklist-class) | Gets the links. | 
| Priority | `int` | Gets or sets the table's priority. The default value is 0.  The table with the biggest priority (among all tables used in this query) will be placed at beginning of FROM clause in the result SQL. | 
| SchemaName | `string` | Gets or sets the name of the schema. | 
| Store | [TableStore](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablestore-class) | Gets the table store of the table. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CompareToTable([Table](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) tbl) | `int` | Compares the current table with another table alphabetically. | 
| ComposeAlias([SqlFormats](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Composes the alias. | 
| GetCalcAlias() | `string` | Gets the calculated alias (used when the "alias" field is empty) | 
| GetFromExpr([SqlFormats](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the full name of the table which is used in FROM clause. | 
| GetPrimalExpr([SqlFormats](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the "primal" table expression.  Usually it's the name this table is referenced by in the DB.  However, for a virtual table it's simply its expression. | 
| GetRank() | `int` | Gets table's rank. It represents the number of links which come out from this table | 
| GetSqlExpr([SqlFormats](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the SQL expression that represents the table in WHERE clause. | 
| GetSqlName([SqlFormats](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the name that represents the table in SQL expressions. | 
| GetTableName() | `string` | Gets the name of the table. | 
| GetTableTag() | `string` | Gets the table Tag (class): DB or virtual. | 
| GetWeight() | `int` |  | 
| NeedQuote(`string` s) | `bool` | Gets a value indicating whether string should be quoted | 
| QuoteIfNecessary(`string` s, [SqlFormats](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Puts quotes around identifier if necessary. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads the content of the table from JSON (asynchronous way). | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one table's property from JSON (asynchronous way). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Writes table's properties to JSON . | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Writes table properties to `Newtonsoft.Json.JsonWriter` object. Calls [Korzh.EasyQuery.Db.Table.WritePropertiesToJsonAsync(Newtonsoft.Json.JsonWriter)](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class)procedure to do the job (asynchronous way). | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CreateByClass(`string` className) | [Table](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) | Creates [Korzh.EasyQuery.Db.Table](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) object the by table class name (db or virtual). |