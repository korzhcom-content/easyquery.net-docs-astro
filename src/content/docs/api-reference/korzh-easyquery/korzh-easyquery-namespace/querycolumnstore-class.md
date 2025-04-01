---
title: QueryColumnStore class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnstore-class
sidebar:
  order: 100
---

Represents list of result columns.
```csharp
public class Korzh.EasyQuery.QueryColumnStore
    : QueryColumnList

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryColumnStore([Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query, `bool` justSorting) | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryColumnStore](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnstore-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| parentQuery | [Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | The reference to parent Query object | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| IsJustSorting | `bool` | Gets a value indicating whether this instance of the column store is used for "just sorting" columns. | 
| IsUpdating | `bool` | Gets a value indicating whether this [Korzh.EasyQuery.QueryColumnList](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnlist-class) is updating. | 
| Model | [DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets the DataModel object associated with this list | 
| ParentQuery | [Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets the parent query. | 
| SortedColumns | [SortedColumnList](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortedcolumnlist-class) | Gets the list of sorted columns. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| ColumnsChanged | `ColumnsChangedEventHandler` | Occurs after column list has been changed. | 
| ColumnsChanging | `ColumnsChangingEventHandler` | Occurs when columns list is going to be changed. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| BeginUpdate() | `void` | Turns on the "updating" state.  Any changes occured during this state will not initiate [Korzh.EasyQuery.QueryColumnStore.ColumnsChanged](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnstore-class) event  until [Korzh.EasyQuery.QueryColumnStore.EndUpdate](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnstore-class) is called. | 
| ClearItems() | `void` | Removes all elements from the `System.Collections.ObjectModel.Collection'1`. | 
| CoreRefreshParams() | `void` | Refreshes the list of query parameters by parameters associated with attributes used in query columns . | 
| EndUpdate() | `void` | Turns the "updating" state off. | 
| InsertItem(`int` index, [QueryColumn](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| IsColumnsChangeAccepted([ChangeType](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/changetype-enum) what, [QueryColumn](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, `int` info) | `bool` | Calls ColumnsChanging event and return boolean value that indicates whether the change is accepted. | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads the column list using `System.Xml.XmlReader` object. | 
| Move(`int` index, `int` newIndex) | `void` | Moves the specified index of the current. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Loads the column list using `Newtonsoft.Json.JsonReader` object (asynchronous way). | 
| RemoveItem(`int` index) | `void` | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. | 
| ResyncSortingList(`bool` changeInnerIndex) | `void` | Resynchronizes the sorting list of columns correspondingly to their order. | 
| SaveToXmlWriter(`XmlWriter` writer, `string` tagName) | `void` | Saves the column list to XML. | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Saves the column list using `Newtonsoft.Json.JsonWriter` object (asynchronous way). |
