---
title: ConditionList class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/conditionlist-class
sidebar:
  order: 100
---

Represents a list of conditions.
```csharp
public class Korzh.EasyQuery.ConditionList
    : Collection<Condition>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionList() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| FindByAttr([EntityAttr](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | [Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Finds the condition the by entity attribute set in the left part of this condition. |
