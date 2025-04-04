---
title: DbParameters class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbparameters-class
sidebar:
  order: 100
---

Represents different parameters of database linked with this [Korzh.EasyQuery.DataModel](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) object
```csharp
public class Korzh.EasyQuery.Db.DbParameters
    : Collection<DbParam>

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbParameters() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ConnectionString | `string` | Gets or sets the connection string. | 
| GateClass | `string` | Gets or sets the ID of database gate. | 
| Item | `string` | Gets or sets the `String` with the specified name. | 
| LoginPrompt | `bool` | Gets or sets a value indicating whether [Korzh.EasyQuery.Db.DbGate](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) object should ask user for login and password when connect to database. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| FindByName(`string` name) | [DbParam](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbparam-class) | Finds the database parameter by key. |
