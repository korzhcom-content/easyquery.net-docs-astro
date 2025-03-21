---
title: ListRequestEventArgs class
slug: easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listrequesteventargs-class
---


Provides data for ListRequest event.
```csharp
public class Korzh.EasyQuery.WinForms.ListRequestEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ListRequestEventArgs(`string` listName, [ValueItemList](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) listItems) | `void` | Initializes a new instance of the `ListRequestEventArgs` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Data | `object` | Gets or sets any custom data that can be passed to event handler. | 
| ListItems | [ValueItemList](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) | Gets or sets the requested list of items. | 
| ListName | `string` | Gets the name of the list. | 
| ResultXml | `string` | Sets the result of SQL execution in XML format. |