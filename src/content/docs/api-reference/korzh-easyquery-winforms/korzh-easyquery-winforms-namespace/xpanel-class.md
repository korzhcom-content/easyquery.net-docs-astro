---
title: XPanel class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class
---

A panel that contains and displays [Korzh.EasyQuery.WinForms.XRow](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) rows.
```csharp
public abstract class Korzh.EasyQuery.WinForms.XPanel
    : Panel

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| XPanel() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.XPanel](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ActiveRow | [XRow](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) | Gets the active row. | 
| ActiveRowIndex | `int` | Gets or sets the index of the active row. | 
| Appearance | [XPanel.XViewOptions](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-xviewoptions-class) | Gets the appearance object. | 
| AutoScroll | `bool` | Gets or sets a value indicating whether the container enables the user to scroll to any controls placed outside of its visible boundaries. | 
| BorderStyle | `BorderStyle` | Indicates the border style for the control. | 
| IsUpdating | `bool` | Gets a value indicating whether this `XPanel` is updating. | 
| Rows | [XRowList](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrowlist-class) | Gets the row list. | 
| Texts | [TextStorage](//easyquery/docs/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) | Gets an instance of TextStorage object which holds all text resources used in QueryPanel | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| Action | `ActionEventHandler` | Occurs when some action is performed | 
| ElementPaint | `PaintEventHandler` | Occurs when some XPanel element painting is performed | 
| RowPaint | `PaintEventHandler` | Occurs when some XPanel row painting is performed | 
| ValidateValue | `ValidateValueEventHandler` | Occurs when user changes a value of some element with [Korzh.EasyQuery.WinForms.XElement.NeedValidate](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) property set to true.  Allows to validate and accept or decline entered value. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ApplyFormats() | `void` | Applies the formats used in panel to all rows. | 
| Arrange() | `void` | Arranges the rows. | 
| BeginUpdate() | `void` | Begins the update process. | 
| CoreBeginUpdate() | `void` | Can be overridden to do some special processing on update start. | 
| CoreEndUpdate() | `void` | Can be overridden to do some special processing on update finish. | 
| CreateAppearance() | [XPanel.XViewOptions](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-xviewoptions-class) | Virtual method that creates [Korzh.EasyQuery.WinForms.XPanel.XViewOptions](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) object used in [Korzh.EasyQuery.WinForms.XPanel](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class). | 
| CreateRowList() | [XRowList](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrowlist-class) | Virtual method that creates list of rows. | 
| Dispose(`bool` disposing) | `void` | Clean up any resources being used. | 
| DoAction(`object` sender, `string` actionName, `object` data) | `void` | Performs the action and/or raises [Korzh.EasyQuery.WinForms.XPanel.Action](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) event. | 
| DoElementPaint(`object` sender, `PaintEventArgs` e) | `void` | Handles Paint event of any element added into the panel. | 
| DoListRequest([ListXElement](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class) element, `string` listName) | `void` | Virtual method for filling the list of [Korzh.EasyQuery.WinForms.ListXElement](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class). | 
| DoMoveRow(`int` idx, `bool` up) | `void` | Virtual method for Ctrl+Arrow signal processing. | 
| DoRowPaint(`object` sender, `PaintEventArgs` e) | `void` | Handles Paint event of any row added into the panel. | 
| DoSignal(`object` sender, [Signals](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/signals-enum) signalID, `String[]` paramList) | `void` | Processes the internal signal. | 
| EndUpdate() | `void` | Ends the update process. | 
| IsInputKey(`Keys` keyData) | `bool` | Determines whether the specified key is a regular  input key or a special key that requires preprocessing. | 
| MoveRowDown(`int` index) | `void` | Moves the row to one position down (taking into account the level of other rows). | 
| MoveRowUp(`int` index) | `void` | Moves the row to one position up (taking into account the level of other rows). | 
| OnBackColorChanged(`EventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnBackColorChanged(System.EventArgs)`. | 
| OnClick(`EventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnClick(System.EventArgs)`. | 
| OnEnabledChanged(`EventArgs` e) | `void` | Raises the `System.Windows.Forms.Control.EnabledChanged` event. | 
| OnFontChanged(`EventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnFontChanged(System.EventArgs)`. | 
| OnForeColorChanged(`EventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnForeColorChanged(System.EventArgs)`. | 
| OnGotFocus(`EventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnGotFocus(System.EventArgs)`. | 
| OnKeyDown(`KeyEventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnKeyDown(System.Windows.Forms.KeyEventArgs)`. | 
| OnLostFocus(`EventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnLostFocus(System.EventArgs)`. | 
| OnRowAdded([XRow](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) row) | `void` | Virtual method that is called when the row is added. | 
| OnRowListChanged() | `void` | Virtual method that is called when the list of rows is changed. | 
| OnSizeChanged(`EventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnSizeChanged(System.EventArgs)`. | 
| OnValidateValue([ValidateValueEventArgs](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/validatevalueeventargs-class) e) | `void` | Raises the ValidateValue event. | 
| PlaceRow([XRow](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) row) | `void` | Insert row into the list of [Korzh.EasyQuery.WinForms.XPanel](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) controls. | 
| Refresh() | `void` | Forces the control to invalidate its client area and immediately redraw  itself and any child controls.  Overrides `System.Windows.Forms.Control.Refresh`. | 
| RefreshList(`string` listName) | `void` | Refreshes the list with specified name in all elements of all rows | 
| SetRowsWidth(`int` width) | `void` | Sets the width of the rows. | 
| ShiftRowLevel(`int` rowIndex, `bool` up) | `void` | Shifts the row level. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultBackColor | `Color` | Gets the default background color of the control. |