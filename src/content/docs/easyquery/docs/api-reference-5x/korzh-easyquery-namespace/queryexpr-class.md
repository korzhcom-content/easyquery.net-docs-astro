---
title: QueryExpr class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-namespace/queryexpr-class
---


Represents a sub-query expression
```csharp
public class Korzh.EasyQuery.QueryExpr
    : EqExpression

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DataType` | DataType | Gets or sets the data type. | 
| `Boolean` | IsPlainSql | Gets a value indicating whether this instance contains a plain SQL statement. | 
| `DataKind` | Kind | Gets the expression kind. | 
| `Query` | Query | Gets or sets the query. | 
| `Int32` | Tag | Get the expression's tag - a special identifier that is used to distinguish the type of the expression . | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Query` | CreateQuery() | Creates a new query object. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads expression from `System.Xml.XmlReader` object. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads the expression properties from JSON | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads the expression properties from JSON (asynchronous way). | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves expression to `System.Xml.XmlWriter` object. | 
| `String` | TagToOldClassName(`Int32` tag) | Converts the expression's tag value to the name of old expression class (like "CONST" or "ENTATTR"). | 
| `void` | WritePropertiesToJson(`JsonWriter` writer) | Writes expression properties to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer) | Writes expression properties to JSON (asynchronous way). |