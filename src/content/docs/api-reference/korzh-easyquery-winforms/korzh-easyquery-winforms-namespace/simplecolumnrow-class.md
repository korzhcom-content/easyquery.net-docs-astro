---
title: SimpleColumnRow class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/simplecolumnrow-class
---

The class defines the entityAttr rows for the [Korzh.EasyQuery.WinForms.ColumnsPanel](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class).
```csharp
public class Korzh.EasyQuery.WinForms.SimpleColumnRow
    : ColumnRow

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SimpleColumnRow([ColumnsPanel](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) aPanel, [QueryColumn](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) aColumn, `bool` useCheckBox) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.SimpleColumnRow](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/simplecolumnrow-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| DistinctMenuItem | [ValueItem](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/valueitem-class) | An item which represents "Distinct" menu item for column row | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| TypeName | `int` | Gets the name of the column row dataType. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddUpdateCommonElements() | `void` | Adds the common (independent of row dataType) row elements. | 
| ApplyElementFormats([XElement](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element) | `void` | Applies formats for one element. | 
| CoreApplyFormats() | `void` | Applies the formats used in parent object. This method is called when row is added into [Korzh.EasyQuery.WinForms.XPanel](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xpanel-class) | 
| CoreElementBeforeDropDown([XElement](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) sender) | `void` | This method is called at the beginning of [Korzh.EasyQuery.WinForms.XElement.DropDown](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) method execution in some element of the current row. | 
| ElementContentChanged([XElement](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `bool` valueChanged, `bool` textChanged) | `void` | This method is called when the content of some element has been changed | 
| ElementTextAdjusting([XElement](//easyquery/docs/api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/xelement-class) element, `string` newValue, `string` text) | `string` | This method is called when we need to adjust element's text according to its value | 
| GetAttributeCaption([EntityAttr](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `string` | Gets the attribute caption formatted according to panel's Appearance.AttrElementFormat. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| STypeName | `int` | Gets the name of the column row class dataType. |