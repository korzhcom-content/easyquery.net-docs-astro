---
title: ISqlExpression interface
slug: api-reference-4x/korzh-easyquery-db-namespace/isqlexpression-interface
---


Used for expressions in [Korzh.EasyQuery.Db.DbQuery](/api-reference-4x/korzh-easyquery-db-namespace/dbquery-class)
```csharp
public interface Korzh.EasyQuery.Db.ISqlExpression
    : IDbCondition

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetSqlExpr(`DbQueryFormats` formats, `SqlExtraClauses` extraClauses = <span style='color: blue'>null</span>) | Gets the SQL expression. |