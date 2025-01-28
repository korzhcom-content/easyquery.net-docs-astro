---
title: MergeTypesStrategy enum
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery.Linq namespace/mergetypesstrategy-enum
---


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