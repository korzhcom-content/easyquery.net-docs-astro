---
title: ValueItemList class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class
---

Represents list of items
```csharp
public class Korzh.EasyQuery.WinForms.ValueItemList
    : Collection<ValueItem>

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ValueItemList([ValueItem](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) parent) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ValueItemList](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) class. | 
| ValueItemList() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ValueItemList](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultControl | [ListControl](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listcontrol-class) | Gets or sets the default ListControl associated with this list. | 
| EmptyText | `string` | Gets or sets the text which is shown for empty list. | 
| Id | `string` | Gets or sets the list ID. | 
| Item | [ValueItem](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) | Gets or sets the [Korzh.EasyQuery.WinForms.XRow](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) at the specified index. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Add(`string` text, `string` fvalue, `string` action, `string` hint) | [ValueItem](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) | Creates and adds new ValueItem object with the specified text, value and action. | 
| Add(`string` text, `string` fvalue, `string` action) | [ValueItem](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) | Creates and adds new ValueItem object with the specified text, value and action. | 
| Add(`string` text, `string` fvalue) | [ValueItem](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) | Creates and adds new ValueItem object with the specified text, value and action. | 
| BeginUpdate() | `void` | Begins the update process. | 
| ClearItems() | `void` | Removes all elements from the `System.Collections.ObjectModel.Collection'1`. | 
| EndUpdate() | `void` | Ends the update process. | 
| Equals(`object` obj) | `bool` | Determines whether the specified `System.Object` is equal to this instance. | 
| GetHashCode() | `int` | Returns a hash code for this instance. | 
| InsertItem(`int` index, [ValueItem](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| LoadFromXml(`string` xml) | `void` | Fills the list by XML. | 
| OnChildChanged() | `void` | Calls Changed event in parent item (if we are not in update process currently). | 
| RemoveItem(`int` index) | `void` | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. |