---
title: DateTimeXElement class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/datetimexelement-class
---


Represents date/time editing element
```csharp
public class Korzh.EasyQuery.WinForms.DateTimeXElement
    : LabelXElement

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DateTimeXElement(`string` type) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.DateTimeXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/datetimexelement-class) class. | 
| DateTimeXElement() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.DateTimeXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/datetimexelement-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| dateControl | `DateTimePicker` | Represents `System.Windows.Forms.DateTimePicker` control which is used to edit date/time values | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AllowList | `bool` | Gets or sets a value indicating whether this row element allows list values. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Arrange(`int` bottomLine, `int` rowHeight) | `void` | Arranges the [Korzh.EasyQuery.WinForms.LabelXElement.ElementControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class) on base panel.  Overrides [Korzh.EasyQuery.WinForms.LabelXElement.Arrange(System.Int32,System.Int32)](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class). | 
| CalcNewValue() | `string` | Gets the new value from edit control | 
| CoreGetTextAdjustedByValue(`string` newValue) | `string` | Gets the element's text according to its value.  This method can be overridden in inherited classes. | 
| CoreLaunch() | `void` | Is called when both [Korzh.EasyQuery.WinForms.XElement.ParentRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) and [Korzh.EasyQuery.WinForms.XElement.ParentPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) for this element are established. | 
| DateCloseUpHandler(`object` sender, `EventArgs` e) | `void` | DateTime picker control CloseUp event handler. | 
| DateDropDownHandler(`object` sender, `EventArgs` e) | `void` | DateTime picker control DropDown event handler. | 
| DateKeyPressHandler(`object` sender, `KeyPressEventArgs` e) | `void` | The handler of [Korzh.EasyQuery.WinForms.DateTimeXElement.dateControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/datetimexelement-class)`System.Windows.Forms.Control.KeyPress` event. | 
| DateLostFocusHandler(`object` sender, `EventArgs` e) | `void` | The handler of [Korzh.EasyQuery.WinForms.DateTimeXElement.dateControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/datetimexelement-class)`System.Windows.Forms.Control.LostFocus` event. | 
| DateSizeChangedHandler(`object` sender, `EventArgs` e) | `void` | The handler of [Korzh.EasyQuery.WinForms.DateTimeXElement.dateControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/datetimexelement-class)`System.Windows.Forms.Control.SizeChanged` event. | 
| DateTextChangedHandler(`object` sender, `EventArgs` e) | `void` | The handler of [Korzh.EasyQuery.WinForms.DateTimeXElement.dateControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/datetimexelement-class)`System.Windows.Forms.Control.TextChanged` event. | 
| HideControl() | `void` | Hides the control that allows to edit the value. | 
| LinkClickedHandler(`object` sender, `LinkLabelLinkClickedEventArgs` e) | `void` | Overrides [Korzh.EasyQuery.WinForms.LabelXElement.LinkClickedHandler(System.Object,System.Windows.Forms.LinkLabelLinkClickedEventArgs)](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class). | 
| ParseDateTimeValue(`string` s) | `DateTime` | Converts the specified string representation of a date and time to its DateTime equivalent. | 
| ParseXmlNode(`XmlNode` node) | `void` | Parses the XML-description of element. | 
| ShowControl() | `void` | Shows the control that allows to edit the value. | 
| ShowDateTime() | `void` | Shows the [Korzh.EasyQuery.WinForms.DateTimeXElement.dateControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/datetimexelement-class) to let user edit data. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| TagName | `string` | Gets the name of the element's tag. |