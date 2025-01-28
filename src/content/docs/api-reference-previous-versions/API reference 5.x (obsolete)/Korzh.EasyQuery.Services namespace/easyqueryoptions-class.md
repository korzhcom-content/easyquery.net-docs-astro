---
title: EasyQueryOptions class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Services namespace/easyqueryoptions-class
---


Contains various options used in EasyQueryMiddleware, EasyQueryManager and other classes.
```csharp
public class Korzh.EasyQuery.Services.EasyQueryOptions

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `IList<IEasyQueryManagerTuner>` | PreExecuteTuners |  | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Func<IServiceProvider, IEqAuthProvider>` | AuthProviderResolver | Gets the authentication provider resolver  - a function that (most possibly) creates and returns an instance of  [Korzh.EasyQuery.Services.IEqAuthProvider](/api-reference-5x/korzh-easyquery-services-namespace/ieqauthprovider-interface) interface. | 
| `List<Action<IQueryBuilder>>` | BuilderTuners | Gets the list of the builder tuners.  Each tuner - is a function which allows to modify some options of the current query builder | 
| `Boolean` | BuildQueryOnSync | Gets or sets the value indicating whether we need to build query on every SyncQuery request and attach the statement to the response. | 
| `Boolean` | BuildWithParameters | Gets or sets the value indicating whether the query will be built with parameters instead of injected values | 
| `Func<IServiceProvider, IEqCachingService>` | CachingServiceResolver | Gets the caching service resolver | 
| `Func<IServiceProvider, String, Object>` | ConnectionResolver | Gets the connection resolver - a function which creates and returns the database connection (or the context collection in case LINQ manager). | 
| `String` | ConnectionString | Gets or sets the connection string to a database.  Usually this property is used together with UseDbConnection and UseDbConnectionModelLoader extension methods to avoid defining the connection string separately in each of these methods' parameters. | 
| `Action<Object>` | DbCommandTuner | Gets or sets the tune for database commands. Here you can set, for example, the timeout of your DB requests. | 
| `String` | DefaultModelId | Gets or sets the default model identifier.  This option is used with FileModelLoader (when no other model loader is defined)  if the client side scripts don't pass any particular model ID in requests | 
| `String` | Endpoint | Gets or sets the endpoint of EasyQuery middleware.  This will be the base part of all URLs where all EasyQuery requests are sent to.  The default value is `/api/easyquery`, so the request to get the data model by its ID will have the following URL: `/api/easyquery/models/{modelId}` | 
| `ManagerResolverFunc` | ManagerResolver | Gets the resolver which creates an instance of EasyQuery Manager (a descendant of EasyQueryManagerBase class).  This class defines all basic operations with the models and queries: creating, loading, saving, query building itself. | 
| `Func<IServiceProvider, IModelLoader>` | ModelLoaderResolver | Gets the model loader resolver - a function which creates and returns an instance of IModelLoader interface. | 
| `Action<DataModel>` | ModelTuner | Gets the model tuner - an action which is called after the model loading and allows to "tune" your model before sending it to the client-side. | 
| `PagingSettings` | Paging | Gets the paging settings. | 
| `IQueryFormats` | QueryFormats | Gets the query formats. | 
| `Boolean` | QueryRecordCount | Gets or sets a value indicating whether the service should send one more query to get the total number of records for the main query (when the Paging is enabed). | 
| `Func<IServiceProvider, IQueryStore>` | QueryStoreResolver | Gets the query store resolver - a function which creates and returns an object which implements IQueryStore interface | 
| `Boolean` | SaveNewQuery | Gets or sets the value indicating whether the new query must be saved to the store (defined by UseQueryStore method) before return it as a response on NewQuery request. | 
| `Boolean` | SaveQueryOnSync | Gets or sets the value indicating whether the query will be saved to the store (defined by UseQueryStore method) on each SyncQuery request. | 
| `Boolean` | StoreModelInCache | Gets or sets the value indicating whether we need to store the model in cache (which is defined separately). | 
| `Boolean` | StoreQueryInCache | Gets or sets the value indicating whether we need to store the query in cache (which is defined separately). | 
| `List<IValueListResolver>` | ValueListResolvers | Gets the collection of value list resolvers. Each value list resolver can process one special case of the lists.  For example SqlValueListResolver returns the list of values by SQL statement (like list of countries or list of some categories). | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddBuilderTuner(`Action<IQueryBuilder>` builderTuner) | Adds the builder tuner. <seealso cref="P:Korzh.EasyQuery.Services.EasyQueryOptions.BuilderTuners" /> | 
| `void` | AddPreExecuteTuner(`IEasyQueryManagerTuner` tuner) | Adds the tuner which is called before the query execution. | 
| `void` | AddValueListResolver(`Func<String, IEnumerable<ListItem>>` resolver) | Adds the custom value list resolver defined by a function passed in the parameter. The function takes a list name and returns the list of values. | 
| `void` | SetFormats(`IQueryFormats` formats) | Sets the formats of the query builder (an instance of [Korzh.EasyQuery.Services.EasyQueryOptions.QueryFormats](/api-reference-5x/korzh-easyquery-services-namespace/easyqueryoptions-class) class). | 
| `void` | UseAuthProvider(`Func<IServiceProvider, IEqAuthProvider>` authProviderResolver) | Adds the authentication provider resolver - a function which returns an object with [Korzh.EasyQuery.Services.IEqAuthProvider](/api-reference-5x/korzh-easyquery-services-namespace/ieqauthprovider-interface) interface. | 
| `void` | UseCaching(`Func<IServiceProvider, IEqCachingService>` cachingServiceResolver) | Defines the functions which returns the caching service by DI services | 
| `void` | UseConnection(`Func<IServiceProvider, String, Object>` connectionResolver) | Defines the functions which returns the connection by DI services and model ID | 
| `void` | UseManager(`ManagerResolverFunc` managerResolver) | Defines the function which creates and returns an instance of EasyQuery manager.  The manager defines all basic operations with the models and queries: creating, loading, saving and query building itself. | 
| `void` | UseManager() | Defines the function which creates and returns an instance of EasyQuery manager.  The manager defines all basic operations with the models and queries: creating, loading, saving and query building itself. | 
| `void` | UseModelLoader(`Func<IServiceProvider, IModelLoader>` resolver) | Defines the functions which returns the model loader - an instance of IModelLoader interface | 
| `void` | UseModelTuner(`Action<DataModel>` tuner) | Defines the model tuner. See more about the model tuner in [Korzh.EasyQuery.Services.EasyQueryOptions.ModelTuner](/api-reference-5x/korzh-easyquery-services-namespace/easyqueryoptions-class) property description | 
| `void` | UsePaging(`Int64` pageSize) | Turns on the paging and sets the page size. | 
| `void` | UseQueryStore(`Func<IServiceProvider, IQueryStore>` resolver) | Defines the functions which returns the query store - an instance of IQueryStore interface |