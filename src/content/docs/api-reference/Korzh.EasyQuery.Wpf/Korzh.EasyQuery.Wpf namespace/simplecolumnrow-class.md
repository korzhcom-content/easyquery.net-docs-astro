---
title: SimpleColumnRow class
slug: api-reference/Korzh.EasyQuery.Wpf/Korzh.EasyQuery.Wpf namespace/simplecolumnrow-class
---


Represents a column used in SELECT clause of SQL query
```csharp
public class Korzh.EasyQuery.Wpf.SimpleColumnRow
    : XRow

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SimpleColumnRow([QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, [ColumnsPanel](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/columnspanel-class) panel) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Wpf.SimpleColumnRow](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/simplecolumnrow-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Column | [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Gets or sets the column. | 
| EditMode | [ColumnsPanel.EditModeKind](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/columnspanel-editmodekind-enum) | Gets or sets the edit mode. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| ColumnProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.SimpleColumnRow.Column](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/simplecolumnrow-class) dependency property |