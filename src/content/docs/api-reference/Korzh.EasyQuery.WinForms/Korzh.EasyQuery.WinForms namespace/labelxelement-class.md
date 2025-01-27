---
title: LabelXElement class
slug: api-reference/Korzh.EasyQuery.WinForms/Korzh.EasyQuery.WinForms namespace/labelxelement-class
---


The row element that lets click on its text.
```csharp
public class Korzh.EasyQuery.WinForms.LabelXElement
    : XElement

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| LabelXElement(`string` subType) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.LabelXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class) class. | 
| LabelXElement() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.LabelXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| linkControl | `LabelXElement.RowLinkLabel` | The [Korzh.EasyQuery.WinForms.LabelXElement.RowLinkLabel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class) control that serves as [Korzh.EasyQuery.WinForms.LabelXElement.ElementControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class). | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ActionName | `string` | Gets or sets the name of the action raised when link is clicked. | 
| ElementControl | `Control` | Gets the control that implement element's interaction with end user. | 
| ReadOnlyColor | `Color` | Gets or sets the color of the element in "read only" state. | 
| TextColor | `Color` | Gets or sets the color of the element's text | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Arrange(`int` bottomLine, `int` rowHeight) | `void` | Arranges the [Korzh.EasyQuery.WinForms.LabelXElement.ElementControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class) on base panel.  Overrides [Korzh.EasyQuery.WinForms.XElement.Arrange(System.Int32,System.Int32)](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class). | 
| CreateElementControl() | `Control` | Creates the [Korzh.EasyQuery.WinForms.LabelXElement.ElementControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class). | 
| Dispose(`bool` disposing) | `void` | Clean up any resources being used. | 
| FillAltMenu([ValueItemList](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitemlist-class) items) | `void` | Fills the element's alternative items menu (shown by Ctrl+Click). | 
| LinkClickedHandler(`object` sender, `LinkLabelLinkClickedEventArgs` e) | `void` | Handler of [Korzh.EasyQuery.WinForms.LabelXElement.linkControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/labelxelement-class)`System.Windows.Forms.Control.Click` event. | 
| OnAltClick(`EventArgs` e) | `void` | Shows the alternative menu if it is defined or raises the [Korzh.EasyQuery.WinForms.XElement.AltClick](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) event. | 
| ParseXmlNode(`XmlNode` node) | `void` | Parses the XML-description of element. | 
| ShowAltMenu() | `void` | Shows the element's alternative items menu. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| TagName | `string` | Gets the name of the XML tag concerned with element. |