---
title: ConditionsStore class
slug: api-reference-4x/korzh-easyquery-namespace/conditionsstore-class
sidebar:
  order: 100
---

Represents storage of conditions linked to some Query object
```csharp
public class Korzh.EasyQuery.ConditionsStore
    : ConditionList, IList<Condition>, ICollection<Condition>, IEnumerable<Condition>, IEnumerable, IList, ICollection, IReadOnlyList<Condition>, IReadOnlyCollection<Condition>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Query` | Query | Gets the Query object. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | BeginUpdate() | Begins the update process. | 
| `void` | CheckMaxID() |  | 
| `void` | ClearItems() | Removes all elements from the `System.Collections.ObjectModel.Collection'1`. | 
| `void` | EndUpdate() | Ends the update process. | 
| `Int32` | GetNewID() | Gets the new ID. | 
| `void` | InsertItem(`Int32` index, `Condition` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| `void` | OnAdded(`Condition` condition, `Int32` index) | Called when [added]. | 
| `void` | OnListChange() | Called when condition list is changed. | 
| `void` | OnRemoved(`Condition` condition) | Called on condition removal. | 
| `void` | RemoveItem(`Int32` index) | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. |
