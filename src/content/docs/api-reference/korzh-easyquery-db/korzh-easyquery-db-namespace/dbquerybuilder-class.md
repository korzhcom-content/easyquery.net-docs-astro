---
title: DbQueryBuilder class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquerybuilder-class
---
Lets you build SQL commands based on [Korzh.EasyQuery.Db.DbQuery](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class) object
```csharp
public abstract class Korzh.EasyQuery.Db.DbQueryBuilder
    : IQueryBuilder

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbQueryBuilder([DbQuery](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class) query) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.DbQueryBuilder](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquerybuilder-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| _isParamMode | `bool` | This property indicated whethere generated SQL should include parameters instead of real values. | 
| condFieldName | `string` | The name of the field in currently processing condition (used for generation of parameter names) | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| EscapeDef | `string` | contains escape symbol definition which will be added to the condition if necessary | 
| Extras | [SqlExtras](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlextras-class) | Gets the [Korzh.EasyQuery.Db.SqlExtras](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlextras-class) object which defines some extra clauses and options of the generated query. | 
| Formats | [SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) | Gets the formats of the result query statement.  This is a structure which allows you to set different formatting option of generated SQL (or other query language) statements.  For more information please read [Korzh.EasyQuery.Db.SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) reference. | 
| Model | [DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) | Gets the model. An instance of [Korzh.EasyQuery.DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) class or one of its descendants (for example DbModel) | 
| Options | [QueryBuilderOptions](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querybuilderoptions-class) | Gets or sets the builder's options. | 
| Query | [DbQuery](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class) | Gets the query object associated with the builder. | 
| QueryParams | [QueryParamList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) | Gets the list of query parameters (for parameterized queries) | 
| Result | [QueryStatement](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querystatement-class) | QueryBuilder result. | 
| StatementType | `Type` | Gets the the statement type. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionSqlGenerated | `ConditionSqlGeneratedEventHandler` | This event is raised during query building for each condition in the query and it  allows you to replace the SQL expression generated for this condition. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Build() | `bool` | Builds the query and stores the result in the [Korzh.EasyQuery.Db.DbQueryBuilder.Result](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquerybuilder-class) property.  The result could be some SQL statement or and an IQueryable object created by LINQ query builder. | 
| CalcScalarExpr([Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) cnd, `string` value, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, [ScalarExprOptions](/api-reference/korzh-easyquery/korzh-easyquery-namespace/scalarexproptions-enum) exprOptions) | `string` | Calculates the scalar value and returns SQL (or other query language) expression.  This function replaces all macros with their real values first and then call [Korzh.EasyQuery.Db.DbQueryBuilder.ProcessScalarValue(Korzh.EasyQuery.Condition,System.String,EasyData.DataType,Korzh.EasyQuery.ScalarExprOptions)](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquerybuilder-class) method to get the result. | 
| GetGroupByExpr([QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, [SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the column's expression using in GROUP BY clause. | 
| GetOrderByExpr([QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, [SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the columns expression for ORDER BY clause. | 
| GetParamExpr(`string` id) | `string` | Gets the parameter expression. | 
| GetSelectExpr([QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, [SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the columns expression for SELECT clause. | 
| ProcessDefaultMacros(`StringBuilder` sb, `bool` quoting = False) | `void` | Processes the default macros such as ${{Today}}, ${{True}} and others. | 
| ProcessMacros([Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) cnd, `StringBuilder` sb, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, [ScalarExprOptions](/api-reference/korzh-easyquery/korzh-easyquery-namespace/scalarexproptions-enum) exprOptions) | `void` | Processes the macro values (both user-defined and default) | 
| ProcessScalarValue([Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) cnd, `string` value, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, [ScalarExprOptions](/api-reference/korzh-easyquery/korzh-easyquery-namespace/scalarexproptions-enum) exprOptions) | `string` | Processes the scalar value and returns SQL (or other query language) expression. | 
| ResetParamsIfNeeded() | `void` | Reset the list of parameters if its necessary | 
| SetExtraParams([QueryParamList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) extraParams) | `void` | Sets the list of extra parameters (mainly for sub-queries) |