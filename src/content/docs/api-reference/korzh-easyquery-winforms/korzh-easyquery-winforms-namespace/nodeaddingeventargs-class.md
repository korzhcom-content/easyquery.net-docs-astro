---
title: NodeAddingEventArgs class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/nodeaddingeventargs-class
sidebar:
  order: 100
---

Provides data for NodeAdding event.
```csharp
public class Korzh.EasyQuery.WinForms.NodeAddingEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| NodeAddingEventArgs(`TreeNode` node) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.BeforeRollUpEventArgs](///easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/beforerollupeventargs-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Cancel | `bool` | Gets or sets a value indicating whether the node should be added. | 
| Node | `TreeNode` | Gets the node. |
