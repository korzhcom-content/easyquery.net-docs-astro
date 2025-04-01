---
title: ListXElement class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class
sidebar:
  order: 100
---

The row element that lets select value from [multilevel] list.
```csharp
public class Korzh.EasyQuery.WinForms.ListXElement
    : LabelXElement

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ListXElement(`string` type) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ListXElement](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class) class. | 
| ListXElement() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ListXElement](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AllowList | `bool` | Gets or sets a value indicating whether this row element allows list values. | 
| AutoSelectFirstItem | `bool` | Gets or sets a value indicating whether the element should automatically select first item on [Korzh.EasyQuery.WinForms.XElement.CoreLaunch](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) . | 
| ControlType | `string` | Gets or sets the type of the control (MENU or LISTBOX). | 
| Items | [ValueItemList](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) | Gets the list of items. | 
| ListName | `string` | Gets or sets the name of the list. | 
| Sorting | [XSortOrder](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xsortorder-enum) | Gets or sets the sort order for the list | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddListItem([ValueItem](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) parentItem, [ValueItem](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) newItem) | `void` | Adds a new item to the list (menu). | 
| AddListItem([ValueItem](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) parentItem, `string` text, `string` value, `string` action, `string` hint) | [ValueItem](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) | Adds a new item to the list (menu). | 
| AddListItem([ValueItem](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) parentItem, `string` text, `string` value) | [ValueItem](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) | Adds a new item to the list (menu). | 
| CalcNewValue() | `string` | Gets the new value from edit control | 
| CheckListControl(`bool` refill) | `void` | Checks if the list control is created correctly and re-creates it if necessary. | 
| CoreGetTextAdjustedByValue(`string` newValue) | `string` | Gets the element's text according to its value.  This method can be overridden in inherited classes. | 
| CoreLaunch() | `void` | Is called when both [Korzh.EasyQuery.WinForms.XElement.ParentRow](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) and [Korzh.EasyQuery.WinForms.XElement.ParentPanel](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) for this element are established. | 
| CoreRefreshList() | `void` | Internal implementation of [Korzh.EasyQuery.WinForms.ListXElement.RefreshList](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class) method.  It makes parent panel to raise RequestList event to fill the custom lists. | 
| CreateListControl() | [ListControl](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listcontrol-class) | Creates the list control. | 
| CreateRootItem() | `void` | Creates the root ValueItem object. | 
| DoItemsChanged(`object` sender, `EventArgs` e) | `void` | Called when Changed event occurs in root item | 
| GetItemByValue(`string` val, `ValueItem&` resItem) | `bool` | Gets the item by value. | 
| GetValueByItems() | `string` | Calculates element value by currently selected items. | 
| HideControl() | `void` | Hides the control that allows to edit the value. | 
| LinkClickedHandler(`object` sender, `LinkLabelLinkClickedEventArgs` e) | `void` | Handler of element control `System.Windows.Forms.Control.Click` event. | 
| OnItemsReassigned() | `void` | Called when Items property have been assigned to new value. | 
| ParseXmlNode(`XmlNode` node) | `void` | Parses the XML-description of element. | 
| RecreateListControl() | `void` | Recreates the list control according on control type (LISTBOX or MENU) | 
| RefreshList() | `void` | Refreshes the list. | 
| RequestList(`string` listName) | `void` | Generates internal signal to request the list. | 
| SelectFirstItem() | `void` | Selects the first item. | 
| SelectItemsByValue() | `void` | Selects the items by value. | 
| ShowControl() | `void` | Shows the control that allows to edit the value. | 
| ShowListControl() | `void` | Shows the list control. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultListControlType | `string` | Represents default control type for list elements  Will be applied to all new [Korzh.EasyQuery.WinForms.ListXElement](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class) objects | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| TagName | `string` | Gets the name of the XML tag concerned with element. |
