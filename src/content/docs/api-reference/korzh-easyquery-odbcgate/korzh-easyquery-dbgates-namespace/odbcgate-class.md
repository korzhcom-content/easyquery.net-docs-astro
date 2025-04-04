---
title: OdbcGate class
slug: >-
  api-reference/korzh-easyquery-odbcgate/korzh-easyquery-dbgates-namespace/odbcgate-class
sidebar:
  order: 100
---

Represents [Korzh.EasyQuery.Db.DbGate](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) implementation for ODBC connection
```csharp
public class Korzh.EasyQuery.DbGates.OdbcGate
    : DbGate

```
Package: `Korzh.EasyQuery.OdbcGate` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.OdbcGate.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| OdbcGate() | `void` | Initializes a new instance of the `OdbcGate` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Connection | `OdbcConnection` | Gets the `System.Data.Odbc.OdbcConnection`. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CoreCheckConnection() | `void` | Checks the connection.  <exception cref="T:Korzh.EasyQuery.Db.DbGateException">Connection is null</exception> | 
| CoreGetDatabases([DbInfoList](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbinfolist-class) databases) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetDatabases](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetFields(`string` dbName, `string` schemaName, `string` tableName, [DbFieldInfoList](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class) fields) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFields(System.String,System.String,System.String)](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetFieldsBySQL(`string` sql, [DbFieldInfoList](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class) fields) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetLinks(`string` dbName, `string` schemaName, [DbLinkInfoList](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dblinkinfolist-class) links) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetTables(`string` dbName, `string` schemaName, [DbTableInfoList](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtableinfolist-class) tables) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| GetConnection() | `DbConnection` | Gets the `System.Data.Odbc.OdbcConnection`. | 
| GetDataAdapter(`string` sqlText) | `DbDataAdapter` | Returns new instance of `System.Data.Odbc.OdbcDataAdapter`. | 
| GetFormatType() | [FormatType](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/formattype-enum) | Returns the format type for this DB gate | 
| GetGateId() | `string` | Gets the ID of [Korzh.EasyQuery.Db.DbGate](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) type. | 
| GetName() | `string` | Gets the name of [Korzh.EasyQuery.DbGates.OdbcGate](/easyquery/docs/api-reference/korzh-easyquery-odbcgate/korzh-easyquery-dbgates-namespace/odbcgate-class) object. | 
| GetPwdName() | `string` | Gets the name of "password" attribute in connection string. | 
| GetSqlDialect() | `string` | Gets the name of default SQL dialect. | 
| GetUidName() | `string` | Gets the name of User ID attribute in connection string | 
| SetConnection(`DbConnection` connection) | `void` | Sets the `System.Data.Odbc.OdbcConnection` | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ConnectionType | `Type` | Gets the type of the connection. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Register() | `void` | Registers this type of DbGate in global list of DbGate types. |
