---
title: SubQueryXElement class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/subqueryxelement-class
sidebar:
  order: 100
---

Represents special kind of element which shows a dialog sub-query modification.
```csharp
public class Korzh.EasyQuery.WinForms.SubQueryXElement
    : LabelXElement

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SubQueryXElement() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.SubQueryXElement](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/subqueryxelement-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ParentQuery | [Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets or sets the parent query. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CalcNewValue() | `string` | Gets the new value from modal form | 
| CoreGetTextAdjustedByValue(`string` newValue) | `string` | Gets the element's text according to its value.  This method can be overridden in inherited classes. | 
| CoreLaunch() | `void` | Is called when both [Korzh.EasyQuery.WinForms.XElement.ParentRow](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) and [Korzh.EasyQuery.WinForms.XElement.ParentPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) for this element are established. | 
| HideControl() | `void` | Hides the control that allows to edit the value. | 
| LinkClickedHandler(`object` sender, `LinkLabelLinkClickedEventArgs` e) | `void` | Called when the label is clicked. | 
| ParseXmlNode(`XmlNode` node) | `void` | Parses the XML node. | 
| ShowControl() | `void` | Shows the control that allows to edit the value. | 
| UpdateExpression() | `void` | Updates the EqExpression object associated with the current element. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| TagName | `string` | Tag name that represents [Korzh.EasyQuery.WinForms.SubQueryXElement](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/subqueryxelement-class) element. |
