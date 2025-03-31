---
title: OdpCoreGate class
slug: api-reference/korzh-easyquery-odpcoregate/korzh-easyquery-dbgates-namespace/odpcoregate-class
---

Represents DbGate implementation for Oracle Data Provider for .NET  Implements the [Korzh.EasyQuery.Db.DbGate](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class)
```csharp
public class Korzh.EasyQuery.DbGates.OdpCoreGate
    : DbGate

```
Package: `Korzh.EasyQuery.OdpCoreGate` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.OdpCoreGate.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| OdpCoreGate() | `void` | Initializes a new instance of the `OdbcGate` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Connection | `OracleConnection` | Gets the `Oracle.ManagedDataAccess.Client.OracleConnection`. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CoreCheckConnection() | `void` | When overriden in derived class, performs the actual connection checking | 
| CoreGetDatabases([DbInfoList](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbinfolist-class) databases) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetDatabases](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetFieldsBySQL(`string` sql, [DbFieldInfoList](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class) fields) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetLinks(`string` dbName, `string` schemaName, [DbLinkInfoList](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dblinkinfolist-class) links) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetTables(`string` dbName, `string` schemaName, [DbTableInfoList](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtableinfolist-class) tables) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| GetConnection() | `DbConnection` | Gets the `Oracle.ManagedDataAccess.Client.OracleConnection` object. | 
| GetFormatType() | [FormatType](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/formattype-enum) | Gets the type of the format. | 
| GetGateId() | `string` | Gets the ID of [Korzh.EasyQuery.Db.DbGate](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) type. | 
| GetName() | `string` | Gets the name of [Korzh.EasyQuery.DbGates.OdpCoreGate](//easyquery/docs/api-reference/korzh-easyquery-odpcoregate/korzh-easyquery-dbgates-namespace/odpcoregate-class) object. | 
| GetPwdName() | `string` | Gets the name of "password" attribute in connection string. | 
| GetSqlDialect() | `string` | Gets the name of default SQL dialect. | 
| GetTableFieldsMap(`string` dbName, `string` schemaName) | `Dictionary`&lt;`string`, [DbFieldInfoList](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class)&gt; |  | 
| GetUidName() | `string` | Gets the name of User ID attribute in connection string | 
| SetConnection(`DbConnection` connection) | `void` | Sets the `Oracle.ManagedDataAccess.Client.OracleConnection` | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ConnectionType | `Type` | Gets the type of the connection. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Register() | `void` | Registers this type of DbGate in global list of DbGate types. |