---
title: ValueItem class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class
sidebar:
  order: 100
---

Represents one item in RowListElement list of available items
```csharp
public class Korzh.EasyQuery.WinForms.ValueItem

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ValueItem(`string` fvalue, `string` text, `string` action, `string` hint) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ValueItem](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) class. | 
| ValueItem(`string` value, `string` text, `string` action) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ValueItem](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) class. | 
| ValueItem(`string` value, `string` text) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ValueItem](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) class. | 
| ValueItem(`string` value) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ValueItem](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Action | `string` | Gets or sets the name of action associated with item. | 
| Enabled | `bool` | Gets or sets a value indicating whether this [Korzh.EasyQuery.WinForms.ValueItem](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) is enabled. | 
| Hint | `string` | Gets or sets the hint. | 
| Selected | `bool` | Gets or sets a value indicating whether this [Korzh.EasyQuery.WinForms.ValueItem](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) is selected. | 
| SubItems | [ValueItemList](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) | Gets the list of sub items. | 
| Text | `string` | Gets or sets the item text. | 
| Value | `string` | Gets or sets the item value. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| Changed | `EventHandler` | Indicates that item was changed. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| BeginUpdate() | `void` | Begins the update process for current item.  Changed event will not raised during update process | 
| EndUpdate() | `void` | Ends the update process and raise Change event if all updates are finished. | 
| Equals(`object` obj) | `bool` | Determines whether the specified `System.Object` is equal to this instance. | 
| GetHashCode() | `int` | Returns a hash code for this instance. | 
| GetItemByValue(`string` val, `ValueItem&` item) | `bool` | Gets the item by value. | 
| OnChanged(`EventArgs` e) | `void` | Raises the `Changed` event.  The event is not raised if we are in update process now | 
| ToString() | `string` | Returns a `System.String` that represents the current `System.Object`. |
