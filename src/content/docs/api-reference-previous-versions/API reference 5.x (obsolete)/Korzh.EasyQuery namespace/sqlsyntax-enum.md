---
title: SqlSyntax enum
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/sqlsyntax-enum
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