---
title: DbQuery class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class
---


Represents query for building SQL command
```csharp
public class Korzh.EasyQuery.Db.DbQuery
    : Query

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbQuery([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) parentQuery) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.DbQuery](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class) class. | 
| DbQuery([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.DbQuery](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ExtraTables | [TableList](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelist-class) | Gets the list of "extra" tables (the tables which will be included into result query by user request). | 
| NoPathResolution | [NoPathResolution](/api-reference/korzh-easyquery/korzh-easyquery-namespace/nopathresolution-enum) | Get or set the type of reaction for the situation when two tables have no path between them | 
| Options | [SqlExtras](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlextras-class) | Gets the [Korzh.EasyQuery.Db.SqlExtras](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlextras-class) object which defines some extra clauses of generated query. | 
| ResultColumns | `IEnumerable`&lt;[QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class)&gt; | Gets the full list of columns which will be returned in result query.  It equals to Columns list if it's not empty. Otherwise - it's an array of all fields from all tables taking part in this query (like SELECT * in SQL). | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CheckModelObject([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Checks if model object has appropriate type and raise exception if not | 
| CoreClear() | `void` | Clears all query content. Can be overriden in derived classes. | 
| CreateColumn(`IColumnDescriptor& modreq(System.Runtime.InteropServices.InAttribute)` desc) | [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) | Creates a column by its descriptor | 
| CreateParentEntityAttrExpr([EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | [EntityAttrExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattrexpr-class) | Creates the parent entity attribute expression. | 
| CreateQueryExpr() | [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | Creates a sub-query expression. | 
| CreateSubQuery() | [Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Creates the subquery. | 
| GetParentQueryRootEntity() | [Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) | Gets the entities from parent query. | 
| GetUsedEntities() | `List`&lt;[Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class)&gt; | Gets the list of used entities. | 
| GetUsedTables() | [TableList](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelist-class) | Gets the used tables. | 
| LoadNode(`XmlReader` reader, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Loads the root node. | 
| NewModel() | [DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Creates a new model (an object of DataModel class or its descendant). | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Reads the property from JSON reader or skip unused (asynchronous way). | 
| SaveNodes(`XmlWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `void` | Saves the root nodes. | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Saves content of the query to JSON (asynchronous way). |