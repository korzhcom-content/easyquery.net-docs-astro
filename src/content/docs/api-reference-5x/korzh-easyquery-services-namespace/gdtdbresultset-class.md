---
title: GdtDbResultSet class
slug: api-reference-5x/korzh-easyquery-services-namespace/gdtdbresultset-class
sidebar:
  order: 100
---

Represents result set which can be easly convertend into Google's DataTable format
```csharp
public class Korzh.EasyQuery.Services.GdtDbResultSet
    : GdtResultSet, IEqResultSet, IDbResultSet

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddRow(`IDataReader` dataReader) | Adds a new row to the result set and fills its content from the data reader. |
