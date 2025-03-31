---
title: OrderByStyles enum
slug: api-reference-4x/korzh-easyquery-namespace/orderbystyles-enum
---

Represents the way fields appear in ORDER BY clause
```csharp
public enum Korzh.EasyQuery.OrderByStyles
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | Numbers | Fields are represented by its number in SELECT clause | 
| `1` | Names | Fields are represented by its full name (e.g. ORDERS.SALEDATE) | 
| `2` | Aliases | Field are represented by its alias |