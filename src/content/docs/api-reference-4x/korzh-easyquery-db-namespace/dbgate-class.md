---
title: DbGate class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbgate-class
---


Represents base class which allows to get DB structure information availble for some connection
```csharp
public abstract class Korzh.EasyQuery.Db.DbGate

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | finalConnectionString | When overriden in derived class, return the connection | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | Connected | Gets or sets a value indicating whether this `DbGate` is connected.  When this property is assigned to <c>true</c> then the object tries to connect to database. | 
| `DbConnection` | Connection | Gets the connection. | 
| `String` | ConnectionString | Gets or sets the connection string. | 
| `IConnectionStringBuilderDlg` | ConnectionStringBuilderDlg | Gets or sets the connection string builder dialog. | 
| `Boolean` | LoginPrompt | Gets or sets a value indicating whether [Korzh.EasyQuery.Db.DbGate](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) object should ask user for login and password when connect to database. | 
| `String` | Password | Gets or sets the "Password" parameter of database connection. | 
| `IProgressIndicator` | ProgressIndicator | Gets or sets the progress indicator object. | 
| `String` | UserID | Gets or sets the "User ID" parameter of database connection. | 
| `Boolean` | UseViews | Gets or sets a value indicating whether [Korzh.EasyQuery.Db.DbGate](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) will add views in the list of tables returned by [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `String` | Version | Gets the version of the current [Korzh.EasyQuery.Db.DbGate](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) implementation | 


### Events

| Type | Name | Description | 
| --- | --- | --- | 
| `LoginRequestEventHandler` | LoginRequest | Occurs when the [Korzh.EasyQuery.Db.DbGate](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) objects needs to get [Korzh.EasyQuery.Db.DbGate.UserID](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) and [Korzh.EasyQuery.Db.DbGate.Password](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) to connect to some database. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | AssembleConnectionString() | Builds the final connection string based on the string defined in [Korzh.EasyQuery.Db.DbGate.ConnectionString](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) property,  current environment variables and the parameters defined in UserID and Password properties. | 
| `void` | CheckConnection() | Checks the connection. Calls CoreCheckConnection() method. | 
| `void` | CoreCheckConnection() | When overriden in derived class, performs the actual connection checking | 
| `void` | CoreGetDatabases(`DbInfoList` databases) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetDatabases](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetFields(`String` dbName, `String` schemaName, `String` tableName, `DbFieldInfoList` fields) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFields(System.String,System.String,System.String)](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetFieldsBySQL(`String` sql, `DbFieldInfoList` fields) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetLinks(`String` dbName, `String` schemaName, `DbLinkInfoList` links) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetTables(`String` dbName, `String` schemaName, `DbTableInfoList` tables) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreLoadParams(`DbParameters` dbParams) | Core implementation of [Korzh.EasyQuery.Db.DbGate.LoadParams(Korzh.EasyQuery.Db.DbParameters)](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreSaveParams(`DbParameters` dbParams) | Core implementation of [Korzh.EasyQuery.Db.DbGate.SaveParams(Korzh.EasyQuery.Db.DbParameters)](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `Boolean` | GetConnected() | Core implemenation of "get" method of [Korzh.EasyQuery.Db.DbGate.Connected](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) property. | 
| `DbConnection` | GetConnection() | When overriden in derived class, returns the connection | 
| `DbDataAdapter` | GetDataAdapter(`String` sqlText) | Gets the data adapter. | 
| `DbInfoList` | GetDatabases() | Gets the list of available databases. | 
| `DbFieldInfoList` | GetFields(`String` dbName, `String` schemaName, `String` tableName) | Gets the fields by table. | 
| `DbFieldInfoList` | GetFieldsBySQL(`String` sql) | Gets the fields of result set of some SQL statement execution. | 
| `DbFieldInfoList` | GetFieldsEx(`String` dbName, `String` schemaName, `String` tableName, `Boolean` sortByOriginalPosition) | Gets the fields by table. | 
| `FormatType` | GetFormatType() | Returns the format type for this DB gate | 
| `DbLinkInfoList` | GetLinks(`String` dbName, `String` schemaName) | Gets the list of available tables. | 
| `String` | GetName() | Gets the name of [Korzh.EasyQuery.Db.DbGate](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class). Must be overrided in inherited classes | 
| `String` | GetPwdName() | Gets the name of "password" attribute in connection string. | 
| `String` | GetSqlDialect() | Gets the name of default SQL dialect. Can be overrided in inherited classes | 
| `DbTableInfoList` | GetTables(`String` dbName, `String` schemaName) | Gets the list of available tables. | 
| `String` | GetUidName() | Gets the name of User ID attribute in connection string | 
| `String` | GetVersion() | Core implemenation of [Korzh.EasyQuery.Db.DbGate.Version](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) property. Must be overrided in descendants. | 
| `void` | LoadParams(`DbParameters` dbParams) | Loads the connection parameters. | 
| `void` | LogDebug(`String` message, `Object[]` args) |  | 
| `void` | LogError(`String` message, `Object[]` args) |  | 
| `void` | LogInfo(`String` message, `Object[]` args) |  | 
| `void` | OnLoginRequest() | Raises the `LoginRequest` event and filled UserID and Password by values returned in event arguments | 
| `void` | SaveParams(`DbParameters` dbParams) | Saves the connection parameters. | 
| `void` | SetConnected(`Boolean` connected) | Core implemenation of "set" method of [Korzh.EasyQuery.Db.DbGate.Connected](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) property. | 
| `void` | SetLogger(`ILogger` logger) | Set a logger | 
| `void` | SetProgress(`Int32` pos) | Set the progress to the specified position. | 
| `void` | SetProgressMinMax(`Int32` min, `Int32` max) | Sets the minimum and maximum of progress indicator. | 
| `String` | ToString() | Returns a `System.String` that represents the current `System.Object`. | 


### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Collection<Type>` | DbGateTypes | The list of all registered DbGate types (descendants of DbGate) | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `SqlDbType` | DbTypeByDataType(`DataType` dt) | Gets SqlDbType object which coressponds to DataType object specified in  parameter | 
| `void` | Register(`Type` gateType) | Registers the specified gate type. |