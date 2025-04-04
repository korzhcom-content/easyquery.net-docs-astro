---
title: CustomSqlExpr class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/customsqlexpr-class
sidebar:
  order: 100
---

Represents a custom SQL expression
```csharp
public class Korzh.EasyQuery.Db.CustomSqlExpr
    : EqExpression

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| CustomSqlExpr([DataModel](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Initializes a new instance of the `CompoundExpr` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Attribute | [EntityAttr](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Gets or sets the base attribute for this custom SQL expression. | 
| IsAggregate | `bool` | Gets a value indicating whether this expression is aggregate. | 
| Tag | `int` | Get the expression's tag - a special identifier that is used to distinguish the type of the expression . | 
| Value | `string` | Gets or sets the value of expression. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CustomSqlChanged() | `void` | This function is called when the value of the expression (the custom SQL) is changed. | 
| GetUsedTables([TableList](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelist-class) usedTables) | `void` | Returns list of tables used in condition. | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads expression from XML. | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one expression property from JSON (asynchronous way). | 
| SaveToXmlWriter(`XmlWriter` writer, `string` tagName) | `void` | Saves expression to XML writer. | 
| SetContentSilent(`string` val, `string` txt) | `void` | Sets the content of the expression silently (without calling ContentChanged event). | 
| TagToOldClassName(`int` tag) | `string` | Converts the expression's tag value to the name of old expression class (like "CONST" or "ENTATTR"). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Writes expression properties to JSON (asynchronous way). |
