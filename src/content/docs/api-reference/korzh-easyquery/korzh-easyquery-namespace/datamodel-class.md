---
title: DataModel class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class
---
Represents a data model
```csharp
public class Korzh.EasyQuery.DataModel
    : MetaData

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DataModel() | `void` | Initializes a new instance of the [Korzh.EasyQuery.DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| AggrFunctions | [AggrFunctionList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfunctionlist-class) | List of aggregate functions. | 
| DMEOptions | `Dictionary`&lt;`string`, `string`&gt; | A dictionary that contains different Data Model Editor options associated with this model | 
| Macros | [MacroList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/macrolist-class) | List of macro values | 
| XmlSerializer | [DataModelXmlSerializer](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodelxmlserializer-class) |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultPreciseDateEditor | [ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) | Gets the default "precise date" editor. | 
| DefaultPreciseTimeEditor | [ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) | Gets the default "precise time" editor. | 
| DefaultSpecialDatesEditor | [ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) | Gets the default editor that returns the list of the special dates (Today, Yesterday, First day of month, etc). | 
| DefaultSpecialTimesEditor | [ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) | Gets the default editor that returns the list of the special times (Midnight, Noon, etc). | 
| DefaultTextEditor | [ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) | Gets the default text editor. | 
| DefQueryFilePath | `string` | Gets or sets the file path for default (blank) query used with this data model. | 
| EntityGraph | [EntityGraph](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entitygraph-class) | Represents the graph of entities we operate with in this model  This property is mostly used in LINQ query bulder | 
| EntityRoot | [Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) |  | 
| FormatVersionXml | `int` | Gets the version of data model XML format. | 
| ID | `string` | Gets or sets the ID of the model | 
| NullOperator | [Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) | Gets the null operator. | 
| Operators | [OperatorStore](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorstore-class) | List of data model operators. | 
| Texts | [TextStorage](/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) | Gets an instance of TextStorage object which holds all text resources used in this assembly | 
| UseResourcesForOperators | `bool` | Gets or sets a value indicating whether we get the main parameters (caption and format) for default operators from resources. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| AggrFuncListChanged | `AggrFuncListChangedEventHandler` | Occurs when the list of available aggregate functions was changed. | 
| MacroRequest | `MacroRequestEventHandler` | This event is raised when a value for some macro is requested. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddDefaultEditors() | `void` | Adds the default value editors. | 
| AddDefaultOperators() | `void` | Adds the default operators into model | 
| AddEntityAttr([EntityAttrDescriptor](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattrdescriptor-class) desc) | [EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Adds a new attribute to the model. | 
| AddOperatorToEntity([Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op, [Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) ent) | `void` | Adds the operator to all suitable attributes in specified entity. | 
| AddOperatorToSuitedAttributes([Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op) | `void` | Adds the operator to all suitable (by data type) attributes. | 
| AddUpdateOperator(`string` id, `string` caption, `string` expr, `string` format, [DataKind](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) kind = 0, [OperatorGroup](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgroup-class) group = <span style='color: blue'>null</span>) | [Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) | Adds or update an operator. | 
| Clear() | `void` | Clears this instance. | 
| Clone() | [DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Clones the model object | 
| CreateEntity([Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) parentEntity = <span style='color: blue'>null</span>) | [Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) | Creates the entity. | 
| CreateEntityAttr([EntityAttrDescriptor](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattrdescriptor-class) desc) | [EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Creates the entity attribute. Used for creating entity attributes while building the model | 
| CreateEntityAttrCore([MetaEntity](/api-reference/easydata-core/easydata-namespace/metaentity-class) parent, [EntityAttrKind](/api-reference/easydata-core/easydata-namespace/entityattrkind-enum) kind) | [MetaEntityAttr](/api-reference/easydata-core/easydata-namespace/metaentityattr-class) |  | 
| CreateEntityCore([MetaEntity](/api-reference/easydata-core/easydata-namespace/metaentity-class) parent) | [MetaEntity](/api-reference/easydata-core/easydata-namespace/metaentity-class) |  | 
| CreateNullOperator() | [Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) | Creates the null operator. U | 
| CreateOperator() | [Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) | Creates the operator. Used for creating objects while building the model | 
| CreateOperator(`string` id, `string` caption, `string` expr, `string` format) | [Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) | Creates the operator. Used for creating objects while building the model | 
| CreateQuery([Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) parentQuery = <span style='color: blue'>null</span>) | [Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Creates a Query object associated with this model | 
| CreateRootEntity() | [Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) | Creates the root entity.  This method can be overriden in descendant classes to retrun the object of appropriate class (e.g. DbEntity). | 
| CreateRootEntityCore() | [MetaEntity](/api-reference/easydata-core/easydata-namespace/metaentity-class) |  | 
| DeleteOperatorFromEntity([Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) ent, [Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op) | `void` | Deletes the operator from any attribute of specified entity (and all its sub-entities). | 
| EnsureEditorExistance([ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) editor) | `void` | Ensures the existance of value editor. | 
| FindEntity(`string` entityName) | [Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) | Finds an entity by its name. | 
| FindEntityAttr(`string` attrDef) | [EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Finds the entity attribute. | 
| GetAttributeById(`string` attrID, `bool` useNullAttr) | [EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) |  | 
| GetDefaultOperatorsForDataType([DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType) | [OperatorList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorlist-class) | Returns the list of default operators for some data type | 
| GetMacroValue(`string` macroId) | [IMacroValue](/api-reference/korzh-easyquery/korzh-easyquery-namespace/imacrovalue-interface) | Gets the value of the macro by its ID. | 
| ListDefaultOperatorsForDataType([OperatorList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorlist-class) operats, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType) | `void` | Fills the list with default operators for some data type | 
| LoadFromXmlFile(`string` filePath) | `void` | Loads data model from XML file. | 
| LoadFromXmlFile(`string` filePath, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Loads data model from XML file. | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads data model from XML reader. | 
| LoadFromXmlReader(`XmlReader` reader, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Loads data model from XML reader. | 
| LoadFromXmlStream(`Stream` stream) | `void` | Loads data model from XML stream. | 
| LoadFromXmlStream(`Stream` stream, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Loads data model from XML stream. | 
| LoadFromXmlString(`string` xml) | `void` | Loads data model from XML string. | 
| LoadFromXmlString(`string` xml, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Loads data model from XML string. | 
| OnAggrFuncListChanged() | `void` | Raises the `AggrFuncListChanged` event. | 
| OnDocketRequest([MacroRequestEventArgs](/api-reference/korzh-easyquery/korzh-easyquery-namespace/macrorequesteventargs-class) e) | `bool` | Raises the MacroRequest event. | 
| OnModelLoaded() | `void` |  | 
| ReadOneModelPropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one model property from JSON (asynchronous way). | 
| RefillAggrFunctionList() | `void` | Refills the list of aggregate functions. | 
| RefreshResources() | `void` | Re-loads the string values from [Korzh.EasyQuery.DataModel.Texts](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) list. | 
| SaveToXmlFile(`string` filePath) | `void` | Saves data model XML to file. | 
| SaveToXmlFile(`string` path, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Saves data model XML to file. | 
| SaveToXmlStream(`Stream` stream) | `void` | Saves data model XML to stream. | 
| SaveToXmlStream(`Stream` stream, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Saves data model XML to stream. | 
| SaveToXmlString() | `string` | Saves data model XML specification to string object. | 
| SaveToXmlString([BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `string` | Saves data model XML specification to string object. | 
| SaveToXmlWriter(`XmlWriter` writer) | `void` | Saves data model specification using XmlWriter. | 
| SaveToXmlWriter(`XmlWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Saves data model specification using XmlWriter. | 
| UpdateOperatorsTexts() | `void` | Loads the text for all default operators from resources. | 
| UpdateOperatorTexts([Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op) | `void` | Loads the texts for one operator from resources (Texts storage actually) | 
| Validate() | `void` | Validates this model and throws an exception if something is wrong. | 
| WriteContentToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` | Writes the main content of the model to JSON (asynchronous way). | 
| WriteModelPropsToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` |  | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| AnyOperatorGroup | [OperatorGroup](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgroup-class) | Gets the special group which contain any operator | 
| BoolOperatorGroup | [OperatorGroup](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgroup-class) | Gets the group which contains the date/time operators (before, after, between, etc.) | 
| CommonOperatorGroup | [OperatorGroup](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgroup-class) | Gets the group which contains the common operators (equal, not equal, less than, more than, etc) | 
| LastXmlFormatVersion | `int` | Read-only constant that represent the latest format version for data model definition XML files | 
| OperatorGroups | [OperatorGroupList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgrouplist-class) | Gets the list of all predefined operator groups | 
| OtherOperatorGroup | [OperatorGroup](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgroup-class) | Gets the group which contains other operators not included in any of the previous group | 
| StringOperatorGroup | [OperatorGroup](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgroup-class) | Gets the group which contains the string operators (starts with, contains) | 
| TimeOperatorGroup | [OperatorGroup](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgroup-class) | Gets the group which contains the date/time operators (before, after, between, etc.) |