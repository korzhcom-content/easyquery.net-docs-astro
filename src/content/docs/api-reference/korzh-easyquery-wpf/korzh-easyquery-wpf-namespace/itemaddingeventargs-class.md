---
title: ItemAddingEventArgs class
slug: >-
  api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/itemaddingeventargs-class
sidebar:
  order: 100
---

Represents event data for FilterEntity event
```csharp
public class Korzh.EasyQuery.Wpf.ItemAddingEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ItemAddingEventArgs([EntityTreeNode](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class) item) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Wpf.EntityTreeNode](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Accept | `bool` | Indicates whether the entity or entity attribute can added to the tree | 
| Item | [EntityTreeNode](/easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class) | Gets or sets the Entity or EntityAttr object considering for adding to the tree |
