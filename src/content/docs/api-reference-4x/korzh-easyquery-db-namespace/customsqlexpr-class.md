---
title: CustomSqlExpr class
slug: api-reference-4x/korzh-easyquery-db-namespace/customsqlexpr-class
sidebar:
  order: 100
---

Represents a custom SQL expression
```csharp
public class Korzh.EasyQuery.Db.CustomSqlExpr
    : EqExpression, ISqlExpression, IDbCondition

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `EntityAttr` | BaseAttr | Gets or sets the base attribute for this custom SQL expression. | 
| `Boolean` | IsAggregate | Gets a value indicating whether this expression is aggregate. | 
| `String` | TypeName | Non-static version of [Korzh.EasyQuery.Db.CustomSqlExpr.STypeName](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/customsqlexpr-class) property. | 
| `String` | Value | Gets or sets the value of expression. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetSqlExpr(`DbQueryFormats` formats, `SqlExtraClauses` extraClauses = <span style='color: blue'>null</span>) | Gets the SQL expression. | 
| `void` | GetUsedTables(`TableList` usedTables) | Returns list of tables used in condition. | 
| `void` | LoadFromJsonDict(`JsonDict` dict) | Loads expression from IDictionary object (used when we load query from JSON). | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads expression from XML. | 
| `void` | SaveToJsonDictCore(`JsonDict` dict) | Saves expression's properties to dictionary (used to serialize expression into JSON)  This is an abstract method which should be overridden in descendant classes. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves expression to XML writer. | 
| `void` | SetContentSilent(`String` val, `String` txt) | Sets the content of the expression silently (without calling ContentChanged event). | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the expression type. |
