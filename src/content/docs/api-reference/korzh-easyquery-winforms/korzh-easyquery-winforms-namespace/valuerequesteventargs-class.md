---
title: ValueRequestEventArgs class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valuerequesteventargs-class
sidebar:
  order: 100
---

Provides data for ValueRequest event.
```csharp
public class Korzh.EasyQuery.WinForms.ValueRequestEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ValueRequestEventArgs([Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) cond, `string` value, `string` text, `string` data) | `void` | Initializes a new instance of the `ValueRequestEventArgs` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Condition | [Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Gets the condition which this ValueRequest event was raised for | 
| Data | `string` | Gets the data associated with corresponding custom value editor. | 
| Text | `string` | Gets or sets the text which will be shown to user. | 
| Value | `string` | Gets or sets the value. |
