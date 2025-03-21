---
title: ConstExpr class
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/constexpr-class
---


Represents a constant expression (like: 423 or "Master card").
```csharp
public class Korzh.EasyQuery.ConstExpr
    : EqExpression

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ConstExpr([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, [DataKind](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) aKind, `string` val) | `void` | Initializes a new instance of the [Korzh.EasyQuery.ConstExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/constexpr-class) class. | 
| ConstExpr([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, [DataKind](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) dataKind) | `void` | Initializes a new instance of the [Korzh.EasyQuery.ConstExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/constexpr-class) class. | 
| ConstExpr([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType) | `void` | Initializes a new instance of the [Korzh.EasyQuery.ConstExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/constexpr-class) class. | 
| ConstExpr([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, `string` val) | `void` | Initializes a new instance of the [Korzh.EasyQuery.ConstExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/constexpr-class) class. | 
| ConstExpr([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` val) | `void` | Initializes a new instance of the [Korzh.EasyQuery.ConstExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/constexpr-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DataType | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the data type. | 
| Kind | [DataKind](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) | Gets the expression kind. | 
| Tag | `int` | Get the expression's tag - a special identifier that is used to distinguish the type of the expression . | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads expression from XML. | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one property from JSON (asynchronous way). | 
| SaveToXmlWriter(`XmlWriter` writer, `string` tagName) | `void` | Saves expression to XML writer. | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Writes one property to JSON (asynchronous way). |