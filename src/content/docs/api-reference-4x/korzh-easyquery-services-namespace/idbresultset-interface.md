---
title: IDbResultSet interface
slug: api-reference-4x/korzh-easyquery-services-namespace/idbresultset-interface
---

```csharp
public interface Korzh.EasyQuery.Services.IDbResultSet
    : IEqResultSet, IDictionary<String, Object>, ICollection<KeyValuePair<String, Object>>, IEnumerable<KeyValuePair<String, Object>>, IEnumerable

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddRow(`IDataReader` dataReader) |  |