---
title: QueryPanel.QueryPanelViewOptions class
slug: easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-querypanelviewoptions-class
---


Represents set of options which allows to control [Korzh.EasyQuery.WinForms.QueryPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) object appearance
```csharp
public class Korzh.EasyQuery.WinForms.QueryPanel.QueryPanelViewOptions
    : XPanel.XViewOptions

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryPanelViewOptions([QueryPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) parent) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.QueryPanel.QueryPanelViewOptions](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AdditionRowColor | `Color` | Gets or sets the color of the addition row. | 
| AllowLinkTypes | [CondLinkType](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/condlinktype-enum) | Gets or sets the link types which are allowed to use. | 
| AttrColor | `Color` | Gets or sets the color of the attribute elements in condition rows. | 
| AttrElementFormat | `string` | Gets or sets the format of attribute elements. | 
| DefaultListControlType | `string` | Gets or sets the type of control used to show the lists of available values in conditions. | 
| EditMode | [QueryPanelEditMode](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypaneleditmode-enum) | Gets or sets the value of panel's edit mode. | 
| EmptyEditText | `string` | Gets or sets the text for empty edit element (e.g. "[enter value]") | 
| EmptyListText | `string` | Gets or sets the text for empty list element (e.g. "[select value]") | 
| ExprColor | `Color` | Gets or sets the color of the expression elements in condition rows. | 
| HideBracketMenuItem | `bool` | Gets or sets a value indicating whether we should hide menu item which allows to add a group of conditions. | 
| NumericFormat | `string` | Gets or sets the format of numeric values. | 
| OperatorColor | `Color` | Gets or sets the color of the operator elements in condition rows. | 
| ParentPanel | [QueryPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) | Gets the parent panel. | 
| ShowRootRow | `bool` | Gets or sets a value indicating whether [Korzh.EasyQuery.WinForms.QueryPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) should show the root row or not. | 
| ShowRowNum | `bool` | Gets or sets a value indicating whether [Korzh.EasyQuery.WinForms.QueryPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/querypanel-class) object should show the number for each row. | 
| SortEntities | [XSortOrder](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xsortorder-enum) | Gets or sets the sort direction for the list of entities. | 
| SortValues | `bool` | Gets or sets the value indicating whether the lists of available values in condition must be sorted or not. |