---
title: ColumnRowList class
slug: >-
  api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrowlist-class
sidebar:
  order: 100
---

Represents a list of columns.
```csharp
public class Korzh.EasyQuery.WinForms.ColumnRowList
    : XRowList

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ColumnRowList([ColumnsPanel](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) columnsPanel) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ColumnRowList](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrowlist-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Item | [ColumnRow](/easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrow-class) | Gets or sets the element at the specified index.  In C#, this property is the indexer for the `ConditionRowList` class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| IndexByColumn([QueryColumn](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) col) | `int` | Returns row index by [Korzh.EasyQuery.QueryColumn](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) object associated with row. |
