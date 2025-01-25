---
title: ListBoxListControl class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listboxlistcontrol-class
---
Represents an implementation of [Korzh.EasyQuery.WinForms.ListControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listcontrol-class) class that shows the ListBox
```csharp
public class Korzh.EasyQuery.WinForms.ListBoxListControl
    : ListControl

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ListBoxListControl() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.MenuListControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/menulistcontrol-class) class. | 
| ListBoxListControl(`bool` multi) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.MenuListControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/menulistcontrol-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| listboxControl | `ListBox` | The `System.Windows.Forms.ListBox` control that is used for value editing. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ControlType | `string` | Gets the type of the control. | 
| MultiSelect | `bool` | Gets a value indicating whether the control supports multi selection. | 
| Visible | `bool` | Gets a value indicating whether this [Korzh.EasyQuery.WinForms.ListBoxListControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listboxlistcontrol-class) is visible. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Dispose(`bool` disposing) | `void` | Clean up any resources being used. | 
| Hide() | `void` | Hides this instance. | 
| LBKeyPressHandler(`object` sender, `KeyPressEventArgs` e) | `void` | KeyPress event handler | 
| LBLostFocusHandler(`object` sender, `EventArgs` e) | `void` | The handler of `System.Windows.Forms.Control.LostFocus` event of `System.Windows.Forms.ListBox` control. | 
| LBSelectedIndexChangedHandler(`object` sender, `EventArgs` e) | `void` | ListBox control SelectedIndexChanged event handler. | 
| RefillItems([ValueItemList](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) items) | `void` | Refills the items. | 
| Show([ListXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class) parentElement, `Point` position) | `void` | Shows the specified parent. |