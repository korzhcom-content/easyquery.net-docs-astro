---
title: Query class
slug: api-reference-4x/korzh-easyquery-namespace/query-class
---

Represents internal query structure.
```csharp
public class Korzh.EasyQuery.Query

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `ColumnStore` | columns | List of all query columns | 
| `String` | filePath | Query file location if query is loaded from file | 
| `ColumnStore` | justSortedColumns | List of just sorted coumns | 
| `String` | queryDescription | User-defined query description | 
| `String` | queryName | User-defined name of the query | 
| `Predicate` | root | Root predicate of the query | 
| `String` | serializationQueryXml | Serialized query | 
| `SortedColumnList` | sortedColumns | List of sorted columns | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `ColumnStore` | Columns | Gets the columns. | 
| `String` | ExtraColumns | Gets or sets the extra columns. | 
| `Predicate` | ExtraConditions | Gets the list of extra conditions for this query.  These conditions are not visible to end-users but included into result SQL statement as all others (defined in [Korzh.EasyQuery.Query.Root](//easyquery/docs/api-reference-4x/korzh-easyquery-namespace/query-class) predicate). | 
| `String` | FilePath | Gets the query file path. It is automatically assigned when you use LoadFromFile method. | 
| `String` | ID | Gets or sets the ID of this query. | 
| `Boolean` | IsEmpty | Gets a value indicating whether this query is empty (no columns and no conditions are defined). | 
| `ColumnStore` | JustSortedColumns | Gets the list of "just sorted" columns (the columns which will occur only in ORDER BY clause) | 
| `DataModel` | Model | Gets or sets the data model used in this query. | 
| `Query` | Parent | Gets the parent query. | 
| `String` | QueryDescription | Gets or sets the query description. | 
| `String` | QueryName | Gets or sets the name of the query. | 
| `Predicate` | Root | Gets the root predicate of the query. | 
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
| `Predicate` | AddPredicate(`Predicate` group, `Int32` index = -1) | Creates new predicate (condition group) and adds it into the query. | 
| `Column` | AddSimpleColumn(`String` attrId, `String` caption = <span style='color: blue'>null</span>, `SortDirection` sorting = None) | Creates new column by attribute's id or expression and adds it into query. | 
| `SimpleCondition` | AddSimpleCondition(`Predicate` predicate, `Int32` index, `EntityAttr` attribute) | Creates new simple condition and adds it into the query. | 
| `SimpleCondition` | AddSimpleCondition(`String` attrId, `String` operatorId, `String[]` values) | Creates new simple condition and adds it into the query. | 
| `SimpleCondition` | AddSimpleCondition(`Predicate` predicate, `String` attrId, `String` operatorId, `String[]` values) | Creates new simple condition and adds it into the query. | 
| `void` | CheckDataModel() | Checks the data model object. Generates an exception if Model property has null value. | 
| `void` | CheckModelObject(`DataModel` model) | Checks if model object has appropriate type and raise exception if not | 
| `void` | Clear() | Clears the query conditions and result columns. | 
| `void` | CoreClear() | Clears all query content. Can be overriden in derived classes. | 
| `AggrFuncExpr` | CreateAggrFuncExpr(`DataModel` model, `String` funcID, `EqExpression` argExpr) | Creates the aggregate function expression. | 
| `Column` | CreateColumn() | Creates a column. | 
| `Column` | CreateColumn(`EntityAttr` attr) | Creates a column. | 
| `Column` | CreateColumn(`String` attrId, `String` caption = <span style='color: blue'>null</span>, `SortDirection` sorting = None) | Creates a column. | 
| `EntityAttrExpr` | CreateEntityAttrExpr(`DataModel` model, `EntityAttr` attr) | Creates the entity attribute expression. | 
| `EntityAttrExpr` | CreateEntityAttrExpr(`DataModel` model, `String` attrId) | Creates the entity attribute expression. | 
| `QueryFormats` | CreateFormats() | Creates an instance of QueryFormats (or its descendant). | 
| `EntityAttrExpr` | CreateParentEntityAttrExpr(`DataModel` model, `EntityAttr` attr) | Creates the parent entity attribute expression. | 
| `Predicate` | CreatePredicate() | Creates the predicate. | 
| `Predicate` | CreateRootPredicate() | Creates the root predicate. | 
| `Predicate` | CreateSilentPredicate() | Creates a new "silent" predicate.  Here "silent" means neither this predicate nor its conditions will raise ConditionsChanged event in associated query | 
| `SimpleCondition` | CreateSimpleCondition() | Creates the simple condition. | 
| `SimpleCondition` | CreateSimpleCondition(`String` attrId, `String` operatorId, `String[]` values) | Creates the simple condition. | 
| `SimpleCondition` | CreateSimpleCondition(`EntityAttr` attr, `Operator` op, `EqExpression[]` exprs) | Creates the simple condition. | 
| `Query` | CreateSubQuery() | Creates the subquery. | 
| `String` | GetConditionsText(`QueryTextFormats` formats) | Returns human-readable text that represents current query conditions | 
| `QueryFormats` | GetFormats() | Gets query formats (an instance of [Korzh.EasyQuery.QueryFormats](//easyquery/docs/api-reference-4x/korzh-easyquery-namespace/queryformats-class) class). | 
| `String` | GetOneValueForAttr(`EntityAttr` attr) | Gets the one value set in some query condition for indicated entity attribute | 
| `Entity` | GetParentQueryRootEntity() | Gets the entities from parent query. | 
| `void` | InnerSortOrderChanged(`SortOrderChangedEventArgs` e) |  | 
| `void` | LoadFromFile(`String` path) | Loads query from file. | 
| `void` | LoadFromFile(`String` path, `RWOptions` rwOptions) | Loads query from file. | 
| `void` | LoadFromJsonDict(`JsonDict` dict) | Loads query from some `System.Collections.IDictionary` object. Useful for JSON serialization | 
| `void` | LoadFromJsonDict(`JsonDict` dict, `RWOptions` rwOptions) | Loads query from some `System.Collections.IDictionary` object. Useful for JSON serialization | 
| `void` | LoadFromStream(`Stream` stream) | Loads query from stream. | 
| `void` | LoadFromStream(`Stream` stream, `RWOptions` rwOptions) | Loads query from stream. | 
| `void` | LoadFromString(`String` xml, `RWOptions` rwOptions) | Loads query from string. | 
| `void` | LoadFromString(`String` xml) | Loads query from string. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads query from XML reader. | 
| `void` | LoadFromXmlReader(`XmlReader` reader, `RWOptions` rwOptions) | Loads query from XML reader. | 
| `void` | LoadNode(`XmlReader` reader, `RWOptions` rwOptions) | Loads the root node. | 
| `DataModel` | NewModel() | Creates new model object of appropriate type. | 
| `void` | OnColumnsChanged(`ColumnsChangeEventArgs` e) | Raises the ColumnsChanged event. | 
| `void` | OnColumnsChanging(`ColumnsChangingEventArgs` e) | Raises the `ColumnsChanging` event. | 
| `void` | OnConditionsChanged(`ConditionsChangeEventArgs` e) | Raises the ConditionsChanged event. | 
| `void` | OnSortOrderChanged(`SortOrderChangedEventArgs` e) | Raises the `SortOrderChanged` event. | 
| `void` | OnSubQueryConditionsChanged(`ConditionsChangeEventArgs` e) | Raises the `SubQueryConditionsChanged` event. | 
| `void` | ResyncSortingList(`Boolean` changeInnerIndex) | Resynchronizes the sorting list of columns correspondingly to their order. | 
| `void` | SaveNodes(`XmlWriter` writer, `RWOptions` rwOptions) | Saves the root nodes. | 
| `void` | SaveToFile(`String` path) | Saves query to XML file. | 
| `void` | SaveToFile(`String` path, `RWOptions` Options) | Saves query to XML file. | 
| `JsonDict` | SaveToJsonDict() | Saves query into some `System.Collections.IDictionary` object. Useful for JSON serialization | 
| `void` | SaveToStream(`Stream` stream) | Saves query XML to stream. | 
| `void` | SaveToStream(`Stream` stream, `RWOptions` options) | Saves query XML to stream. | 
| `String` | SaveToString() | Saves query to string containing the XML. | 
| `String` | SaveToString(`RWOptions` Options) | Saves query to string containing the XML. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `RWOptions` rwOptions) | Saves query to XML using XML writer. | 
| `void` | Validate() | Validates this query instance.  This method throws an exception if query has "ghost" attributes |