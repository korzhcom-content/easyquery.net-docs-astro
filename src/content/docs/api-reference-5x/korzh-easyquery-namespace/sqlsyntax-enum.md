---
title: SqlSyntax enum
slug: api-reference-5x/korzh-easyquery-namespace/sqlsyntax-enum
sidebar:
  order: 100
---

Represents types of SQL syntax.
```csharp
public enum Korzh.EasyQuery.SqlSyntax
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | SQL1 | Old SQL standard also known as SQL-88 | 
| `1` | SQL2 | More new SQL standard also known as SQL-92 | 
| `2` | Oracle | SQL syntax used in Oracle | 
| `3` | EntitySQL | Entity SQL syntax |
