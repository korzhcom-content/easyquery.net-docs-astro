---
title: ModelPropsDlg class
slug: api-reference/Korzh.EasyQuery.WinForms.ModelEditor/Korzh.EasyQuery.WinForms.ModelEditor namespace/modelpropsdlg-class
---


Summary description for NewModelDlg.
```csharp
public class Korzh.EasyQuery.WinForms.ModelEditor.ModelPropsDlg
    : Form

```
Package: `Korzh.EasyQuery.WinForms.ModelEditor` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.ModelEditor.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ModelPropsDlg() | `void` | Initializes a new instance of the `ModelParamsDlg` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DbGate | [DbGate](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) | Gets or sets the [Korzh.EasyQuery.Db.DbGate](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) object. | 
| SaveCSLocally | `bool` | Get or sets value indicating  how to save connection string | 
| SqlDialect | `string` | Gets the current SQL dialect. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Dispose(`bool` disposing) | `void` | Clean up any resources being used. | 
| ShowModal([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` dlgTitle) | `bool` | Shows the dialog in modal mode. |