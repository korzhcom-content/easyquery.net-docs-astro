---
title: FileQueryStore class
slug: api-reference-5x/korzh-easyquery-services-namespace/filequerystore-class
sidebar:
  order: 100
---

Represents the implementation of IQueryStore which store queries on the file system.  Implements the [Korzh.EasyQuery.Services.IQueryStore](/easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/iquerystore-interface)
```csharp
public class Korzh.EasyQuery.Services.FileQueryStore
    : IQueryStore

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Task<Boolean>` | AddQueryAsync(`Query` query) | Adds a new query to the storage. | 
| `Task<IEnumerable<QueryListItem>>` | GetAllQueriesAsync(`String` modelId) | Returns the list of all queries for specified model. | 
| `String` | GetQueryFileText(`String` modelId, `String` queryId) | Read the content of the query file and returns it as a string. | 
| `Task<Boolean>` | LoadQueryAsync(`Query` query, `String` queryId) | Loads the query from the storage | 
| `Task<Boolean>` | RemoveQueryAsync(`String` modelId, `String` queryId) | Removes from the storage the query specified by model ID and query ID. | 
| `Task<Boolean>` | SaveQueryAsync(`Query` query, `Boolean` createIfNotExists = True) | Saves the query to the storage. |
