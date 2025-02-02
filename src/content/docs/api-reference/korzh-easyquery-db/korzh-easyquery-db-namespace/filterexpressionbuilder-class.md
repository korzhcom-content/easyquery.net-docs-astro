---
title: FilterExpressionBuilder class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/filterexpressionbuilder-class
---


Used for building Sql commands using [Korzh.EasyQuery.Db.DbQuery](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class)
```csharp
public class Korzh.EasyQuery.Db.FilterExpressionBuilder
    : DbQueryBuilder

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| FilterExpressionBuilder([DbQuery](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class) query) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.SqlQueryBuilder](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlquerybuilder-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| CanBuild | `bool` | Gets a value indicating whether this instance can be built. | 
| Result | [FilterExpression](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/filterexpression-class) | Gets the result. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| CondSqlGen | `ConditionSqlGeneratedEventHandler` | This event is raised during query building for each condition in the query and it  allows you to replace the SQL expression generated for this condition. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Build() | `bool` | Builds the filter expression. It can be used (for example) in DataSet.FilterExpression property to filter data | 
| OnCondSqlGen([ConditionSqlGeneratedEventArgs](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/conditionsqlgeneratedeventargs-class) e) | `void` | Raises the `CondSqlGen` event. | 
| ResetFilterBuilder() | `void` | Resets the filter builder. |