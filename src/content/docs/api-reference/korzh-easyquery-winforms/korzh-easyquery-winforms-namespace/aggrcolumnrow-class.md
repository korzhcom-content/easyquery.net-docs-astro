---
title: AggrColumnRow class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/aggrcolumnrow-class
---


The class defines the aggregate function rows for the [Korzh.EasyQuery.WinForms.ColumnsPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class).
```csharp
public class Korzh.EasyQuery.WinForms.AggrColumnRow
    : SimpleColumnRow

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| AggrColumnRow([ColumnsPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) aPanel, [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) aColumn, `bool` useCheckBox) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.AggrColumnRow](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/aggrcolumnrow-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| _aggrElement | [ListXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/listxelement-class) | The row element that displays the aggregate function | 
| _ofElement | [TextXElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/textxelement-class) | The row element that displays the static text between aggregate function and entityAttr | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| TypeName | `int` | Gets the name of the column row dataType. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddUpdateCommonElements() | `void` | Adds the common (independent of row dataType) row elements. | 
| ApplyElementFormats([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element) | `void` | Applies formats for one element. | 
| CoreApplyFormats() | `void` | Applies the formats used in parent object. This method is called when row is added into [Korzh.EasyQuery.WinForms.XPanel](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) | 
| ElementContentChanged([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `bool` valueChanged, `bool` textChanged) | `void` | This method is called when the content of some value element has been changed | 
| ElementTextAdjusting([XElement](/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `string` newValue, `string` text) | `string` | This method is called when we need to ajust element's text according to its value | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| STypeName | `int` | Gets the name of the column row class dataType. |