---
title: EntitySqlQueryBuilder class
slug: api-reference-4x/korzh-easyquery-db-namespace/entitysqlquerybuilder-class
---

Lets you build Entity SQL commands based on [Korzh.EasyQuery.Db.DbQuery](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbquery-class) object
```csharp
public class Korzh.EasyQuery.Db.EntitySqlQueryBuilder
    : DbQueryBuilder, IQueryBuilder

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | CanBuild | Gets a value indicating whether this instance can be built. | 
| `EntitySqlStatement` | Result | Gets the result object | 


### Events

| Type | Name | Description | 
| --- | --- | --- | 
| `CondSqlGenEventHandler` | CondSqlGen | This event is raised during query building for each condition in the query and it  allows you to replace the SQL expression generated for this condition. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | BuildParamSQL() | The same as [Korzh.EasyQuery.Db.EntitySqlQueryBuilder.BuildSQL](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/entitysqlquerybuilder-class) method but generates parametrized SQL expression where all values are replaced by parameters (e.g. @param1).  You can access full list of parameters used in generated SQL statement through `Query.Params` property. | 
| `Boolean` | BuildSQL() | Builds the SQL statement. | 
| `Boolean` | BuildSQLEx(`String` extraColumns, `String` extraConditions) | Builds the SQL with some additional columns and conditions which can be passed in parameters | 
| `QueryBuilderResult` | CreateResult() | Creates the result object. | 
| `void` | OnCondSqlGen(`CondSqlGenEventArgs` e) | Raises the `CondSqlGen` event. | 
| `String` | ProcessScalarValue(`Condition` cnd, `String` value, `DataType` dataType, `ScalarExprOptions` exprOptions) | Processes scalar value and returns SQL (or some other query language) expression. | 
| `void` | ResetSqlBuilder() | Resets the SQL builder. |