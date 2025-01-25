---
title: ListControl class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listcontrol-class
---
An abstract class that represents list control (menu, ListBox, CheckListBox) used in [Korzh.EasyQuery.WinForms.ListXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class).
```csharp
public abstract class Korzh.EasyQuery.WinForms.ListControl
    : IDisposable

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ListControl() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ListControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listcontrol-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| _parentElement | [ListXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class) | The reference to parent element control | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ControlType | `string` | Gets the type of the control. | 
| MultiSelect | `bool` | Gets a value indicating whether the control supports multi selection. | 
| SelectedItem | [ValueItem](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) | Gets the selected item. | 
| Sorting | [XSortOrder](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xsortorder-enum) | Gets or sets the sort order for the list | 
| Visible | `bool` | Gets a value indicating whether this [Korzh.EasyQuery.WinForms.ListControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listcontrol-class) is visible. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Dispose() | `void` | Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources. | 
| Dispose(`bool` disposing) | `void` | Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources. | 
| Hide() | `void` | Hides list control | 
| RefillItems([ValueItemList](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) items) | `void` | Refills the items. | 
| Show([ListXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class) parentElement, `Point` position) | `void` | Shows list control. |