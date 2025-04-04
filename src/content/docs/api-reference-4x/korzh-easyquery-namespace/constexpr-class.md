---
title: ConstExpr class
slug: api-reference-4x/korzh-easyquery-namespace/constexpr-class
sidebar:
  order: 100
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
| `String` | TypeName | Non-static version of [Korzh.EasyQuery.ConstExpr.STypeName](/easyquery/docs/api-reference-4x/korzh-easyquery-namespace/constexpr-class) property. | 
| `String` | Value | Gets or sets the value of expression. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | LoadFromJsonDict(`JsonDict` dict) | Loads expression from IDictionary object (used when we load query from JSON). | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads expression from XML. | 
| `void` | SaveToJsonDictCore(`JsonDict` dict) | Saves expression's properties to dictionary (used to serialize expression into JSON)  This is an abstract method which should be overridden in descendant classes. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves expression to XML writer. | 
| `void` | SetContentSilent(`String` val, `String` txt) | Sets the content of the expression silently (without calling ContentChanged event). | 
| `void` | SetDataType(`DataType` dataType) | Sets the data type of constant expression. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the expression type. |
