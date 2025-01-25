---
title: TextXElement class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/textxelement-class
---
The row element that displays text.
```csharp
public class Korzh.EasyQuery.WinForms.TextXElement
    : XElement

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TextXElement(`string` text, `string` subType) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.TextXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/textxelement-class) class. | 
| TextXElement(`string` text) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.TextXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/textxelement-class) class. | 
| TextXElement() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.TextXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/textxelement-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ElementControl | `Control` | Gets the control that implement element's interaction with end user. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CreateElementControl() | `Control` | Creates the [Korzh.EasyQuery.WinForms.TextXElement.ElementControl](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/textxelement-class). | 
| ParseXmlNode(`XmlNode` node) | `void` | Parses the XML-description of element. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| TagName | `string` | Gets the name of the XML tag concerned with element. |