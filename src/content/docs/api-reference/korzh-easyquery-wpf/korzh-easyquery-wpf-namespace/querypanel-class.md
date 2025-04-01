---
title: QueryPanel class
slug: >-
  api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/querypanel-class
sidebar:
  order: 100
---

Used for building query conditions (WHERE section in SQL statement)
```csharp
public class Korzh.EasyQuery.Wpf.QueryPanel
    : XPanel

```
Package: `Korzh.EasyQuery.Wpf` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WPF.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryPanel() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Wpf.QueryPanel](///////////////easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/querypanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AttributeElementFormat | `string` | Gets or sets the attribute element format. | 
| EditMode | [EditModeKind](///////////////easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/editmodekind-enum) | Gets or sets the edit mode. | 
| IsAddRowVisible | `bool` | Gets or sets a value indicating whether this instance of eddition row visible. | 
| Query | [Query](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets or sets the query. | 
| SortEntities | [XSortOrder](///////////////easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/xsortorder-enum) | Gets or sets the order of entities in context menu. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddSimpleCondition([Condition](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) parentGroup, `string` attrId) | [Condition](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) |  | 
| AddSimpleCondition([Condition](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) parentGroup, [EntityAttr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | [Condition](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) |  | 
| OnApplyTemplate() | `void` | When overridden in a derived class, is invoked whenever application code or internal processes call `System.Windows.FrameworkElement.ApplyTemplate`. | 
| RefreshList(`string` listName) | `void` | Refreshes the list with specified name in all elements of all rows | 
| UpdateModelInfo() | `void` | Updates all information based on data model information (such as list of entities). | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| QueryProperty | `DependencyProperty` | Identifies the [Korzh.EasyQuery.Wpf.QueryPanel.Query](///////////////easyquery/docs/api-reference/korzh-easyquery-wpf/korzh-easyquery-wpf-namespace/querypanel-class) dependency property | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Texts | [TextStorage](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) | Gets the texts used for localization. |
