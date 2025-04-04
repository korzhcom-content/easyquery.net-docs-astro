---
title: NpgSqlGate class
slug: api-reference-4x/korzh-easyquery-dbgates-namespace/npgsqlgate-class
sidebar:
  order: 100
---

Represents DbGate implementation for NpgSql databases
```csharp
public class Korzh.EasyQuery.DbGates.NpgSqlGate
    : DbGate

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `NpgsqlConnection` | Connection | Gets the connection. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CoreCheckConnection() | Checks the connection. | 
| `void` | CoreGetDatabases(`DbInfoList` databases) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetDatabases](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetFields(`String` dbName, `String` schemaName, `String` tableName, `DbFieldInfoList` fields) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFields(System.String,System.String,System.String)](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetFieldsBySQL(`String` sql, `DbFieldInfoList` fields) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetLinks(`String` dbName, `String` schemaName, `DbLinkInfoList` links) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetTables(`String` dbName, `String` schemaName, `DbTableInfoList` tables) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `Boolean` | GetConnected() | Core implemenation of "get" method of [Korzh.EasyQuery.Db.DbGate.Connected](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) property. | 
| `DbConnection` | GetConnection() |  | 
| `DbDataAdapter` | GetDataAdapter(`String` sqlText) |  | 
| `FormatType` | GetFormatType() | Gets the type of the format. | 
| `String` | GetName() | Gets the name of database gate. | 
| `String` | GetPwdName() | Gets the name of "password" attribute in connection string. | 
| `String` | GetSqlDialect() | Gets the name of default SQL dialect. | 
| `String` | GetUidName() | Gets the name of User ID attribute in connection string | 
| `void` | SetConnected(`Boolean` connected) | Core implemenation of "set" method of [Korzh.EasyQuery.Db.DbGate.Connected](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) property. |
