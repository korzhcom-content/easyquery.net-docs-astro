---
title: SortingPanel class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sortingpanel-class
sidebar:
  order: 100
---

The class for panel that works with [Korzh.EasyQuery.WinForms.ColumnRow](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrow-class).  Allows to define Query.Result.Columns sorting rules.
```csharp
public class Korzh.EasyQuery.WinForms.SortingPanel
    : ColumnsPanel

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SortingPanel() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.SortingPanel](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sortingpanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AllowAddRow | `bool` | Gets or sets the ability to add sorted columns independently of [Korzh.EasyQuery.WinForms.ColumnsPanel](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class). | 
| AllowAggrColumns | `bool` | Gets or sets the ability to create the columns with aggregation functions. | 
| AllowEditCaptions | `bool` | Gets or sets the ability to show column captions in the control. | 
| AllowSorting | `bool` | Gets or sets the ability to change the sort order of columns. | 
| EditMode | [ColumnsPanelEditMode](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspaneleditmode-enum) | Gets or sets the value of panel's edit mode. | 
| SortEditMode | [SortingPanel.SortEditModeKind](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sortingpanel-sorteditmodekind-enum) | Gets or sets the value of panel's edit mode. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddRowByColumn([QueryColumn](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column) | `void` | Adds the new row by <see cref="!:Korzh.EasyQuery.Column" />. | 
| ApplyFormats() | `void` | Applies the formats used in panel to all rows. | 
| Clear() | `void` | Removes all rows | 
| ColumnsChangedHandler(`object` sender, [QueryColumnsChangeEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnschangeeventargs-class) e) | `void` | Called when Query.Result.Columns has been changed. | 
| CoreAddSimpleColumn([EntityAttr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `void` | Adds the simple column. | 
| CreateAppearance() | [XPanel.XViewOptions](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-xviewoptions-class) | Overrides the [Korzh.EasyQuery.WinForms.XPanel.CreateAppearance](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) method. | 
| DoAction(`object` sender, `string` actionName, `object` data) | `void` | Overrides [Korzh.EasyQuery.WinForms.ColumnsPanel.DoAction(System.Object,System.String,System.Object)](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class). | 
| DoMoveRow(`int` idx, `bool` up) | `void` | Overrides the method for Ctrl+Arrow signal processing. | 
| EntityAttributeFits([EntityAttr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `bool` | Returns <c>true</c> if the entity attribute passed in the parameter can be used in (fits to) this panel. | 
| EntityFits([Entity](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) ent) | `bool` | Returns <c>true</c> if the entity passed in the parameter can be used in (fits to) this panel. | 
| MoveRow(`int` index1, `int` index2) | `void` | Moves row to specified position | 
| RefreshByColumns() | `void` | Fully refreshes the panel on the base of [Korzh.EasyQuery.WinForms.ColumnsPanel.Columns](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class). | 
| SortOrderChangedHander(`object` sender, [SortOrderChangedEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortorderchangedeventargs-class) e) | `void` | Overrides [Korzh.EasyQuery.WinForms.ColumnsPanel.SortOrderChangedHander(System.Object,Korzh.EasyQuery.SortOrderChangedEventArgs)](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class). |
