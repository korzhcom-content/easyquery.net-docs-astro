---
title: VirtualTable class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Db namespace/virtualtable-class
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
| `String` | GetPrimalExpr(`DbQueryFormats` formats) | Gets the "primal" table expression.  Usually it's the name this table is referenced by in the DB.  However, for a virtual table it's simply its expression. | 
| `String` | GetSqlExpr(`DbQueryFormats` formats) | Gets the SQL expression that represents the table in WHERE clause. | 
| `String` | GetSqlName(`DbQueryFormats` formats) | Gets the name that represents the table in SQL expressions. | 
| `String` | GetTableTag() | Gets the table class (DB or virtual). | 
| `void` | ProcessAttribute(`XmlReader` reader) | Processes one attribute during XML reading. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one table's property from JSON | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one table's property from JSON (asynchronous way). | 
| `void` | SaveAttributes(`XmlWriter` writer) | Saves table properties to `System.Xml.XmlWriter`. | 
| `String` | ToString() | Returns a `System.String` that represents the current `System.Object`. | 
| `void` | WritePropertiesToJson(`JsonWriter` writer) | Writes the content of VirtualTable object to JSON | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer) | Writes the content of VirtualTable object to JSON (asynchronous way). |