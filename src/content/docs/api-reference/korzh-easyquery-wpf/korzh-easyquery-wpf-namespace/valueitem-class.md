---
title: ValueItem class
slug: >-
  api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/valueitem-class
sidebar:
  order: 100
---

Base class for items in lists and context menus
```csharp
public class Korzh.EasyQuery.Wpf.ValueItem
    : DependencyObject

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ValueItem(`string` value, `string` text) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Wpf.ValueItem](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/valueitem-class) class. | 
| ValueItem(`string` value) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Wpf.ValueItem](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/valueitem-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Children | [ValueItemList](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/valueitemlist-class) | Gets or sets the children. | 
| Text | `string` | Gets or sets the text. | 
| Value | `string` | Gets or sets the value. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ToString() | `string` | Returns a `System.String` that represents this instance. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| ChildrenProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.ValueItem.Children](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/valueitem-class) dependency property | 
| TextProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.ValueItem.Text](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/valueitem-class) dependency property | 
| ValueProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.ValueItem.Value](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/valueitem-class) dependency property |
