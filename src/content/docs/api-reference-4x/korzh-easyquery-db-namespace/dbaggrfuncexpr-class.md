---
title: DbAggrFuncExpr class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbaggrfuncexpr-class
sidebar:
  order: 100
---

Represents an expression with aggregate function
```csharp
public class Korzh.EasyQuery.Db.DbAggrFuncExpr
    : AggrFuncExpr, ISqlExpression, IDbCondition

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | IsAggregate | Gets a value indicating whether this expression is aggregate. | 
| `String` | TypeName | Non-static version of [Korzh.EasyQuery.Db.DbAggrFuncExpr.STypeName](///////////////easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbaggrfuncexpr-class) property. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetSqlExpr(`DbQueryFormats` formats, `SqlExtraClauses` extraClauses = <span style='color: blue'>null</span>) | Gets the text representation of expression used in SQL. | 
| `void` | GetUsedTables(`TableList` tables) | Add the tables used in this expression in the list. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the expression type. |
