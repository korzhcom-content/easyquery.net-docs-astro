---
title: ColumnsPanel class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class
sidebar:
  order: 100
---

The panel for defining the results columns for [Korzh.EasyQuery.WinForms.QueryPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class).
```csharp
public class Korzh.EasyQuery.WinForms.ColumnsPanel
    : XPanel

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ColumnsPanel() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ColumnsPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Active | `bool` | Gets or sets a value indicating whether this [Korzh.EasyQuery.WinForms.ColumnsPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) is active. | 
| AllowAggrColumns | `bool` | Gets or sets the ability to create the columns with aggregation functions. | 
| AllowEditCaptions | `bool` | Gets or sets the ability to show column captions in the control. | 
| AllowSorting | `bool` | Gets or sets the ability to change the sort order of columns. | 
| Appearance | [ColumnsPanel.ColumnsPanelViewOptions](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-columnspanelviewoptions-class) | Gets the [Korzh.EasyQuery.WinForms.ColumnsPanel.ColumnsPanelViewOptions](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) object. | 
| Columns | [QueryColumnStore](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnstore-class) | Gets the columns list of the concerned [Korzh.EasyQuery.WinForms.ColumnsPanel.Query](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class). | 
| EditMode | [ColumnsPanelEditMode](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspaneleditmode-enum) | Gets or sets the value of panel's edit mode. | 
| JustSortedColumns | [QueryColumnStore](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnstore-class) | Gets the list of columns that are sorted but are not used in result. | 
| Model | [DataModel](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets the [Korzh.EasyQuery.DataModel](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) object | 
| Query | [Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets or sets the query. | 
| Rows | [ColumnRowList](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrowlist-class) | Gets list of column rows. | 
| SortedColumns | [SortedColumnList](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortedcolumnlist-class) | Gets the list of sorted columns | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| RowListChanged | `EventHandler` | Occurs when list of rows is changed | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Activate() | `void` | Activates the panel. [Korzh.EasyQuery.WinForms.ColumnsPanel.Active](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) property becomes true. | 
| AddRowByColumn([QueryColumn](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column) | `void` | Adds the new row by <see cref="!:Korzh.EasyQuery.Column" />. | 
| AddSimpleColumn() | `void` | Adds the simple column using the default entity attribute. | 
| AddSimpleColumn([EntityAttr](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `void` | Adds the simple column using the default entity attribute. | 
| AddSimpleColumn(`string` attrID) | `void` | Adds the simple column using the default entity attribute. | 
| ApplyFormats() | `void` | Applies the formats used in panel to all rows. | 
| CheckDataModel() | `void` | Checks the [Korzh.EasyQuery.DataModel](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class)  object. Generates an exception if [Korzh.EasyQuery.WinForms.ColumnsPanel.Model](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) property has null value. | 
| CheckQuery() | `void` | Checks the [Korzh.EasyQuery.Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class)  object. Generates an exception if [Korzh.EasyQuery.WinForms.ColumnsPanel.Query](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) property has null value. | 
| ColumnsChangedHandler(`object` sender, [QueryColumnsChangeEventArgs](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnschangeeventargs-class) e) | `void` | Called when Query.Result.Columns has been changed. | 
| CoreAddSimpleColumn([EntityAttr](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `void` | Adds the simple column. | 
| CoreAddSimpleColumnThroughUI(`string` attrID) | `void` | Processes a click on "addition row". | 
| CoreEndUpdate() | `void` | Performs necessary adjustments on update finish. | 
| CoreFillEntityTree([ValueItemList](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) items, [Entity](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) parentEntity) | `void` | Fills the list (tree) of entities and their attributes. | 
| CreateAppearance() | [XPanel.XViewOptions](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-xviewoptions-class) | Overrides the [Korzh.EasyQuery.WinForms.XPanel.CreateAppearance](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) method. | 
| CreateRowList() | [XRowList](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrowlist-class) | Creates the row list. | 
| Deactivate() | `void` | Deactivates the panel. [Korzh.EasyQuery.WinForms.ColumnsPanel.Active](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) property becomes false. | 
| Dispose(`bool` disposing) | `void` | Clean up any resources being used. | 
| DoAction(`object` sender, `string` actionName, `object` data) | `void` | Overrides [Korzh.EasyQuery.WinForms.XPanel.DoAction(System.Object,System.String,System.Object)](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class). | 
| DoMoveRow(`int` idx, `bool` up) | `void` | Overrides the method for Ctrl+Arrow signal processing. | 
| DoSignal(`object` sender, [Signals](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/signals-enum) signalID, `String[]` paramList) | `void` | Overrides [Korzh.EasyQuery.WinForms.XPanel.DoSignal(System.Object,Korzh.EasyQuery.WinForms.Signals,System.String[])](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class). | 
| EntityAttributeFits([EntityAttr](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `bool` | Returns <c>true</c> if the entity attribute passed in the parameter can be used in (fits to) this panel. | 
| EntityFits([Entity](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) ent) | `bool` | Returns <c>true</c> if the entity passed in the parameter can be used in (fits to) this panel. | 
| MoveRow(`int` index1, `int` index2) | `void` | Moves row to specified position | 
| MoveRowDown(`int` index) | `void` | Moves the row to one position down (taking into account the level of other rows). | 
| MoveRowUp(`int` index) | `void` | Moves the row to one position up (taking into account the level of other rows). | 
| OnGotFocus(`EventArgs` e) | `void` | Overrides [Korzh.EasyQuery.WinForms.XPanel.OnGotFocus(System.EventArgs)](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class). | 
| OnKeyDown(`KeyEventArgs` e) | `void` | Overrides `XPanel.OnKeyDown(System.Windows.Forms.KeyEventArgs)`. | 
| OnRowAdded([XRow](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) row) | `void` | Overrides [Korzh.EasyQuery.WinForms.XPanel.OnRowAdded(Korzh.EasyQuery.WinForms.XRow)](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) | 
| OnRowListChanged() | `void` | Overrides the [Korzh.EasyQuery.WinForms.XPanel.OnRowListChanged](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class). | 
| Refresh() | `void` | Forces the control to invalidate its client area and immediately redraw  itself and any child controls.  Overrides `System.Windows.Forms.Control.Refresh`. | 
| RefreshAddRow() | `void` |  | 
| RefreshByColumns() | `void` | Fully refreshes the panel on the base of [Korzh.EasyQuery.WinForms.ColumnsPanel.Columns](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class). | 
| ScrollAddRowIntoView() | `void` | Scrolls the "click here to add..." row into view. | 
| SetRowsWidth(`int` width) | `void` | Sets the width of the rows. | 
| SortOrderChangedHander(`object` sender, [SortOrderChangedEventArgs](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortorderchangedeventargs-class) e) | `void` | Called when sort order is changed | 
| UpdateModelInfo() | `void` | Updates all information based on data model information (such as list of entities). |
