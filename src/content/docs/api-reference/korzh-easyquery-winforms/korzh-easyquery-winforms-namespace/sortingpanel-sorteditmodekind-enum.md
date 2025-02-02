---
title: SortingPanel.SortEditModeKind enum
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/sortingpanel-sorteditmodekind-enum
---


Represents different types of modifications in sort columns panel available for users.
```csharp
public enum Korzh.EasyQuery.WinForms.SortingPanel.SortEditModeKind
    : Enum

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| All | `0` | All possible modifications (add, delete and change columns) | 
| FixedList | `1` | Columns list is fixed - so user can change existing columns but can not add or delete them | 
| SortingOnly | `2` | User can not add\remove columns and change the attribute the column linked to | 
| OrderOnly | `3` | User can modify only the sorting order of columns. All other parts of sort columns panel are fixed. | 
| None | `4` | None of modifications are possible. Sort Columns Panel is "read-only" in this mode. |