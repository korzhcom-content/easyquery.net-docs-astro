---
title: ActionEventArgs class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/actioneventargs-class
---

Provides data for [Korzh.EasyQuery.WinForms.XPanel.Action](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) event
```csharp
public class Korzh.EasyQuery.WinForms.ActionEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ActionEventArgs(`string` actionName, `object` data) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ActionEventArgs](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/actioneventargs-class) class. | 
| ActionEventArgs(`string` actionName) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ActionEventArgs](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/actioneventargs-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ActionName | `string` | Gets the name of the action. | 
| Data | `object` | Gets the data associated with event. |