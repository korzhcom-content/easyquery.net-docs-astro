---
title: Condition.LinkType enum
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-linktype-enum
sidebar:
  order: 100
---

Represents type of linking of conditions in group
```csharp
public enum Korzh.EasyQuery.Condition.LinkType
    : Enum

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| None | `0` | None of the conditions must be truth (all must be false).  In SQL it will look like: <code>NOT (Condition1 OR Condition2 OR ...)</code> | 
| Any | `1` | At least one condition must be truth. In SQL they are connected by OR operator. | 
| NotAll | `2` | Not all conditions must be truth (at least one must false).  In SQL it will look like: <code>NOT(Condition1 AND Condition2 AND ...) </code> | 
| All | `3` | All conditions must be truth, in result SQL they are connected by AND operator | 
| Auto | `99` | This the default value for AddConditionGroup method.  It automatically sets the type of linking depending on the type of the parent  ("Any" if the parent has "All" and vice versa) |
