---
title: ColumnAliasesUsage enum
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/columnaliasesusage-enum
---
Represents the conditions when the result SQL should include column aliases.
```csharp
public enum Korzh.EasyQuery.Db.ColumnAliasesUsage
    : Enum

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| Never | `0` | Never use column aliases | 
| IfNecessary | `1` | Use column aliases for calculated columns or columns with aggregate functions | 
| Always | `2` | Always use column aliases |