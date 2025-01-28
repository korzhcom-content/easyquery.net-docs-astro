---
title: GdtDbResultSet class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Services namespace/gdtdbresultset-class
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