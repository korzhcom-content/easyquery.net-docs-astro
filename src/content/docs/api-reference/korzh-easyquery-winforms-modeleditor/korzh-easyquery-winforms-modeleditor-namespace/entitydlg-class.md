---
title: EntityDlg class
slug: api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/entitydlg-class
---

Summary description for ListDlg.
```csharp
public class Korzh.EasyQuery.WinForms.ModelEditor.EntityDlg
    : Form

```
Package: `Korzh.EasyQuery.WinForms.ModelEditor` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.ModelEditor.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntityDlg() | `void` | Initializes a new instance of the `DbItemsListDlg` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| SelectedObject | `object` | Gets the selected object (entity or attribute) | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Dispose(`bool` disposing) | `void` | Clean up any resources being used. | 
| ShowModal([DataModel](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `object` selectedObj) | `bool` | Shows the entity dilaog in modal mode. | 
| ShowModal([DataModel](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [EntityDlgType](//easyquery/docs/api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/entitydlgtype-enum) dlgType, `object` selectedObj, `string` dlgTitle, [Params](//easyquery/docs/api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/entitydlg-params-class) dlgParams) | `bool` | Shows the entity dilaog in modal mode. |