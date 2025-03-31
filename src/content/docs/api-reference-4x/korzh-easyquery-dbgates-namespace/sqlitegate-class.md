---
title: SqLiteGate class
slug: api-reference-4x/korzh-easyquery-dbgates-namespace/sqlitegate-class
---

Represents [Korzh.EasyQuery.Db.DbGate](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) implementation for SQLite databases
```csharp
public class Korzh.EasyQuery.DbGates.SqLiteGate
    : DbGate

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DbConnection` | Connection | Gets the connection. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | AssembleConnectionString() | Builds the final connection string based on the string defined in <see cref="!:ConnectionString" /> property,  current environment variables and the parameters defined in UserID and Password properties. | 
| `void` | CoreCheckConnection() | Checks the connection. | 
| `void` | CoreGetFields(`String` dbName, `String` schemaName, `String` tableName, `DbFieldInfoList` fields) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFields(System.String,System.String,System.String)](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetFieldsBySQL(`String` sql, `DbFieldInfoList` fields) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetLinks(`String` dbName, `String` schemaName, `DbLinkInfoList` links) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `void` | CoreGetTables(`String` dbName, `String` schemaName, `DbTableInfoList` tables) | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) method. | 
| `Boolean` | GetConnected() | Core implemenation of "get" method of [Korzh.EasyQuery.Db.DbGate.Connected](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) property. | 
| `DbConnection` | GetConnection() | When overriden in derived class, returns the connection | 
| `DataType` | GetDataTypeBySqlType(`String` sqlType) |  | 
| `FormatType` | GetFormatType() | Gets the type of the format. | 
| `String` | GetName() | Gets the ID of [Korzh.EasyQuery.Db.DbGate](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) type. | 
| `void` | SetConnected(`Boolean` connected) | Core implemenation of "set" method of [Korzh.EasyQuery.Db.DbGate.Connected](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) property. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | Register() | Registers this type of DbGate in global list of DbGate types. |