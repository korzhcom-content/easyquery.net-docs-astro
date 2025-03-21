---
title: DbTable class
slug: easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtable-class
---


Represents one table in [Korzh.EasyQuery.Db.DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) object which corresponds to some database table
```csharp
public class Korzh.EasyQuery.Db.DbTable
    : Table

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbTable() | `void` | Initializes a new instance of the `DbTable` class. | 
| DbTable([Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) source) | `void` | Initializes a new instance of the `DbTable` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| FullName | `string` | Gets the full name of the table. | 
| Hints | `string` | Gets or sets the hints of the table. | 
| IsQuoted | `bool` | Gets or sets a value indicating whether name of this table should be quoted in SQL expressions. | 
| Name | `string` | Gets or sets the name of the table. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetCalcAlias() | `string` | Gets the calculated alias (used when the "alias" field is empty) | 
| GetFromExpr([SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the full name of the table which is used in FROM clause. | 
| GetRank() | `int` | Gets table's rank. It represents the number of links which come out from this table and table's priority | 
| GetSqlExpr([SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the SQL expression that represents the table in WHERE clause. | 
| GetSqlName([SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the full DB name that represents the table. | 
| GetTableName() | `string` | Gets the name of the table. | 
| GetTableTag() | `string` | Gets the table class (DB or virtual). | 
| NeedQuote(`string` s) | `bool` | Gets a value indicating whether string should be quoted | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one table's property from JSON | 
| ToString() | `string` | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Writes the content of DbTable object to JSON (asynchronous way). |