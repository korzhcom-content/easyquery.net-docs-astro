---
title: FilterExpression class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/filterexpression-class
---
Represents the result of performing BuildSQL command.
```csharp
public class Korzh.EasyQuery.Db.FilterExpression
    : QueryStatement

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| FilterExpression([FilterExpressionBuilder](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/filterexpressionbuilder-class) builder) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.SqlStatement](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlstatement-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ExtraClauses | [SqlExtras](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlextras-class) | Gets the [Korzh.EasyQuery.Db.SqlExtras](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlextras-class) object which defines some extra clauses of generated query. | 
| FilterExpr | `string` | Gets the filter expression. | 
| Formats | [SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) | Gets the [Korzh.EasyQuery.Db.SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) object in the parent query. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddCondition(`string` s) | `void` | Adds text of some condition to WHERE clause. | 
| AddToWhereClause(`string` s) | `void` | Adds some text to WHERE clause. | 
| ClearAll() | `void` | Clears all clauses. | 
| ClearWhereClause() | `void` | Clears the WHERE clause. | 
| GetStatement() | `string` | Returns the statement (SQL, filter expression, etc - depending on the concrete QueryBuilderResult type). |