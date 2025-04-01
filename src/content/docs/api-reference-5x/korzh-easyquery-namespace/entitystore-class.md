---
title: EntityStore class
slug: api-reference-5x/korzh-easyquery-namespace/entitystore-class
sidebar:
  order: 100
---

Represents storage of entities
```csharp
public class Korzh.EasyQuery.EntityStore
    : EntityList, IList<Entity>, ICollection<Entity>, IEnumerable<Entity>, IEnumerable, IList, ICollection, IReadOnlyList<Entity>, IReadOnlyCollection<Entity>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DataModel` | Model | Gets the model. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | InsertItem(`Int32` index, `Entity` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| `void` | OnEntityInsertion(`Entity` entity, `Int32` index) | Called on entity's insertion. | 
| `void` | ReadFromJson(`JsonReader` reader) | Reads the list of entities from JSON. | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Reads the list of entities from JSON (asynchronous way). | 
| `void` | WriteToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the list of entities to JSON. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the list of entities to JSON (asynchronous way). |
