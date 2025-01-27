---
title: AggrColumnRow class
slug: api-reference/Korzh.EasyQuery.Wpf/Korzh.EasyQuery.Wpf namespace/aggrcolumnrow-class
---


Represents an aggregate function used in SELECT clause of SQL query (e.g. SELECT COUNT(Cust.Name))
```csharp
public class Korzh.EasyQuery.Wpf.AggrColumnRow
    : XRow

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| AggrColumnRow([QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, [ColumnsPanel](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/columnspanel-class) panel) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Wpf.AggrColumnRow](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/aggrcolumnrow-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Column | [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Gets or sets the column. | 
| EditMode | [ColumnsPanel.EditModeKind](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/columnspanel-editmodekind-enum) | Gets or sets the edit mode. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| ColumnProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.SimpleColumnRow.Column](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/simplecolumnrow-class) dependency property | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| TypeIsInList([DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) type, `DataType[]` list) | `bool` | Checks whether the type is in list |