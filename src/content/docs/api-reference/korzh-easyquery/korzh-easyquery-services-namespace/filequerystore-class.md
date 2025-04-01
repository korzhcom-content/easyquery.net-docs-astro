---
title: FileQueryStore class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-services-namespace/filequerystore-class
sidebar:
  order: 100
---

Represents the implementation of IQueryStore which store queries on the file system.  Implements the [Korzh.EasyQuery.Services.IQueryStore](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/iquerystore-interface)
```csharp
public class Korzh.EasyQuery.Services.FileQueryStore
    : IQueryStore

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| FileQueryStore([FileQueryStoreSettings](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/filequerystoresettings-class) settings) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.FileQueryStore](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/filequerystore-class) class. | 
| FileQueryStore(`string` dataPath) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.FileQueryStore](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/filequerystore-class) class. | 
| FileQueryStore(`IOptions`&lt;[FileQueryStoreSettings](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/filequerystoresettings-class)&gt; options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.FileQueryStore](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/filequerystore-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddQueryAsync([Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query) | `Task`&lt;`bool`&gt; | Adds a new query to the storage. | 
| FilterFileNames(`IEnumerable`&lt;`string`&gt; fileNames) | `IEnumerable`&lt;`string`&gt; | Filters files on [Korzh.EasyQuery.Services.FileQueryStore.GetAllQueriesAsync(System.String)](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/filequerystore-class) | 
| FilterQueryItems(`IEnumerable`&lt;[QueryListItem](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/querylistitem-class)&gt; queries) | `IEnumerable`&lt;[QueryListItem](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/querylistitem-class)&gt; | Filters queries on [Korzh.EasyQuery.Services.FileQueryStore.GetAllQueriesAsync(System.String)](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/filequerystore-class) | 
| GetAllQueriesAsync(`string` modelId) | `Task`&lt;`IEnumerable`&lt;[QueryListItem](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/querylistitem-class)&gt;&gt; | Returns the list of all queries for specified model. | 
| GetFileNameByQueryId(`string` queryId) | `string` | Gets the file name by queryId | 
| GetQueryFileText(`string` modelId, `string` queryId) | `string` | Read the content of the query file and returns it as a string. | 
| GetQueryIdByFileName(`string` fileName) | `string` | Gets queryId by file name. | 
| LoadQueryAsync([Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query, `string` queryId) | `Task`&lt;`bool`&gt; | Loads the query's content from the storage | 
| RemoveQueryAsync(`string` modelId, `string` queryId) | `Task`&lt;`bool`&gt; | Removes from the storage the query specified by model ID and query ID. | 
| SaveQueryAsync([Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query, `bool` createIfNotExists = True) | `Task`&lt;`bool`&gt; | Saves the query to the storage. | 
| TuneQuery([Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query, `bool` isAdding) | `void` | Tunes query before adding or saving |
