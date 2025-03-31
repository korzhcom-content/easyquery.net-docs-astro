---
title: ParentEntityAttrExpr class
slug: api-reference-4x/korzh-easyquery-db-namespace/parententityattrexpr-class
---

Represents parent entity attribute expression
```csharp
public class Korzh.EasyQuery.Db.ParentEntityAttrExpr
    : DbEntityAttrExpr, ISqlExpression, IDbCondition

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | IsParentExpr | Gets a value indicating whether this instance is a parent expression. | 
| `String` | TypeName | Non-static version of [Korzh.EasyQuery.Db.ParentEntityAttrExpr.STypeName](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/parententityattrexpr-class) property. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetSqlExpr(`DbQueryFormats` formats, `SqlExtraClauses` extraClauses = <span style='color: blue'>null</span>) | Gets the SQL expression of the [Korzh.EasyQuery.Db.ParentEntityAttrExpr](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/parententityattrexpr-class) object. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the [Korzh.EasyQuery.EqExpression](//easyquery/docs/api-reference-4x/korzh-easyquery-namespace/eqexpression-class) type. |