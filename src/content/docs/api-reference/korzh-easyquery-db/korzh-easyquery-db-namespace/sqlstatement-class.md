---
title: SqlStatement class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlstatement-class
---


Represents the result of performing BuildSQL command.
```csharp
public class Korzh.EasyQuery.Db.SqlStatement
    : QueryStatement

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SqlStatement([SqlQueryBuilder](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlquerybuilder-class) builder) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.SqlStatement](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlstatement-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| BuiltSQL | `string` | Get the text of the genereted SQL statement | 
| FromClause | `string` | Gets the text of FROM clause. | 
| GroupClause | `string` | Gets the text of GROUP BY clause. | 
| HasChunkLimit | `bool` | Gets a value indicating whether the result query statement includes paging (offset/fetch/limit) clauses. | 
| HavingClause | `string` | Gets the text of HAVING clause. | 
| OrderClause | `string` | Gets the text of ORDER BY clause. | 
| Query | [DbQuery](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class) | Gets the query. | 
| RootNode | [ResultTableNode](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/resulttablenode-class) | Gets or sets the root table node in the generated SQL statement. | 
| RowNumberAlias | `string` | Gets the alias for Total Records column.  This option works only if <see cref="P:Korzh.EasyQuery.Db.SqlFormats.LegacyPaging"></see> is true. | 
| SelectClause | `string` | Gets the text of SELECT clause. | 
| SQL | `string` | Gets the text of result SQL statement. | 
| WhereClause | `string` | Gets the text of WHERE clause. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddCondition(`string` s) | `void` | Adds text of some condition to WHERE clause. | 
| AddHavingCondition(`string` s) | `void` | Adds text of some condition to HAVING clause. | 
| AddToHavingClause(`string` s) | `void` | Adds some text to HAVING clause. | 
| AddToWhereClause(`string` s) | `void` | Adds some text to WHERE clause. | 
| ClearAll() | `void` |  | 
| GetAsSection() | `string` |  | 
| GetCountTableAlias() | `string` |  | 
| GetSql(`string` selectExpr, `string` orderExpr) | `string` | Gets the SQL statement with custom SELECT and ORDER BY clauses. | 
| GetStatement() | `string` | Returns the statement (SQL, filter expression, etc - depending on the concrete QueryBuilderResult type). | 
| ToString() | `string` | Returns a `System.String` that represents this instance. |