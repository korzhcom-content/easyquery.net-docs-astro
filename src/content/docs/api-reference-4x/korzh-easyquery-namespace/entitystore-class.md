---
title: EntityStore class
slug: api-reference-4x/korzh-easyquery-namespace/entitystore-class
sidebar:
  order: 100
---

Represents storage of entities
```csharp
public class Korzh.EasyQuery.EntityStore
    : EntityList, IList<Entity>, ICollection<Entity>, IEnumerable<Entity>, IEnumerable, IList, ICollection, IReadOnlyList<Entity>, IReadOnlyCollection<Entity>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | InsertItem(`Int32` index, `Entity` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| `void` | OnEntityInsertion(`Entity` entity, `Int32` index) | Called when entity is insertion]. |
