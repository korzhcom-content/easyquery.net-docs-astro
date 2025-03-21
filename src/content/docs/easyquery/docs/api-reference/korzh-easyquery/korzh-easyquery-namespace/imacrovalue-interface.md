---
title: IMacroValue interface
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/imacrovalue-interface
---


Represents one macro value.
```csharp
public interface Korzh.EasyQuery.IMacroValue

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Count | `int` | Gets the count of values returned by this macro | 
| DataType | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Macro data type | 
| Id | `string` | Gets the macro ID. | 
| Value | `string` | Returns the first value in list.  It is useful for macros which hold only single value | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetValue(`int` index) | `string` | Gets the value by its index. |