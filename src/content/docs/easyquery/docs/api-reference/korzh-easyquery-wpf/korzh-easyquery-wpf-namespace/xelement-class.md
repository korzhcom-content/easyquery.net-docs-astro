---
title: XElement class
slug: easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xelement-class
---


Base class for any elements used in EasyQuery
```csharp
public class Korzh.EasyQuery.Wpf.XElement
    : Control

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| XElement() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Data | `string` | Gets or sets the additional data associated with element. | 
| SubType | `string` | Gets or sets the subtype. | 
| Text | `string` | Gets or sets the text. | 
| Value | `string` | Gets or sets the value. When value is changed an XElement.ValueChangedEvent is raised | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| ValueChanged | `RoutedEventHandler` | Occurs when value is changed | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ParseXmlNode(`XmlNode` node) | `void` | Parses the XML node. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| SubTypeProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.XElement.SubType](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xelement-class) dependency property | 
| TextProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.XElement.Text](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xelement-class) dependency property | 
| ValueChangedEvent | `RoutedEvent` | Identifies the [Korzh.EasyQuery.Wpf.XElement.ValueChanged](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xelement-class) routed event | 
| ValueProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.XElement.Value](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xelement-class) dependency property | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| EmptyText | `string` | Gets or sets the string which is shown instead of String.Empty. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Create(`string` tagName) | [XElement](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xelement-class) | Creates [Korzh.EasyQuery.Wpf.XElement](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xelement-class) with the specified tag name. | 
| Register([IXElementCreator](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/ixelementcreator-interface) creator) | `void` | Registers the specified [Korzh.EasyQuery.Wpf.IXElementCreator](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/ixelementcreator-interface). |