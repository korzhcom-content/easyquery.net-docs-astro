---
title: SortingPanel.SimpleSortingRow class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sortingpanel-simplesortingrow-class
---
The class defines the rows for the [Korzh.EasyQuery.WinForms.SortingPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sortingpanel-class).
```csharp
public class Korzh.EasyQuery.WinForms.SortingPanel.SimpleSortingRow
    : ColumnRow

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SimpleSortingRow([SortingPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sortingpanel-class) aPanel, [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) aColumn, `string` xmlText, `bool` useCheckBox) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.SortingPanel.SimpleSortingRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sortingpanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ColumnRow | [ColumnRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrow-class) | Gets or sets the [Korzh.EasyQuery.WinForms.SortingPanel.SimpleSortingRow.ColumnRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sortingpanel-class) the row is connected with. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AttrElementTextAdjusting(`object` sender, [TextAdjustingEventArgs](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/textadjustingeventargs-class) e) | `void` | This method is called when it is necessary to adjust text value for base expression in condition row. | 
| CoreApplyFormats() | `void` | Applies the formats used in parent object. This method is called when row is added into XPanel | 
| ElementContentChanged([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `bool` valueChanged, `bool` textChanged) | `void` | This method is called when the content of some element has been changed | 
| ElementTextAdjusting([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `string` newValue, `string` text) | `string` | This method is called when we need to adjust element's text according to its value | 
| GetAttributeCaption([EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `string` | Gets the attribute's caption according to the format defined in Appearance.AttrElementFormat |