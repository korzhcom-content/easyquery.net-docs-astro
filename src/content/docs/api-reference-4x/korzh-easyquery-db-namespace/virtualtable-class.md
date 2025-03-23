---
title: VirtualTable class
slug: api-reference-4x/korzh-easyquery-db-namespace/virtualtable-class
---


Represents a virtual table.  Virtual tables do not correpond to some table in database but are defined through some SQL SELECT statement instead.
```csharp
public class Korzh.EasyQuery.Db.VirtualTable
    : Table, IComparable<Table>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Expr | Gets or sets the expression. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetFromExpr(`DbQueryFormats` formats) | Gets the full name of the table which is used in FROM clause. | 
| `String` | GetSqlExpr(`DbQueryFormats` formats) | Gets the SQL expression that represents the table in WHERE clause. | 
| `String` | GetSqlName(`DbQueryFormats` formats) | Gets the name that represents the table in SQL expressions. | 
| `String` | GetTableClass() | Gets the table class (DB or virtual). | 
| `void` | ProcessAttribute(`XmlReader` reader) | Processes one attribute during XML reading. | 
| `void` | SaveAttributes(`XmlWriter` writer) | Saves table properties to `System.Xml.XmlWriter`. | 
| `String` | ToString() | Returns a `System.String` that represents the current `System.Object`. |