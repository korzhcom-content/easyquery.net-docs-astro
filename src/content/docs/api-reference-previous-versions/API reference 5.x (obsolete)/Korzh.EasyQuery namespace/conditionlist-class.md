---
title: ConditionList class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/conditionlist-class
---


Represents a list of conditions.
```csharp
public class Korzh.EasyQuery.ConditionList
    : Collection<Condition>, IList<Condition>, ICollection<Condition>, IEnumerable<Condition>, IEnumerable, IList, ICollection, IReadOnlyList<Condition>, IReadOnlyCollection<Condition>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Condition` | FindByAttr(`EntityAttr` attr) | Finds the condition the by entity attribute set in the left part of this condition. |