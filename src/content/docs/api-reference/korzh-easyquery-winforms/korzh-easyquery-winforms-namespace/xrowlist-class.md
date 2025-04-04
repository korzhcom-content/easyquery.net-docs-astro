---
title: XRowList class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrowlist-class
sidebar:
  order: 100
---

Represents list of [Korzh.EasyQuery.WinForms.XRow](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class).
```csharp
public class Korzh.EasyQuery.WinForms.XRowList
    : Collection<XRow>

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| XRowList([XPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) parentPanel) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.XRowList](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrowlist-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Arrange() | `void` | Arranges all rows in the list. | 
| Arrange(`int` startIndex) | `void` | Arranges all rows in the list. | 
| ClearItems() | `void` | Removes all elements from the `System.Collections.ObjectModel.Collection'1`. | 
| InsertItem(`int` index, [XRow](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| Move(`int` index1, `int` index2) | `void` | Moves the row from one position to another. | 
| OnRowInserted([XRow](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xrow-class) row, `int` index) | `void` | Called when new row is inserted into panel. | 
| RemoveAt(`int` index, `bool` untilSameLevel) | `void` | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. | 
| RemoveItem(`int` index) | `void` | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. |
