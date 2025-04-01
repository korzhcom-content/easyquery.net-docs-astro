---
title: ChangeType enum
slug: api-reference-4x/korzh-easyquery-namespace/changetype-enum
sidebar:
  order: 100
---
# ChangeType enum

Represents type of change that occured
```csharp
public enum Korzh.EasyQuery.ChangeType
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | Total | Total change | 
| `1` | Addition | New item was added | 
| `2` | Removal | Some item was removed | 
| `3` | Update | Some item was changed |
