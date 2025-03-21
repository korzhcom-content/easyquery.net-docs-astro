---
title: ConstValueList class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-namespace/constvaluelist-class
---


Represents list of availalbe values.  Each item contain the value itself and some caption representing this value.
```csharp
public class Korzh.EasyQuery.ConstValueList
    : Collection<ConstValueItem>, IList<ConstValueItem>, ICollection<ConstValueItem>, IEnumerable<ConstValueItem>, IEnumerable, IList, ICollection, IReadOnlyList<ConstValueItem>, IReadOnlyCollection<ConstValueItem>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | Add(`String` id, `String` text) | Adds new item with the specified value and caption into the list. |