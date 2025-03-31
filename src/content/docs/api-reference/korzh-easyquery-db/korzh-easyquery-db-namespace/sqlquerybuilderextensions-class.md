---
title: SqlQueryBuilderExtensions class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlquerybuilderextensions-class
---

Contains several extension method used in SqlQueryBulder (and, possibly, other query builders as well)
```csharp
public static class Korzh.EasyQuery.Db.SqlQueryBuilderExtensions

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CollectUsedTables(<span style='color: blue'>this</span> [Condition](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) condition, [TableList](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelist-class) usedTables) | `void` | Collects the tables used by this condition and adds them to the list passed in usedTables parameter | 
| GetSqlExpr(<span style='color: blue'>this</span> [EqExpression](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr, [SqlFormats](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats, [SqlExtras](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlextras-class) extras = <span style='color: blue'>null</span>) | `string` | Gets the SQL expression of the [Korzh.EasyQuery.EqExpression](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) object. | 
| GetUsedTables(<span style='color: blue'>this</span> [EqExpression](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr, [TableList](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelist-class) tables) | `void` | Add the tables used in this expression into the list. |