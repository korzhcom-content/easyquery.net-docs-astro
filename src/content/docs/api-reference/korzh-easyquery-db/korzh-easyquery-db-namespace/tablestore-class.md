---
title: TableStore class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablestore-class
---


Represetns storage of tables.
```csharp
public class Korzh.EasyQuery.Db.TableStore
    : TableList

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TableStore([DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model) | `void` | Initializes a new instance of the `TablesStorage` class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ClearItems() | `void` | Removes all elements from the `System.Collections.ObjectModel.Collection`. | 
| InsertItem(`int` index, [Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) item) | `void` | Inserts an element into the <see cref="T:System.Collections.ObjectModel.Collection`1"></see> at the specified index. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads the list of tables from JSON (asynchronous way). | 
| RemoveItem(`int` index) | `void` | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Writes the list of tables to JSON (asynchronous way). |