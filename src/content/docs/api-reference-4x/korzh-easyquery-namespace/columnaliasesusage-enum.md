---
title: ColumnAliasesUsage enum
slug: api-reference-4x/korzh-easyquery-namespace/columnaliasesusage-enum
---


Represents the conditions when the result SQL should include column aliases.
```csharp
public enum Korzh.EasyQuery.ColumnAliasesUsage
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | Never | Never use column aliases | 
| `1` | IfNecessary | Use column aliases for calculated columns or columns with aggregate functions | 
| `2` | Always | Always use column aliases |