---
title: OrderByStyles enum
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/orderbystyles-enum
---


Represents the way fields appear in ORDER BY clause
```csharp
public enum Korzh.EasyQuery.Db.OrderByStyles
    : Enum

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| Numbers | `0` | Fields are represented by its number in SELECT clause | 
| Names | `1` | Fields are represented by its full name (e.g. ORDERS.SALEDATE) | 
| Aliases | `2` | Field are represented by its alias |