---
title: EntitiesPanel class
slug: api-reference/Korzh.EasyQuery.WinForms/Korzh.EasyQuery.WinForms namespace/entitiespanel-class
---


A panel that contains and displays model's structure of entities and attributes.
```csharp
public class Korzh.EasyQuery.WinForms.EntitiesPanel
    : Panel

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntitiesPanel() | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.EntitiesPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/entitiespanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| FilterBehavior | [FilterOptions](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/filteroptions-enum) | Gets or sets a value indicating how to define does the entity or attribute name pass the filter - if it starts with the filter string or if it contains that string. | 
| ImageAddColumns | `Image` | Gets or sets the image for "Add Columns" button. | 
| ImageAddConditions | `Image` | Gets or sets the image for "Add Conditions" button. | 
| ImageSelectAll | `Image` | Gets or sets the image for "Select All" button. | 
| ImageSelectNone | `Image` | Gets or sets the image for "Select None" button. | 
| Model | [DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets or sets the [Korzh.EasyQuery.DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) object . | 
| Query | [Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets or sets the [Korzh.EasyQuery.Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) object. | 
| ShowAttributes | [ShowAttrOptions](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/showattroptions-enum) | Gets or sets a value indicating which attributes should be shown in the control. | 
| ShowClearSelectionButton | `bool` | Gets or sets a value indicating whether to show "Clear selection" button. | 
| ShowColumnsButton | `bool` | Gets or sets a value indicating whether to show "Add columns" button. | 
| ShowConditionsButton | `bool` | Gets or sets a value indicating whether to show "Add conditions" button. | 
| ShowFilter | `bool` | Gets or sets a value indicating whether to show a filter panel. | 
| ShowSelectAllButton | `bool` | Gets or sets a value indicating whether to show "Select all" button. | 
| Texts | [TextStorage](/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) | Gets an instance of [Korzh.Utils.TextStorage](/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) object object which holds all text resources used in [Korzh.EasyQuery.WinForms.QueryPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) object | 
| TreeBorderStyle | `BorderStyle` | Gets or sets a value indicating which attributes should be shown in the control. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| NodeAdding | `NodeAddingEventHandler` | Occurs when the new attribute node is to be added to the tree. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddSelectedAttributesToColumns() | `void` | Adds the selected attributes to the Columns' list of associated Query. | 
| AddSelectedAttributesToConditions() | `void` | Adds the selected attributes to the root predicate of associated Query. | 
| CheckDataModel() | `void` | Checks the [Korzh.EasyQuery.DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) object. Generates an exception if [Korzh.EasyQuery.WinForms.EntitiesPanel.Model](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/entitiespanel-class) property has null value. | 
| CheckQuery() | `void` | Checks the query [Korzh.EasyQuery.Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class). Generates an exception if Query property has null value. | 
| ClearFilter() | `void` | Clears current filter (if any). | 
| ClearSelection() | `void` | Deselect all items in the Entities tree. | 
| CoreClearSelection() | `void` | Clear selection (core virtual method). | 
| CoreFillEntityTree(`TreeNodeCollection` items, [Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) parentEntity, `bool` keepSelection) | `void` | Fills the list (tree) of entities and their attributes. | 
| CoreSelectAll() | `void` | Selects all items (core virtual method). | 
| DoTreeAfterCheck(`object` sender, `TreeViewEventArgs` e) | `void` | Performs necessary actions on some node checkbox check/uncheck. | 
| GetSelectedAttrs([MetaEntityAttrList](/api-reference/easydata-core/easydata-namespace/metaentityattrlist-class) attrList) | `int` | Fills the attrList param with the attributes wich nodes are selected in the tree. | 
| OnNodeAdding([NodeAddingEventArgs](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/nodeaddingeventargs-class) e) | `void` | Raises the [Korzh.EasyQuery.WinForms.EntitiesPanel.NodeAdding](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/entitiespanel-class) event. | 
| OnSizeChanged(`EventArgs` e) | `void` | Overrides `System.Windows.Forms.Control.OnSizeChanged(System.EventArgs)`. | 
| UpdateModelInfo() | `void` | Updates all information based on data model information (such as list of entities). |