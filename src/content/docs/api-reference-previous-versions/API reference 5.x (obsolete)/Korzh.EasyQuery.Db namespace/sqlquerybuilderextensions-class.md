---
title: SqlQueryBuilderExtensions class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Db namespace/sqlquerybuilderextensions-class
---


Contains several extension method used in SqlQueryBulder (and, possibly, other query builders as well)
```csharp
public static class Korzh.EasyQuery.Db.SqlQueryBuilderExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CollectUsedTables(<span style='color: blue'>this</span> `Condition` condition, `TableList` usedTables) | Collects the tables used by this condition and adds them to the list passed in usedTables parameter | 
| `String` | GetSqlExpr(<span style='color: blue'>this</span> `EqExpression` expr, `DbQueryFormats` formats, `SqlExtras` extras = <span style='color: blue'>null</span>) | Gets the SQL expression of the [Korzh.EasyQuery.EqExpression](/api-reference-5x/korzh-easyquery-namespace/eqexpression-class) object. | 
| `void` | GetUsedTables(<span style='color: blue'>this</span> `EqExpression` expr, `TableList` tables) | Add the tables used in this expression into the list. |