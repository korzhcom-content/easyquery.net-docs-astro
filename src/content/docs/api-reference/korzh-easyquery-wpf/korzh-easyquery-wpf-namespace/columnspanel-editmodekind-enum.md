---
title: ColumnsPanel.EditModeKind enum
slug: api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/columnspanel-editmodekind-enum
---


Represents different types of modifications in query columns panel available for users.
```csharp
public enum Korzh.EasyQuery.Wpf.ColumnsPanel.EditModeKind
    : Enum

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| All | `0` | All possible modifications (add, delete and change columns) | 
| FixedList | `1` | Columns list is fixed - so user can change existing columns but can not add or delete them | 
| FixedColumns | `2` | User can not add\remove columns and change the attribute the column linked to | 
| FixedColumnsDontMove | `3` | User can not add\remove\move columns and change the attribute the column linked to | 
| SortingOnly | `4` | User can modify only the order and sorting of columns. All other parts of query columns panel are fixed. | 
| OrderOnly | `5` | User can modify only the order of columns. All other parts of query columns panel are fixed. | 
| None | `6` | None of modifications are possible. Query Columns Panel is "read-only" in this mode. |