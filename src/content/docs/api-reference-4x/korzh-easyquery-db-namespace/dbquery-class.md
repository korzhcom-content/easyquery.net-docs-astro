---
title: DbQuery class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbquery-class
sidebar:
  order: 100
---

Represents query for building SQL command
```csharp
public class Korzh.EasyQuery.Db.DbQuery
    : Query

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `TableList` | ExtraTables | Gets the list of "extra" tables (the tables which will be included into result query by user request). | 
| `NoPathResolution` | NoPathResolution | Get or set the type of reaction for the situation when two tables have no path between them | 
| `SqlExtraClauses` | Options | Gets the [Korzh.EasyQuery.Db.SqlExtraClauses](///easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/sqlextraclauses-class) object which defines some extra clauses of generated query. | 
| `IEnumerable<Column>` | ResultColumns | Gets the full list of columns which will be returned in result query.  It equals to Columns list if it's not empty. Otherwise - it's an array of all fields from all tables taking part in this query (like SELECT * in SQL). | 


### Events

| Type | Name | Description | 
| --- | --- | --- | 
| `CondSqlGenEventHandler` | CondSqlGen | This event is raised during query building for each condition in the query and it  allows you to replace the SQL expression generated for this condition. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CheckModelObject(`DataModel` model) | Checks if model object has appropriate type and raise exception if not | 
| `void` | CoreClear() | Clears all query content. Can be overriden in derived classes. | 
| `AggrFuncExpr` | CreateAggrFuncExpr(`DataModel` model, `String` funcID, `EqExpression` argExpr) | Creates the aggregate function expression. | 
| `Column` | CreateColumn() | Creates the column. | 
| `EntityAttrExpr` | CreateEntityAttrExpr(`DataModel` model, `EntityAttr` attr) | Creates the entity attribute expression. | 
| `QueryFormats` | CreateFormats() | Gets the formats of generated query language (SQL or other). | 
| `EntityAttrExpr` | CreateParentEntityAttrExpr(`DataModel` model, `EntityAttr` attr) | Creates the parent entity attribute expression. | 
| `Predicate` | CreatePredicate() | Creates a new predicate. | 
| `SimpleCondition` | CreateSimpleCondition() | Creates the simple condition. | 
| `Query` | CreateSubQuery() | Creates the subquery. | 
| `Entity` | GetParentQueryRootEntity() | Gets the entities from parent query. | 
| `List<DbEntity>` | GetUsedEntities() | Gets the list of used entities. | 
| `TableList` | GetUsedTables() | Gets the used tables. | 
| `void` | LoadNode(`XmlReader` reader, `RWOptions` rwOptions) | Loads the root node. | 
| `DataModel` | NewModel() | Creates a new model (an object of DataModel class or its descendant). | 
| `Boolean` | OnCondSqlGen(`CondSqlGenEventArgs` e) | Raises the `CondSqlGen` event. | 
| `void` | SaveNodes(`XmlWriter` writer, `RWOptions` rwOptions) | Saves the root nodes. |
