---
title: QueryPanelEditMode enum
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypaneleditmode-enum
sidebar:
  order: 100
---

Represents different types of modifications in [Korzh.EasyQuery.WinForms.QueryPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) object available for users.
```csharp
public enum Korzh.EasyQuery.WinForms.QueryPanelEditMode
    : Enum

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| All | `0` | All possible modifications (add, delete and change conditions) | 
| FixedConditions | `1` | Condition list is fixed - so user can change existing conditions but can not add or delete them | 
| FixedExpressions | `2` | User can not add\remove conditions and change the expression in the left part of condition, | 
| ValuesOnly | `3` | User can modify only the values (right part of condition). All other parts of query panel are fixed. | 
| None | `4` | None of modifications are possible. [Korzh.EasyQuery.WinForms.QueryPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) object  is "read-only" in this mode. |
