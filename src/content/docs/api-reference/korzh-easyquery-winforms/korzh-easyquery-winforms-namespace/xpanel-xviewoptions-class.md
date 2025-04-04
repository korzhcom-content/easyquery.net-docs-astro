---
title: XPanel.XViewOptions class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-xviewoptions-class
sidebar:
  order: 100
---

Represents set of options which allows to control [Korzh.EasyQuery.WinForms.XPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) appearance
```csharp
public class Korzh.EasyQuery.WinForms.XPanel.XViewOptions

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| XViewOptions([XPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) parent) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.XPanel.XViewOptions](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| parent | [XPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) | Contains parent [Korzh.EasyQuery.WinForms.XPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) object; | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ActiveBackColor | `Color` | Gets or sets the back color of the active row. | 
| ActiveForeColor | `Color` | Gets or sets the fore color of the active row. | 
| AdjustChildLevel | `bool` | Gets or sets a value indicating whether child level should be adjusted. | 
| BorderOnFocus | `bool` | Gets or sets a value indicating whether the panel should draw a border when get focus. | 
| ButtonActiveBodyColor | `Color` | Gets or sets the color of the service button when it is in [Korzh.EasyQuery.WinForms.MacButton.MState.stIn](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) state. | 
| ButtonActiveBorderColor | `Color` | Gets or sets the color of the service button's border when button is in [Korzh.EasyQuery.WinForms.MacButton.MState.stIn](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) state. | 
| ButtonClickBodyColor | `Color` | Gets or sets the color of the service button when it is in [Korzh.EasyQuery.WinForms.MacButton.MState.stClick](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) state. | 
| ButtonClickBorderColor | `Color` | Gets or sets the color of the service button's border when button is in [Korzh.EasyQuery.WinForms.MacButton.MState.stClick](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) state. | 
| ButtonForeColor | `Color` | Gets or sets the color of the button text. | 
| ButtonInactiveBodyColor | `Color` | Gets or sets the color of the service button when it is in [Korzh.EasyQuery.WinForms.MacButton.MState.stNotIn](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) state. | 
| ButtonInactiveBorderColor | `Color` | Gets or sets the color of the service button's border when button is in [Korzh.EasyQuery.WinForms.MacButton.MState.stNotIn](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/macbutton-class) state. | 
| ButtonMacStyle | `bool` | Gets or sets a value indicating whether the row buttons have Mac style. | 
| ButtonRounded | `bool` | Gets or sets a value indicating whether the service button should be displayed as ellipse in contrast to rectangle. | 
| DateFormat | `string` | Gets or sets the format of date values. | 
| DateTimeFormat | `string` | Gets or sets the format of date/time values. | 
| FocusBorderStyle | `BorderStyle` | Gets or sets a value indicating what style of border [Korzh.EasyQuery.WinForms.XPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) should have. | 
| LeftMargin | `int` | Gets or sets the margin from left edge to first displayed item (element, checkbox etc.). | 
| LevelSpacing | `int` | Gets or sets the value of the shift for the next level row. | 
| LinkColor | `Color` | Gets or sets the color of the link. | 
| ListSeparator | `string` | Gets or sets the list separator. | 
| MaxEditBoxSize | `int` | Gets or sets the max width of edit box for value editing. | 
| MinEditBoxSize | `int` | Gets or sets the min width of edit box for value editing. | 
| ReadOnlyColor | `Color` | Gets or sets the color of the read-only elements. | 
| RowCheckBoxes | `bool` | Gets or sets a value indicating whether the control should show a check box at the beginning of each row. | 
| RowHeight | `int` | Gets or sets the height of the row. | 
| TimeFormat | `string` | Gets or sets the format of time values. | 
| TuneElementSizes | `bool` | Gets or sets a value indicating whether row elements should be drawn as autosize controls (for dpi!=96 in .Net 2.0). | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| RefreshParent() | `void` | Refreshes the parent. |
