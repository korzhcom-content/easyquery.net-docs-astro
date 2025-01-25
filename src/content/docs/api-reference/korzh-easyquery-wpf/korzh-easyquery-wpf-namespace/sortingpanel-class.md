---
title: SortingPanel class
slug: api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/sortingpanel-class
---
Represents query columns sorting order (ORDER BY section in SQL statement)
```csharp
public class Korzh.EasyQuery.Wpf.SortingPanel
    : XPanel

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SortingPanel() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Wpf.SortingPanel](api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/sortingpanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AttributeElementFormat | `string` | Gets or sets the attribute element format. | 
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
| QueryProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.QueryPanel.Query](api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/querypanel-class) dependency property |