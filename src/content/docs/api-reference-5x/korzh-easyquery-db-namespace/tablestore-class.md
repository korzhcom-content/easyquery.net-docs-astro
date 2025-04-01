---
title: TableStore class
slug: api-reference-5x/korzh-easyquery-db-namespace/tablestore-class
sidebar:
  order: 100
---

Represetns storage of tables.
```csharp
public class Korzh.EasyQuery.Db.TableStore
    : TableList, IList<Table>, ICollection<Table>, IEnumerable<Table>, IEnumerable, IList, ICollection, IReadOnlyList<Table>, IReadOnlyCollection<Table>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | ClearItems() | Removes all elements from the `System.Collections.ObjectModel.Collection`. | 
| `void` | ReadFromJson(`JsonReader` reader) | Reads the list of tables from JSON. | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Reads the list of tables from JSON (asynchronous way). | 
| `void` | RemoveItem(`Int32` index) | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. | 
| `void` | WriteToJson(`JsonWriter` writer) | Writes the list of tables to JSON. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer) | Writes the list of tables to JSON (asynchronous way). |
