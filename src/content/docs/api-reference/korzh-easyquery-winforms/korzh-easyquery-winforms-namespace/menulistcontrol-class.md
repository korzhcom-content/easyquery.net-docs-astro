---
title: MenuListControl class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/menulistcontrol-class
---
Represents an implementation of [Korzh.EasyQuery.WinForms.ListControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listcontrol-class) class that shows the menu
```csharp
public class Korzh.EasyQuery.WinForms.MenuListControl
    : ListControl

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| MenuListControl() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.MenuListControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/menulistcontrol-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| menuControl | `ContextMenuStrip` | The `System.Windows.Forms.ContextMenu` control that is used for value editing. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ControlType | `string` | Gets the type of the control (MENU in this case). | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Dispose(`bool` disposing) | `void` | Clean up any resources being used. | 
| Hide() | `void` | Hides this instance. | 
| RefillItems([ValueItemList](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) items) | `void` | Refills the items. | 
| Show([ListXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class) parentElement, `Point` position) | `void` | Shows list control. |