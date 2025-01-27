---
title: Query class
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery namespace/query-class
---


Represents internal query structure.
```csharp
public class Korzh.EasyQuery.Query

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| Query([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) class. | 
| Query([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) parentQuery) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| _rootGroup | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | The root condition of the query | 
| DefaultReadOptions | [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) |  | 
| DefaultWriteOptions | [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) |  | 
| DrillDowns | [DrillDownStore](/api-reference/korzh-easyquery/korzh-easyquery-namespace/drilldownstore-class) |  | 
| serializationQueryXml | `string` | Serialized query | 
| Texts | [TextStorage](/api-reference/korzh-easyquery/korzh-utils-namespace/textstorage-class) | Gets an instance of TextStorage object which holds all text resources used in this assembly | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Columns | [QueryColumnStore](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnstore-class) | Gets the columns. | 
| Description | `string` | Gets or sets the query description. | 
| ExtraColumns | `string` | Gets or sets the extra columns. | 
| ExtraConditions | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Gets the list of extra conditions for this query.  These conditions are not visible to end-users but included into result SQL statement as all others (defined in [Korzh.EasyQuery.Query.Root](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) condition group). | 
| ExtraData | `object` | Conatains user-defined extra data for the current query. | 
| FilePath | `string` | Gets the query file path. It is automatically assigned when you use LoadFromFile method. | 
| Id | `string` | Gets or sets the ID of this query. | 
| ID | `string` | Gets or sets the query identifier. | 
| InnerData | `object` | Conatains some internal data (lie facets) associated with the current query. | 
| IsDrillDown | `bool` |  | 
| IsEmpty | `bool` | Gets a value indicating whether this query is empty (no columns and no conditions are defined). | 
| JustSortedColumns | [QueryColumnStore](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnstore-class) | Gets the list of "just sorted" columns (the columns which will occur only in ORDER BY clause) | 
| LocaleId | `string` | Gets or sets the locale identifier. | 
| Model | [DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets or sets the data model used in this query. | 
| ModelResolver | `Func`&lt;`string`, `Task`&lt;[DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class)&gt;&gt; | Gets or sets the model resolver - a functions which allows to get model by its ID. | 
| Name | `string` | Gets or sets the name of the query. | 
| Parent | [Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets the parent query. | 
| Root | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Gets the root condition of the query. | 
| SortedColumns | [SortedColumnList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortedcolumnlist-class) | Gets the list of sorted columns. | 
| StoreModelPath | `bool` | Gets or sets a value indicating whether this Query object should store the path  to corresponding data model and restore it during query loading. | 
| StoreOptions | `bool` | Gets or sets a value indicating whether this Query object should store the options  and restore them during query loading. | 
| SyncColSortOrder | `bool` | Gets or sets a value indicating whether the order of columns must be synchronized with their sorting order. | 
| TimezoneOffset | `int` | Timezone offset (in minutes) for all dates used in the query | 
| UseDefaultNumericValues | `bool` | Indicates whether we need to set the default values for numeric expressions in conditions. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| ColumnsChanged | `ColumnsChangedEventHandler` | This event is raised when the list of query result columns or a particular column was changed.  For example some column was added or some was deleted. | 
| ColumnsChanging | `ColumnsChangingEventHandler` | This event is raised before the list of query columns or a particular column is going to be changed.  For example some column will be added or deleted. | 
| ConditionsChanged | `ConditionsChangedEventHandler` | This event is raised when list of query conditions or a particular condition was changed.  For example some condition was added or some - was deleted. | 
| ModelChanged | `EventHandler` | Occurs after the model has been changed. | 
| SortOrderChanged | `SortOrderChangedEventHandler` | Occurs when the list of sorted columns was changed. | 
| SubQueryConditionsChanged | `ConditionsChangedEventHandler` | This event is raised when list of subquery conditions or a particular condition was changed.  For example some condition was added or some - was deleted. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddAggregateColumn(`string` attrId, `string` funcId, `string` caption = <span style='color: blue'>null</span>, [SortDirection](/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortdirection-enum) sorting = 0) | [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Creates a new aggregate column by attribute's ID and aggregate function nameand. | 
| AddColumn(`IColumnDescriptor&` desc) | [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Creates a new column by descriptor and adds it into query. | 
| AddConditionGroup([Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) parent = <span style='color: blue'>null</span>, `int` index = -1) | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Creates a new condition group and adds it into the query. | 
| AddDrillDown() | [Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) |  | 
| AddSimpleColumn(`string` attrId, `string` caption = <span style='color: blue'>null</span>, [SortDirection](/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortdirection-enum) sorting = 0) | [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Creates a new column by attribute's ID and adds it into query. | 
| BeginUpdate() | `void` | Turns on the "updating" state.  Any changes occured during this state will not initiate any "changed" event  (like [Korzh.EasyQuery.Query.ColumnsChanged](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) or [Korzh.EasyQuery.Query.ConditionsChanged](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class)) until [Korzh.EasyQuery.Query.EndUpdate](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) is called. | 
| CheckDataModel() | `void` | Checks the data model object. Generates an exception if Model property has null value. | 
| CheckModelObject([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Checks if model object has appropriate type and raise exception if not | 
| CleanUp() | `void` | Clean up this query instance.  This method removes columns and conditions with "ghost" attributes or operators | 
| Clear() | `void` | Clears the query conditions and result columns. | 
| CoreClear() | `void` | Clears all query content. Can be overriden in derived classes. | 
| CreateAggregateColumn(`string` attrId, `string` funcId, `string` caption = <span style='color: blue'>null</span>, [SortDirection](/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortdirection-enum) sorting = 0) | [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Creates an aggregate column. | 
| CreateAggrFuncExpr(`string` funcID, [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) argumentExpr) | [AggrFuncExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfuncexpr-class) | Creates an aggregate function expression. | 
| CreateColumn([EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr = <span style='color: blue'>null</span>, `string` caption = <span style='color: blue'>null</span>, [SortDirection](/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortdirection-enum) sortDirection = 0) | [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Creates an empty column.  If `expr` and `caption` parameters are not used they must be set later (to make the new object a proper column) | 
| CreateColumn(`IColumnDescriptor& modreq(System.Runtime.InteropServices.InAttribute)` desc) | [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Creates an empty column.  If `expr` and `caption` parameters are not used they must be set later (to make the new object a proper column) | 
| CreateColumnCore() | [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Creates the column object. Can be overridden in descendant classes | 
| CreateConditionGroup() | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Creates a new condition group. | 
| CreateEntityAttrExpr([EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | [EntityAttrExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattrexpr-class) | Creates an entity attribute expression. | 
| CreateEntityAttrExpr(`string` attrId) | [EntityAttrExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattrexpr-class) | Creates an entity attribute expression. | 
| CreateParentColumnExpr([QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, `string` name = ) | [ParentColumnExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/parentcolumnexpr-class) | Creates a parent column expression. | 
| CreateParentColumnExpr(`string` columnId, `string` name = ) | [ParentColumnExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/parentcolumnexpr-class) | Creates a parent column expression. | 
| CreateParentEntityAttrExpr([EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | [EntityAttrExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattrexpr-class) | Creates a parent entity attribute expression. | 
| CreateQueryExpr() | [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | Creates a sub-query expression. | 
| CreateRootCondition() | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Creates the root condition. | 
| CreateSilentConditionGroup() | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Creates a new "silent" condition gropu.  Here "silent" means neither this group nor its conditions will raise ConditionsChanged event in associated query | 
| CreateSimpleColumn([EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr, `string` caption = <span style='color: blue'>null</span>, [SortDirection](/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortdirection-enum) sorting = 0) | [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Creates a column by EntityAttr object. | 
| CreateSimpleColumn(`string` attrId, `string` caption = <span style='color: blue'>null</span>, [SortDirection](/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortdirection-enum) sorting = 0) | [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Creates a column by EntityAttr object. | 
| CreateSimpleCondition() | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Creates a simple condition. | 
| CreateSimpleCondition(`string` attrId, `string` operatorId = <span style='color: blue'>null</span>, `String[]` values) | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Creates a simple condition. | 
| CreateSimpleCondition([EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr, [Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op, `String[]` values) | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Creates a simple condition. | 
| CreateSimpleCondition(`string` attrId, `string` operatorId, `EqExpression[]` values) | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Creates a simple condition. | 
| CreateSimpleCondition([EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr, [Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op, `EqExpression[]` exprs) | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Creates a simple condition. | 
| CreateSubQuery() | [Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Creates the subquery. | 
| EndUpdate() | `void` | Turns the "updating" state off. | 
| GetConditionsText([QueryTextFormats](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querytextformats-class) formats) | `string` | Returns human-readable text that represents current query conditions | 
| GetOneValueForAttr([EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `string` | Gets the one value set in some query condition for indicated entity attribute | 
| GetParentQueryRootEntity() | [Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) | Gets the entities from parent query. | 
| LoadFromJsonFile(`string` filePath) | `void` | Loads the query's content from a JSON file. | 
| LoadFromJsonFile(`string` filePath, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Loads the query's content from a JSON file. | 
| LoadFromJsonFileAsync(`string` fileName) | `Task` | Loads the query's content from a JSON file (asynchronous way). | 
| LoadFromJsonFileAsync(`string` fileName, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Loads the query's content from a JSON file (asynchronous way). | 
| LoadFromJsonObject(`JObject` jObject) | `void` | Loads query from `Newtonsoft.Json.Linq.JObject`. | 
| LoadFromJsonObject(`JObject` jObject, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Loads query from `Newtonsoft.Json.Linq.JObject`. | 
| LoadFromJsonObjectAsync(`JObject` jObject) | `Task` | Loads query from `Newtonsoft.Json.Linq.JObject` (asynchronous way). | 
| LoadFromJsonObjectAsync(`JObject` jObject, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Loads query from `Newtonsoft.Json.Linq.JObject` (asynchronous way). | 
| LoadFromJsonStream(`Stream` stream) | `void` | Loads query from stream containing the JSON | 
| LoadFromJsonStream(`Stream` stream, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Loads query from stream containing the JSON | 
| LoadFromJsonStreamAsync(`Stream` stream) | `Task` | Loads query from stream containing the JSON (asynchronous way). | 
| LoadFromJsonStreamAsync(`Stream` stream, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Loads query from stream containing the JSON (asynchronous way). | 
| LoadFromJsonString(`string` json) | `void` | Loads query from string containing the JSON. | 
| LoadFromJsonString(`string` json, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Loads query from string containing the JSON. | 
| LoadFromJsonStringAsync(`string` json) | `Task` | Loads query from string containing the JSON (asynchronous way). | 
| LoadFromJsonStringAsync(`string` json, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Loads query from string containing the JSON (asynchronous way). | 
| LoadFromXmlFile(`string` path) | `void` | Loads query from XML file. | 
| LoadFromXmlFile(`string` path, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Loads query from XML file. | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads query from XML reader. | 
| LoadFromXmlReader(`XmlReader` reader, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Loads query from XML reader. | 
| LoadFromXmlStream(`Stream` stream) | `void` | Loads query from XML stream. | 
| LoadFromXmlStream(`Stream` stream, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Loads query from XML stream. | 
| LoadFromXmlString(`string` xml) | `void` | Loads query from XML string. | 
| LoadFromXmlString(`string` xml, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Loads query from XML string. | 
| LoadNode(`XmlReader` reader, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Loads the root node. | 
| NewModel() | [DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Creates new model object of appropriate type. | 
| OnSortOrderChanged([SortOrderChangedEventArgs](/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortorderchangedeventargs-class) e) | `void` | Raises the `SortOrderChanged` event. | 
| OnSubQueryConditionsChanged([ConditionsChangeEventArgs](/api-reference/korzh-easyquery/korzh-easyquery-namespace/conditionschangeeventargs-class) e) | `void` | Raises the `SubQueryConditionsChanged` event. | 
| ReadFromJson(`JsonReader` reader) | `void` | Loads query from JSON reader.  Calls See [Korzh.EasyQuery.Query.ReadFromJsonAsync(Newtonsoft.Json.JsonReader,EasyData.BitOptions)](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) function. | 
| ReadFromJson(`JsonReader` reader, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Loads query from JSON reader.  Calls See [Korzh.EasyQuery.Query.ReadFromJsonAsync(Newtonsoft.Json.JsonReader,EasyData.BitOptions)](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) function. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Loads query from JSON reader.  Calls See [Korzh.EasyQuery.Query.ReadOnePropFromJsonAsync(Newtonsoft.Json.JsonReader,System.String,EasyData.BitOptions)](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) function. | 
| ReadFromJsonAsync(`JsonReader` reader, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Loads query from JSON reader.  Calls See [Korzh.EasyQuery.Query.ReadOnePropFromJsonAsync(Newtonsoft.Json.JsonReader,System.String,EasyData.BitOptions)](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) function. | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Reads the property from JSON reader or skip unused. | 
| ResolveDataModelAsync(`string` modelId) | `Task` | Resolves the data model by its ID | 
| SaveNodes(`XmlWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Saves the root nodes. | 
| SaveToJsonFile(`string` filePath) | `void` | Saves query to a file in JSON format. | 
| SaveToJsonFile(`string` filePath, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Saves query to a file in JSON format. | 
| SaveToJsonFileAsync(`string` filePath) | `Task` | Saves query to a file in JSON format (asynchronous way). | 
| SaveToJsonFileAsync(`string` filePath, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Saves query to a file in JSON format (asynchronous way). | 
| SaveToJsonObject() | `JObject` | Saves query to `Newtonsoft.Json.Linq.JObject`. | 
| SaveToJsonObject([BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `JObject` | Saves query to `Newtonsoft.Json.Linq.JObject`. | 
| SaveToJsonObjectAsync() | `Task`&lt;`JObject`&gt; | Saves query to `Newtonsoft.Json.Linq.JObject` (asynchronous way). | 
| SaveToJsonObjectAsync([BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task`&lt;`JObject`&gt; | Saves query to `Newtonsoft.Json.Linq.JObject` (asynchronous way). | 
| SaveToJsonStream(`Stream` stream) | `void` | Saves query to a stream in JSON format. | 
| SaveToJsonStream(`Stream` stream, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Saves query to a stream in JSON format. | 
| SaveToJsonStreamAsync(`Stream` stream) | `Task` | Saves query to a stream in JSON format (asynchronous way). | 
| SaveToJsonStreamAsync(`Stream` stream, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Saves query to a stream in JSON format (asynchronous way). | 
| SaveToJsonString() | `string` | Saves query to string containing the JSON. | 
| SaveToJsonString([BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `string` | Saves query to string containing the JSON. | 
| SaveToJsonStringAsync() | `Task`&lt;`string`&gt; | Saves query to string containing the JSON (asynchronous way). | 
| SaveToJsonStringAsync([BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task`&lt;`string`&gt; | Saves query to string containing the JSON (asynchronous way). | 
| SaveToXmlFile(`string` path) | `void` | Saves query to XML file. | 
| SaveToXmlFile(`string` path, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Saves query to XML file. | 
| SaveToXmlStream(`Stream` stream) | `void` | Saves query XML to stream. | 
| SaveToXmlStream(`Stream` stream, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` | Saves query XML to stream. | 
| SaveToXmlString() | `string` | Saves query to string containing the XML. | 
| SaveToXmlString([BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `string` | Saves query to string containing the XML. | 
| SaveToXmlWriter(`XmlWriter` writer) | `void` | Saves query to XML using XML writer. | 
| SaveToXmlWriter(`XmlWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Saves query to XML using XML writer. | 
| SetModel([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) newModel) | `void` | Sets the data model and performs some initialization procedures. | 
| Validate() | `void` | Validates this query instance.  This method throws an exception if query has "ghost" attributes | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Saves content of the query to JSON (asynchronous way). | 
| WriteToJson(`JsonWriter` writer) | `void` | Saves query to JSON using JSON writer. | 
| WriteToJson(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Saves query to JSON using JSON writer. | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Saves query to JSON using JSON writer (asynchronous way).  Calls [Korzh.EasyQuery.Query.WriteToJsonAsync(Newtonsoft.Json.JsonWriter,EasyData.BitOptions)](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) function. | 
| WriteToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Saves query to JSON using JSON writer (asynchronous way).  Calls [Korzh.EasyQuery.Query.WriteToJsonAsync(Newtonsoft.Json.JsonWriter,EasyData.BitOptions)](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) function. |