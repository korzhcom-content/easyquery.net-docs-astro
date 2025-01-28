---
title: IDbResultSet interface
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery.Services namespace/idbresultset-interface
---


```csharp
public interface Korzh.EasyQuery.Services.IDbResultSet
    : IEqResultSet, IDictionary<String, Object>, ICollection<KeyValuePair<String, Object>>, IEnumerable<KeyValuePair<String, Object>>, IEnumerable

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddRow(`IDataReader` dataReader) |  |