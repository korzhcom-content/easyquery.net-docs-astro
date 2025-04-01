---
title: CustomSqlExpr class
slug: api-reference-5x/korzh-easyquery-db-namespace/customsqlexpr-class
sidebar:
  order: 100
---

Represents a custom SQL expression
```csharp
public class Korzh.EasyQuery.Db.CustomSqlExpr
    : EqExpression

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `EntityAttr` | Attribute | Gets or sets the base attribute for this custom SQL expression. | 
| `Boolean` | IsAggregate | Gets a value indicating whether this expression is aggregate. | 
| `Int32` | Tag | Get the expression's tag - a special identifier that is used to distinguish the type of the expression . | 
| `String` | Value | Gets or sets the value of expression. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | GetUsedTables(`TableList` usedTables) | Returns list of tables used in condition. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads expression from XML. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one expression property from JSON | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one expression property from JSON (asynchronous way). | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves expression to XML writer. | 
| `void` | SetContentSilent(`String` val, `String` txt) | Sets the content of the expression silently (without calling ContentChanged event). | 
| `String` | TagToOldClassName(`Int32` tag) | Converts the expression's tag value to the name of old expression class (like "CONST" or "ENTATTR"). | 
| `void` | WritePropertiesToJson(`JsonWriter` writer) | Writes expression properties to JSON | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer) | Writes expression properties to JSON (asynchronous way). |
