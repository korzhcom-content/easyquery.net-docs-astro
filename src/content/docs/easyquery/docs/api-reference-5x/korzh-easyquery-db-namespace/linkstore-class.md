---
title: LinkStore class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/linkstore-class
---


Represetns storage of links.
```csharp
public class Korzh.EasyQuery.Db.LinkStore
    : TableLinkList, IList<TableLink>, ICollection<TableLink>, IEnumerable<TableLink>, IEnumerable, IList, ICollection, IReadOnlyList<TableLink>, IReadOnlyCollection<TableLink>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DbModel` | Model | Current DbModel | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddRange(`IEnumerable<TableLink>` links) | Adds links | 
| `void` | ClearItems() | Clears the items. | 
| `void` | InsertItem(`Int32` index, `TableLink` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| `void` | ReadFromJson(`JsonReader` reader) | Reads the list of links from JSON. | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Reads the list of links from JSON (asynchronous way). | 
| `void` | RemoveByTable(`Table` table) | Removes all links which contain the table passed in parameter | 
| `void` | RemoveItem(`Int32` index) | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. | 
| `void` | WriteToJson(`JsonWriter` writer) | Writes the list of linksto JSON. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer) | Writes the list of linksto JSON. |