---
title: MetaData class
slug: api-reference/easydata-core/easydata-namespace/metadata-class
---
```csharp
public class EasyData.MetaData

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| MetaData() | `void` | Initializes a new instance of the [EasyData.MetaData](api-reference/easydata-core/easydata-namespace/metadata-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultRWOptions | [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| CustomInfo | `string` | Gets or sets the custom information associated with data model. | 
| Description | `string` | Gets or sets the description. | 
| Editors | [ValueEditorList](api-reference/easydata-core/easydata-namespace/valueeditorlist-class) | List of data model operators. | 
| EntityRoot | [MetaEntity](api-reference/easydata-core/easydata-namespace/metaentity-class) | The root entity of data model entities. | 
| FilePath | `string` | Gets the model file path. It is automatically assigned when you use LoadFromFile method. | 
| FormatVersionJson | `int` | Gets or Sets the version of data model JSON format. | 
| Id | `string` | Gets or sets the ID of the model. | 
| IsEmpty | `bool` | Gets a value indicating whether this model is empty (doesn't contain any entity or attribute) or not. | 
| ModelVersion | `int` | Gets the model version. | 
| Name | `string` | Gets or sets the user-defined name of the model. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| ModelChanged | `EventHandler` | Occurs when the model is changed. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddEntity([MetaEntity](api-reference/easydata-core/easydata-namespace/metaentity-class) entity, `string` entityName) | [MetaEntity](api-reference/easydata-core/easydata-namespace/metaentity-class) | Adds a sub-entity to the current entity. | 
| AddEntityAttr([MetaEntityAttrDescriptor](api-reference/easydata-core/easydata-namespace/metaentityattrdescriptor-class) desc) | [MetaEntityAttr](api-reference/easydata-core/easydata-namespace/metaentityattr-class) | Adds a new attribute to the model. | 
| AssignEntityAttrID([MetaEntityAttr](api-reference/easydata-core/easydata-namespace/metaentityattr-class) attr) | `void` | Assigns the default ID for entity attribute. | 
| Clear() | `void` | Clears this instance. | 
| Clone() | [MetaData](api-reference/easydata-core/easydata-namespace/metadata-class) | Clones the model object | 
| CreateEntity([MetaEntity](api-reference/easydata-core/easydata-namespace/metaentity-class) parentEntity = <span style='color: blue'>null</span>) | [MetaEntity](api-reference/easydata-core/easydata-namespace/metaentity-class) | Creates the entity. | 
| CreateEntityAttr([MetaEntityAttrDescriptor](api-reference/easydata-core/easydata-namespace/metaentityattrdescriptor-class) desc) | [MetaEntityAttr](api-reference/easydata-core/easydata-namespace/metaentityattr-class) | Creates the entity attribute. Used for creating entity attributes while building the model | 
| CreateEntityAttrCore([MetaEntity](api-reference/easydata-core/easydata-namespace/metaentity-class) parent, [EntityAttrKind](api-reference/easydata-core/easydata-namespace/entityattrkind-enum) kind) | [MetaEntityAttr](api-reference/easydata-core/easydata-namespace/metaentityattr-class) |  | 
| CreateEntityCore([MetaEntity](api-reference/easydata-core/easydata-namespace/metaentity-class) parent) | [MetaEntity](api-reference/easydata-core/easydata-namespace/metaentity-class) |  | 
| CreateRootEntity() | [MetaEntity](api-reference/easydata-core/easydata-namespace/metaentity-class) | Creates the root entity.  This method can be overriden in descendant classes to retrun the object of appropriate class (e.g. DbEntity). | 
| CreateRootEntityCore() | [MetaEntity](api-reference/easydata-core/easydata-namespace/metaentity-class) |  | 
| FindEntity(`string` entityName) | [MetaEntity](api-reference/easydata-core/easydata-namespace/metaentity-class) | Finds an entity by its name. | 
| FindEntityAttr(`string` attrDef) | [MetaEntityAttr](api-reference/easydata-core/easydata-namespace/metaentityattr-class) | Find attribute either by its ID, expression or caption. | 
| GetAttributeById(`string` attrId, `bool` useNullAttr) | [MetaEntityAttr](api-reference/easydata-core/easydata-namespace/metaentityattr-class) | Gets the attribute by its ID. | 
| GetNextEntityAttrId() | `int` | Gets the next free number for building virtual entity attribute ID. | 
| IncreaseModelVersion() | `void` | Increases the model version. | 
| InitModelLoading() | `void` | Inits the model loading. | 
| LoadFromJsonFile(`string` filePath) | `void` | Saves the model to a JSON file. | 
| LoadFromJsonFile(`string` filePath, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Saves the model to a JSON file. | 
| LoadFromJsonFileAsync(`string` filePath) | `Task` | Loads the metadata from a JSON file as an asynchronous operation. | 
| LoadFromJsonFileAsync(`string` filePath, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` | Loads the metadata from a JSON file as an asynchronous operation. | 
| LoadFromJsonStream(`Stream` stream) | `void` | Loads data model from JSON stream. | 
| LoadFromJsonStream(`Stream` stream, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Loads data model from JSON stream. | 
| LoadFromJsonStreamAsync(`Stream` stream) | `Task` | Loads data model from JSON stream (asynchronous way). | 
| LoadFromJsonStreamAsync(`Stream` stream, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` | Loads data model from JSON stream (asynchronous way). | 
| LoadFromJsonString(`string` json) | `void` | Loads the model from a string in JSON format. | 
| LoadFromJsonString(`string` json, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Loads the model from a string in JSON format. | 
| LoadFromJsonStringAsync(`string` json) | `Task` | Loads the model from a string in JSON format (asynchronous way). | 
| LoadFromJsonStringAsync(`string` json, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` | Loads the model from a string in JSON format (asynchronous way). | 
| OnModelChanged() | `void` | Called after the model has been changed. Raises ModelChanged event if defined. | 
| OnModelLoaded() | `void` | Called when the model is loaded (from XML file or string). | 
| ReadFromJson(`JsonReader` reader, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Reads the content of the model from the specified JsonReader. | 
| ReadFromJsonAsync(`JsonReader` reader, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` | Reads the content of the model from the specified JsonReader (asynchronous way). | 
| ReadOneModelPropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one model property from JSON (asynchronous way). | 
| SaveToJsonFile(`string` filePath) | `void` | Saves the data model to a file in JSON format. | 
| SaveToJsonFile(`string` filePath, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Saves the data model to a file in JSON format. | 
| SaveToJsonFileAsync(`string` filePath) | `Task` | Saves the data model to a file in JSON format (asynchronous way). | 
| SaveToJsonFileAsync(`string` filePath, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` | Saves the data model to a file in JSON format (asynchronous way). | 
| SaveToJsonStream(`Stream` stream) | `void` | Saves the data model to a stream in JSON format. | 
| SaveToJsonStream(`Stream` stream, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Saves the data model to a stream in JSON format. | 
| SaveToJsonStreamAsync(`Stream` stream) | `Task` | Saves the data model to a stream in JSON format (asynchronous way). | 
| SaveToJsonStreamAsync(`Stream` stream, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` | Saves the data model to a stream in JSON format (asynchronous way). | 
| SaveToJsonString() | `string` | Saves the model to a string in JSON format. | 
| SaveToJsonString([BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `string` | Saves the model to a string in JSON format. | 
| SaveToJsonStringAsync() | `Task`&lt;`string`&gt; | Saves the model to a string in JSON format (asynchronous way). | 
| SaveToJsonStringAsync([BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task`&lt;`string`&gt; | Saves the model to a string in JSON format (asynchronous way). | 
| SortEntities() | `void` | Sorts all entities and their attributes alphabetically. | 
| SortEntityContent([MetaEntity](api-reference/easydata-core/easydata-namespace/metaentity-class) entity) | `void` | Sorts the content of one entity alphabetically.  This function is called by [EasyData.MetaData.SortEntities](api-reference/easydata-core/easydata-namespace/metadata-class) method | 
| WriteContentToJsonAsync(`JsonWriter` writer, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes the main content of the model to JSON (asynchronous way). | 
| WriteModelPropsToJsonAsync(`JsonWriter` writer, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` | Writes properties of the model to JSON (asynchronous way). | 
| WriteToJson(`JsonWriter` writer) | `void` | Writes the content of the data model to JSON using JsonWriter. | 
| WriteToJson(`JsonWriter` writer, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Writes the content of the data model to JSON using JsonWriter. | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Writes the content of the data model to JSON using JsonWriter (asynchronous way). | 
| WriteToJsonAsync(`JsonWriter` writer, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` | Writes the content of the data model to JSON using JsonWriter (asynchronous way). | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| LastJsonFormatVersion | `int` | Read-only constant that represent the latest format version of data model definition JSON files |