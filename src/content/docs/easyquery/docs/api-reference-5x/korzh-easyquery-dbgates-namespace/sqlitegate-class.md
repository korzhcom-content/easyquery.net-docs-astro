---
title: SqLiteGate class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-dbgates-namespace/sqlitegate-class
---


Represents [Korzh.EasyQuery.Db.DbGate](/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) implementation for SQLite databases
```csharp
public class Korzh.EasyQuery.DbGates.SqLiteGate
    : DbGate

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `SqliteConnection` | Connection | Gets the connection. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | AssembleConnectionString() | Builds the final connection string based on the string defined in [Korzh.EasyQuery.Db.DbGate.ConnectionString](/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) property,  current environment variables and the parameters defined in UserID and Password properties. | 
| `void` | CoreCheckConnection() | Checks the connection.  <exception cref="T:Korzh.EasyQuery.Db.DbGateException">Connection is null</exception> | 
| `void` | CoreGetFields(`String` dbName, `String` schemaName, `String` tableName, `DbFieldInfoList` fields) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFields(System.String,System.String,System.String)](/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetFieldsBySQL(`String` sql, `DbFieldInfoList` fields) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)](/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetLinks(`String` dbName, `String` schemaName, `DbLinkInfoList` links) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)](/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetTables(`String` dbName, `String` schemaName, `DbTableInfoList` tables) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `Boolean` | GetConnected() | Core implemenation of "get" method of [Korzh.EasyQuery.Db.DbGate.Connected](/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) property. | 
| `DbConnection` | GetConnection() | When overriden in derived class, returns the connection | 
| `DataType` | GetDataTypeBySqlType(`String` sqlType) | Gets the DataType enum value by by SQLite data type. | 
| `FormatType` | GetFormatType() | Gets the type of the format. | 
| `String` | GetGateId() | Gets the ID of [Korzh.EasyQuery.Db.DbGate](/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) type. | 
| `String` | GetName() | Gets the ID of [Korzh.EasyQuery.Db.DbGate](/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) type. | 
| `void` | SetConnected(`Boolean` connected) | Core implemenation of "set" method of [Korzh.EasyQuery.Db.DbGate.Connected](/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) property. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Type` | ConnectionType | Gets the type of the connection. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | Register() | Registers this type of DbGate in global list of DbGate types. |