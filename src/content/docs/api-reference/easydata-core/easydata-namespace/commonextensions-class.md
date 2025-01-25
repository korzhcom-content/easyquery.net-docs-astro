---
title: CommonExtensions class
slug: api-reference/easydata-core/easydata-namespace/commonextensions-class
---
Useful extension methods for EasyQuery's types
```csharp
public static class EasyData.CommonExtensions

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| IntToDataType(<span style='color: blue'>this</span> `int` value) | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Returns DataType by its numeric representation. | 
| StrToDataType(<span style='color: blue'>this</span> `string` typeName) | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Returns DataType value by its string representation | 
| ToInt(<span style='color: blue'>this</span> [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dt) | `int` | Returns a numeric representation of a DataType value. |