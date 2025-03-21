---
title: OdpCoreGate class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-dbgates-namespace/odpcoregate-class
---


```csharp
public class Korzh.EasyQuery.DbGates.OdpCoreGate
    : DbGate

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `OracleConnection` | Connection | Gets the `Oracle.ManagedDataAccess.Client.OracleConnection`. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CoreCheckConnection() | When overriden in derived class, performs the actual connection checking | 
| `void` | CoreGetDatabases(`DbInfoList` databases) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetDatabases](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetFields(`String` dbName, `String` schemaName, `String` tableName, `DbFieldInfoList` fields) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFields(System.String,System.String,System.String)](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetFieldsBySQL(`String` sql, `DbFieldInfoList` fields) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetLinks(`String` dbName, `String` schemaName, `DbLinkInfoList` links) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetTables(`String` dbName, `String` schemaName, `DbTableInfoList` tables) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `Boolean` | GetConnected() | Core implemenation of "get" method of [Korzh.EasyQuery.Db.DbGate.Connected](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) property. | 
| `DbConnection` | GetConnection() | Gets the `Oracle.ManagedDataAccess.Client.OracleConnection` object. | 
| `FormatType` | GetFormatType() | Gets the type of the format. | 
| `String` | GetName() | Gets the name of [Korzh.EasyQuery.DbGates.OdpCoreGate](/api-reference-4x/korzh-easyquery-dbgates-namespace/odpcoregate-class) object. | 
| `String` | GetPwdName() | Gets the name of "password" attribute in connection string. | 
| `String` | GetSqlDialect() | Gets the name of default SQL dialect. | 
| `String` | GetUidName() | Gets the name of User ID attribute in connection string | 
| `void` | SetConnected(`Boolean` connected) | Core implemenation of "set" method of [Korzh.EasyQuery.Db.DbGate.Connected](/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) property. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | Register() | Registers this type of DbGate in global list of DbGate types. |