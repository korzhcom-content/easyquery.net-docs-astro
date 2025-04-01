---
title: EasyQueryManagerSql class
slug: api-reference-5x/korzh-easyquery-services-namespace/easyquerymanagersql-class
sidebar:
  order: 100
---

Represents an implementation of [Korzh.EasyQuery.Services.EasyQueryManager](///easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/easyquerymanager-class)  which generates SQL queries and can work with some relational DB directly.
```csharp
public class Korzh.EasyQuery.Services.EasyQueryManagerSql
    : EasyQueryManager

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Func<String, DbConnection>` | ConnectionResolver | Gets or sets the connection resolver - a faunction that returs a connection object by model's ID. | 
| `Action<DbCommand>` | DbCommandTuner | Gets or sets the function which is called before execution of some DbCommand. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `QueryBuilderResult` | BuildQuery(`JObject` options = <span style='color: blue'>null</span>, `Boolean` addPaging = False) | Builds SQL statement by the DbQuery object. This methods calls QueryBuilder delegate to build SQL. | 
| `DataModel` | CreateModelCore(`String` modelId) | Creates new DataModel object | 
| `Query` | CreateQueryCore(`DataModel` model) | Creates new DbQuery object. | 
| `IEqResultSet` | ExecuteQueryCore(`JObject` options = <span style='color: blue'>null</span>) | The actual implemenation of ExecuteQuery function.  This method is overridden in EasyQueryManagerBase descendants like EasyQueryManagerSql or EasyQueryManagerLinq. | 
| `DbConnection` | GetConnection(`String` modelId) | Gets the DbConnection associated with this service. If connection is not defined yet - it wil be resolved using ConnectionResolver.  This method opens the connection if it's not opened yet. | 
| `DbConnection` | GetConnectionCore(`String` modelId) | Returns the connection object. The default implementations just calls ConnectionResolved to get the connection.  You can override this function in dervived class to implement your own behavior of resolving the connnection by the model ID. | 
| `IDataReader` | GetDataReader(`JObject` options = <span style='color: blue'>null</span>, `Boolean` addPaging = False) | Gets the data reader by query. This function is called from ExecuteQuery or ExportQueryResult. | 
| `IEqResultSet` | GetEmptyResultSet() | Gets any empty result set. | 
| `IQueryBuilder` | GetQueryBuilderCore(`Query` query, `JObject` options) | Returns the query builder. In this particular kind of EasyQueryManager it will be an instance of SqlQueryBuilder.  This method also builds the query so you can read the result via GetResult method call. | 
| `Int64` | GetRecordCount() | Gets the record count for the current query | 
| `DbCommand` | PrepareDbCommand(`String` sql, `QueryParamList` queryParams = <span style='color: blue'>null</span>) | Creates and prepares the database command. | 
| `IEqResultSet` | RetrieveResultSet(`String` modelId, `QueryBuilderResult` qbr) | Creates and returns a ResultSet object by SQL statement. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | RegisterDbGate() |  |
