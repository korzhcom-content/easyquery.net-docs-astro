---
title: DbGate class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class
---
Represents base class which allows to get DB structure information availble for some connection
```csharp
public abstract class Korzh.EasyQuery.Db.DbGate
    : IDisposable

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbGate() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.DbGate](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Connected | `bool` | Gets or sets a value indicating whether this `DbGate` is connected.  When this property is assigned to <c>true</c> then the object tries to connect to database. | 
| Connection | `DbConnection` | Gets the connection. | 
| ConnectionIsInternalSetted | `bool` |  | 
| ConnectionString | `string` | Gets or sets the connection string. | 
| ConnectionStringBuilderDlg | [IConnectionStringBuilderDlg](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/iconnectionstringbuilderdlg-interface) | Gets or sets the connection string builder dialog. | 
| FinalConnectionString | `string` |  | 
| LoginPrompt | `bool` | Gets or sets a value indicating whether [Korzh.EasyQuery.Db.DbGate](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) object should ask user for login and password when connect to database. | 
| Password | `string` | Gets or sets the "Password" parameter of database connection. | 
| ProgressIndicator | [IProgressIndicator](api-reference/korzh-easyquery/korzh-easyquery-namespace/iprogressindicator-interface) | Gets or sets the progress indicator object. | 
| UserID | `string` | Gets or sets the "User ID" parameter of database connection. | 
| UseViews | `bool` | Gets or sets a value indicating whether [Korzh.EasyQuery.Db.DbGate](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) will add views in the list of tables returned by [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| Version | `string` | Gets the version of the current [Korzh.EasyQuery.Db.DbGate](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) implementation | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| LoginRequest | `LoginRequestEventHandler` | Occurs when the [Korzh.EasyQuery.Db.DbGate](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) objects needs to get [Korzh.EasyQuery.Db.DbGate.UserID](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) and [Korzh.EasyQuery.Db.DbGate.Password](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) to connect to some database. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AssembleConnectionString() | `string` | Builds the final connection string based on the string defined in [Korzh.EasyQuery.Db.DbGate.ConnectionString](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) property,  current environment variables and the parameters defined in UserID and Password properties. | 
| CheckConnection() | `void` | Checks the connection. Calls CoreCheckConnection() method. | 
| CoreCheckConnection() | `void` | When overriden in derived class, performs the actual connection checking | 
| CoreGetDatabases([DbInfoList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbinfolist-class) databases) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetDatabases](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetFields(`string` dbName, `string` schemaName, `string` tableName, [DbFieldInfoList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class) fields) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFields(System.String,System.String,System.String)](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetFieldsBySQL(`string` sql, [DbFieldInfoList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class) fields) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetLinks(`string` dbName, `string` schemaName, [DbLinkInfoList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dblinkinfolist-class) links) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetTables(`string` dbName, `string` schemaName, [DbTableInfoList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtableinfolist-class) tables) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreLoadParams([DbParameters](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbparameters-class) dbParams) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.LoadParams(Korzh.EasyQuery.Db.DbParameters)](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreSaveParams([DbParameters](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbparameters-class) dbParams) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.SaveParams(Korzh.EasyQuery.Db.DbParameters)](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| Dispose(`bool` disposing) | `void` | Releases unmanaged and - optionally - managed resources. | 
| Dispose() | `void` | Releases unmanaged and - optionally - managed resources. | 
| GetConnected() | `bool` | Core implemenation of "get" method of [Korzh.EasyQuery.Db.DbGate.Connected](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) property. | 
| GetConnection() | `DbConnection` | When overriden in derived class, returns the connection | 
| GetDataAdapter(`string` sqlText) | `DbDataAdapter` | Gets the data adapter. | 
| GetDatabases() | [DbInfoList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbinfolist-class) | Gets the list of available databases. | 
| GetFields(`string` dbName, `string` schemaName, `string` tableName) | [DbFieldInfoList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class) | Gets the fields by table. | 
| GetFieldsBySQL(`string` sql) | [DbFieldInfoList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class) | Gets the fields of result set of some SQL statement execution. | 
| GetFieldsEx(`string` dbName, `string` schemaName, `string` tableName, `bool` sortByOriginalPosition) | [DbFieldInfoList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class) | Gets the fields by table. | 
| GetFormatType() | [FormatType](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/formattype-enum) | Returns the format type for this DB gate | 
| GetGateId() | `string` | Gets the id of [Korzh.EasyQuery.Db.DbGate](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class). Must be overrided in inherited classes | 
| GetLinks(`string` dbName, `string` schemaName) | [DbLinkInfoList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dblinkinfolist-class) | Gets the list of available tables. | 
| GetName() | `string` | Gets the name of [Korzh.EasyQuery.Db.DbGate](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class). Must be overrided in inherited classes | 
| GetPwdName() | `string` | Gets the name of "password" attribute in connection string. | 
| GetSqlDialect() | `string` | Gets the name of default SQL dialect. Can be overrided in inherited classes | 
| GetTableFieldsMap(`string` dbName, `string` schemaName) | `Dictionary`&lt;`string`, [DbFieldInfoList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class)&gt; | Returns all table fields map for the particular DB and schema. Called in [Korzh.EasyQuery.Db.DbGate.CoreGetFields(System.String,System.String,System.String,Korzh.EasyQuery.Db.DbFieldInfoList)](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) | 
| GetTables(`string` dbName, `string` schemaName) | [DbTableInfoList](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtableinfolist-class) | Gets the list of available tables. | 
| GetUidName() | `string` | Gets the name of User ID attribute in connection string | 
| GetVersion() | `string` | Core implemenation of [Korzh.EasyQuery.Db.DbGate.Version](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) property. Must be overrided in descendants. | 
| LoadParams([DbParameters](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbparameters-class) dbParams) | `void` | Loads the connection parameters. | 
| LogDebug(`string` message, `Object[]` args) | `void` | Formats and writes a debug log message. | 
| LogError(`string` message, `Object[]` args) | `void` | Formats and writes an error log message. | 
| LogInfo(`string` message, `Object[]` args) | `void` | Formats and writes an informational log message. | 
| OnLoginRequest() | `void` | Raises the `LoginRequest` event and filled UserID and Password by values returned in event arguments | 
| SaveParams([DbParameters](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbparameters-class) dbParams) | `void` | Saves the connection parameters. | 
| SetConnected(`bool` connected) | `void` | Core implemenation of "set" method of [Korzh.EasyQuery.Db.DbGate.Connected](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) property. | 
| SetConnection(`DbConnection` value) | `void` |  | 
| SetLogger(`ILogger` logger) | `void` | Set a logger | 
| SetProgress(`int` pos) | `void` | Set the progress to the specified position. | 
| SetProgressMinMax(`int` min, `int` max) | `void` | Sets the minimum and maximum of progress indicator. | 
| ToString() | `string` | Returns a `System.String` that represents the current `System.Object`. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| ConnectionType | `Type` | Gets the type of the connection. | 
| DbGateTypes | `Collection`&lt;`Type`&gt; | The list of all registered DbGate types (descendants of DbGate) | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| DbTypeByDataType([DataType](api-reference/easydata-core/easydata-namespace/datatype-enum) dt) | `SqlDbType` | Gets SqlDbType object which coressponds to DataType object specified in  parameter | 
| Register(`Type` gateType) | `void` | Registers the specified gate type. |