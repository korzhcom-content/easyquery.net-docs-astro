---
title: TimeMacro class
slug: api-reference-4x/korzh-easyquery-namespace/timemacro-class
---

Represents some date or time macro value
```csharp
public class Korzh.EasyQuery.TimeMacro
    : IMacroValue

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | Count | Gets the count of values returned by this macro | 
| `DataType` | DataType | Gets macro data type. | 
| `String` | ID | Gets the macro ID. | 
| `String` | Value | Returns the first value in list.  It is useful for macros which hold only single value | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetValue(`Int32` index) | Gets the value by its index. |