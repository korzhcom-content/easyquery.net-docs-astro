---
title: EqServiceProviderDb class
slug: api-reference-4x/korzh-easyquery-services-namespace/eqserviceproviderdb-class
sidebar:
  order: 100
---

Class EqServiceProviderDb.  Provides basic functionality for building EasyQuery service to process AJAX requests from EasyQuery JavaScript widgets.  Can be used to create MVC controller, WebService class or WebAPI controller
```csharp
public class Korzh.EasyQuery.Services.EqServiceProviderDb
    : EqServiceProvider

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DbConnection` | Connection | Gets or sets the connection used to execute SQL statements. | 
| `Func<DbConnection>` | ConnectionResolver |  | 
| `DbQueryFormats` | Formats | Gets or sets the formats passed to [Korzh.EasyQuery.Db.SqlQueryBuilder](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/sqlquerybuilder-class) before SQL generation. | 
| `Boolean` | LoadModelFromConnection | Gets or sets a value indicating whether the default model loader should try to load model from connection. | 
| `Action<DbCommand>` | SqlCommandPreExecute | Gets or sets the function which is called before execution of some DbCommand. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `QueryBuilderResult` | BuildQuery(`Query` query, `JsonDict` optionsDict = <span style='color: blue'>null</span>, `Boolean` addPaging = False) | Builds SQL statement by the DbQuery object. This methods calls QueryBuilder delegate to build SQL. | 
| `void` | CheckConnection() | Checks whether the connection defined in [Korzh.EasyQuery.Services.EqServiceProviderDb.Connection](/easyquery/docs/api-reference-4x/korzh-easyquery-services-namespace/eqserviceproviderdb-class) property is not null.  Opens the connection if it's not opened yet. | 
| `DataModel` | CreateModel() |  | 
| `Query` | CreateQuery() | Creates new DbQuery object. | 
| `QueryFormats` | CreateQueryFormats() |  | 
| `void` | DefaultModelLoader(`DataModel` model, `String` modelId) | Default implementation of the model loader <see cref="!:ModelLoader" />. | 
| `IEqResultSet` | ExecuteQueryCore(`Query` query, `JsonDict` optionsDict = <span style='color: blue'>null</span>) |  | 
| `IEqResultSet` | GetEmptyResultSet() | Gets any empty result set. | 
| `IEnumerable<ListItem>` | GetListCore(`ListRequestOptions` options) | Returns list of values by its name. This method is usually called by GetList action of EasyQueryController. | 
| `IEqResultSet` | GetResultSetBySql(`String` sql, `QueryParamList` queryParams = <span style='color: blue'>null</span>) | Creates and returns a ResultSet object by SQL statement. |
