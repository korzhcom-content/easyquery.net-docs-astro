---
title: IMacroValue interface
slug: api-reference-5x/korzh-easyquery-namespace/imacrovalue-interface
sidebar:
  order: 100
---

Represents one macro value.
```csharp
public interface Korzh.EasyQuery.IMacroValue

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | Count | Gets the count of values returned by this macro | 
| `DataType` | DataType | Macro data type | 
| `String` | ID | Gets the macro ID. | 
| `String` | Value | Returns the first value in list.  It is useful for macros which hold only single value | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetValue(`Int32` index) | Gets the value by its index. |
