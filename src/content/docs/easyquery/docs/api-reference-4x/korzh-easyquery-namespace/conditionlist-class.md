---
title: ConditionList class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-namespace/conditionlist-class
---


Represents list of conditions.
```csharp
public class Korzh.EasyQuery.ConditionList
    : Collection<Condition>, IList<Condition>, ICollection<Condition>, IEnumerable<Condition>, IEnumerable, IList, ICollection, IReadOnlyList<Condition>, IReadOnlyCollection<Condition>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Condition` | FindByAttr(`EntityAttr` attr) | Finds the condition the by entity attribute set in the left part of this condition. |