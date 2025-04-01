---
title: FilterExpression class
slug: api-reference-4x/korzh-easyquery-db-namespace/filterexpression-class
sidebar:
  order: 100
---

Represents the result of performing BuildSQL command.
```csharp
public class Korzh.EasyQuery.Db.FilterExpression
    : QueryBuilderResult

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `SqlExtraClauses` | ExtraClauses | Gets the [Korzh.EasyQuery.Db.SqlExtraClauses](///easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/sqlextraclauses-class) object which defines some extra clauses of generated query. | 
| `String` | FilterExpr | Gets the filter expression. | 
| `DbQueryFormats` | Formats | Gets the [Korzh.EasyQuery.Db.DbQueryFormats](///easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbqueryformats-class) object in the parent query. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddCondition(`String` s) | Adds text of some condition to WHERE clause. | 
| `void` | AddToWhereClause(`String` s) | Adds some text to WHERE clause. | 
| `void` | ClearAll() | Clears all clauses. | 
| `void` | ClearWhereClause() | Clears the WHERE clause. | 
| `String` | GetFilterExpr() | Gets the filter expression. | 
| `String` | GetStatement() | Returns the statement (SQL, filter expression, etc - depending on the concrete QueryBuilderResult type). |
