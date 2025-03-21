---
title: ConstExpr class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-namespace/constexpr-class
---


Represents a constant expression (like: 423 or "Master card").
```csharp
public class Korzh.EasyQuery.ConstExpr
    : EqExpression

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DataType` | DataType | Gets or sets the data type. | 
| `DataKind` | Kind | Gets the expression kind. | 
| `Int32` | Tag | Get the expression's tag - a special identifier that is used to distinguish the type of the expression . | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads expression from XML. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one property from JSON. | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one property from JSON (asynchronous way). | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves expression to XML writer. | 
| `void` | WritePropertiesToJson(`JsonWriter` writer) | Writes one property to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer) | Writes one property to JSON (asynchronous way). |