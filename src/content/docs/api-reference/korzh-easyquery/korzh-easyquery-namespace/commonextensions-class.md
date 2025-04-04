---
title: CommonExtensions class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/commonextensions-class
sidebar:
  order: 100
---

Useful extension methods for EasyQuery's types
```csharp
public static class Korzh.EasyQuery.CommonExtensions

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| IntToDataKind(<span style='color: blue'>this</span> `int` value) | [DataKind](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) | Returns DataKind by its numeric representation. | 
| IntToDataType(<span style='color: blue'>this</span> `int` value) | [DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Returns DataType by its numeric representation. | 
| StrToDataType(<span style='color: blue'>this</span> `string` typeName) | [DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Returns DataType value by its string representation | 
| ToInt(<span style='color: blue'>this</span> [DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) dt) | `int` | Returns a numeric representation of a DataType value. | 
| ToInt(<span style='color: blue'>this</span> [DataKind](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) dk) | `int` | Returns a numeric representation of a DataType value. |
