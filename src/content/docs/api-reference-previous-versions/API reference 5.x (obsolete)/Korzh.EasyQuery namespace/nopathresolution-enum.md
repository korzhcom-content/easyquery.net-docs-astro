---
title: NoPathResolution enum
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/nopathresolution-enum
---


The values of this type will tell Query object how to  resolve the situation when two tables does not have a path between them
```csharp
public enum Korzh.EasyQuery.NoPathResolution
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | ThrowException | Throw an exception | 
| `1` | CartesianProduct | create SQL with Cartesian product of selected  tables if there is no link between them; | 
| `2` | FlexibleModel | shrink model automatically. When some table is  selected - we show to the user only those tables which are linked with selected one. |