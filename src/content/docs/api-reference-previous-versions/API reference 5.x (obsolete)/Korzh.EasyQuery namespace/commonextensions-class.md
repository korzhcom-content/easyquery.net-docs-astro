---
title: CommonExtensions class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/commonextensions-class
---


Useful extension methods for EasyQuery's types
```csharp
public static class Korzh.EasyQuery.CommonExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `DataKind` | IntToDataKind(<span style='color: blue'>this</span> `Int32` value) | Returns DataKind by its numeric representation. | 
| `DataType` | IntToDataType(<span style='color: blue'>this</span> `Int32` value) | Returns DataType by its numeric representation. | 
| `DataType` | StrToDataType(<span style='color: blue'>this</span> `String` typeName) | Returns DataType value by its string representation | 
| `Int32` | ToInt(<span style='color: blue'>this</span> `DataType` dt) | Returns a numeric representation of a DataType value. | 
| `Int32` | ToInt(<span style='color: blue'>this</span> `DataKind` dk) | Returns a numeric representation of a DataType value. |