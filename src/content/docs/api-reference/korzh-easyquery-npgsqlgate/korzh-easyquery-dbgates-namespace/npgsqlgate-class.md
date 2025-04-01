---
title: NpgSqlGate class
slug: >-
  api-reference/korzh-easyquery-npgsqlgate/korzh-easyquery-dbgates-namespace/npgsqlgate-class
sidebar:
  order: 100
---

Represents DbGate implementation for NpgSql databases
```csharp
public class Korzh.EasyQuery.DbGates.NpgSqlGate
    : DbGate

```
Package: `Korzh.EasyQuery.NpgSqlGate` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.NpgSqlGate.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| NpgSqlGate() | `void` | Initializes a new instance of the `MySqlGate` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Connection | `NpgsqlConnection` | Gets the connection. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CoreCheckConnection() | `void` | Checks the connection.  <exception cref="T:Korzh.EasyQuery.Db.DbGateException">Connection is null</exception> | 
| CoreGetDatabases([DbInfoList](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbinfolist-class) databases) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetDatabases](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetFieldsBySQL(`string` sql, [DbFieldInfoList](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class) fields) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetLinks(`string` dbName, `string` schemaName, [DbLinkInfoList](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dblinkinfolist-class) links) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetTables(`string` dbName, `string` schemaName, [DbTableInfoList](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtableinfolist-class) tables) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| GetConnection() | `DbConnection` | Get the connection object (NpgsqlConnection in this case) | 
| GetDataAdapter(`string` sqlText) | `DbDataAdapter` | Gets the data adapter (NpgsqlDataAdapter in this case) | 
| GetFormatType() | [FormatType](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/formattype-enum) | Gets the type of the format. | 
| GetGateId() | `string` | Gets the ID of [Korzh.EasyQuery.Db.DbGate](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) type. | 
| GetName() | `string` | Gets the name of database gate. | 
| GetPwdName() | `string` | Gets the name of "password" attribute in connection string. | 
| GetSqlDialect() | `string` | Gets the name of default SQL dialect. | 
| GetTableFieldsMap(`string` dbName, `string` schemaName) | `Dictionary`&lt;`string`, [DbFieldInfoList](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class)&gt; |  | 
| GetUidName() | `string` | Gets the name of User ID attribute in connection string | 
| SetConnection(`DbConnection` connection) | `void` | Sets the `Npgsql.NpgsqlConnection` | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ConnectionType | `Type` | Gets the type of the connection. |
