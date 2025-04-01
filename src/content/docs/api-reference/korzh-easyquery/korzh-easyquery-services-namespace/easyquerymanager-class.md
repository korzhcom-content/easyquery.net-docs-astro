---
title: EasyQueryManager class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class
sidebar:
  order: 100
---

Provides basic functionality for managing different EasyQuery operations and to process the AJAX requests from EasyQuery JavaScript widgets.  This class is abstract and it implements only the most common features.  The descendants of this class provides more concrete implementation of the model loading and query generation
```csharp
public abstract class Korzh.EasyQuery.Services.EasyQueryManager
    : IDisposable

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyQueryManager() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyQueryManager](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) class. | 
| EasyQueryManager([EasyQueryOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyQueryManager](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) class. | 
| EasyQueryManager([EasyQueryOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `IServiceProvider` services) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyQueryManager](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| PreFetchTuners | `List`&lt;[IEasyQueryManagerTuner](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieasyquerymanagertuner-interface)&gt; | The list of tuners which are called before the query execution | 
| Services | `IServiceProvider` | A reference to the `System.IServiceProvider` object which allows you to access the DI container | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| CachingService | [IEqCachingService](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqcachingservice-interface) | Get or sets a caching service | 
| Chunk | [ChunkSettings](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/chunksettings-class) | Holds different pagination settings. | 
| ClientData | `Dictionary`&lt;`string`, `object`&gt; | Gets a dictionary which contains all the data received from the client-side. | 
| DefaultModelId | `string` | Gets or sets the default name of the model.  This model will loaded automatically if the name was not indicated explicitly | 
| Meta | [DataFetchMeta](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/datafetchmeta-class) | Defines some meta-data collected on query processing/execution (like like Total Number of Records). | 
| Model | [DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets the current model.  The value of this property is set on the first call of GetModel method. | 
| ModelIsLoaded | `bool` | Determines wether model is loaded | 
| ModelLoader | [IModelLoader](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/imodelloader-interface) | Gets or sets the model loader - an implementation of [Korzh.EasyQuery.Services.IModelLoader](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/imodelloader-interface) inteface. | 
| ModelTuner | `Action`&lt;[EasyQueryManager](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)&gt; | Gets or sets the model tuner - a function which allows you to make some changes in the model after its loading. | 
| Options | [EasyQueryOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) | Gets the manager's options. | 
| Query | [Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets the current query.  The value of this property is set on the first call of GetQueryAsync method. | 
| QueryBuilder | [IQueryBuilder](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerybuilder-interface) | Returns QueryBuilder associated with current Query | 
| QueryStore | [IQueryStore](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/iquerystore-interface) | Gets or sets the query store - an object which covers all saving/loading operations for queries. | 
| QueryTuner | `Action`&lt;[EasyQueryManager](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)&gt; | Gets or sets the query tuner - a function which allows you to make some changes in the query after its loading. | 
| ResultSetOptions | [ResultSetOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/resultsetoptions-class) | The global settings for fetching data | 
| SaveNewQueryToStore | `bool` | Determines whether the manager should save a new query into the storage right after the creation. | 
| Settings | `Dictionary`&lt;`string`, `object`&gt; | Gets a dictionary which contains all the settings received from the client-side. | 
| Totals | [TotalsOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/totalsoptions-class) |  | 
| UserId | `string` | Gets or sets the user ID.  This value is used to build the path to the folder where model and query files are stored.  By default it's App_Data/{UserId}/ and App_Data/{UserId}/Queries | 
| ValueListResolvers | `List`&lt;[IValueListResolver](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ivaluelistresolver-interface)&gt; | Gets the list of "value list" resolvers. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddValueListResolver([IValueListResolver](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ivaluelistresolver-interface) valueListResolver) | `void` | Adds the value list resolver to the internal list of list resolvers  which will be used during GetList request processing | 
| ApplyPreFetchTuners() | `void` | Applys all pre execute tuners | 
| BuildQuery([QueryBuilderOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querybuilderoptions-class) options = <span style='color: blue'>null</span>) | [IQueryStatement](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerystatement-interface) | Builds a [Korzh.EasyQuery.IQueryStatement](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerystatement-interface) object by the [Korzh.EasyQuery.Services.EasyQueryManager.Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) and returns the built statement. | 
| CheckModel() | `void` | Checks if the current Model is not null and throws an exception otherwise. | 
| CheckQuery() | `void` | Checks if the current Query is not null and throws an exception otherwise. | 
| CreateModelCore(`string` modelId = <span style='color: blue'>null</span>) | [DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Creates the new DataModel object | 
| CreateQuery() | [Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Creates and initializes a new Query object. | 
| CreateQueryAsync(`string` modelId = <span style='color: blue'>null</span>) | `Task`&lt;[Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class)&gt; | Creates new Query object. | 
| CreateQueryBuilderCore() | [IQueryBuilder](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerybuilder-interface) | Creates an instance of [Korzh.EasyQuery.IQueryBuilder](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerybuilder-interface) | 
| CreateQueryCore() | [Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Creates a new Query object. | 
| Dispose(`bool` disposing) | `void` | Releases unmanaged and - optionally - managed resources. | 
| Dispose() | `void` | Releases unmanaged and - optionally - managed resources. | 
| ExportResultSetAsync([IEqResultSet](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqresultset-interface) data, `string` format, `Stream` stream) | `Task` | Executes the query and exports the result to a specified format.  To run this operation we need to register an appropriate exporter first. | 
| FetchDataAsync() | `Task`&lt;[IEqResultSet](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqresultset-interface)&gt; | Executes the query and returns an object which implments IEqResultSet interface. | 
| FetchDataCoreAsync() | `Task`&lt;[IEqResultSet](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqresultset-interface)&gt; | The actual implemenation of [Korzh.EasyQuery.Services.EasyQueryManager.FetchDataAsync](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) function.  This method is overridden in EasyQueryManager descendants like EasyQueryManagerSql or EasyQueryManagerLinq. | 
| GenerateQueryId(`string` name) | `string` | Generates the query identifier. | 
| GetContentTypeByExportFormat(`string` format) | `string` | Gets the content type by export format. | 
| GetDataExportSettings(`string` format) | [IDataExportSettings](///easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) | Gets the data export settings. | 
| GetListCoreAsync([ListRequestOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class) options) | `Task`&lt;`IEnumerable`&lt;[ListItem](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class)&gt;&gt; | The basic implemenation of GetList action handler. Can be overrided in the derived classes. | 
| GetModelAsync(`string` modelId) | `Task`&lt;[DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class)&gt; | Gets the DbModel object by ID. | 
| GetQueryAsync(`string` modelId, `string` queryId) | `Task`&lt;[Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class)&gt; | Gets the Query object by name. | 
| GetQueryListAsync(`string` modelId) | `Task`&lt;`IEnumerable`&lt;[QueryListItem](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/querylistitem-class)&gt;&gt; | Gets the list of available queries. | 
| GetQueryListCoreAsync(`string` modelId) | `Task`&lt;`IEnumerable`&lt;[QueryListItem](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/querylistitem-class)&gt;&gt; | Basic implementation of [Korzh.EasyQuery.Services.EasyQueryManager.GetQueryListAsync(System.String)](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) method.  This method just calls corresponding function of the QueryStore. Can be overriden in derived classes. | 
| GetValueFromCache(`string` key) | `string` | Gets some string value from session by its key. | 
| GetValueListAsync(`string` modelId, `string` editorId, `IDictionary`&lt;`string`, `string`&gt; options = <span style='color: blue'>null</span>) | `Task`&lt;`IEnumerable`&lt;[ListItem](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class)&gt;&gt; | Returns custom list of values by editorId. This method is usually called by GetList action of EasyQueryController. | 
| InitQueryAsync() | `Task` | Initializes the new query and saves it to the storage (if SaveNewQueryToStore is turned on). | 
| InitQueryCoreAsync() | `Task` | Initializes the new query. Does nothing in the base class. Can be overriden in the derived classes. | 
| JsonToListRequestOptions(`string` optionsJson) | [ListRequestOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class) | Converts JsonDict object to ListRequestOptions | 
| LoadModelAsync(`string` modelId) | `Task` | Loads model by its ID. | 
| LoadModelFromCacheAsync(`string` modelId) | `Task`&lt;`bool`&gt; | Loads DataModel from cache by ID (name) | 
| LoadQueryAsync(`string` modelId, `string` queryId) | `Task` |  | 
| LoadQueryFromCacheAsync(`string` queryId) | `Task`&lt;`bool`&gt; | Loads Query from cache by ID | 
| QueryUpdated() | `void` | Calls [Korzh.EasyQuery.Services.EasyQueryManager.QueryTuner](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) | 
| ReadClientOptions(`JObject` clientOptions) | `void` |  | 
| ReadOneRequestPropertyAsync(`string` modelId, `JsonReader` reader, `string` propName) | `Task` | Read one property from a request's JSON object. | 
| ReadRequestContentFromJsonAsync(`string` modelId, `JsonReader` reader) | `Task` | Reads the content of the client-side request from a JsonReader object. | 
| ReadRequestContentFromTextReaderAsync(`string` modelId, `TextReader` reader) | `Task` | Loads all reaquest's data (like query, options, etc) from the text reader. | 
| RemoveQueryAsync(`string` modelId, `string` queryId) | `Task`&lt;`bool`&gt; | Removes the query. This method uses the functionality provided by the current query store. | 
| SaveModelInCacheAsync() | `Task` | Saves model into cache | 
| SaveQueryInCacheAsync() | `Task` | Saves query into cache | 
| SaveQueryToStoreAsync(`bool` createIfNotExist = True) | `Task`&lt;`bool`&gt; | Saves the current query to the query store. | 
| SaveValueInCache(`string` key, `string` value) | `void` | Stores some string value in cache. | 
| SyncQueryAsync() | `Task` | Synchronizes the query. | 
| SyncQueryCoreAsync() | `Task` | Synchronizes the query. This is the default implementation which can be ovverride in derived classes. | 
| TuneBuilder([IQueryBuilder](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerybuilder-interface) builder) | `void` | Allows to tune the formats of the query builder. The default implementation calls all builder tuners defined in _builderTuners list.  You can override this function in your sub-class to implement some custom behavior. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| RegisterExporter(`string` format, [IDataExporter](///easyquery/docs/api-reference/easydata-core/easydata-export-namespace/idataexporter-interface) exporter) | `void` | Registers ResultSet exporter for current format. |
