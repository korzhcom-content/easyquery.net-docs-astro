---
title: SqlQueryBuilderExtensions class
slug: api-reference/Korzh.EasyQuery.Db/Korzh.EasyQuery.Db namespace/sqlquerybuilderextensions-class
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
| CollectUsedTables(<span style='color: blue'>this</span> [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) condition, [TableList](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelist-class) usedTables) | `void` | Collects the tables used by this condition and adds them to the list passed in usedTables parameter | 
| GetSqlExpr(<span style='color: blue'>this</span> [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr, [SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats, [SqlExtras](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlextras-class) extras = <span style='color: blue'>null</span>) | `string` | Gets the SQL expression of the [Korzh.EasyQuery.EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) object. | 
| GetUsedTables(<span style='color: blue'>this</span> [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr, [TableList](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelist-class) tables) | `void` | Add the tables used in this expression into the list. |