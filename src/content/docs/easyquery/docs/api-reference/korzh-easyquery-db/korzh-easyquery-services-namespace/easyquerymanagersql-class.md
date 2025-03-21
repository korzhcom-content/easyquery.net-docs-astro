---
title: EasyQueryManagerSql class
slug: easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/easyquerymanagersql-class
---


Represents an implementation of [Korzh.EasyQuery.Services.EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class)  which generates SQL queries and can work with some relational DB directly.
```csharp
public class Korzh.EasyQuery.Services.EasyQueryManagerSql
    : EasyQueryManager

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyQueryManagerSql() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyQueryManagerSql](/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/easyquerymanagersql-class) class. | 
| EasyQueryManagerSql([EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyQueryManagerSql](/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/easyquerymanagersql-class) class. | 
| EasyQueryManagerSql([EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `IServiceProvider` services) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyQueryManagerSql](/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/easyquerymanagersql-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ConnectionResolver | `Func`&lt;`DbConnection`&gt; | Gets or sets the connection resolver - a faunction that returs a connection object by model's ID. | 
| DbCommandTuner | `Action`&lt;`DbCommand`&gt; | Gets or sets the function which is called before execution of some DbCommand. | 
| Formats | [SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) | The SQL formats. | 
| Model | [DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) | Gets the current model.  The value of this property is set on the first call of GetModel method. | 
| Query | [DbQuery](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class) | Gets the current query.  The value of this property is set on the first call of GetQueryAsync method. | 
| QueryBuilder | [SqlQueryBuilder](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlquerybuilder-class) | Returns QueryBuilder associated with current Query | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| BuildQuery([QueryBuilderOptions](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querybuilderoptions-class) options = <span style='color: blue'>null</span>) | [IQueryStatement](/api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerystatement-interface) | Builds a [Korzh.EasyQuery.IQueryStatement](/api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerystatement-interface) object by the [Korzh.EasyQuery.Services.EasyQueryManagerSql.Query](/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/easyquerymanagersql-class) and returns the built statement. | 
| CreateDbResultSet(`IDataReader` dataReader, [ResultSetOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/resultsetoptions-class) settings) | [EasyDbResultSet](/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/easydbresultset-class) | Creates result set | 
| CreateModelCore(`string` modelId = <span style='color: blue'>null</span>) | [DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Creates new DataModel object | 
| CreateQueryBuilderCore() | [IQueryBuilder](/api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerybuilder-interface) | Returns the query builder. In this particular kind of EasyQueryManager it will be an instance of SqlQueryBuilder.  This method also builds the query so you can read the result via GetResult method call. | 
| CreateQueryCore() | [Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Creates new DbQuery object. | 
| Dispose(`bool` disposing) | `void` | Releases unmanaged and - optionally - managed resources. | 
| FetchDataCoreAsync() | `Task`&lt;[IEqResultSet](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqresultset-interface)&gt; | The actual implemenation of FetchData function.  This method is overridden in EasyQueryManagerBase descendants like EasyQueryManagerSql or EasyQueryManagerLinq. | 
| GetConnection() | `DbConnection` | Gets the DbConnection associated with this service. If connection is not defined yet - it wil be resolved using ConnectionResolver.  This method opens the connection if it's not opened yet. | 
| GetConnectionCore() | `DbConnection` | Returns the connection object. The default implementations just calls ConnectionResolved to get the connection.  You can override this function in dervived class to implement your own behavior of resolving the connnection by the model ID. | 
| GetDataExportSettings(`string` format) | [IDataExportSettings](/api-reference/easydata-core/easydata-export-namespace/idataexportsettings-interface) | Gets the data export settings. | 
| GetEmptyResultSet() | [IEqResultSet](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqresultset-interface) | Gets any empty result set. | 
| GetRecordCountAsync() | `Task`&lt;`long`&gt; | Gets the record count for the current query | 
| GetResultSetAsync([IQueryStatement](/api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerystatement-interface) statement, [ResultSetOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/resultsetoptions-class) settings = <span style='color: blue'>null</span>) | `Task`&lt;[IEqResultSet](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqresultset-interface)&gt; | Creates and returns a ResultSet object by SQL statement. | 
| PrepareDbCommand([SqlStatement](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlstatement-class) statement) | `DbCommand` | Creates and prepares the database command. | 
| ReadClientOptions(`JObject` clientOptions) | `void` |  | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| RegisterDbGate() | `void` |  |