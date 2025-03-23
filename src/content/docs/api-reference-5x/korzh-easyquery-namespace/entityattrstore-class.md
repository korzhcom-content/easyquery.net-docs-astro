---
title: EntityAttrStore class
slug: api-reference-5x/korzh-easyquery-namespace/entityattrstore-class
---


Represents entity attributes storage associated with a particular entity.
```csharp
public class Korzh.EasyQuery.EntityAttrStore
    : EntityAttrList, IList<EntityAttr>, ICollection<EntityAttr>, IEnumerable<EntityAttr>, IEnumerable, IList, ICollection, IReadOnlyList<EntityAttr>, IReadOnlyCollection<EntityAttr>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DataModel` | Model | Gets the DataModel object this entity attribute belongs to | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | InsertItem(`Int32` index, `EntityAttr` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| `void` | OnEntityAttrInsertion(`EntityAttr` entityAttr, `Int32` index) | Called when some attribute is inserted to the list. | 
| `void` | ReadFromJson(`JsonReader` reader) | Reads the list of entity attributes from JSON. | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Reads the list of entity attributes from JSON (asynchronous way). | 
| `void` | WriteToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) |  | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) |  |