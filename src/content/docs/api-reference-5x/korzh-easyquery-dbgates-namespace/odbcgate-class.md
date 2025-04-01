---
title: OdbcGate class
slug: api-reference-5x/korzh-easyquery-dbgates-namespace/odbcgate-class
sidebar:
  order: 100
---

Represents [Korzh.EasyQuery.Db.DbGate](///easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) implementation for ODBC connection
```csharp
public class Korzh.EasyQuery.DbGates.OdbcGate
    : DbGate

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `OdbcConnection` | Connection | Gets the `System.Data.Odbc.OdbcConnection`. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CoreCheckConnection() | Checks the connection.  <exception cref="T:Korzh.EasyQuery.Db.DbGateException">Connection is null</exception> | 
| `void` | CoreGetDatabases(`DbInfoList` databases) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetDatabases](///easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetFields(`String` dbName, `String` schemaName, `String` tableName, `DbFieldInfoList` fields) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFields(System.String,System.String,System.String)](///easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetFieldsBySQL(`String` sql, `DbFieldInfoList` fields) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)](///easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetLinks(`String` dbName, `String` schemaName, `DbLinkInfoList` links) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)](///easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetTables(`String` dbName, `String` schemaName, `DbTableInfoList` tables) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](///easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `Boolean` | GetConnected() | Core implemenation of "get" method of [Korzh.EasyQuery.Db.DbGate.Connected](///easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) property. | 
| `DbConnection` | GetConnection() | Gets the `System.Data.Odbc.OdbcConnection`. | 
| `DbDataAdapter` | GetDataAdapter(`String` sqlText) | Returns new instance of `System.Data.Odbc.OdbcDataAdapter`. | 
| `FormatType` | GetFormatType() | Returns the format type for this DB gate | 
| `String` | GetGateId() | Gets the ID of [Korzh.EasyQuery.Db.DbGate](///easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) type. | 
| `String` | GetName() | Gets the name of [Korzh.EasyQuery.DbGates.OdbcGate](///easyquery/docs/api-reference-5x/korzh-easyquery-dbgates-namespace/odbcgate-class) object. | 
| `String` | GetPwdName() | Gets the name of "password" attribute in connection string. | 
| `String` | GetSqlDialect() | Gets the name of default SQL dialect. | 
| `String` | GetUidName() | Gets the name of User ID attribute in connection string | 
| `void` | SetConnected(`Boolean` connected) | Core implemenation of "set" method of [Korzh.EasyQuery.Db.DbGate.Connected](///easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) property. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Type` | ConnectionType | Gets the type of the connection. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | Register() | Registers this type of DbGate in global list of DbGate types. |
