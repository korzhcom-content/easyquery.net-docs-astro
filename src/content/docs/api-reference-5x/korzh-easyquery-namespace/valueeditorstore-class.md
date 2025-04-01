---
title: ValueEditorStore class
slug: api-reference-5x/korzh-easyquery-namespace/valueeditorstore-class
sidebar:
  order: 100
---

Represents the list of value editors which belongs to some DataModel object.  Implements the [Korzh.EasyQuery.ValueEditorList](///////////////easyquery/docs/api-reference-5x/korzh-easyquery-namespace/valueeditorlist-class)
```csharp
public class Korzh.EasyQuery.ValueEditorStore
    : ValueEditorList, IList<ValueEditor>, ICollection<ValueEditor>, IEnumerable<ValueEditor>, IEnumerable, IList, ICollection, IReadOnlyList<ValueEditor>, IReadOnlyCollection<ValueEditor>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DataModel` | Model | Gets the model. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | ClearItems() | Removes all elements from the <see cref="T:System.Collections.ObjectModel.Collection`1"></see>. | 
| `void` | InsertItem(`Int32` index, `ValueEditor` item) | Inserts an element into the <see cref="T:System.Collections.ObjectModel.Collection`1"></see> at the specified index. | 
| `void` | RemoveItem(`Int32` index) | Removes the element at the specified index of the <see cref="T:System.Collections.ObjectModel.Collection`1"></see>. |
