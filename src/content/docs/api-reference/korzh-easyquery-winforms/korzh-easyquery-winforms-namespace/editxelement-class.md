---
title: EditXElement class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/editxelement-class
---
The row element that lets edit value in `System.Windows.Forms.TextBox` control.
```csharp
public class Korzh.EasyQuery.WinForms.EditXElement
    : LabelXElement

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EditXElement(`string` type) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.EditXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/editxelement-class) class. | 
| EditXElement() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.EditXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/editxelement-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| editControl | `TextBox` | The `System.Windows.Forms.TextBox` control that is used for value editing. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| MaxLength | `long` | Gets or sets the maximum length of element's value. | 
| Multiline | `bool` | Gets or sets a value indicating whether the text of the edit control can span more than one line. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Arrange(`int` bottomLine, `int` rowHeight) | `void` | Arranges the [Korzh.EasyQuery.WinForms.LabelXElement.ElementControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class) on base panel.  Overrides [Korzh.EasyQuery.WinForms.LabelXElement.Arrange(System.Int32,System.Int32)](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class). | 
| CalcNewText(`string` newValue) | `string` | Gets the new text from edit control | 
| CalcNewValue() | `string` | Gets the new value from edit control | 
| CoreGetTextAdjustedByValue(`string` newValue) | `string` | Gets the element's text according to its value.  This method can be overridden in inherited classes. | 
| EditKeyPressHandler(`object` sender, `KeyPressEventArgs` e) | `void` | The handler of [Korzh.EasyQuery.WinForms.EditXElement.editControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/editxelement-class)`System.Windows.Forms.Control.KeyPress` event. | 
| EditLostFocusHandler(`object` sender, `EventArgs` e) | `void` | The handler of [Korzh.EasyQuery.WinForms.EditXElement.editControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/editxelement-class)`System.Windows.Forms.Control.LostFocus` event. | 
| EditSizeChangedHandler(`object` sender, `EventArgs` e) | `void` | The handler of [Korzh.EasyQuery.WinForms.EditXElement.editControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/editxelement-class)`System.Windows.Forms.Control.SizeChanged` event. | 
| EditTextChangedHandler(`object` sender, `EventArgs` e) | `void` | The handler of [Korzh.EasyQuery.WinForms.EditXElement.editControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/editxelement-class)`System.Windows.Forms.Control.TextChanged` event. | 
| HideControl() | `void` | Hides the control that allows to edit the value. | 
| LinkClickedHandler(`object` sender, `LinkLabelLinkClickedEventArgs` e) | `void` | Overrides [Korzh.EasyQuery.WinForms.LabelXElement.LinkClickedHandler(System.Object,System.Windows.Forms.LinkLabelLinkClickedEventArgs)](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class). | 
| ParseXmlNode(`XmlNode` node) | `void` | Parses the XML-description of element. | 
| ShowControl() | `void` | Shows the [Korzh.EasyQuery.WinForms.EditXElement.editControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/editxelement-class) to let user edit data. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| TagName | `string` | Gets the name of the XML tag concerned with element. |