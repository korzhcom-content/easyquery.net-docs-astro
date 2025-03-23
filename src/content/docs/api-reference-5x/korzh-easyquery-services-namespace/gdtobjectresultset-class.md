---
title: GdtObjectResultSet class
slug: api-reference-5x/korzh-easyquery-services-namespace/gdtobjectresultset-class
---


Represents result set which can be easly convertend into Google's DataTable format
```csharp
public class Korzh.EasyQuery.Services.GdtObjectResultSet
    : GdtResultSet, IEqResultSet

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddRow(`Object` item, `IEnumerable<PropertyInfo>` properties) | Adds a new row to the result set and fills it with the data from the list of properties. |