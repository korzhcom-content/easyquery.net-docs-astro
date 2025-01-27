---
title: EasyQueryOptions class
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery.Services namespace/easyqueryoptions-class
---


Contains various options used in EasyQueryMiddleware, EasyQueryManager and other classes.
```csharp
public class Korzh.EasyQuery.Services.EasyQueryOptions

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyQueryOptions() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AuthProviderResolver | `Func`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), [IEqAuthProvider](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqauthprovider-interface)&gt; | Gets the authentication provider resolver  - a function that (most possibly) creates and returns an instance of  [Korzh.EasyQuery.Services.IEqAuthProvider](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqauthprovider-interface) interface. | 
| AutoResolveModelOnQueryLoad | `bool` | Gets or sets a value indicating whether we need to resolve the model on query load if the model itself is not loaded yet. | 
| BuilderTuners | `List`&lt;`Action`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)&gt;&gt; | Gets the list of the builder tuners.  Each tuner - is a function which allows to modify some options of the current query builder | 
| BuildQueryOnSync | `bool` | Gets or sets the value indicating whether we need to build query on every SyncQuery request and attach the statement to the response. | 
| BuildWithParameters | `bool` | Gets or sets the value indicating whether the query will be built with parameters instead of injected values | 
| CachingServiceResolver | `Func`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), [IEqCachingService](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqcachingservice-interface)&gt; | Gets the caching service resolver | 
| ConnectionResolver | `Func`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), `object`&gt; | Gets the connection resolver - a function which creates and returns the database connection (or the context collection in case LINQ manager). | 
| ConnectionString | `string` | Gets or sets the connection string to a database.  Usually this property is used together with UseDbConnection and UseDbConnectionModelLoader extension methods to avoid defining the connection string separately in each of these methods' parameters. | 
| DataExportTuners | `IList`&lt;[IDataExportTuner](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/idataexporttuner-interface)&gt; | Gets the collection of data export tuners.  Each tuner is called before exporting the datadata. | 
| DbCommandTuner | `Action`&lt;`object`&gt; | Gets or sets the tune for database commands. Here you can set, for example, the timeout of your DB requests. | 
| DefaultModelId | `string` | Gets or sets the default model identifier.  This option is used with FileModelLoader (when no other model loader is defined)  if the client side scripts don't pass any particular model ID in requests | 
| Endpoint | `string` | Gets or sets the endpoint of EasyQuery middleware.  This will be the base part of all URLs where all EasyQuery requests are sent to.  The default value is `/api/easyquery`, so the request to get the data model by its ID will have the following URL: `/api/easyquery/models/{modelId}` | 
| ManagerResolver | `ManagerResolverFunc` | Gets the resolver which creates an instance of EasyQuery Manager (a descendant of EasyQueryManagerBase class).  This class defines all basic operations with the models and queries: creating, loading, saving, query building itself. | 
| ManagerTuner | `Action`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)&gt; | Gets or sets the tune for EasyQuery Manager. | 
| ModelLoaderResolver | `Func`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), [IModelLoader](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/imodelloader-interface)&gt; | Gets the model loader resolver - a function which creates and returns an instance of IModelLoader interface. | 
| ModelTuner | `Action`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)&gt; | Gets the model tuner - an action which is called after the model loading and allows to "tune" your model before sending it to the client-side. | 
| PreFetchTuners | `IList`&lt;[IEasyQueryManagerTuner](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieasyquerymanagertuner-interface)&gt; | Gets the collection of pre fetch tuners.  Each tuner is called before fetching the data. | 
| QueryRecordCount | `bool` | Gets or sets a value indicating whether the service should send one more query to get the total number of records for the main query (when the Paging is enabed). | 
| QueryStoreResolver | `Func`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), [IQueryStore](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/iquerystore-interface)&gt; | Gets the query store resolver - a function which creates and returns an object which implements IQueryStore interface | 
| QueryTuner | `Action`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)&gt; | Gets the model tuner - an action which is called after the query loading from store 0r from clien-side request. | 
| ReturnQueryOnSave | `bool` | Gets or sets the value indicating whether the query will returned back to the client when handling the "SaveQuery" request.  You might want to set this option to <c>true</c> if the query can be changing when is saved to the storage (e.g. we assign some itnernal ID for it).\  and you want to let the client know about those changes. | 
| ReturnQueryStatementOnFetch | `bool` | Gets or sets the value indicating whether we need to attach the statement with the response to FetchData request. | 
| SaveNewQuery | `bool` | Gets or sets the value indicating whether the new query must be saved to the store (defined by UseQueryStore method) before return it as a response on NewQuery request. | 
| SaveQueryOnSync | `bool` | Gets or sets the value indicating whether the query will be saved to the store (defined by UseQueryStore method) on each SyncQuery request. | 
| StoreModelInCache | `bool` | Gets or sets the value indicating whether we need to store the model in cache (which is defined separately). | 
| StoreQueryInCache | `bool` | Gets or sets the value indicating whether we need to store the query in cache (which is defined separately). | 
| UseTimezoneOffset | `bool` | Gets or sets the value indicating whether users timezone offset should be applied to the query and result | 
| ValueListResolvers | `List`&lt;[IValueListResolver](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ivaluelistresolver-interface)&gt; | Gets the collection of value list resolvers. Each value list resolver can process one special case of the lists.  For example SqlValueListResolver returns the list of values by SQL statement (like list of countries or list of some categories). | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddBuilderTuner(`Action`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)&gt; builderTuner) | `void` | Adds the builder tuner. <seealso cref="P:Korzh.EasyQuery.Services.EasyQueryOptions.BuilderTuners" /> | 
| AddDataExportTuner([IDataExportTuner](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/idataexporttuner-interface) tuner) | `void` | Adds the tuner which is called before the exporting result. | 
| AddDataExportTuner(`Func`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface), `bool`&gt; tunerFunc) | `void` | Adds the tuner which is called before the exporting result. | 
| AddFileExtensionResolver(`Func`&lt;`string`, `string`&gt; fileExtensionResolver) | `void` | Adds a function that returns the file extension by content type. | 
| AddPreExecuteTuner([IEasyQueryManagerTuner](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieasyquerymanagertuner-interface) tuner) | `void` | Adds the tuner which is called before fetching the data. | 
| AddPreFetchTuner([IEasyQueryManagerTuner](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieasyquerymanagertuner-interface) tuner) | `void` | Adds the tuner which is called before the query execution. | 
| AddPreFetchTuner(`Action`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)&gt; tuner) | `void` | Adds the tuner which is called before the query execution. | 
| AddValueListResolver(`Func`&lt;[ListRequestOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class), `IEnumerable`&lt;[ListItem](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class)&gt;&gt; resolver) | `void` | Adds the custom value list resolver defined by a function passed in the parameter.  The function takes the list name and returns the list of values or null (so, the list can't be resolved for this name) . | 
| UseAuthProvider(`Func`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), [IEqAuthProvider](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqauthprovider-interface)&gt; authProviderResolver) | `void` | Adds the authentication provider resolver - a function which returns an object with [Korzh.EasyQuery.Services.IEqAuthProvider](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqauthprovider-interface) interface. | 
| UseCaching(`Func`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), [IEqCachingService](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqcachingservice-interface)&gt; cachingServiceResolver) | `void` | Defines the functions which returns the caching service by DI services | 
| UseConnection(`Func`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), `object`&gt; connectionResolver) | `void` | Defines the functions which returns the connection by DI services and model ID | 
| UseManager(`ManagerResolverFunc` managerResolver) | `void` | Defines the function which creates and returns an instance of EasyQuery manager.  The manager defines all basic operations with the models and queries: creating, loading, saving and query building itself. | 
| UseManager() | `void` | Defines the function which creates and returns an instance of EasyQuery manager.  The manager defines all basic operations with the models and queries: creating, loading, saving and query building itself. | 
| UseManagerTuner(`Action`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)&gt; tuner) | `void` | Defines the namager tuner. See more about the model tuner in [Korzh.EasyQuery.Services.EasyQueryOptions.ManagerTuner](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) property description | 
| UseModelLoader(`Func`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), [IModelLoader](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/imodelloader-interface)&gt; resolver) | `void` | Defines the functions which returns the model loader - an instance of IModelLoader interface | 
| UseModelTuner(`Action`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)&gt; tuner) | `void` | Defines the model tuner. See more about the model tuner in [Korzh.EasyQuery.Services.EasyQueryOptions.ModelTuner](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) property description | 
| UseQueryStore(`Func`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), [IQueryStore](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/iquerystore-interface)&gt; resolver) | `void` | Defines the functions which returns the query store - an instance of IQueryStore interface | 
| UseQueryTuner(`Action`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)&gt; tuner) | `void` | Defines the query tuner. See more about the query tuner in [Korzh.EasyQuery.Services.EasyQueryOptions.QueryTuner](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) property description |