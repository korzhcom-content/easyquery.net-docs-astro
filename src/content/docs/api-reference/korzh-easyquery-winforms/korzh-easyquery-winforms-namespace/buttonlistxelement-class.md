---
title: ButtonListXElement class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/buttonlistxelement-class
---

The row element that lets select value from [multilevel] list.
```csharp
public class Korzh.EasyQuery.WinForms.ButtonListXElement
    : ListXElement

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ButtonListXElement(`string` type) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ButtonListXElement](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/buttonlistxelement-class) class. | 
| ButtonListXElement() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ButtonListXElement](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/buttonlistxelement-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| buttonControl | `ButtonListXElement.RowButton` | The [Korzh.EasyQuery.WinForms.ButtonListXElement.RowButton](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/buttonlistxelement-class) control that is used as [Korzh.EasyQuery.WinForms.ButtonListXElement.ElementControl](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/buttonlistxelement-class). | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ElementControl | `Control` | Gets the control that implement element's interaction with end user. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Activate() | `void` | Activates this element. | 
| ApplyFormats() | `void` | Applies the formats. This method is called from [Korzh.EasyQuery.WinForms.XPanel](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class)  object when all element parents are set | 
| Arrange(`int` bottomLine, `int` rowHeight) | `void` | Arranges the [Korzh.EasyQuery.WinForms.ButtonListXElement.ElementControl](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/buttonlistxelement-class) on base panel.  Overrides [Korzh.EasyQuery.WinForms.LabelXElement.Arrange(System.Int32,System.Int32)](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class). | 
| ButtonClickHandler(`object` sender, `EventArgs` e) | `void` | Handler of [Korzh.EasyQuery.WinForms.ButtonListXElement.buttonControl](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/buttonlistxelement-class)`System.Windows.Forms.Control.Click` event. | 
| CreateElementControl() | `Control` | Creates the [Korzh.EasyQuery.WinForms.ButtonListXElement.ElementControl](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/buttonlistxelement-class). | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| TagName | `string` | Gets the name of the XML tag concerned with element. |