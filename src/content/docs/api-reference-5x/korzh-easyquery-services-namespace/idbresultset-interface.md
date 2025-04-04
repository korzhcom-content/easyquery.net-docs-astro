---
title: IDbResultSet interface
slug: api-reference-5x/korzh-easyquery-services-namespace/idbresultset-interface
sidebar:
  order: 100
---

Represents an extension of IEqResultSet interface which also contains a function for adding a row.  Implements the [Korzh.EasyQuery.Services.IEqResultSet](/easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/ieqresultset-interface)
```csharp
public interface Korzh.EasyQuery.Services.IDbResultSet
    : IEqResultSet

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddRow(`IDataReader` dataReader) | Adds a new row and fills it from the data reader. |
