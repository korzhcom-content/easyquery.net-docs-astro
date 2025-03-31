---
title: ConditionTag enum
slug: api-reference-5x/korzh-easyquery-namespace/conditiontag-enum
---

Represents a type of condition.  Current we have 2 possible types: a simple condition or a a group of conditions
```csharp
public enum Korzh.EasyQuery.ConditionTag
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | Unknown | An unknown type of condition (just in case) | 
| `1` | Simple | A simple condition or a predicate (e.g. SomeField &gt; SomeValue) | 
| `51` | Group | A group of conditions - several predicates connected by AND or OR |