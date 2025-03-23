---
title: EntityAttrStore class
slug: api-reference-4x/korzh-easyquery-namespace/entityattrstore-class
---


Represents entity attributes storage associated with a particular entity.
```csharp
public class Korzh.EasyQuery.EntityAttrStore
    : EntityAttrList, IList<EntityAttr>, ICollection<EntityAttr>, IEnumerable<EntityAttr>, IEnumerable, IList, ICollection, IReadOnlyList<EntityAttr>, IReadOnlyCollection<EntityAttr>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | InsertItem(`Int32` index, `EntityAttr` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| `void` | OnEntityAttrInsertion(`EntityAttr` entityAttr, `Int32` index) | Called when some attribute is inserted to the list. |