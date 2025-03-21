---
title: DataModel class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-namespace/datamodel-class
---


Represents a data model
```csharp
public class Korzh.EasyQuery.DataModel

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | _maxEntAttrID | Number of virtual attributes | 
| `String` | _modelName | User-defined name of the model | 
| `Int32` | _modelVersion | Version of the model | 
| `AggrFunctionList` | AggrFunctions | List of aggregate functions. | 
| `String` | customInfo | User-defined additional information about the model | 
| `String` | defQueryFilePath | File path for default query | 
| `String` | description | Description of the model | 
| `Dictionary<String, String>` | DMEOptions | A dictionary that contains different Data Model Editor options associated with this model | 
| `Entity` | entityRoot | Main entity of the model | 
| `String` | filePath | Represents model file location, if model is loaded from file | 
| `Int32` | formatVersionXml | Format version of data model definition XML files | 
| `MacroList` | Macros | List of macro values | 
| `Boolean` | useResourcesForOperators | Indicates whether resources will be used for getting caption and format of the [Korzh.EasyQuery.Operator](/api-reference-5x/korzh-easyquery-namespace/operator-class) | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | CustomInfo | Gets or sets the custom information associated with data model. | 
| `ValueEditor` | DefaultPreciseDateEditor | Gets the default "precise date" editor. | 
| `ValueEditor` | DefaultPreciseTimeEditor | Gets the default "precise time" editor. | 
| `ValueEditor` | DefaultTextEditor | Gets the default text editor. | 
| `String` | DefQueryFilePath | Gets or sets the file path for default (blank) query used with this data model. | 
| `String` | Description | Gets or sets the description. | 
| `ValueEditorList` | Editors | List of data model operators. | 
| `EntityGraph` | EntityGraph | Represents the graph of entities we operate with in this model  This property is mostly used in LINQ query bulder | 
| `Entity` | EntityRoot | The root entity of data model entities. | 
| `String` | FilePath | Gets the model file path. It is automatically assigned when you use LoadFromFile method. | 
| `Int32` | FormatVersionJson | Gets or Sets the version of data model JSON format. | 
| `Int32` | FormatVersionXml | Gets the version of data model XML format. | 
| `String` | ID | Gets or sets the ID of the model. | 
| `Boolean` | IsEmpty | Gets a value indicating whether this model is empty (doesn't contain any entity or attribute) or not. | 
| `Int32` | ModelVersion | Gets the model version. | 
| `String` | Name | Gets or sets the user-defined name of the model. | 
| `Operator` | NullOperator | Gets the null operator. | 
| `OperatorStore` | Operators | List of data model operators. | 
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
| `Entity` | AddEntity(`Entity` entity, `String` entityName) | Adds a sub-entity to the current entity. | 
| `EntityAttr` | AddEntityAttr(`Entity` entity, `String` expression, `String` caption = <span style='color: blue'>null</span>, `DataType` dataType = String, `Int32` size = 100) | Adds a new attribute to the model. | 
| `void` | AddOperatorToEntity(`Operator` op, `Entity` ent) | Adds the operator to all suitable attributes in specified entity. | 
| `void` | AddOperatorToSuitedAttributes(`Operator` op) | Adds the operator to all suitable (by data type) attributes. | 
| `Operator` | AddUpdateOperator(`String` id, `String` caption, `String` expr, `String` format, `DataKind` kind = Scalar, `OperatorGroup` group = <span style='color: blue'>null</span>) | Adds or update an operator. | 
| `void` | AssignEntityAttrID(`EntityAttr` attr) | Assigns the default ID for entity attribute. | 
| `void` | Clear() | Clears this instance. | 
| `DataModel` | Clone() | Clones the model object | 
| `Entity` | CreateEntity(`Entity` parentEntity = <span style='color: blue'>null</span>) | Creates the entity. | 
| `EntityAttr` | CreateEntityAttr(`Entity` parentEntity = <span style='color: blue'>null</span>, `Boolean` isVirtual = False) | Creates the entity attribute. Used for creating entity attributes while building the model | 
| `EntityAttr` | CreateGhostAttribute(`String` id) | Generates NULL (ghost) attribute with ID passed in parameter | 
| `Operator` | CreateNullOperator() | Creates the null operator. U | 
| `Operator` | CreateOperator() | Creates the operator. Used for creating objects while building the model | 
| `Operator` | CreateOperator(`String` id, `String` caption, `String` expr, `String` format) | Creates the operator. Used for creating objects while building the model | 
| `Query` | CreateQuery(`Query` parentQuery = <span style='color: blue'>null</span>) | Creates a Query object associated with this model | 
| `Entity` | CreateRootEntity() | Creates the root entity.  This method can be overriden in descendant classes to retrun the object of appropriate class (e.g. DbEntity). | 
| `void` | DeleteOperator(`Operator` op) | Deletes the operator from the model. | 
| `void` | DeleteOperatorFromEntity(`Entity` ent, `Operator` op) | Deletes the operator from any attribute of specified entity (and all its sub-entities). | 
| `void` | EnsureEditorExistance(`ValueEditor` editor) | Ensures the existance of value editor. | 
| `Entity` | FindEntity(`String` entityName) | Finds an entity by its name. | 
| `EntityAttr` | FindEntityAttr(`String` attrDef) | Find attribute either by its ID, expression or caption. | 
| `String` | FixDefaultValues(`String` value) |  | 
| `EntityAttr` | GetAttributeByID(`String` attrID, `Boolean` useNullAttr) | Gets the attribute by its ID. | 
| `OperatorList` | GetDefaultOperatorsForDataType(`DataType` dataType) | Returns the list of default operators for some data type | 
| `EntityAttr` | GetDefaultUICAttribute() | Returns the first attribute in the Root entity with UseInConditions set to true.  This attribute is shown by default for new condition. | 
| `EntityAttr` | GetDefaultUIRAttribute() | Returns the first attribute in the Root entity with UseInResult set to true.  This attribute is shown by default for new column. | 
| `EntityAttr` | GetDefaultUIRAttribute(`Boolean` needUseInSorting) | Returns the first attribute in the Root entity with UseInResult set to true.  This attribute is shown by default for new column. | 
| `IMacroValue` | GetMacroValue(`String` macroId) | Gets the value of the macro by its ID. | 
| `Int32` | GetNextEntityAttrID() | Gets the next free number for building virtual entity attribute ID. | 
| `void` | IncreaseModelVersion() | Increases the model version. | 
| `void` | InitModelLoading() | Inits the model loading. | 
| `void` | ListDefaultOperatorsForDataType(`OperatorList` operats, `DataType` dataType) | Fills the list with default operators for some data type | 
| `void` | LoadFromJsonFile(`String` path, `ModelReadWriteOptions` options = All) | Saves the model to a JSON file. | 
| `Task` | LoadFromJsonFileAsync(`String` path, `ModelReadWriteOptions` options = All) | Saves the model to a JSON file (asynchronous way). | 
| `void` | LoadFromJsonStream(`Stream` stream, `ModelReadWriteOptions` options = All) | Loads data model from JSON stream. | 
| `Task` | LoadFromJsonStreamAsync(`Stream` stream, `ModelReadWriteOptions` options = All) | Loads data model from JSON stream (asynchronous way). | 
| `void` | LoadFromJsonString(`String` json, `ModelReadWriteOptions` options = All) | Loads the model from a string in JSON format. | 
| `Task` | LoadFromJsonStringAsync(`String` json, `ModelReadWriteOptions` options = All) | Loads the model from a string in JSON format (asynchronous way). | 
| `void` | LoadFromXmlFile(`String` path, `ModelReadWriteOptions` options = All) | Loads data model from XML file. | 
| `void` | LoadFromXmlReader(`XmlReader` reader, `ModelReadWriteOptions` options = All) | Loads data model from XML reader. | 
| `void` | LoadFromXmlStream(`Stream` stream, `ModelReadWriteOptions` options = All) | Loads data model from XML stream. | 
| `void` | LoadFromXmlString(`String` xml, `ModelReadWriteOptions` options = All) | Loads data model from XML string. | 
| `void` | LoadModelAtrributesFromXmlReader(`XmlReader` reader) | Loads data model's attributes from the main XML node (DataModel) | 
| `void` | LoadNode(`XmlReader` reader, `ModelReadWriteOptions` rwOptions) | Loads the root node of the model. Can be overriden for loading additional root nodes in [Korzh.EasyQuery.DataModel](/api-reference-5x/korzh-easyquery-namespace/datamodel-class)'s descendants | 
| `void` | LoadOneModelAtrributeFromXmlReader(`XmlReader` reader) | Processes one data model's attribute from the main XML node (DataModel) | 
| `String` | LoadValueEditorNode(`ValueEditor` editor, `XmlReader` reader) | Loads the value editor definition from XML. | 
| `void` | OnAggrFuncListChanged() | Raises the `AggrFuncListChanged` event. | 
| `Boolean` | OnDocketRequest(`MacroRequestEventArgs` e) | Raises the MacroRequest event. | 
| `void` | OnModelChanged() | Called after the model has been changed. Raises ModelChanged event if defined. | 
| `void` | OnModelLoaded() | Called when the model is loaded (from XML file or string). | 
| `EqExpression` | PostProcessQueryExpr(`QueryExpr` queryExpr) | Post process QueryExpr during the loading (to support the old format of XML query files) | 
| `void` | ReadFromJson(`JsonReader` reader, `ModelReadWriteOptions` options) | Reads the content of the model from the specified JsonReader. | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader, `ModelReadWriteOptions` options) | Reads the content of the model from the specified JsonReader (asynchronous way). | 
| `void` | ReadOneModelPropFromJson(`JsonReader` reader, `String` propName) | Reads one model property from JSON. | 
| `Task` | ReadOneModelPropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one model property from JSON (asynchronous way). | 
| `void` | RefillAggrFunctionList() | Refills the list of aggregate functions. | 
| `void` | RefreshResources() | Re-loads the string values from [Korzh.EasyQuery.DataModel.Texts](/api-reference-5x/korzh-easyquery-namespace/datamodel-class) list. | 
| `void` | SaveAttributes(`XmlWriter` writer, `ModelReadWriteOptions` options) | Saves the attributes of the model. Can be overriden for storing additional attributes | 
| `void` | SaveCustomInfoNode(`XmlWriter` writer) | Saves the custom info node. | 
| `void` | SaveNodes(`XmlWriter` writer, `ModelReadWriteOptions` options) | Saves the root nodes of the model. Can be overriden for storing additional nodes | 
| `void` | SaveToJsonFile(`String` filePath, `ModelReadWriteOptions` options = All) | Saves the data model to a file in JSON format. | 
| `Task` | SaveToJsonFileAsync(`String` filePath, `ModelReadWriteOptions` options = All) | Saves the data model to a file in JSON format (asynchronous way). | 
| `void` | SaveToJsonStream(`Stream` stream, `ModelReadWriteOptions` options = All) | Saves the data model to a stream in JSON format. | 
| `Task` | SaveToJsonStreamAsync(`Stream` stream, `ModelReadWriteOptions` options = All) | Saves the data model to a stream in JSON format (asynchronous way). | 
| `String` | SaveToJsonString(`ModelReadWriteOptions` options = All) | Saves the model to a string in JSON format. | 
| `Task<String>` | SaveToJsonStringAsync(`ModelReadWriteOptions` options = All) | Saves the model to a string in JSON format (asynchronous way). | 
| `Task<String>` | SaveToJsonStringForClientAsync() | Saves the model to a string in JSON format, suitable for the client-side | 
| `void` | SaveToXmlFile(`String` path, `ModelReadWriteOptions` options = All) | Saves data model XML to file. | 
| `void` | SaveToXmlStream(`Stream` stream, `ModelReadWriteOptions` options = All) | Saves data model XML to stream. | 
| `String` | SaveToXmlString(`ModelReadWriteOptions` options = All) | Saves data model XML specification to string object. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves data model specification using XmlWriter. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `ModelReadWriteOptions` options) | Saves data model specification using XmlWriter. | 
| `void` | SetProgress(`Int32` pos) | Set the progress to the specified position. | 
| `void` | SetProgressMinMax(`Int32` min, `Int32` max) | Sets the minimum and maximum of progress indicator. | 
| `void` | SortEntities() | Sorts all entities and their attributes alphabetically. | 
| `void` | SortEntityContent(`Entity` entity) | Sorts the content of one entity alphabetically.  This function is called by [Korzh.EasyQuery.DataModel.SortEntities](/api-reference-5x/korzh-easyquery-namespace/datamodel-class) method | 
| `String` | ToNewMacrosFormat(`String` value) |  | 
| `String` | ToOldMacrosFormat(`String` value) |  | 
| `void` | UpdateOperatorsTexts() | Loads the text for all default operators from resources. | 
| `void` | UpdateOperatorTexts(`Operator` op) | Loads the texts for one operator from resources (Texts storage actually) | 
| `void` | WriteContentToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the main content of the model to JSON. | 
| `Task` | WriteContentToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the main content of the model to JSON (asynchronous way). | 
| `void` | WriteToJson(`JsonWriter` writer, `ModelReadWriteOptions` options = All) | Writes the content of the data model to JSON using JsonWriter. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` options = All) | Writes the content of the data model to JSON using JsonWriter (asynchronous way). | 


### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `OperatorGroup` | AnyOperatorGroup | Gets the special group which contain any operator | 
| `OperatorGroup` | BoolOperatorGroup | Gets the group which contains the date/time operators (before, after, between, etc.) | 
| `OperatorGroup` | CommonOperatorGroup | Gets the group which contains the common operators (equal, not equal, less than, more than, etc) | 
| `Int32` | LastJsonFormatVersion | Read-only constant that represent the latest format version of data model definition JSON files | 
| `Int32` | LastXmlFormatVersion | Read-only constant that represent the latest format version for data model definition XML files | 
| `OperatorGroupList` | OperatorGroups | Gets the list of all predefined operator groups | 
| `OperatorGroup` | OtherOperatorGroup | Gets the group which contains other operators not included in any of the previous group | 
| `OperatorGroup` | StringOperatorGroup | Gets the group which contains the string operators (starts with, contains) | 
| `OperatorGroup` | TimeOperatorGroup | Gets the group which contains the date/time operators (before, after, between, etc.) |