---
title: EasyQueryManager class
slug: api-reference-5x/korzh-easyquery-services-namespace/easyquerymanager-class
sidebar:
  order: 100
---

Provides basic functionality for managing different EasyQuery operations and to process the AJAX requests from EasyQuery JavaScript widgets.  This class is abstract and it implements only the most common features.  The descendants of this class provides more concrete implementation of the model loading and query generation
```csharp
public abstract class Korzh.EasyQuery.Services.EasyQueryManager

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `List<IEasyQueryManagerTuner>` | PreExecuteTuners | The list of tuners which are called before the query execution | 
| `IServiceProvider` | Services | A reference to the `System.IServiceProvider` object which allows you to access the DI container | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `IEqCachingService` | CachingService | Get or sets a caching service | 
| `JObject` | ClientData | Gets a JSON object which contains all the data received from the client-side. | 
| `JObject` | ClientOptions | Gets a JSON object which contains all the options received from the client-side. | 
| `String` | DefaultModelId | Gets or sets the default name of the model.  This model will loaded automatically if the name was not indicated explicitly | 
| `DataModel` | Model | Gets the current model.  The value of this property is set on the first call of GetModel method. | 
| `IModelLoader` | ModelLoader | Gets or sets the model loader - an implementation of [Korzh.EasyQuery.Services.IModelLoader](///easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/imodelloader-interface) inteface. | 
| `Action<DataModel>` | ModelTuner | Gets or sets the model tuner - a function which allows you to make some changes in the model after its loading. | 
| `PagingSettings` | Paging | Holds different pagination settings. | 
| `Query` | Query | Gets the current query.  The value of this property is set on the first call of GetQuery method. | 
| `IQueryFormats` | QueryFormats | Gets or sets the default query formats that defines different aspects of the generated query syntax  (the quotes, the type of joins in SQL, etc). | 
| `Boolean` | QueryRecordCount | Gets or sets a value indicating whether the service should send one more query to get the total number of records for the main query (when the Paging is enabed). | 
| `IQueryStore` | QueryStore | Gets or sets the query store - an object which covers all saving/loading operations for queries. | 
| `Boolean` | SaveNewQueryToStore | Determines whether the manager should save a new query into the storage right after the creation. | 
| `Boolean` | SaveQueryOnSync | Gets or sets a value indicating whether query will be stored on QuerySync method. | 
| `Boolean` | StoreModelInCache | Gets or sets a value indicating whether data model will be stored in Session between requests. | 
| `Boolean` | StoreQueryInCache | Gets or sets a value indicating whether current query will be stored in Session between requests. | 
| `String` | UserId | Gets or sets the user ID.  This value is used to build the path to the folder where model and query files are stored.  By default it's App_Data/{UserId}/ and App_Data/{UserId}/Queries | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddValueListResolver(`IValueListResolver` valueListResolver) | Adds the value list resolver to the internal list of list resolvers  which will be used during GetList request processing | 
| `QueryBuilderResult` | BuildQuery(`JObject` options = <span style='color: blue'>null</span>, `Boolean` addPaging = False) | Builds SQL statement by the DbQuery object. This methods calls QueryBuilder delegate to build SQL. | 
| `void` | CheckModel() | Checks if the current Model is not null and throws an exception otherwise. | 
| `void` | CheckQuery() | Checks if the current Query is not null and throws an exception otherwise. | 
| `DataModel` | CreateModelCore(`String` modelId) | Creates the new DataModel object | 
| `Task<Query>` | CreateQueryAsync(`String` modelId = <span style='color: blue'>null</span>) | Creates new Query object. | 
| `Query` | CreateQueryCore(`DataModel` model) | Creates new Query object. | 
| `Task<Query>` | CreateQueryIfNotExistsAsync(`String` modelId) | Creates the query if it does not exist. | 
| `IEqResultSet` | ExecuteQuery(`JObject` options = <span style='color: blue'>null</span>) | Executes the query and returns an object which implments IEqResultSet interface. | 
| `IEqResultSet` | ExecuteQueryCore(`JObject` options = <span style='color: blue'>null</span>) | The actual implemenation of ExecuteQuery function.  This method is overridden in EasyQueryManagerBase descendants like EasyQueryManagerSql or EasyQueryManagerLinq. | 
| `Task` | ExportQueryResultAsync(`String` format, `TextWriter` writer) | Executes the query and exports the result to a specified format.  To run this operation we need to register an appropriate exporter first. | 
| `String` | GenerateQueryId(`String` name) | Generates the query identifier. | 
| `String` | GetContentTypeByExportFormat(`String` format) | Gets the content type by export format. | 
| `IDataExportSettings` | GetDataExportSettings(`String` format) | Gets the data export settings. | 
| `IDataReader` | GetDataReader(`JObject` options = <span style='color: blue'>null</span>, `Boolean` addPaging = False) | Gets the data reader by query. This function is called from ExecuteQuery or ExportQueryResult. | 
| `Task<IEnumerable<ListItem>>` | GetListCoreAsync(`ListRequestOptions` options) | The basic implemenation of GetList action handler. Can be overrided in the derived classes. | 
| `Task<DataModel>` | GetModelAsync(`String` modelId) | Gets the DbModel object by ID. | 
| `Task<DataModel>` | GetModelCoreAsync(`String` modelId) | The basic implementation of the GetModel action which can be overidden in the derived classes. | 
| `Task<Query>` | GetQueryAsync(`String` modelId, `String` queryId) | Gets the Query object by name. | 
| `IQueryBuilder` | GetQueryBuilder(`Query` query, `JObject` options = <span style='color: blue'>null</span>) | Gets the registered query builder. | 
| `IQueryBuilder` | GetQueryBuilderCore(`Query` query, `JObject` options) |  | 
| `Task<Query>` | GetQueryCoreAsync(`String` modelId, `String` queryId) | The basic implementation of the GetQuery action which can be overidden in the derived classes. | 
| `Task<IEnumerable<QueryListItem>>` | GetQueryListAsync(`String` modelId) | Gets the list of available queries. | 
| `Task<IEnumerable<QueryListItem>>` | GetQueryListCoreAsync(`String` modelId) | Basic implementation of [Korzh.EasyQuery.Services.EasyQueryManager.GetQueryList(System.String)](///easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/easyquerymanager-class) method.  This method just calls corresponding function of the QueryStore. Can be overriden in derived classes. | 
| `String` | GetValueFromCache(`String` key) | Gets some string value from session by its key. | 
| `Task<IEnumerable<ListItem>>` | GetValueListAsync(`String` modelId, `String` editorId) | Returns custom list of values by editorId. This method is usually called by GetList action of EasyQueryController. | 
| `Task` | InitQueryAsync() | Initializes the new query and saves it to the storage (if SaveNewQueryToStore is turned on). | 
| `Task` | InitQueryCoreAsync() | Initializes the new query. Does nothing in the base class. Can be overriden in the derived classes. | 
| `ListRequestOptions` | JsonToListRequestOptions(`String` optionsJson) | Converts JsonDict object to ListRequestOptions | 
| `Boolean` | LoadModelFromCache(`DataModel` model, `String` modelId) | Loads DataModel from cache by ID (name) | 
| `void` | LoadOptions(`String` optionsJson) | Loads different options from JsonDict object (usually created by JSON deserialization). | 
| `Boolean` | LoadQueryFromCache(`Query` query, `String` queryId) | Loads Query from cache by ID | 
| `Task` | ReadOneRequestPropertyAsync(`String` modelId, `JsonReader` reader, `String` propName) | Read one property from a request's JSON object. | 
| `Task` | ReadRequestContentFromJsonAsync(`String` modelId, `JsonReader` reader) | Reads the content of the client-side request from a JsonReader object. | 
| `Task` | ReadRequestContentFromTextReaderAsync(`String` modelId, `TextReader` reader) | Loads all reaquest's data (like query, options, etc) from the text reader. | 
| `Task<Boolean>` | RemoveQueryAsync(`String` modelId, `String` queryId) | Removes the query. This method uses the functionality provided by the current query store. | 
| `void` | SaveModelInCache(`DataModel` model) | Saves model into cache | 
| `void` | SaveQueryInCache(`Query` query) | Saves query into cache | 
| `Task<Boolean>` | SaveQueryToStoreAsync() | Saves the current query to the query store. | 
| `void` | SaveValueInCache(`String` key, `String` value) | Stores some string value in cache. | 
| `void` | SyncQuery() | Synchronizes the query. | 
| `void` | SyncQueryCore() | Synchronizes the query. This is the default implementation which can be ovverride in derived classes. | 
| `Task<Boolean>` | TryLoadModelAsync(`DataModel` model, `String` modelId) | Tries to load the model from the storage. | 
| `Task<Boolean>` | TryLoadQueryAsync(`Query` query, `String` queryId) | Tries to load the query. | 
| `void` | TuneBuilder(`IQueryBuilder` builder) | Allows to tune the formats of the query builder. The default implementation calls all builder tuners defined in _builderTuners list.  You can override this function in your sub-class to implement some custom behavior. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | RegisterExporter(`String` format, `IDataExporter` exporter) | Registers ResultSet exporter for current format. |
