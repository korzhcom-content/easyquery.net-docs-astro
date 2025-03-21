---
title: SimpleMacroValue class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-namespace/simplemacrovalue-class
---


Represents one macro value.
```csharp
public class Korzh.EasyQuery.SimpleMacroValue
    : IMacroValue

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | Count | Gets the count of values returned by this macro | 
| `DataType` | DataType | Gets or sets macro data type | 
| `String` | ID | Gets the macro ID. | 
| `String` | Value | Returns the first value in list.  It is useful for macros which hold only single value | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetValue(`Int32` index) | Gets the value by its index. |