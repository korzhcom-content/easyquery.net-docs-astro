---
title: SimpleConditionRow class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/simpleconditionrow-class
---
The descendant of [Korzh.EasyQuery.WinForms.ConditionRow](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/conditionrow-class) class. Represents a [Korzh.EasyQuery.WinForms.SimpleConditionRow](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/simpleconditionrow-class) object.
```csharp
public class Korzh.EasyQuery.WinForms.SimpleConditionRow
    : ConditionRow

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SimpleConditionRow([QueryPanel](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) qpanel, [Condition](api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) condition) | `void` | Initializes a new instance of the <see cref="!:Korzh.EasyQuery.WinForms.QueryPanel.SimpleConditionRow" /> class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ApplyElementFormats([XElement](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element) | `void` | Applies formats for one element. | 
| CoreApplyFormats() | `void` | Applies the formats used in parent object. This method is called when row is added into [Korzh.EasyQuery.WinForms.XPanel](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) | 
| CoreElementAltMenuClick([XElement](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) sender, [ValueItem](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) item) | `void` | This method is called when [Korzh.EasyQuery.WinForms.XElement.AltClick](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) event is raised in some element of the current row. | 
| CoreRefreshByCondition() | `void` | This method is called when connected condition is changed  and we need to refresh the row accordingly. | 
| ElementContentChanged([XElement](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `bool` valueChanged, `bool` textChanged) | `void` | This method is called when the content of some element has been changed | 
| ElementTextAdjusting([XElement](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `string` newValue, `string` text) | `string` | This method is called when we need to adjust element's text according to its value | 
| FillButtonMenu() | `void` | Fills the button menu. | 
| FillElementAltMenu([LabelXElement](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class) element, [EqExpression](api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr) | `void` | Fills the alternative menu for some element. | 
| GetAttributeCaption([EntityAttr](api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `string` | Gets the text for an attribute. |