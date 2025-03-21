---
title: EqServiceProvider class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-services-namespace/eqserviceprovider-class
---


Class EqServiceProviderDb.  Provides basic functionality for building EasyQuery service to process AJAX requests from EasyQuery JavaScript widgets.  Can be used to create MVC controller, WebService class or WebAPI controller
```csharp
public abstract class Korzh.EasyQuery.Services.EqServiceProvider

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Func<String, String>` | CacheGetter | Gets or sets the session getter - a delegate that returns an object stored in Session by its name. | 
| `Action<String, String>` | CacheSetter | Gets or sets the session setter - an anonymous function which store some object into session. | 
| `String` | DataPath | Gets or sets the path to the folder where (by default implemention) the model and the queries will be stored. | 
| `String` | DefaultModelId | Gets or sets the default name of the model.  This model will loaded automatically if the name was not indicated explicitly | 
| `QueryFormats` | Formats | Gets or sets the formats passed to <see cref="!:Korzh.EasyQuery.Db.SqlQueryBuilder" /> before SQL generation. | 
| `DataModel` | Model |  | 
| `Func<DataModel>` | ModelCreator | Gets or sets the model creator - a delegate (anonymous function) which is called to create a new model object. | 
| `Action<DataModel, String>` | ModelLoader | Gets or sets the model loader - a delegate (anonymous function) which is called to load model by name. | 
| `PagingSettings` | Paging | Holds different pagination settings. | 
| `Query` | Query |  | 
| `Func<Query, JsonDict, IQueryBuilder>` | QueryBuilder | Gets or sets the query builder - a delegate (anonymous function) which is called to build query and returns either an SQL statement or IQueryable object | 
| `Func<Query>` | QueryCreator | Gets or sets the query creator - a delegate (anonymous function) which is called to create a new query object. | 
| `Func<String, IEnumerable<QueryListItem>>` | QueryListResolver | Gets or sets the query list resolver - a delegate (anonymous function) which is called to get list of available queries | 
| `Action<Query, String>` | QueryLoader | Gets or sets the query loader - a delegate (anonymous function) which is called to load query by name. | 
| `Action<String>` | QueryRemover |  | 
| `Action<Query, String>` | QuerySaver | Gets or sets the query saver - a delegate (anonymous function) which is called to save query by name. | 
| `Action<Query>` | QuerySynchronizer | Syncs query passed in parameter with the one stored in cache (if applied) | 
| `Boolean` | StoreModelInCache | Gets or sets a value indicating whether data model will be stored in Session between requests. | 
| `Boolean` | StoreQueryInCache | Gets or sets a value indicating whether current query will be stored in Session between requests. | 
| `String` | UserId |  | 
| `Func<String, IEnumerable<ListItem>>` | ValueListResolver | Gets or sets the value list resolver - a delegate (anonymous function) which is called to get list of values by the list name | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `QueryBuilderResult` | BuildQuery(`Query` query, `JsonDict` optionsDict = <span style='color: blue'>null</span>, `Boolean` addPaging = False) | Builds SQL statement by the DbQuery object. This methods calls QueryBuilder delegate to build SQL. | 
| `QueryBuilderResult` | BuildQueryDict(`JsonDict` queryDict, `JsonDict` optionsDict = <span style='color: blue'>null</span>) | Builds the query dictionary. | 
| `DataModel` | CreateModel() | Creates new DataModel object | 
| `Query` | CreateQuery() | Creates new DbQuery object. | 
| `QueryFormats` | CreateQueryFormats() | Creates new QueryFormats object | 
| `void` | DefaultModelLoader(`DataModel` model, `String` modelId) | Default implementation of the model loader [Korzh.EasyQuery.Services.EqServiceProvider.ModelLoader](/api-reference-4x/korzh-easyquery-services-namespace/eqserviceprovider-class). | 
| `IEnumerable<QueryListItem>` | DefaultQueryListResolver(`String` modelId) |  | 
| `void` | DefaultQueryLoader(`Query` query, `String` queryId) | Default implementation of the query loader [Korzh.EasyQuery.Services.EqServiceProvider.QueryLoader](/api-reference-4x/korzh-easyquery-services-namespace/eqserviceprovider-class). | 
| `void` | DefaultQueryRemover(`String` queryId) | Default implementation of the query remover [Korzh.EasyQuery.Services.EqServiceProvider.QueryRemover](/api-reference-4x/korzh-easyquery-services-namespace/eqserviceprovider-class). | 
| `void` | DefaultQuerySaver(`Query` query, `String` queryId) | Default implementation of the query saver [Korzh.EasyQuery.Services.EqServiceProvider.QuerySaver](/api-reference-4x/korzh-easyquery-services-namespace/eqserviceprovider-class). | 
| `IEqResultSet` | ExecuteQuery(`Query` query, `JsonDict` optionsDict = <span style='color: blue'>null</span>) |  | 
| `IEqResultSet` | ExecuteQueryCore(`Query` query, `JsonDict` optionsDict = <span style='color: blue'>null</span>) |  | 
| `String` | GenerateQueryId(`String` name) |  | 
| `IEnumerable<ListItem>` | GetList(`JsonDict` optionsDict) | Returns custom list of values by editorId. This method is usually called by GetList action of EasyQueryController. | 
| `IEnumerable<ListItem>` | GetList(`JsonDict` optionsDict, `IQueryable<T>` dbSet) | Returns custom list of values by editorId. This method is usually called by GetList action of EasyQueryController. | 
| `IEnumerable<ListItem>` | GetListCore(`ListRequestOptions` options) |  | 
| `IEnumerable<ListItem>` | GetListForContext(`ListRequestOptions` options, `IQueryable<T>` dbSet) |  | 
| `DataModel` | GetModel(`String` modelId) | Gets the DbModel object by name. | 
| `Query` | GetQuery(`String` modelId, `String` queryId) | Gets the DbQuery object by name. | 
| `IQueryBuilder` | GetQueryBuilder(`Query` query, `JsonDict` optionsDict = <span style='color: blue'>null</span>) |  | 
| `Query` | GetQueryByIds(`JsonDict` queryDict) | Get query by query ID and model ID stored in JsonDict object | 
| `Query` | GetQueryByJsonDict(`JsonDict` queryDict) | Get query by ID stored in JsonDict object | 
| `IEnumerable<QueryListItem>` | GetQueryList(`String` modelId) | Gets the list of available queries. | 
| `String` | GetValueFromCache(`String` key) | Gets some string value from session by its key. | 
| `ListRequestOptions` | JsonDictToListRequestOptions(`JsonDict` optionsDict) | Converts JsonDict object to ListRequestOptions | 
| `void` | LoadModelFromCache(`DataModel` model, `String` modelId) | Loads DataModel from cache by ID (name) | 
| `void` | LoadOptions(`JsonDict` optionsDict) | Loads different options from JsonDict object (usually created by JSON deserialization). | 
| `void` | LoadQueryById(`Query` query, `String` queryId) | Loads the query by ID. Default implementation tries to load [queryId].xml file from [Korzh.EasyQuery.Services.EqServiceProvider.DataPath](/api-reference-4x/korzh-easyquery-services-namespace/eqserviceprovider-class)\Queries\{UserId} folder. | 
| `void` | LoadQueryFromCache(`Query` query, `String` queryId) | Loads Query from cache by ID | 
| `Boolean` | RemoveQuery(`String` queryId) |  | 
| `void` | SaveModelInCache(`DataModel` model) | Saves model into cache | 
| `Boolean` | SaveQuery(`Query` query) |  | 
| `Query` | SaveQueryDict(`JsonDict` queryDict, `String` newQueryName) | Saves the query by its JSON representation. | 
| `void` | SaveQueryInCache(`Query` query) | Saves query into cache | 
| `void` | SaveValueInCache(`String` key, `String` value) | Stores some string value in cache. | 
| `void` | SyncQuery(`Query` query) | Synchronizes the query. | 
| `Query` | SyncQueryDict(`JsonDict` queryDict) | Synchronizes the query by JsonDict object. |