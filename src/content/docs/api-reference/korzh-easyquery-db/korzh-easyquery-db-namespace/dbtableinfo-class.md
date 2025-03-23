---
title: DbTableInfo class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtableinfo-class
---


Represents a structure that contains information about some database table
```csharp
public class Korzh.EasyQuery.Db.DbTableInfo

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbTableInfo() | `void` | Initializes a new instance of the `DbTableInfo` class. | 
| DbTableInfo(`string` tableName) | `void` | Initializes a new instance of the `DbTableInfo` class. | 
| DbTableInfo(`string` dbName, `string` schemaName, `string` tableName) | `void` | Initializes a new instance of the `DbTableInfo` class. | 
| DbTableInfo(`string` dbName, `string` schemaName, `string` tableName, `bool` isView) | `void` | Initializes a new instance of the `DbTableInfo` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DBName | `string` | Gets or sets the name of the database which this table belongs to. | 
| IsView | `bool` | Gets or sets if the current table is a View. | 
| Name | `string` | Gets or sets the name of table. | 
| SchemaName | `string` | Gets or sets the name of the dabase schema which table belongs to. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ToString() | `string` | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. |