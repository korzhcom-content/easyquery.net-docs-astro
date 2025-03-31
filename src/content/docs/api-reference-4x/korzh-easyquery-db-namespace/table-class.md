---
title: Table class
slug: api-reference-4x/korzh-easyquery-db-namespace/table-class
---

Table class represents one table in a [Korzh.EasyQuery.Db.DbModel](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbmodel-class) object
```csharp
public abstract class Korzh.EasyQuery.Db.Table
    : IComparable<Table>

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | categoryName |  | 
| `TableLinkList` | links | List of [Korzh.EasyQuery.Db.TableLink](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/tablelink-class) which the tables takes part in. | 
| `QueryParamList` | Params | The list of parameters associated with this table. | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Alias | Gets or sets the alias. | 
| `TableCategory` | Category | Gets or sets the table category. | 
| `String` | DBName | Gets or sets the name of the database. | 
| `String` | DesignLayout | Gets or sets the design layout (left, top and width, height of the table window in Data Model Editor). | 
| `String` | ExtraCondition | Gets or sets the extra condition. | 
| `String` | FullName | Gets the full name of the table. | 
| `IDictionary<String, Object>` | Info | Stores additional information associated with this entity | 
| `Int32` | Priority | Gets or sets the table's priority.  The lower value the more close to the beginning of FROM clause this table will appear | 
| `String` | SchemaName | Gets or sets the name of the schema. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | CompareToTable(`Table` tbl) | Compares the current table with another table alphabetically. | 
| `String` | ComposeAlias(`DbQueryFormats` formats) | Composes the alias. | 
| `void` | EnsureLinkExistence(`TableLink` link) | Ensures the existence of link passed in parameter. | 
| `String` | GetCalcAlias() | Gets the calculated alias (used when the "alias" field is empty) | 
| `String` | GetComposedAlias(`DbQueryFormats` formats) |  | 
| `String` | GetFromExpr(`DbQueryFormats` formats) | Gets the full name of the table which is used in FROM clause. | 
| `TableLinkList` | GetLinks() |  | 
| `String` | GetSqlExpr(`DbQueryFormats` formats) | Gets the SQL expression that represents the table in WHERE clause. | 
| `String` | GetSqlName(`DbQueryFormats` formats) | Gets the name that represents the table in SQL expressions. | 
| `String` | GetTableClass() | Gets the table class (DB or virtual). | 
| `String` | GetTableName() | Gets the name of the table. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | When overriden in a derived class loads table properties from `System.Xml.XmlReader` object. | 
| `void` | LoadNodes(`XmlReader` reader) | Loads the sub-nodes of table's node. | 
| `Boolean` | NeedQuote(`String` s) | Gets a value indicating whether string should be quoted | 
| `void` | ProcessAttribute(`XmlReader` reader) | Processes one attribute during XML reading. | 
| `String` | QuoteIfNecessary(`String` s, `DbQueryFormats` formats) | Puts quotes around identifier if necessary. | 
| `void` | SaveAttributes(`XmlWriter` writer) | Saves table properties to `System.Xml.XmlWriter` object. | 
| `void` | SaveNodes(`XmlWriter` writer) | Saves the nodes to XML writer. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves table properties to `System.Xml.XmlWriter` object. Calls [Korzh.EasyQuery.Db.Table.SaveAttributes(System.Xml.XmlWriter)](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/table-class)procedure to do the job. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Table` | CreateByClass(`String` className) | Creates [Korzh.EasyQuery.Db.Table](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/table-class) object the by table class name (db or virtual). |