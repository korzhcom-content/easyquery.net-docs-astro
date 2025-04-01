---
title: QueryPanel class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class
sidebar:
  order: 100
---

[Korzh.EasyQuery.WinForms.QueryPanel](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) control - the main GUI control for query building.
```csharp
public class Korzh.EasyQuery.WinForms.QueryPanel
    : XPanel

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryPanel() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.QueryPanel](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Active | `bool` | Gets or sets a value indicating whether this [Korzh.EasyQuery.WinForms.QueryPanel](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) is active. | 
| ActiveRow | [ConditionRow](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditionrow-class) | Gets currently active row. | 
| Appearance | [QueryPanel.QueryPanelViewOptions](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-querypanelviewoptions-class) | Gets the [Korzh.EasyQuery.WinForms.QueryPanel.QueryPanelViewOptions](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) object. | 
| BoolValuesMenuList | [ValueItemList](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) | Gets the list of boolean values used in menus. | 
| Model | [DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets the [Korzh.EasyQuery.DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) object | 
| Query | [Query](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets or sets the [Korzh.EasyQuery.Query](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) object. | 
| Rows | [ConditionRowList](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditionrowlist-class) | Gets list of condition rows. | 
| ShowQueryParameters | `bool` | Gets or sets a value indicating whether query parameters will be shown as "extra" conditions to set the parameters' values. | 
| SpecDateValuesMenuList | [ValueItemList](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) | Gets the list of special date values (like "Today") used in menus. | 
| SpecTimeValuesMenuList | [ValueItemList](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) | Gets the list of special time values (like "Noon") used in menus. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionRender | `ConditionRenderEventHandler` | This event is raised when the row is already rendered.  It is used to change some UI of specific rows. | 
| CreateValueElement | `CreateValueElementEventHandler` | This event allows to change value element type at run-time | 
| ListRequest | `ListRequestEventHandler` | Occurs when the [Korzh.EasyQuery.WinForms.QueryPanel](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) object needs the content of some custom list | 
| SubQueryDialogClosed | `EventHandler` | Occurs after sub query dialog has been closed. | 
| SubQueryDialogOpening | `EventHandler` | Occurs before opening of sub query dialog. | 
| ValueRequest | `ValueRequestEventHandler` | Occurs when there is a need to get value from user.  For example when conditions has entity attribute with [EasyData.CustomValueEditor](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/customvalueeditor-class) object. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddSimpleCondition() | `void` | Adds the [Korzh.EasyQuery.Condition](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class). | 
| ApplyFormats() | `void` | Applies the formats used in panel to all rows. | 
| Arrange() | `void` | Arranges rows in the panel. | 
| CheckDataModel() | `void` | Checks the [Korzh.EasyQuery.DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) object. Generates an exception if [Korzh.EasyQuery.WinForms.QueryPanel.Model](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) property has null value. | 
| CheckQuery() | `void` | Checks the [Korzh.EasyQuery.Query](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) object. Generates an exception if [Korzh.EasyQuery.WinForms.QueryPanel.Query](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) property has null value. | 
| CoreAddConditionGroup([Condition](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) parent, `int` condIndex) | `void` | Core procedure that adds new [Korzh.EasyQuery.WinForms.ConditionGroupRow](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditiongrouprow-class) object. | 
| CoreAddSimpleCondition([Condition](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) parent, `int` condIndex, [EntityAttr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | [Condition](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Core procedure that adds new [Korzh.EasyQuery.WinForms.SimpleConditionRow](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/simpleconditionrow-class) object. | 
| CoreAddSimpleConditionThroughUI(`string` attrId) | `void` | Processes a click on "addition row". | 
| CoreEndUpdate() | `void` | Performs necessary adjustments on update finish. | 
| CreateAppearance() | [XPanel.XViewOptions](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-xviewoptions-class) | Creates the appearance. | 
| CreateRowList() | [XRowList](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrowlist-class) | Creates the row list. | 
| Dispose(`bool` disposing) | `void` | Clean up any resources being used. | 
| DoAction(`object` sender, `string` actionName, `object` data) | `void` | Handles Action event. | 
| DoListRequest([ListXElement](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class) element, `string` listName) | `void` | Virtual method for filling the list of [Korzh.EasyQuery.WinForms.ListXElement](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class). | 
| DoQueryConditionsChanged(`object` sender, [ConditionsChangeEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/conditionschangeeventargs-class) e) | `void` | Handles Query.ConditionsChanged event and refreshes [Korzh.EasyQuery.WinForms.QueryPanel](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) object accordingly. | 
| MoveRowDown(`int` index) | `void` | Moves the row to one position down (taking into account the level of other rows). | 
| MoveRowUp(`int` index) | `void` | Moves the row to one position up (taking into account the level of other rows). | 
| OnCreateControl() | `void` | Raises the <see cref="M:System.Windows.Forms.Control.CreateControl"></see> event. | 
| OnKeyDown(`KeyEventArgs` e) | `void` | Raises the key down event. | 
| OnListRequest([ListRequestEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listrequesteventargs-class) e) | `void` | Raises the `ListRequest` event. | 
| OnRowAdded([XRow](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) row) | `void` | Called when new row was added into the panel. | 
| OnRowListChanged() | `void` | Called when list of rows was changed. | 
| OnValueRequest([ValueRequestEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valuerequesteventargs-class) e) | `void` | Raises the `ValueRequest` event. | 
| RecreateRootRow() | `void` | Creates the root row. | 
| ScrollAddRowIntoView() | `void` | Scrolls the "click here to add..." row into view. | 
| SetRowsWidth(`int` width) | `void` | Sets the width of the rows. | 
| ShiftRowLevel(`int` rowIndex, `bool` up) | `void` | Shifts the row level (taking into account the level of other rows) | 
| UpdateModelInfo() | `void` | Updates all information based on data model information (such as list of entities). |
