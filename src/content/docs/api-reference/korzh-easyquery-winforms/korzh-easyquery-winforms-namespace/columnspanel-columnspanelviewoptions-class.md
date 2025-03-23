---
title: ColumnsPanel.ColumnsPanelViewOptions class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-columnspanelviewoptions-class
---


Represents set of options which allows to control [Korzh.EasyQuery.WinForms.ColumnsPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) appearance.
```csharp
public class Korzh.EasyQuery.WinForms.ColumnsPanel.ColumnsPanelViewOptions
    : XPanel.XViewOptions

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ColumnsPanelViewOptions([ColumnsPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) parent) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ColumnsPanel.ColumnsPanelViewOptions](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AdditionRowColor | `Color` | Gets or sets the color of the addition row. | 
| AttrElementFormat | `string` | Gets or sets the format of attribute elements. | 
| BackColor | `Color` | Gets or sets the background color for the [Korzh.EasyQuery.WinForms.ColumnsPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class). | 
| ParentPanel | [ColumnsPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) | Gets the parent panel. | 
| SortEntities | [XSortOrder](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xsortorder-enum) | Gets or sets the sort direction for the list of entities. | 
| Title | `string` | Gets or sets the label that is displayed above the [Korzh.EasyQuery.WinForms.ColumnsPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class). | 
| TitleElementFormat | `string` | Gets or sets the format of title elements. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| TitleChanged | `EventHandler` | Occurs when [Korzh.EasyQuery.WinForms.ColumnsPanel.ColumnsPanelViewOptions.Title](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) value has been changed. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| OnTitleChanged(`EventArgs` e) | `void` | Raises the [Korzh.EasyQuery.WinForms.ColumnsPanel.ColumnsPanelViewOptions.TitleChanged](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) event. |