---
title: DataKind enum
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum
---


Represents expression kinds.
```csharp
public enum Korzh.EasyQuery.DataKind
    : Enum

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| Scalar | `0` | The most simple (and most used) kind of expressions.  Represents one value of some type: one constant or one attribute (field). | 
| Const | `1` |  | 
| Attribute | `2` |  | 
| List | `4` | Represents a list of scalar values. | 
| Query | `5` | Special expression kind which represents a sub query. | 
| ParentColumn | `6` | Special expression kind which represents a binding to parent column. |