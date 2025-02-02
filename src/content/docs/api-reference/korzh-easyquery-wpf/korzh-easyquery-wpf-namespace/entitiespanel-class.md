---
title: EntitiesPanel class
slug: api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitiespanel-class
---


Represents entities and their attributes in an hierarchical structure
```csharp
public class Korzh.EasyQuery.Wpf.EntitiesPanel
    : XPanel

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntitiesPanel() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| CheckedEntities | `ObservableCollection`&lt;[EntityTreeNode](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class)&gt; | Identifies [Korzh.EasyQuery.Wpf.EntitiesPanel.CheckedEntities](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitiespanel-class) dependency property | 
| Query | [Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets or sets the query. | 
| SortEntities | [XSortOrder](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xsortorder-enum) | Gets or sets the order of entities in context menu. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| ItemAdding | `ItemAddingEventHandler` | Occurs when we are about to add some item into the entities tree  This event allows to filter items based on some condition (just set Accept property of event arguments to false) | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| FilterByText(`string` text) | `void` | Filters entity tree by some text | 
| GetExpandedNodes() | `IEnumerable`&lt;[EntityTreeNode](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class)&gt; | Returns all currently expanded nodes | 
| OnApplyTemplate() | `void` | When overridden in a derived class, is invoked whenever application code or internal processes call `System.Windows.FrameworkElement.ApplyTemplate`. | 
| RefreshEntityTree() | `void` | Refreshes the entity tree. | 
| SatisfiesTheFilter([EntityTreeNode](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitytreenode-class) ce) | `bool` | Returns true if the item passed in parameter satisfies the current filter.  This method calls FilterItem event which allows you to filter some items before they are added into the tree | 
| UpdateModelInfo() | `void` | Updates the control by the latest changes in associated model. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| QueryProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.EntitiesPanel.Query](/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/entitiespanel-class) dependency property |