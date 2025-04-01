---
title: MergeTypesStrategy enum
slug: >-
  api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/mergetypesstrategy-enum
sidebar:
  order: 100
---

Represents the strategy of merging of two types
```csharp
public enum Korzh.EasyQuery.Linq.MergeTypesStrategy
    : Enum

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| AllProperties | `0` | All properties in both types will go into result type | 
| UsedProperties | `1` | Only used properties will be merged |
