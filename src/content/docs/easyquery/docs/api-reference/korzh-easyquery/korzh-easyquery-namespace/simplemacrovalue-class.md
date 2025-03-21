---
title: SimpleMacroValue class
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/simplemacrovalue-class
---


Represents one macro value.
```csharp
public class Korzh.EasyQuery.SimpleMacroValue
    : IMacroValue

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SimpleMacroValue(`string` id, `string` value) | `void` | Initializes a new instance of the [Korzh.EasyQuery.SimpleMacroValue](/api-reference/korzh-easyquery/korzh-easyquery-namespace/simplemacrovalue-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Count | `int` | Gets the count of values returned by this macro | 
| DataType | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets macro data type | 
| Id | `string` | Gets the macro ID. | 
| Value | `string` | Returns the first value in list.  It is useful for macros which hold only single value | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetValue(`int` index) | `string` | Gets the value by its index. |