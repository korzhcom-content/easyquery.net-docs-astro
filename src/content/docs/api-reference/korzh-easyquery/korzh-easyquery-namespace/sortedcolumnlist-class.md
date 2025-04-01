---
title: SortedColumnList class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/sortedcolumnlist-class
sidebar:
  order: 100
---

Represents the list of sorted columns
```csharp
public class Korzh.EasyQuery.SortedColumnList
    : QueryColumnList, IComparer<QueryColumn>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SortedColumnList([Query](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query) | `void` | Initializes a new instance of the `SortedColumnList` class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| BeginUpdate() | `void` | Begins the update process. | 
| ClearItems() | `void` | Removes all elements from the `System.Collections.ObjectModel.Collection'1`. | 
| Compare([QueryColumn](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) x, [QueryColumn](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) y) | `int` | Compares two objects and returns a value indicating whether one is less than, equal to, or greater than the other. | 
| CoreSortOrderChanged([SortOrderChangedEventArgs](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortorderchangedeventargs-class) e) | `void` | Notify parent query about the changes in the list of sorted columns | 
| EndUpdate() | `void` | Ends the update process. | 
| InsertItem(`int` index, [QueryColumn](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| Move([QueryColumn](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) col, `int` shift) | `void` | Moves the specified column. | 
| Move(`int` index, `int` newIndex) | `void` | Moves the specified column. | 
| RemoveItem(`int` index) | `void` | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. | 
| Sort() | `void` | Sorts the list of columns. |
