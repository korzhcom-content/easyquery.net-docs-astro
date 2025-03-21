---
title: EntitySqlStatement class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/entitysqlstatement-class
---


Represents the result of performing BuildSQL command.
```csharp
public class Korzh.EasyQuery.Db.EntitySqlStatement
    : QueryBuilderResult

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | needGroupBy |  | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | EntitySql | Gets the "entity SQL" (for Entity Framework). | 
| `SqlExtraClauses` | ExtraClauses | Gets the [Korzh.EasyQuery.Db.SqlExtraClauses](/api-reference-4x/korzh-easyquery-db-namespace/sqlextraclauses-class) object which defines some extra clauses of generated query. | 
| `DbQueryFormats` | Formats | Gets the [Korzh.EasyQuery.Db.DbQueryFormats](/api-reference-4x/korzh-easyquery-db-namespace/dbqueryformats-class) object in the parent query. | 
| `String` | FromClause | Gets the text of FROM clause. | 
| `String` | GroupClause | Gets the text of GROUP BY clause. | 
| `String` | HavingClause | Gets the text of HAVING clause. | 
| `Boolean` | NeedGroupBy | Gets a value indicating whether GROUP BY section is necessary in result SQL. | 
| `String` | OrderClause | Gets the text of ORDER BY clause. | 
| `ResultSetPortion` | Portion | Allows to specify a portion of result set to return. | 
| `DbQuery` | Query | Gets the query. | 
| `ResultEntity` | RootEntity | Gets the root (first) table used in query. | 
| `String` | SelectClause | Gets the text of SELECT clause. | 
| `String` | SQL | Gets the text of result SQL statement. | 
| `String` | WhereClause | Gets the text of WHERE clause. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddCondition(`String` s) | Adds text of some condition to WHERE clause. | 
| `void` | AddHavingCondition(`String` s) | Adds text of some condition to HAVING clause. | 
| `void` | AddToAppropriateJoin(`Table` table, `String` condExpr) |  | 
| `void` | AddToHavingClause(`String` s) | Adds some text to HAVING clause. | 
| `void` | AddToWhereClause(`String` s) | Adds some text to WHERE clause. | 
| `void` | ClearAll() | Clears all clauses. | 
| `void` | ClearHavingClause() | Clears the HAVING clause. | 
| `void` | ClearWhereClause() | Clears the WHERE clause. | 
| `String` | GetSql(`String` selectExpr, `String` orderExpr) | Gets the SQL statement with custom SELECT and ORDER BY clauses. | 
| `String` | GetStatement() | Returns the statement (SQL, filter expression, etc - depending on the concrete QueryBuilderResult type). | 
| `void` | SetRootEntity(`DbEntity` entity) |  | 
| `String` | ToString() | Returns a `System.String` that represents this instance. |