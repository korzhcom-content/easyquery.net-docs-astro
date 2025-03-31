---
title: OperatorGroupKind enum
slug: api-reference-5x/korzh-easyquery-namespace/operatorgroupkind-enum
---

Represents different groups of operators
```csharp
public enum Korzh.EasyQuery.OperatorGroupKind
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `1` | Common | The most common operators (like "equals", "less than", etc.) | 
| `2` | String | String operators (like "starts with", "contains", etc.) | 
| `3` | DateTime | Date/time operators | 
| `4` | Boolean | Boolean operators ("is true", "is not true") | 
| `99` | Custom | Custom group (all operators are listed directly) |