---
title: SubQueryExpr class
slug: api-reference-4x/korzh-easyquery-db-namespace/subqueryexpr-class
---


Represents a sub-query expression
```csharp
public class Korzh.EasyQuery.Db.SubQueryExpr
    : EqExpression, ISqlExpression, IDbCondition

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DataType` | DataType | Gets or sets the data type. | 
| `DataKind` | Kind | Gets the expression kind. | 
| `String` | TypeName | Non-static version of [Korzh.EasyQuery.Db.SubQueryExpr.STypeName](/api-reference-4x/korzh-easyquery-db-namespace/subqueryexpr-class) property. | 
| `String` | Value | Gets or sets the value of expression. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetSqlExpr(`DbQueryFormats` formats, `SqlExtraClauses` extraClauses = <span style='color: blue'>null</span>) | Gets the SQL expression of the [Korzh.EasyQuery.Db.SubQueryExpr](/api-reference-4x/korzh-easyquery-db-namespace/subqueryexpr-class) object. | 
| `void` | GetUsedTables(`TableList` tables) | Add the tables used in this expression in the list. | 
| `void` | LoadFromJsonDict(`JsonDict` dict) | Loads expression from IDictionary object (used when we load query from JSON). | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads expression from `System.Xml.XmlReader` object. | 
| `void` | SaveToJsonDictCore(`JsonDict` dict) | Saves expression's properties to dictionary (used to serialize expression into JSON)  This is an abstract method which should be overridden in descendant classes. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves expression to `System.Xml.XmlWriter` object. | 
| `void` | SetContentSilent(`String` val, `String` txt) | Sets the content of the expression silently (without calling ContentChanged event). | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the expression type. |