---
title: MergeTypesStrategy enum
slug: api-reference-4x/korzh-easyquery-linq-namespace/mergetypesstrategy-enum
sidebar:
  order: 100
---
# MergeTypesStrategy enum

Represents the strategy of merging of two types
```csharp
public enum Korzh.EasyQuery.Linq.MergeTypesStrategy
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | AllProperties | All properties in both types will go into result type | 
| `1` | UsedProperties | Only used properties will be merged |
