---
title: DbTable class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Db namespace/dbtable-class
---


Represents one table in [Korzh.EasyQuery.Db.DbModel](/api-reference-5x/korzh-easyquery-db-namespace/dbmodel-class) object which corresponds to some database table
```csharp
public class Korzh.EasyQuery.Db.DbTable
    : Table, IComparable<Table>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | FullName | Gets the full name of the table. | 
| `String` | Hints | Gets or sets the hints of the table. | 
| `Boolean` | IsQuoted | Gets or sets a value indicating whether name of this table should be quoted in SQL expressions. | 
| `String` | Name | Gets or sets the name of the table. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetCalcAlias() | Gets the calculated alias (used when the "alias" field is empty) | 
| `String` | GetFromExpr(`DbQueryFormats` formats) | Gets the full name of the table which is used in FROM clause. | 
| `Int32` | GetRank() | Gets table's rank. It represents the number of links which come out from this table | 
| `String` | GetSqlExpr(`DbQueryFormats` formats) | Gets the SQL expression that represents the table in WHERE clause. | 
| `String` | GetSqlName(`DbQueryFormats` formats) | Gets the full DB name that represents the table. | 
| `String` | GetTableName() | Gets the name of the table. | 
| `String` | GetTableTag() | Gets the table class (DB or virtual). | 
| `Boolean` | NeedQuote(`String` s) | Gets a value indicating whether string should be quoted | 
| `void` | ProcessAttribute(`XmlReader` reader) | Processes one attribute during XML reading. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one table's property from JSON | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one table's property from JSON | 
| `void` | SaveAttributes(`XmlWriter` writer) | Saves table properties to `System.Xml.XmlWriter` object. | 
| `String` | ToString() | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. | 
| `void` | WritePropertiesToJson(`JsonWriter` writer) | Writes the content of DbTable object to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer) | Writes the content of DbTable object to JSON (asynchronous way). |