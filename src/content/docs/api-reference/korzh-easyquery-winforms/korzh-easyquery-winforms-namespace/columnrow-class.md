---
title: ColumnRow class
slug: api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrow-class
---
The base class defines the rows for the [Korzh.EasyQuery.WinForms.ColumnsPanel](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) panels.
```csharp
public class Korzh.EasyQuery.WinForms.ColumnRow
    : XRow

```
Package: `Korzh.EasyQuery.WinForms` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ColumnRow([ColumnsPanel](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) aPanel, [QueryColumn](api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, `bool` useCheckBox) | `void` | Initializes a new instance of the [Korzh.EasyQuery.WinForms.ColumnRow](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrow-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| button | `ColumnRow.ColumnButton` | An instance of the [Korzh.EasyQuery.WinForms.ColumnRow.ColumnButton](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrow-class) class. | 
| column | [QueryColumn](api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Reference to the <see cref="!:Korzh.EasyQuery.Column" /> that corresponds to the row. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Column | [QueryColumn](api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | The <see cref="!:Korzh.EasyQuery.Column" /> that corresponds to the row. | 
| TypeName | `int` | Gets the name of the column row dataType. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddUpdateCommonElements() | `void` | Adds the common (independent of row dataType) row elements. | 
| AttachEvents() | `void` | Removes unused event handlers. | 
| CoreDetach() | `void` | Zeros some references to let row be destroyed. | 
| DetachEvents() | `void` | Removes unused event handlers. | 
| DoColumnChanged(`object` sender, `EventArgs` e) | `void` | Called when [Korzh.EasyQuery.WinForms.ColumnRow.Column](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrow-class) has been changed. | 
| FillButtonMenu() | `void` | Fills the button menu. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| STypeName | `int` | Gets the name of the column row class dataType. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Create([ColumnsPanel](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnspanel-class) panel, `int` exprType, [QueryColumn](api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, `bool` useCheckBox) | [ColumnRow](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/columnrow-class) | Creates the column row instance of specified dataType. | 
| RegisterType(`int` type, [IColumnRowCreator](api-reference/korzh-easyquery-winforms/korzh-easyquery-winforms-namespace/icolumnrowcreator-interface) creator) | `bool` | Registers new type of column row. |