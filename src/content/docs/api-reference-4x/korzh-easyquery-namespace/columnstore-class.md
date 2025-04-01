---
title: ColumnStore class
slug: api-reference-4x/korzh-easyquery-namespace/columnstore-class
sidebar:
  order: 100
---

Represents list of result columns.
```csharp
public class Korzh.EasyQuery.ColumnStore
    : ColumnList, IList<Column>, ICollection<Column>, IEnumerable<Column>, IEnumerable, IList, ICollection, IReadOnlyList<Column>, IReadOnlyCollection<Column>

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Query` | parentQuery | The reference to parent Query object | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | IsJustSorting | Gets a value indicating whether this instance of the column store is used for "just sorting" columns. | 
| `Boolean` | IsUpdating | Gets a value indicating whether this [Korzh.EasyQuery.ColumnList](///easyquery/docs/api-reference-4x/korzh-easyquery-namespace/columnlist-class) is updating. | 
| `DataModel` | Model | Gets or sets the reference to the data model. | 
| `Query` | ParentQuery | Gets the parent query. | 
| `SortedColumnList` | SortedColumns | Gets the list of sorted columns. | 


### Events

| Type | Name | Description | 
| --- | --- | --- | 
| `ColumnsChangedEventHandler` | ColumnsChanged | Occurs after column list has been changed. | 
| `ColumnsChangingEventHandler` | ColumnsChanging | Occurs when columns list is going to be changed. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | BeginUpdate() | Begins the update process. | 
| `void` | ClearItems() | Removes all elements from the `System.Collections.ObjectModel.Collection'1`. | 
| `void` | CoreRefreshParams() | Refreshes the list of query parameters by parameters associated with attributes used in query columns . | 
| `void` | EndUpdate() | Ends the update process. | 
| `void` | InsertItem(`Int32` index, `Column` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| `Boolean` | IsColumnsChangeAccepted(`ChangeType` what, `Column` column, `Int32` info) | Calls ColumnsChanging event and return boolean value that indicates whether the change is accepted. | 
| `void` | LoadFromJsonDict(`IEnumerable` colList) | Loads columns from IEnumerable object. Used for loading from JSON. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads the column list using `System.Xml.XmlReader` object. | 
| `void` | Move(`Int32` index, `Int32` newIndex) | Moves the specified index of the current. | 
| `void` | OnColumnsChanged(`ColumnsChangeEventArgs` e) | Raises the ColumnsChanged event. | 
| `void` | OnColumnsChanging(`ColumnsChangingEventArgs` e) | Raises the `ColumnsChanging` event. | 
| `void` | RefreshParams() |  | 
| `void` | RemoveItem(`Int32` index) | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. | 
| `void` | ResyncSortingList(`Boolean` changeInnerIndex) | Resynchronizes the sorting list of columns correspondingly to their order. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves the column list to XML. |
