---
title: IQueryStore interface
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-services-namespace/iquerystore-interface
sidebar:
  order: 100
---

Defines the basic operations of a query store.
```csharp
public interface Korzh.EasyQuery.Services.IQueryStore

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddQueryAsync([Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query) | `Task`&lt;`bool`&gt; | Adds a new query to the storage. | 
| GetAllQueriesAsync(`string` modelId) | `Task`&lt;`IEnumerable`&lt;[QueryListItem](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/querylistitem-class)&gt;&gt; | Gets the list of all queries available in the storage for the specified model. | 
| LoadQueryAsync([Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query, `string` queryId) | `Task`&lt;`bool`&gt; | Loads the query from the storage | 
| RemoveQueryAsync(`string` modelId, `string` queryId) | `Task`&lt;`bool`&gt; | Removes from the storage the query specified by model ID and query ID. | 
| SaveQueryAsync([Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query, `bool` createIfNotExists = True) | `Task`&lt;`bool`&gt; | Saves the query passed in the parameter. |
