---
title: DataModel class
slug: api-reference-4x/korzh-easyquery-namespace/datamodel-class
---


Represents a data model
```csharp
public class Korzh.EasyQuery.DataModel

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `AggrFunctionList` | AggrFunctions | List of aggregate functions. | 
| `String` | customInfo | User-defined additional information about the model | 
| `String` | defQueryFilePath | File path for default query | 
| `String` | description | Description of the model | 
| `Dictionary<String, String>` | DMEOptions | A dictionary that contains different Data Model Editor options associated with this model | 
| `Entity` | entityRoot | Main entity of the model | 
| `String` | filePath | Represents model file location, if model is loaded from file | 
| `Int32` | formatVersion | Format version of data model definition files | 
| `MacroList` | Macros | List of macro values | 
| `Int32` | maxEntAttrID | Number of virtual attributes | 
| `String` | modelName | User-defined name of the model | 
| `Int32` | modelVersion | Version of the model | 
| `Boolean` | useResourcesForOperators | Indicates whether resources will be used for getting caption and format of the [Korzh.EasyQuery.Operator](/api-reference-4x/korzh-easyquery-namespace/operator-class) | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | CustomInfo | Gets or sets the custom information associated with data model. | 
| `ValueEditor` | DefaultPreciseDateEditor | Gets the default "precise date" editor. | 
| `ValueEditor` | DefaultPreciseTimeEditor | Gets the default "precise time" editor. | 
| `ValueEditor` | DefaultTextEditor | Gets the default text editor. | 
| `String` | DefQueryFilePath | Gets or sets the file path for default (blank) query used with this data model. | 
| `String` | Description | Gets or sets the description. | 
| `ValueEditorsList` | Editors | List of data model operators. | 
| `EntityGraph` | EntityGraph |  | 
| `Entity` | EntityRoot | The root entity of data model entities. | 
| `String` | FilePath | Gets the model file path. It is automatically assigned when you use LoadFromFile method. | 
| `Int32` | FormatVersion | Gets the version of data model format. | 
| `String` | ID | Gets or sets the ID of the model. | 
| `Boolean` | IsEmpty | Gets a value indicating whether this model is empty (doesn't contain any entity or attribute) or not. | 
| `String` | ModelName | Gets or sets the user-defined name of the model. | 
| `Int32` | ModelVersion | Gets the model version. | 
| `EntityAttr` | NullAttribute | Gets the Null or "unrecognized" attribute. | 
| `Operator` | NullOperator | Gets the null operator. | 
| `OperatorList` | Operators | List of data model operators. | 
| `IProgressIndicator` | ProgressIndicator | Gets or sets the progress indicator object.  This property is used to show progress for some time consuming operations performed inside model | 
| `TextStorage` | Texts | Gets an instance of TextStorage object which holds all text resources used in this assembly | 
| `Boolean` | UseResourcesForOperators | Gets or sets a value indicating whether we get the main parameters (caption and format) for default operators from resources. | 


### Events

| Type | Name | Description | 
| --- | --- | --- | 
| `AggrFuncListChangedEventHandler` | AggrFuncListChanged | Occurs when the list of available aggregate functions was changed. | 
| `MacroRequestEventHandler` | MacroRequest | This event is raised when a value for some macro is requested. | 
| `EventHandler` | ModelChanged | Occurs when the model is changed. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddDefaultEditors() | Adds the default value editors. | 
| `void` | AddDefaultOperators() | Adds the default operators into model | 
| `void` | AddOperatorToEntity(`Operator` op, `Entity` ent) | Adds the operator to all suitable attributes in specified entity. | 
| `void` | AddOperatorToSuitedAttributes(`Operator` op) | Adds the operator to all suitable (by data type) attributes. | 
| `Operator` | AddUpdateOperator(`String` id, `String` caption, `String` expr, `String` format, `DataKind` kind = Scalar, `OperatorGroup` group = <span style='color: blue'>null</span>) | Adds or update an operator. | 
| `void` | AssignEntityAttrID(`EntityAttr` attr) | Assigns the default ID for entity attribute. | 
| `void` | Clear() | Clears this instance. | 
| `DataModel` | Clone() |  | 
| `Entity` | CreateEntity() | Creates the entity. | 
| `EntityAttr` | CreateEntityAttr() | Creates the entity attribute. Used for creating entity attributes while building the model | 
| `EntityAttr` | CreateGhostAttribute(`String` id) |  | 
| `EntityAttr` | CreateNullAttribute() | Creates the Null attribute. | 
| `Operator` | CreateNullOperator() | Creates the null operator. U | 
| `Operator` | CreateOperator() | Creates the operator. Used for creating objects while building the model | 
| `Operator` | CreateOperator(`String` id, `String` caption, `String` expr, `String` format) | Creates the operator. Used for creating objects while building the model | 
| `Entity` | CreateRootEntity() | Creates the root entity.  This method can be overriden in descendant classes to retrun the object of appropriate class (e.g. DbEntity). | 
| `void` | DeleteOperator(`Operator` op) | Deletes the operator from the model. | 
| `void` | DeleteOperatorFromEntity(`Entity` ent, `Operator` op) | Deletes the operator from any attribute of specified entity (and all its sub-entities). | 
| `void` | EnsureEditorExistance(`ValueEditor` editor) | Ensures the existance of value editor. | 
| `Entity` | FindEntity(`String` entityName) | Finds an entity by its name. | 
| `EntityAttr` | FindEntityAttr(`String` attrDef) | Find attribute either by its ID, expression or caption. | 
| `EntityAttr` | GetAttributeByID(`String` attrID, `Boolean` useNullAttr) | Gets the attribute by its ID. | 
| `OperatorList` | GetDefaultOperatorsForDataType(`DataType` dataType) | Returns the list of default operators for some data type | 
| `EntityAttr` | GetDefaultUICAttribute() | Returns the first attribute in the Root entity with UseInConditions set to true.  This attribute is shown by default for new condition. | 
| `EntityAttr` | GetDefaultUIRAttribute() | Returns the first attribute in the Root entity with UseInResult set to true.  This attribute is shown by default for new column. | 
| `EntityAttr` | GetDefaultUIRAttribute(`Boolean` needUseInSorting) | Returns the first attribute in the Root entity with UseInResult set to true.  This attribute is shown by default for new column. | 
| `IMacroValue` | GetMacroValue(`String` macroId) | Gets the value of macro by its ID. | 
| `Int32` | GetNextEntityAttrID() | Gets the next free number for building virtual entity attribute ID. | 
| `void` | IncreaseModelVersion() | Increases the model version. | 
| `void` | InitModelLoading() | Inits the model loading. | 
| `void` | ListDefaultOperatorsForDataType(`OperatorList` operats, `DataType` dataType) | Fills the list with default operators for some data type | 
| `void` | LoadFromFile(`String` path) | Loads data model from file. | 
| `void` | LoadFromFile(`String` path, `RWOptions` rwOptions) | Loads data model from file. | 
| `void` | LoadFromStream(`Stream` stream) | Loads data model from stream. | 
| `void` | LoadFromStream(`Stream` stream, `RWOptions` rwOptions) | Loads data model from stream. | 
| `void` | LoadFromString(`String` xml, `RWOptions` rwOptions) | Loads data model from string. | 
| `void` | LoadFromString(`String` xml) | Loads data model from string. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads data model from XML reader. | 
| `void` | LoadFromXmlReader(`XmlReader` reader, `RWOptions` rwOptions) | Loads data model from XML reader. | 
| `void` | LoadModelAtrributesFromXmlReader(`XmlReader` reader) | Loads data model's attributes from the main XML node (DataModel) | 
| `void` | LoadNode(`XmlReader` reader, `RWOptions` rwOptions) | Loads the root node of the model. Can be overriden for loading additional root nodes in [Korzh.EasyQuery.DataModel](/api-reference-4x/korzh-easyquery-namespace/datamodel-class)'s descendants | 
| `void` | LoadOneModelAtrributeFromXmlReader(`XmlReader` reader) | Processes one data model's attribute from the main XML node (DataModel) | 
| `String` | LoadValueEditorNode(`ValueEditor` editor, `XmlReader` reader) | Loads the value editor definition from XML. | 
| `void` | OnAggrFuncListChanged() | Raises the `AggrFuncListChanged` event. | 
| `Boolean` | OnMacroRequest(`MacroRequestEventArgs` e) | Raises the MacroRequest event. | 
| `void` | OnModelChanged() | Called after the model has been changed. Raises ModelChanged event if defined. | 
| `void` | OnModelLoaded() | Called when the model is loaded (from XML file or string). | 
| `void` | RefillAggrFunctionList() | Refills the list of aggregate functions. | 
| `void` | RefreshResources() | Re-loads the string values from [Korzh.EasyQuery.DataModel.Texts](/api-reference-4x/korzh-easyquery-namespace/datamodel-class) list. | 
| `void` | SaveAttributes(`XmlWriter` writer, `RWOptions` options) | Saves the attributes of the model. Can be overriden for storing additional attributes | 
| `void` | SaveCustomInfoNode(`XmlWriter` writer) | Saves the custom info node. | 
| `void` | SaveNodes(`XmlWriter` writer, `RWOptions` options) | Saves the root nodes of the model. Can be overriden for storing additional nodes | 
| `void` | SaveToFile(`String` path) | Saves data model to file. | 
| `void` | SaveToFile(`String` path, `RWOptions` options) | Saves data model to file. | 
| `JsonDict` | SaveToJsonDict() | Saves the model into Dictionary object. Useful for JSON serialization. | 
| `void` | SaveToStream(`Stream` stream) | Saves data model XML to stream. | 
| `void` | SaveToStream(`Stream` stream, `RWOptions` options) | Saves data model XML to stream. | 
| `String` | SaveToString() | Saves data model specification to string object. | 
| `String` | SaveToString(`RWOptions` options) | Saves data model specification to string object. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves data model specification using XmlWriter. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `RWOptions` options) | Saves data model specification using XmlWriter. | 
| `void` | SetProgress(`Int32` pos) | Set the progress to the specified position. | 
| `void` | SetProgressMinMax(`Int32` min, `Int32` max) | Sets the minimum and maximum of progress indicator. | 
| `void` | SortEntities() | Sorts all entities and their attributes alphabetically. | 
| `void` | SortEntityContent(`Entity` entity) | Sorts the content of one entity alphabetically.  This function is called by [Korzh.EasyQuery.DataModel.SortEntities](/api-reference-4x/korzh-easyquery-namespace/datamodel-class) method | 
| `void` | UpdateOperatorsTexts() | Loads the text for all default operators from resources. | 
| `void` | UpdateOperatorTexts(`Operator` op) | Loads the texts for one operator from resources (Texts storage actually) | 


### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `OperatorGroup` | AnyOperatorGroup | Gets the special group which contain any operator | 
| `OperatorGroup` | BoolOperatorGroup | Gets the group which contains the date/time operators (before, after, between, etc.) | 
| `OperatorGroup` | CommonOperatorGroup | Gets the group which contains the common operators (equal, not equal, less than, more than, etc) | 
| `Int32` | LastFormatVersion | Read-only constant that represent the latest format version of data model definition files | 
| `OperatorGroupList` | OperatorGroups | Gets the list of all predefined operator groups | 
| `OperatorGroup` | OtherOperatorGroup | Gets the group which contains other operators not included in any of the previous group | 
| `OperatorGroup` | StringOperatorGroup | Gets the group which contains the string operators (starts with, contains) | 
| `OperatorGroup` | TimeOperatorGroup | Gets the group which contains the date/time operators (before, after, between, etc.) |