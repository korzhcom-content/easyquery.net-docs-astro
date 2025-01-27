---
title: CreateValueElementEventArgs class
slug: api-reference/Korzh.EasyQuery.WinForms/Korzh.EasyQuery.WinForms namespace/createvalueelementeventargs-class
---


Provides data for CreateValueElement event.
```csharp
public class Korzh.EasyQuery.WinForms.CreateValueElementEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| CreateValueElementEventArgs([ConditionRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditionrow-class) conditionRow, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType) | `void` | Initializes a new instance of the `CreateValueElementEventArgs` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionRow | [ConditionRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditionrow-class) | Gets or sets the condition row where this value element should be created | 
| DataType | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the type of the data. | 
| Element | [XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) | Gets or sets the created element. |