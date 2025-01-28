---
title: LinkCondType enum
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery.Db namespace/linkcondtype-enum
---


Represents the type of linking condition (field-to-field, field-to-expression, etc.)
```csharp
public enum Korzh.EasyQuery.Db.LinkCondType
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | FieldField | field-to-field link condition. | 
| `1` | FieldExpr | field-to-expression link condition. | 
| `2` | ExprField | expression-to-field link condition. | 
| `3` | ExprExpr | expression-to-expression link condition. | 
| `4` | CustomExpr | link condition totally defined by user. |