---
title: LinkPropsDlg class
slug: api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/linkpropsdlg-class
---

Represents the dialog which allows to edit table link parameters
```csharp
public class Korzh.EasyQuery.WinForms.ModelEditor.LinkPropsDlg
    : Form

```
Package: `Korzh.EasyQuery.WinForms.ModelEditor` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.ModelEditor.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| LinkPropsDlg() | `void` | Initializes a new instance of the `LinkPropsDlg` class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Dispose(`bool` disposing) | `void` | Clean up any resources being used. | 
| RenderLink() | `void` | Renders all dialog controls by the information from the link object | 
| SaveLink() | `void` | Save the current state of dialog controls into the link object | 
| ShowModal([DbGate](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) dbGate, [DbModel](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, [TableLink](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link, `string` dlgTitle) | `bool` | Shows the dialog in modal mode. |