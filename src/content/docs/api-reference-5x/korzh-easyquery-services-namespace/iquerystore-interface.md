---
title: IQueryStore interface
slug: api-reference-5x/korzh-easyquery-services-namespace/iquerystore-interface
---


Defines the basic operations of a query store.
```csharp
public interface Korzh.EasyQuery.Services.IQueryStore

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Task<Boolean>` | AddQueryAsync(`Query` query) | Adds a new query to the storage. | 
| `Task<IEnumerable<QueryListItem>>` | GetAllQueriesAsync(`String` modelId) | Gets the list of all queries available in the storage for the specified model. | 
| `Task<Boolean>` | LoadQueryAsync(`Query` query, `String` queryId) | Loads the query from the storage | 
| `Task<Boolean>` | RemoveQueryAsync(`String` modelId, `String` queryId) | Removes from the storage the query specified by model ID and query ID. | 
| `Task<Boolean>` | SaveQueryAsync(`Query` query, `Boolean` createIfNotExists = True) | Saves the query passed in the parameter. |