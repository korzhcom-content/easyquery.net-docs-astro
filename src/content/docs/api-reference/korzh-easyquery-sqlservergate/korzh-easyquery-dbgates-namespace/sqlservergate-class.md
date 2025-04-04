---
title: SqlServerGate class
slug: >-
  api-reference/korzh-easyquery-sqlservergate/korzh-easyquery-dbgates-namespace/sqlservergate-class
sidebar:
  order: 100
---

Represents [Korzh.EasyQuery.Db.DbGate](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) implementation for MS SQL databases
```csharp
public class Korzh.EasyQuery.DbGates.SqlServerGate
    : DbGate

```
Package: `Korzh.EasyQuery.SqlServerGate` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.SqlServerGate.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SqlServerGate() | `void` | Initializes a new instance of the `SqlClientGate` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Connection | `SqlConnection` | Gets the `Microsoft.Data.SqlClient.SqlConnection`. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CoreCheckConnection() | `void` | Checks the connection.  <exception cref="T:Korzh.EasyQuery.Db.DbGateException">Connection is null</exception> | 
| CoreGetDatabases([DbInfoList](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbinfolist-class) databases) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetDatabases](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetFieldsBySQL(`string` sql, [DbFieldInfoList](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class) fields) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetLinks(`string` dbName, `string` schemaName, [DbLinkInfoList](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dblinkinfolist-class) links) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetTables(`string` dbName, `string` schemaName, [DbTableInfoList](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtableinfolist-class) tables) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| GetConnection() | `DbConnection` | Gets the `Microsoft.Data.SqlClient.SqlConnection`. | 
| GetDataAdapter(`string` sqlText) | `DbDataAdapter` | Returns new instance of `Microsoft.Data.SqlClient.SqlDataAdapter`. | 
| GetDataTypeBySqlType(`string` sqlType) | [DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Converts SQL type to DataType. | 
| GetFormatType() | [FormatType](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/formattype-enum) | Gets the type of the format. | 
| GetGateId() | `string` | Gets the ID of [Korzh.EasyQuery.Db.DbGate](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) type. | 
| GetName() | `string` | Gets the name of [Korzh.EasyQuery.DbGates.SqlServerGate](/easyquery/docs/api-reference/korzh-easyquery-sqlservergate/korzh-easyquery-dbgates-namespace/sqlservergate-class). | 
| GetPwdName() | `string` | Gets the name of "password" attribute in connection string. | 
| GetSqlDialect() | `string` | Gets the name of default SQL dialect. | 
| GetTableFieldsMap(`string` dbName, `string` schemaName) | `Dictionary`&lt;`string`, [DbFieldInfoList](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class)&gt; |  | 
| GetUidName() | `string` | Gets the name of User ID attribute in connection string | 
| SetConnection(`DbConnection` connection) | `void` | Sets the `Microsoft.Data.SqlClient.SqlConnection` | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ConnectionType | `Type` | Gets the type of the connection. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Register() | `void` | Registers this type of DbGate in global list of DbGate types. |
