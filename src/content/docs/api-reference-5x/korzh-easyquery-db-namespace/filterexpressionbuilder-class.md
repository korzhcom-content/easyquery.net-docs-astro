---
title: FilterExpressionBuilder class
slug: api-reference-5x/korzh-easyquery-db-namespace/filterexpressionbuilder-class
sidebar:
  order: 100
---

Used for building Sql commands using [Korzh.EasyQuery.Db.DbQuery](/easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbquery-class)
```csharp
public class Korzh.EasyQuery.Db.FilterExpressionBuilder
    : DbQueryBuilder, IQueryBuilder

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | CanBuild | Gets a value indicating whether this instance can be built. | 
| `FilterExpression` | Result | Gets the result. | 


### Events

| Type | Name | Description | 
| --- | --- | --- | 
| `CondSqlGenEventHandler` | CondSqlGen | This event is raised during query building for each condition in the query and it  allows you to replace the SQL expression generated for this condition. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | BuildFilter() | Builds the filter expression. It can be used (for example) in DataSet.FilterExpression property to filter data | 
| `QueryBuilderResult` | CreateResult() | Creates the result object. | 
| `void` | OnCondSqlGen(`CondSqlGenEventArgs` e) | Raises the `CondSqlGen` event. | 
| `void` | ResetFilterBuilder() | Resets the filter builder. |
