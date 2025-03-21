---
title: ModelEditorForm class
slug: easyquery/docs/api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/modeleditorform-class
---


Represents the main form of Data Model Editor
```csharp
public class Korzh.EasyQuery.WinForms.ModelEditor.ModelEditorForm
    : Form

```
Package: `Korzh.EasyQuery.WinForms.ModelEditor` (targets: `net461`, `net5.0-windows7.0`, `netcoreapp3.1`)

Assembly: `Korzh.EasyQuery.WinForms.ModelEditor.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ModelEditorForm() | `void` | Initializes a new instance of the `ModelEditorForm` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DatabaseGate | [DbGate](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) | Gets the database gate. | 
| IsRendering | `bool` | Gets a value indicating whether the dialog is in rendering mode. | 
| MainAssembly | `Assembly` |  | 
| MainPanel | `Control` | Gets the main panel of ModelEditor form. | 
| Model | [DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) | Gets the model. | 
| ModelChanged | `bool` | Gets or sets a value indicating whether the model have been changed. | 
| ModelDbParameters | `Dictionary`&lt;`string`, [DbParameters](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbparameters-class)&gt; |  | 
| RunNewModelWizardOnStart | `bool` | Gets or sets a value indicating whether we should run new model wizard on start. | 
| WorkFolder | `string` | Gets or sets the working folder. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddDataAttr() | `void` | Adds new data attribute into entity tree | 
| AddEntity(`TreeNode` parentNode) | `void` | Adds new entity object into entity tree | 
| AddEntityNode([Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) entity, `TreeNodeCollection` parentNodes) | `void` | Adds the node associated with some [Korzh.EasyQuery.DataModel.Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) object. | 
| AddLinkByLinkInfo([DbLinkInfo](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dblinkinfo-class) linkInfo) | `void` | Adds the link by [Korzh.EasyQuery.Db.DbLinkInfo](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dblinkinfo-class) object. | 
| AddVirtualAttr() | `void` | Adds new virtual attribute into entity tree | 
| ApplyLoginRequestHandler(`LoginRequestEventHandler` handler) | `void` |  | 
| AutoAddLinks() | `void` | Automatically adds the links by information from database. | 
| AutoGenerateLinks() | `void` | Automatically generates the links. | 
| ChangeValueEditorType([ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) currentEditor, [ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) newEditor) | `bool` | Changes the type of the value editor. | 
| CheckConnectionString() | `bool` |  | 
| CheckIfModelSaved() | `bool` | Checks whether all changes in model were saved or not. If not - brings up a message box to confirm saving. | 
| CoreRenderModel() | `void` | Renders the model (protected virtual method) | 
| DeleteSelectedEntityObj() | `void` | Deletes the selected entity object | 
| Dispose(`bool` disposing) | `void` | Clean up any resources being used. | 
| EndRendering() | `void` | Closes the rendering operation. Each StartRendering call must be closed by EndRendering. | 
| GetSelectedAttr() | [DbEntityAttr](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattr-class) | Gets the selected attribute. | 
| LaunchAddTablesDlg() | `bool` | Launches Add Tables dialog | 
| LoadConfig([ConfigSettings](/api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/configsettings-class) config) | `void` |  | 
| LoadModelFromFile(`string` modelFilePath) | `void` | Loads model from file. | 
| LoadModelFromString(`string` modelXml) | `void` | Loads model from XML string. | 
| ModelPostLoading() | `void` | Performs some tuning after model loading. | 
| ModelPreLoading() | `bool` | Performs some tuning after model loading. | 
| MountDbGate() | `void` | Mounts the db gate. | 
| NewModelWizard() | `void` | Starts the process of new model creation. | 
| RenderEntity([Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) entity) | `void` | Renders dialog controls associated with some [Korzh.EasyQuery.DataModel.Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) object | 
| RenderEntityAttr([DbEntityAttr](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattr-class) attr) | `void` | Renders dialog controls associated with some `Korzh.EasyQuery.DbEntityAttr` object | 
| RenderEntityNode(`TreeNode` node) | `void` | Renders the tree node associated with some [Korzh.EasyQuery.DataModel.Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) object | 
| RenderModel() | `void` | Renders the model. | 
| RenderOperand([Operand](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) opnd) | `void` | Renders the operand. | 
| RenderOperands([Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op) | `void` | Renders the operands for specified operator | 
| RenderOperatorProps([Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op) | `void` | Renders dialog controls associated with the properties of some operator | 
| RenderSelectedOperator() | `void` | Renders dialog controls associated with the properties of currently selected operator | 
| RenderSelectedTable() | `void` | Renders dialog controls associated with the properties of currently selected table | 
| RenderTableProps([Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table) | `void` | Renders dialog controls associated with the properties of some table | 
| SaveConfig([ConfigSettings](/api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/configsettings-class) config) | `void` |  | 
| SaveCurrentEntityObj() | `void` | Saves the state of entity or entity attribute (depeding on what selected currently) | 
| SaveCurrentOperand() | `void` | Saves the current operand. | 
| SaveEntity([Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) entity) | `void` | Save the current state of dialog controls into associated [Korzh.EasyQuery.DataModel.Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) object | 
| SaveEntityAttr([DbEntityAttr](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattr-class) attr) | `void` | f  Save the current state of dialog controls into associated `Korzh.EasyQuery.DbEntityAttr` object | 
| SaveModelAs() | `void` | Shows the "Save File" dialog and saves the model to chosen file. | 
| SaveModelChanges() | `void` | Saves all latest model changes made by UI. | 
| SaveModelToFile(`string` modelFilePath, [ModelFormatIndex](/api-reference/korzh-easyquery-winforms-modeleditor/korzh-easyquery-winforms-modeleditor-namespace/modelformatindex-enum) formatIndex) | `void` | Saves the model. | 
| SaveOperatorProps([Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op) | `void` | Save the current state of dialog controls into associated [Korzh.EasyQuery.DataModel.Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) object | 
| SaveTableProps([Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table) | `void` | Save the current state of dialog controls into associated `Korzh.EasyQuery.Table` object | 
| ShowEQBConnection([DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, [DbGate](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) gate) | `bool` | Shows the EQB connection. | 
| ShowValueEditorPropsDlg([ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) valueEditor) | `bool` | Shows the dialog which allow to edit value editor properties. | 
| StartRendering() | `void` | Sets internal "IsRendering" attribute  Call this method to avoid useless operations while the properties of some model object (e.g. an operator) are rendered |