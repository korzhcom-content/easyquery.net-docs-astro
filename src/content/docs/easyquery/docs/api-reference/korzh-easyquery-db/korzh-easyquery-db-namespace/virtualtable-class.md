---
title: VirtualTable class
slug: easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/virtualtable-class
---


Represents a virtual table.  Virtual tables do not correpond to some table in database but are defined through some SQL SELECT statement instead.
```csharp
public class Korzh.EasyQuery.Db.VirtualTable
    : Table

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| VirtualTable() | `void` | Initializes a new instance of the `VirtualTable` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Expr | `string` | Gets or sets the expression. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetFromExpr([SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the full name of the table which is used in FROM clause. | 
| GetPrimalExpr([SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the "primal" table expression.  Usually it's the name this table is referenced by in the DB.  However, for a virtual table it's simply its expression. | 
| GetSqlExpr([SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the SQL expression that represents the table in WHERE clause. | 
| GetSqlName([SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the name that represents the table in SQL expressions. | 
| GetTableTag() | `string` | Gets the table class (DB or virtual). | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one table's property from JSON (asynchronous way). | 
| ToString() | `string` | Returns a `System.String` that represents the current `System.Object`. | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Writes the content of VirtualTable object to JSON (asynchronous way). |