---
title: NoPathResolution enum
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/nopathresolution-enum
---

The values of this type will tell Query object how to  resolve the situation when two tables does not have a path between them
```csharp
public enum Korzh.EasyQuery.NoPathResolution
    : Enum

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| ThrowException | `0` | Throw an exception | 
| CartesianProduct | `1` | create SQL with Cartesian product of selected  tables if there is no link between them; | 
| FlexibleModel | `2` | shrink model automatically. When some table is  selected - we show to the user only those tables which are linked with selected one. |