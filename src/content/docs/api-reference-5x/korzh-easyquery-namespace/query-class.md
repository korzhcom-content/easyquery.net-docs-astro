---
title: Query class
slug: api-reference-5x/korzh-easyquery-namespace/query-class
---


Represents internal query structure.
```csharp
public class Korzh.EasyQuery.Query

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Condition` | _rootCondition | The root condition of the query | 
| `ColumnStore` | columns | List of all query columns | 
| `ColumnStore` | justSortedColumns | List of just sorted coumns | 
| `String` | queryName | User-defined name of the query | 
| `String` | serializationQueryXml | Serialized query | 
| `SortedColumnList` | sortedColumns | List of sorted columns | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `ColumnStore` | Columns | Gets the columns. | 
| `String` | Description | Gets or sets the query description. | 
| `String` | ExtraColumns | Gets or sets the extra columns. | 
| `Condition` | ExtraConditions | Gets the list of extra conditions for this query.  These conditions are not visible to end-users but included into result SQL statement as all others (defined in [Korzh.EasyQuery.Query.Root](/api-reference-5x/korzh-easyquery-namespace/query-class) condition group). | 
| `Object` | ExtraData | Conatins user-defined extra data for current query. | 
| `String` | FilePath | Gets the query file path. It is automatically assigned when you use LoadFromFile method. | 
| `String` | ID | Gets or sets the ID of this query. | 
| `Boolean` | IsEmpty | Gets a value indicating whether this query is empty (no columns and no conditions are defined). | 
| `ColumnStore` | JustSortedColumns | Gets the list of "just sorted" columns (the columns which will occur only in ORDER BY clause) | 
| `String` | LocaleId | Gets or sets the locale identifier. | 
| `DataModel` | Model | Gets or sets the data model used in this query. | 
| `Func<String, DataModel>` | ModelResolver | Gets or sets the model resolver - a functions which allows to get model by its ID. | 
| `String` | Name | Gets or sets the name of the query. | 
| `Query` | Parent | Gets the parent query. | 
| `Condition` | Root | Gets the root condition of the query. | 
| `SortedColumnList` | SortedColumns | Gets the list of sorted columns. | 
| `Boolean` | StoreModelPath | Gets or sets a value indicating whether this Query object should store the path  to corresponding data model and restore it during query loading. | 
| `Boolean` | StoreOptions | Gets or sets a value indicating whether this Query object should store the options  and restore them during query loading. | 
| `Boolean` | SyncColSortOrder | Gets or sets a value indicating whether the order of columns must be synchronized with their sorting order. | 
| `TextStorage` | Texts | Gets an instance of TextStorage object which holds all text resources used in this assembly | 
| `Int32` | TimezoneOffset | Timezone offset (in minutes) for all dates used in the query | 


### Events

| Type | Name | Description | 
| --- | --- | --- | 
| `ColumnsChangedEventHandler` | ColumnsChanged | This event is raised when the list of query result columns or a particular column was changed.  For example some column was added or some was deleted. | 
| `ColumnsChangingEventHandler` | ColumnsChanging | This event is raised before the list of query columns or a particular column is going to be changed.  For example some column will be added or deleted. | 
| `ConditionsChangedEventHandler` | ConditionsChanged | This event is raised when list of query conditions or a particular condition was changed.  For example some condition was added or some - was deleted. | 
| `EventHandler` | ModelChanged | Occurs after the model has been changed. | 
| `SortOrderChangedEventHandler` | SortOrderChanged | Occurs when the list of sorted columns was changed. | 
| `ConditionsChangedEventHandler` | SubQueryConditionsChanged | This event is raised when list of subquery conditions or a particular condition was changed.  For example some condition was added or some - was deleted. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Column` | AddAggregateColumn(`String` attrId, `String` funcId, `String` caption = <span style='color: blue'>null</span>, `SortDirection` sorting = None) | Creates a new aggregate column by attribute's ID and aggregate function nameand. | 
| `Condition` | AddConditionGroup(`Condition` parent = <span style='color: blue'>null</span>, `Int32` index = -1) | Creates a new condition group and adds it into the query. | 
| `Column` | AddSimpleColumn(`String` attrId, `String` caption = <span style='color: blue'>null</span>, `SortDirection` sorting = None) | Creates a new column by attribute's ID and adds it into query. | 
| `void` | BeginUpdate() | Turns on the "updating" state.  Any changes occured during this state will not initiate any "changed" event  (like [Korzh.EasyQuery.Query.ColumnsChanged](/api-reference-5x/korzh-easyquery-namespace/query-class) or [Korzh.EasyQuery.Query.ConditionsChanged](/api-reference-5x/korzh-easyquery-namespace/query-class)) until [Korzh.EasyQuery.Query.EndUpdate](/api-reference-5x/korzh-easyquery-namespace/query-class) is called. | 
| `void` | CheckDataModel() | Checks the data model object. Generates an exception if Model property has null value. | 
| `void` | CheckModelObject(`DataModel` model) | Checks if model object has appropriate type and raise exception if not | 
| `void` | Clear() | Clears the query conditions and result columns. | 
| `void` | CoreClear() | Clears all query content. Can be overriden in derived classes. | 
| `Column` | CreateAggregateColumn(`String` attrId, `String` funcId, `String` caption = <span style='color: blue'>null</span>, `SortDirection` sorting = None) | Creates an aggregate column. | 
| `AggrFuncExpr` | CreateAggrFuncExpr(`String` funcID, `EqExpression` argumentExpr) | Creates an aggregate function expression. | 
| `Column` | CreateColumn(`EqExpression` expr = <span style='color: blue'>null</span>, `String` caption = <span style='color: blue'>null</span>, `SortDirection` sortDirection = None) | Creates an empty column.  If `expr` and `caption` parameters are not used they must be set later (to make the new object a proper column) | 
| `Column` | CreateColumnCore() | Creates the column object. Can be overridden in descendant classes | 
| `Condition` | CreateConditionGroup() | Creates a new condition group. | 
| `EntityAttrExpr` | CreateEntityAttrExpr(`EntityAttr` attr) | Creates an entity attribute expression. | 
| `EntityAttrExpr` | CreateEntityAttrExpr(`String` attrId) | Creates an entity attribute expression. | 
| `QueryFormats` | CreateFormats() | Creates an instance of QueryFormats (or its descendant). | 
| `EntityAttrExpr` | CreateParentEntityAttrExpr(`EntityAttr` attr) | Creates a parent entity attribute expression. | 
| `EqExpression` | CreateQueryExpr() | Creates a sub-query expression. | 
| `Condition` | CreateRootCondition() | Creates the root condition. | 
| `Condition` | CreateSilentConditionGroup() | Creates a new "silent" condition gropu.  Here "silent" means neither this group nor its conditions will raise ConditionsChanged event in associated query | 
| `Column` | CreateSimpleColumn(`EntityAttr` attr, `String` caption = <span style='color: blue'>null</span>, `SortDirection` sorting = None) | Creates a column by EntityAttr object. | 
| `Column` | CreateSimpleColumn(`String` attrId, `String` caption = <span style='color: blue'>null</span>, `SortDirection` sorting = None) | Creates a column by EntityAttr object. | 
| `Condition` | CreateSimpleCondition() | Creates a simple condition. | 
| `Condition` | CreateSimpleCondition(`String` attrId, `String` operatorId = <span style='color: blue'>null</span>, `String[]` values) | Creates a simple condition. | 
| `Condition` | CreateSimpleCondition(`String` attrId, `String` operatorId, `EqExpression[]` values) | Creates a simple condition. | 
| `Condition` | CreateSimpleCondition(`EntityAttr` attr, `Operator` op, `EqExpression[]` exprs) | Creates a simple condition. | 
| `Query` | CreateSubQuery() | Creates the subquery. | 
| `void` | EndUpdate() | Turns the "updating" state off. | 
| `String` | GetConditionsText(`QueryTextFormats` formats) | Returns human-readable text that represents current query conditions | 
| `QueryFormats` | GetFormats() | Gets query formats (an instance of [Korzh.EasyQuery.QueryFormats](/api-reference-5x/korzh-easyquery-namespace/queryformats-class) class). | 
| `String` | GetOneValueForAttr(`EntityAttr` attr) | Gets the one value set in some query condition for indicated entity attribute | 
| `Entity` | GetParentQueryRootEntity() | Gets the entities from parent query. | 
| `void` | InnerSortOrderChanged(`SortOrderChangedEventArgs` e) |  | 
| `void` | LoadFromJsonFile(`String` fileName, `QueryReadWriteOptions` rwOptions = All) | Loads the query's content from a JSON file. | 
| `Task` | LoadFromJsonFileAsync(`String` fileName, `QueryReadWriteOptions` rwOptions = All) | Loads the query's content from a JSON file (asynchronous way). | 
| `void` | LoadFromJsonObject(`JObject` jObject, `QueryReadWriteOptions` rwOptions = All) | Loads query from `Newtonsoft.Json.Linq.JObject`. | 
| `Task` | LoadFromJsonObjectAsync(`JObject` jObject, `QueryReadWriteOptions` rwOptions = All) | Loads query from `Newtonsoft.Json.Linq.JObject` (asynchronous way). | 
| `void` | LoadFromJsonStream(`Stream` stream, `QueryReadWriteOptions` rwOptions = All) | Loads query from stream containing the JSON | 
| `Task` | LoadFromJsonStreamAsync(`Stream` stream, `QueryReadWriteOptions` rwOptions = All) | Loads query from stream containing the JSON (asynchronous way). | 
| `void` | LoadFromJsonString(`String` json, `QueryReadWriteOptions` rwOptions = All) | Loads query from string containing the JSON. | 
| `Task` | LoadFromJsonStringAsync(`String` json, `QueryReadWriteOptions` rwOptions = All) | Loads query from string containing the JSON (asynchronous way). | 
| `void` | LoadFromXmlFile(`String` path, `QueryReadWriteOptions` options = All) | Loads query from XML file. | 
| `void` | LoadFromXmlReader(`XmlReader` reader, `QueryReadWriteOptions` options) | Loads query from XML reader. | 
| `void` | LoadFromXmlStream(`Stream` stream, `QueryReadWriteOptions` options = All) | Loads query from XML stream. | 
| `void` | LoadFromXmlString(`String` xml, `QueryReadWriteOptions` options = All) | Loads query from XML string. | 
| `void` | LoadNode(`XmlReader` reader, `QueryReadWriteOptions` rwOptions) | Loads the root node. | 
| `DataModel` | NewModel() | Creates new model object of appropriate type. | 
| `void` | OnColumnsChanged(`ColumnsChangeEventArgs` e) | Raises the ColumnsChanged event. | 
| `void` | OnColumnsChanging(`ColumnsChangingEventArgs` e) | Raises the `ColumnsChanging` event. | 
| `void` | OnConditionsChanged(`ConditionsChangeEventArgs` e) | Raises the ConditionsChanged event. | 
| `void` | OnSortOrderChanged(`SortOrderChangedEventArgs` e) | Raises the `SortOrderChanged` event. | 
| `void` | OnSubQueryConditionsChanged(`ConditionsChangeEventArgs` e) | Raises the `SubQueryConditionsChanged` event. | 
| `void` | ReadFromJson(`JsonReader` reader, `QueryReadWriteOptions` rwOptions = All) | Loads query from JSON reader.  Calls See [Korzh.EasyQuery.Query.ReadOnePropFromJsonAsync(Newtonsoft.Json.JsonReader,System.String,Korzh.EasyQuery.QueryReadWriteOptions)](/api-reference-5x/korzh-easyquery-namespace/query-class) function. | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader, `QueryReadWriteOptions` rwOptions = All) | Loads query from JSON reader.  Calls See [Korzh.EasyQuery.Query.ReadOnePropFromJsonAsync(Newtonsoft.Json.JsonReader,System.String,Korzh.EasyQuery.QueryReadWriteOptions)](/api-reference-5x/korzh-easyquery-namespace/query-class) function. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName, `QueryReadWriteOptions` rwOptions) | Reads the property from JSON reader or skip unused. | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName, `QueryReadWriteOptions` rwOptions) | Reads the property from JSON reader or skip unused. | 
| `void` | ResolveDataModel(`String` modelId) | Resolves the data model by its ID | 
| `void` | ResyncSortingList(`Boolean` changeInnerIndex) | Resynchronizes the sorting list of columns correspondingly to their order. | 
| `void` | SaveNodes(`XmlWriter` writer, `QueryReadWriteOptions` rwOptions) | Saves the root nodes. | 
| `void` | SaveToJsonFile(`String` filePath, `QueryReadWriteOptions` rwOptions = Content) | Saves query to a file in JSON format. | 
| `Task` | SaveToJsonFileAsync(`String` filePath, `QueryReadWriteOptions` rwOptions = Content) | Saves query to a file in JSON format (asynchronous way). | 
| `JObject` | SaveToJsonObject(`QueryReadWriteOptions` rwOptions = Content) | Saves query to `Newtonsoft.Json.Linq.JObject`. | 
| `Task<JObject>` | SaveToJsonObjectAsync(`QueryReadWriteOptions` rwOptions = Content) | Saves query to `Newtonsoft.Json.Linq.JObject` (asynchronous way). | 
| `void` | SaveToJsonStream(`Stream` stream, `QueryReadWriteOptions` rwOptions = Content) | Saves query to a stream in JSON format. | 
| `Task` | SaveToJsonStreamAsync(`Stream` stream, `QueryReadWriteOptions` rwOptions = Content) | Saves query to a stream in JSON format (asynchronous way). | 
| `String` | SaveToJsonString(`QueryReadWriteOptions` rwOptions = Content) | Saves query to string containing the JSON. | 
| `Task<String>` | SaveToJsonStringAsync(`QueryReadWriteOptions` rwOptions = Content) | Saves query to string containing the JSON (asynchronous way). | 
| `void` | SaveToXmlFile(`String` path, `QueryReadWriteOptions` options = Content) | Saves query to XML file. | 
| `void` | SaveToXmlStream(`Stream` stream, `QueryReadWriteOptions` options = Content) | Saves query XML to stream. | 
| `String` | SaveToXmlString(`QueryReadWriteOptions` options = Content) | Saves query to string containing the XML. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `QueryReadWriteOptions` rwOptions) | Saves query to XML using XML writer. | 
| `void` | SetModel(`DataModel` newModel) | Sets the data model and performs some initialization procedures. | 
| `void` | Validate() | Validates this query instance.  This method throws an exception if query has "ghost" attributes | 
| `void` | WritePropertiesToJson(`JsonWriter` writer, `QueryReadWriteOptions` rwOptions) | Saves content of the query to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer, `QueryReadWriteOptions` rwOptions) | Saves content of the query to JSON (asynchronous way). | 
| `void` | WriteToJson(`JsonWriter` writer, `QueryReadWriteOptions` rwOptions = Content) | Saves query to JSON using JSON writer.  Calls [Korzh.EasyQuery.Query.WritePropertiesToJson(Newtonsoft.Json.JsonWriter,Korzh.EasyQuery.QueryReadWriteOptions)](/api-reference-5x/korzh-easyquery-namespace/query-class) function. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer, `QueryReadWriteOptions` rwOptions = Content) | Saves query to JSON using JSON writer (asynchronous way).  Calls [Korzh.EasyQuery.Query.WritePropertiesToJsonAsync(Newtonsoft.Json.JsonWriter,Korzh.EasyQuery.QueryReadWriteOptions)](/api-reference-5x/korzh-easyquery-namespace/query-class) function. |