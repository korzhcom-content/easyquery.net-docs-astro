---
title: OperatorGroupKind enum
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgroupkind-enum
sidebar:
  order: 100
---

Represents different groups of operators
```csharp
public enum Korzh.EasyQuery.OperatorGroupKind
    : Enum

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| Common | `1` | The most common operators (like "equals", "less than", etc.) | 
| String | `2` | String operators (like "starts with", "contains", etc.) | 
| DateTime | `3` | Date/time operators | 
| Boolean | `4` | Boolean operators ("is true", "is not true") | 
| Custom | `99` | Custom group (all operators are listed directly) |
