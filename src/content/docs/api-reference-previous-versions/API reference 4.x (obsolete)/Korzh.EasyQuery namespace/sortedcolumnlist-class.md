---
title: SortedColumnList class
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery namespace/sortedcolumnlist-class
---


Represents the list of sorted columns
```csharp
public class Korzh.EasyQuery.SortedColumnList
    : ColumnList, IList<Column>, ICollection<Column>, IEnumerable<Column>, IEnumerable, IList, ICollection, IReadOnlyList<Column>, IReadOnlyCollection<Column>, IComparer<Column>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | Updating | Gets a value indicating whether this [Korzh.EasyQuery.ColumnList](/api-reference-4x/korzh-easyquery-namespace/columnlist-class) is updating. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | BeginUpdate() | Begins the update process. | 
| `void` | ClearItems() | Removes all elements from the `System.Collections.ObjectModel.Collection'1`. | 
| `Int32` | Compare(`Column` x, `Column` y) | Compares two objects and returns a value indicating whether one is less than, equal to, or greater than the other. | 
| `void` | CoreSortOrderChanged(`SortOrderChangedEventArgs` e) | Notify parent query about the changes in the list of sorted columns | 
| `void` | EndUpdate() | Ends the update process. | 
| `void` | InsertItem(`Int32` index, `Column` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| `void` | Move(`Column` col, `Int32` shift) | Moves the specified column. | 
| `void` | Move(`Int32` index, `Int32` newIndex) | Moves the specified column. | 
| `void` | PlainInsert(`Int32` index, `Column` item) |  | 
| `void` | PlainRemoveAt(`Int32` index) |  | 
| `void` | RemoveItem(`Int32` index) | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. | 
| `void` | Sort() | Sorts the list of columns. |