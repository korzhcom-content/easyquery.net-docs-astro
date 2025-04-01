---
title: EditModeKind enum
slug: >-
  api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/editmodekind-enum
sidebar:
  order: 100
---

Represents different types of modifications in [Korzh.EasyQuery.Wpf.QueryPanel](///////////////easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/querypanel-class) object available for users.
```csharp
public enum Korzh.EasyQuery.Wpf.EditModeKind
    : Enum

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| All | `0` | All possible modifications (add, delete and change conditions) | 
| FixedConditions | `1` | Condition list is fixed - so user can change existing conditions but can not add or delete them | 
| FixedExpressions | `2` | User can not add\remove conditions and change the expression in the left part of condition, | 
| ValuesOnly | `3` | User can modify only the values (right part of condition). All other parts of query panel are fixed. | 
| None | `4` | None of modifications are possible. [Korzh.EasyQuery.Wpf.QueryPanel](///////////////easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/querypanel-class) object  is "read-only" in this mode. |
