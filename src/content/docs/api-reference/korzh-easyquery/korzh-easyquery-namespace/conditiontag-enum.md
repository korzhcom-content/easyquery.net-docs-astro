---
title: ConditionTag enum
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/conditiontag-enum
---


Represents a type of condition.  Current we have 2 possible types: a simple condition or a a group of conditions
```csharp
public enum Korzh.EasyQuery.ConditionTag
    : Enum

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| Unknown | `0` | An unknown type of condition (just in case) | 
| Simple | `1` | A simple condition or a predicate (e.g. SomeField &gt; SomeValue) | 
| Group | `51` | A group of conditions - several predicates connected by AND or OR |