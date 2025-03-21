---
title: DbItemsDlg class
slug: easyquery/docs/api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/dbitemsdlg-class
---


Summary description for ListDlg.
```csharp
public class Korzh.EasyQuery.WinForms.ModelEditor.DbItemsDlg
    : Form

```
Package: `Korzh.EasyQuery.WinForms.ModelEditor` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.ModelEditor.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbItemsDlg() | `void` | Initializes a new instance of the `DbItemsListDlg` class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Dispose(`bool` disposing) | `void` | Clean up any resources being used. | 
| RefillOperatorList() | `void` | Fills the main ListBox with operators of selected operator group | 
| ShowModal([DbGate](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) dbGate, [DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, [DbItemType](/api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/dbitemtype-enum) itemType, `string` dlgTitle, [Params](/api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/dbitemsdlg-params-class) dlgParams) | `bool` | Shows the dialog in modal mode. |