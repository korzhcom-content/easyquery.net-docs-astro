---
title: EntityTreeNode class
slug: >-
  api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class
sidebar:
  order: 100
---

Used to add [Korzh.EasyQuery.Wpf.EntityTreeNode.IsChecked](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class) property to [Korzh.EasyQuery.Entity](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) objects
```csharp
public class Korzh.EasyQuery.Wpf.EntityTreeNode
    : INotifyPropertyChanged

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntityTreeNode([EntityTreeNode](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class) parent, `object` data) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Wpf.EntityTreeNode](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Caption | `string` | Gets the caption of this entity. | 
| Children | `ObservableCollection`&lt;[EntityTreeNode](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class)&gt; | Gets the children. | 
| Data | `object` | Gets or sets the data associated with this entity; | 
| IsChecked | `bool` | Gets or sets a value indicating whether this instance is checked. Raises [Korzh.EasyQuery.Wpf.EntityTreeNode.PropertyChanged](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class) event | 
| IsExpanded | `bool` | Gets or sets expanded state of associated treeview node | 
| Parent | [EntityTreeNode](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class) | Gets the parent. | 
| ShowTooltip | `bool` | Gets a value indicating whether the tooltip should be shown. | 
| Tooltip | `string` | Gets the tooltip. | 
| Visibility | `Visibility` | Visibility of the check entity | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| PropertyChanged | `PropertyChangedEventHandler` | Occurs when a property value changes. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| SetChecked(`bool` value) | `void` | Sets the checked. None of events are raised |
