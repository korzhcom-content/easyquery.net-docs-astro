---
title: SqlQueryBuilder class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlquerybuilder-class
sidebar:
  order: 100
---

Lets you build SQL commands based on [Korzh.EasyQuery.Db.DbQuery](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class) object
```csharp
public class Korzh.EasyQuery.Db.SqlQueryBuilder
    : DbQueryBuilder

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SqlQueryBuilder([DbQuery](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class) query) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.SqlQueryBuilder](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlquerybuilder-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| CanBuild | `bool` | Gets a value indicating whether the query can be built. | 
| Portion | [ResultSetPortion](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/resultsetportion-class) |  | 
| Result | [SqlStatement](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlstatement-class) | Gets the result. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| CondSqlGen | `ConditionSqlGeneratedEventHandler` | This event is raised during query building for each condition in the query and it  allows you to replace the SQL expression generated for this condition. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Build() | `bool` | Builds the query and stores the result in the [Korzh.EasyQuery.Db.SqlQueryBuilder.Result](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlquerybuilder-class) property. | 
| BuildParamSQL() | `bool` | The same as [Korzh.EasyQuery.Db.SqlQueryBuilder.BuildSQL](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlquerybuilder-class) method but generates parametrized SQL expression where all values are replaced by parameters (e.g. @param1).  You can access full list of parameters used in generated SQL statement through `Query.Params` property. | 
| BuildSQL() | `bool` | Builds the SQL statement. | 
| BuildSQLEx(`string` extraColumns, `string` extraConditions) | `bool` | Builds the SQL with some additional columns and conditions which can be passed in parameters | 
| GetParamExpr(`string` id) | `string` | Gets the parameter expression. | 
| OnCondSqlGen([ConditionSqlGeneratedEventArgs](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/conditionsqlgeneratedeventargs-class) e) | `void` | Raises the `CondSqlGen` event. | 
| ProcessScalarValue([Condition](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) cnd, `string` value, [DataType](///easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, [ScalarExprOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/scalarexproptions-enum) exprOptions) | `string` | Processes scalar value and returns SQL (or some other query language) expression. | 
| ResetSqlBuilder() | `void` | Resets the SQL builder. |
