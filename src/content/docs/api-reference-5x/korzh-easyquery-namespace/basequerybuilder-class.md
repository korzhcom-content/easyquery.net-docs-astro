---
title: BaseQueryBuilder class
slug: api-reference-5x/korzh-easyquery-namespace/basequerybuilder-class
---

Base class for all query builder classes.
```csharp
public abstract class Korzh.EasyQuery.BaseQueryBuilder
    : IQueryBuilder

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | _isParamMode | This property indicated whethere generated SQL should include parameters instead of real values. | 
| `String` | condFieldName | The name of the field in currently processing condition (used for generation of parameter names) | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `QueryFormats` | Formats | Gets the formats of the result query statement.  This is a structure which allows you to set different formatting option of generated SQL (or other query language) statements.  For more information please read [Korzh.EasyQuery.QueryFormats](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/queryformats-class) reference. | 
| `DataModel` | Model | Gets the model. An instance of [Korzh.EasyQuery.DataModel](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/datamodel-class) class or one of its descendants (for example DbModel) | 
| `Query` | Query | Gets the query object associated with the builder. | 
| `QueryParamList` | QueryParams | Gets the list of query parameters (for parameterized queries) | 
| `Type` | ResultType | Gets the the result type. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | CalcScalarExpr(`Condition` cnd, `String` value, `DataType` dataType, `ScalarExprOptions` exprOptions) | Calculates the scalar value and returns SQL (or other query language) expression.  This function replaces all macros with their real values first and then call [Korzh.EasyQuery.BaseQueryBuilder.ProcessScalarValue(Korzh.EasyQuery.Condition,System.String,Korzh.EasyQuery.DataType,Korzh.EasyQuery.ScalarExprOptions)](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/basequerybuilder-class) method to get the result. | 
| `QueryFormats` | CreateFormats() | Creates [Korzh.EasyQuery.QueryFormats](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/queryformats-class) object compatible with this type of query builder.  Should be overriden in descendant classes | 
| `QueryBuilderResult` | CreateResult() | Creates the result object. | 
| `String` | GetParamExpr(`String` id) | Gets the parameter expression. | 
| `QueryBuilderResult` | GetResult() | Gets the result object.  It could be some SQL statement or and an IQueryable object created by LINQ query builder. | 
| `void` | ProcessDefaultMacros(`StringBuilder` sb, `Boolean` quoting = False) | Processes the default macros such as ${{Today}}, ${{True}} and others. | 
| `void` | ProcessMacros(`Condition` cnd, `StringBuilder` sb, `DataType` dataType, `ScalarExprOptions` exprOptions) | Processes the macro values (both user-defined and default) | 
| `String` | ProcessScalarValue(`Condition` cnd, `String` value, `DataType` dataType, `ScalarExprOptions` exprOptions) | Processes the scalar value and returns SQL (or other query language) expression. | 
| `void` | ResetParamsIfNeeded() | Reset the list of parameters if its necessary | 
| `void` | SetExtraParams(`QueryParamList` extraParams) | Sets the list of extra parameters (mainly for sub-queries) | 
| `String` | ToString() | Returns a `System.String` that represents this instance. |