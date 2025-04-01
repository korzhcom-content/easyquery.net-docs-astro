---
title: DbTable class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbtable-class
sidebar:
  order: 100
---

Represents one table in [Korzh.EasyQuery.Db.DbModel](///////////////easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbmodel-class) object which corresponds to some database table
```csharp
public class Korzh.EasyQuery.Db.DbTable
    : Table, IComparable<Table>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | FullName | Gets the full name of the table. | 
| `String` | Hints | Gets or sets the hints of the table. | 
| `String` | Name | Gets or sets the name of the table. | 
| `Boolean` | Quote | Gets or sets a value indicating whether name of this table should be quoted in SQL expressions. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetCalcAlias() | Gets the calculated alias (used when the "alias" field is empty) | 
| `String` | GetFromExpr(`DbQueryFormats` formats) | Gets the full name of the table which is used in FROM clause. | 
| `String` | GetSqlExpr(`DbQueryFormats` formats) | Gets the SQL expression that represents the table in WHERE clause. | 
| `String` | GetSqlName(`DbQueryFormats` formats) | Gets the full DB name that represents the table. | 
| `String` | GetTableClass() | Gets the table class (DB or virtual). | 
| `String` | GetTableName() | Gets the name of the table. | 
| `Boolean` | NeedQuote(`String` s) | Gets a value indicating whether string should be quoted | 
| `void` | ProcessAttribute(`XmlReader` reader) | Processes one attribute during XML reading. | 
| `void` | SaveAttributes(`XmlWriter` writer) | Saves table properties to `System.Xml.XmlWriter` object. | 
| `String` | ToString() | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. |
