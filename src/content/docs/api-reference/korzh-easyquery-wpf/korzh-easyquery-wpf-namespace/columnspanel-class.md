---
title: ColumnsPanel class
slug: api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/columnspanel-class
---
Represents a set of columns used in SELECT clause in SQL query.
```csharp
public class Korzh.EasyQuery.Wpf.ColumnsPanel
    : XPanel

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ColumnsPanel() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Wpf.ColumnsPanel](api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/columnspanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AttributeElementFormat | `string` | Gets or sets the attribute element format. | 
| EditMode | [ColumnsPanel.EditModeKind](api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/columnspanel-editmodekind-enum) | Gets or sets the edit mode. | 
| IsAddRowVisible | `bool` | Gets or sets a value indicating whether "Click here to add ..." row is visible. | 
| Query | [Query](api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets or sets the query. | 
| SortEntities | [XSortOrder](api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xsortorder-enum) | Gets or sets the order of entities in context menu. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| OnApplyTemplate() | `void` | When overridden in a derived class, is invoked whenever application code or internal processes call `System.Windows.FrameworkElement.ApplyTemplate`. | 
| UpdateModelInfo() | `void` | Updates all information based on data model information (such as list of entities). | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| QueryProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.ColumnsPanel.Query](api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/columnspanel-class) dependency property |