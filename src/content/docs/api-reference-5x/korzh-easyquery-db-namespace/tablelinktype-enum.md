---
title: TableLinkType enum
slug: api-reference-5x/korzh-easyquery-db-namespace/tablelinktype-enum
sidebar:
  order: 100
---

Type of the link (inner, outer left, outer right or full)
```csharp
public enum Korzh.EasyQuery.Db.TableLinkType
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | Inner | Inner join. | 
| `1` | Left | Left outer join. | 
| `2` | Right | Right outer join. | 
| `3` | Full | Full join. | 
| `4` | Cross | Cross join. | 
| `5` | CrossApply | Cross apply |
