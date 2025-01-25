---
title: LinkCondType enum
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/linkcondtype-enum
---
Represents the type of linking condition (field-to-field, field-to-expression, etc.)
```csharp
public enum Korzh.EasyQuery.Db.LinkCondType
    : Enum

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| FieldField | `0` | field-to-field link condition. | 
| FieldExpr | `1` | field-to-expression link condition. | 
| ExprField | `2` | expression-to-field link condition. | 
| ExprExpr | `3` | expression-to-expression link condition. | 
| CustomExpr | `4` | link condition totally defined by user. |