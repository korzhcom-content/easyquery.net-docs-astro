---
title: SqLiteGate class
slug: >-
  api-reference/korzh-easyquery-sqlitegate/korzh-easyquery-dbgates-namespace/sqlitegate-class
sidebar:
  order: 100
---

Represents [Korzh.EasyQuery.Db.DbGate](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) implementation for SQLite databases
```csharp
public class Korzh.EasyQuery.DbGates.SqLiteGate
    : DbGate

```
Package: `Korzh.EasyQuery.SqLiteGate` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.SqLiteGate.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SqLiteGate() | `void` | Initializes a new instance of the [Korzh.EasyQuery.DbGates.SqLiteGate](///////////////easyquery/docs/api-reference/korzh-easyquery-sqlitegate/korzh-easyquery-dbgates-namespace/sqlitegate-class) class. | 
| SqLiteGate(`SqliteConnection` connection) | `void` | Initializes a new instance of the [Korzh.EasyQuery.DbGates.SqLiteGate](///////////////easyquery/docs/api-reference/korzh-easyquery-sqlitegate/korzh-easyquery-dbgates-namespace/sqlitegate-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Connection | `SqliteConnection` | Gets the connection. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AssembleConnectionString() | `string` | Builds the final connection string based on the string defined in [Korzh.EasyQuery.Db.DbGate.ConnectionString](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) property,  current environment variables and the parameters defined in UserID and Password properties. | 
| CoreCheckConnection() | `void` | Checks the connection.  <exception cref="T:Korzh.EasyQuery.Db.DbGateException">Connection is null</exception> | 
| CoreGetFields(`string` dbName, `string` schemaName, `string` tableName, [DbFieldInfoList](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class) fields) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFields(System.String,System.String,System.String)](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetFieldsBySQL(`string` sql, [DbFieldInfoList](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfolist-class) fields) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetFieldsBySQL(System.String)](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetLinks(`string` dbName, `string` schemaName, [DbLinkInfoList](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dblinkinfolist-class) links) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetLinks(System.String,System.String)](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| CoreGetTables(`string` dbName, `string` schemaName, [DbTableInfoList](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtableinfolist-class) tables) | `void` | Core implementation of [Korzh.EasyQuery.Db.DbGate.GetTables(System.String,System.String)](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) method. | 
| GetConnection() | `DbConnection` | When overriden in derived class, returns the connection | 
| GetDataTypeBySqlType(`string` sqlType) | [DataType](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets the DataType enum value by by SQLite data type. | 
| GetFormatType() | [FormatType](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/formattype-enum) | Gets the type of the format. | 
| GetGateId() | `string` | Gets the ID of [Korzh.EasyQuery.Db.DbGate](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) type. | 
| GetName() | `string` | Gets the ID of [Korzh.EasyQuery.Db.DbGate](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) type. | 
| SetConnection(`DbConnection` connection) | `void` | Sets the `Microsoft.Data.Sqlite.SqliteConnection` | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ConnectionType | `Type` | Gets the type of the connection. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Register() | `void` | Registers this type of DbGate in global list of DbGate types. |
