---
title: DbItemsDlg.Params class
slug: >-
  api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/dbitemsdlg-params-class
sidebar:
  order: 100
---

Represents different parameters and returned values of [Korzh.EasyQuery.WinForms.ModelEditor.DbItemsDlg](///////////////easyquery/docs/api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/dbitemsdlg-class) dialog
```csharp
public class Korzh.EasyQuery.WinForms.ModelEditor.DbItemsDlg.Params

```
Package: `Korzh.EasyQuery.WinForms.ModelEditor` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.ModelEditor.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| Params() | `void` |  | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| HideOptions | `bool` | Indicates whether the options should be visible or hidden | 
| MultiSelect | `bool` | If ture - we can select several items at once. | 
| Option1 | `bool` | Gets or set the value of option 1. This field can contain different type of options depending on the type of the dialog  For exampe if the type is ModelTables then Option1 represents "Automatically add entities" selector; | 
| Option2 | `bool` | Gets or set the value of option 2. This field can contain different type of options depending on the type of the dialog | 
| ResultGroup | `object` | Gets the selected group (table or database). | 
| ResultList | `List`&lt;`object`&gt; | Gets the result list of selected items. | 
| ResultObject | `object` | Gets the selected object (in case we need only one selected item). |
