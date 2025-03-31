---
title: ListXElement class
slug: api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/listxelement-class
---

Used for picking a value from the list
```csharp
public class Korzh.EasyQuery.Wpf.ListXElement
    : XElement

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ListXElement() | `void` | Initializes a new instance of the `System.Windows.Controls.Control` class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| _sql | `string` | Holds current SQL statement | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Condition | [Condition](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Gets or sets the condition. | 
| Items | [ValueItemList](//easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/valueitemlist-class) | Gets or sets the items. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| ListRequest | `ListXElement.ListRequestEventHandler` | Occurs when list should be filled by user. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| OnApplyTemplate() | `void` | When overridden in a derived class, is invoked whenever application code or internal processes call `System.Windows.FrameworkElement.ApplyTemplate`. | 
| ParseXmlNode(`XmlNode` node) | `void` | Parses the XML node. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| ItemsProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.ListXElement.Items](//easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/listxelement-class) dependency property | 
| ListRequestEvent | `RoutedEvent` | Identifies the [Korzh.EasyQuery.Wpf.ListXElement.ListRequest](//easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/listxelement-class) routed event |