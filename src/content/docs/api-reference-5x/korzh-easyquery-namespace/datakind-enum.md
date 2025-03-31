---
title: DataKind enum
slug: api-reference-5x/korzh-easyquery-namespace/datakind-enum
---

Represents expression kinds.
```csharp
public enum Korzh.EasyQuery.DataKind
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | Scalar | The most simple (and most used) kind of expressions.  Represents one value of some type: one constant or one attribute (field). | 
| `1` | Const |  | 
| `2` | Attribute |  | 
| `4` | List | Represents a list of scalar values. | 
| `5` | Query | Special expression kind which represents a sub query. |