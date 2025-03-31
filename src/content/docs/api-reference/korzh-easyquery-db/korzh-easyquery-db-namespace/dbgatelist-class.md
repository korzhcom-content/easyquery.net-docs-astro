---
title: DbGateList class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgatelist-class
---

Represents the list of `DbGate` objects
```csharp
public class Korzh.EasyQuery.Db.DbGateList
    : Collection<DbGate>

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbGateList() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Item | [DbGate](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) | Gets or sets the [Korzh.EasyQuery.Db.DbGate](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) with the specified name. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Find(`string` className, `string` version) | [DbGate](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) | Finds the specified [Korzh.EasyQuery.Db.DbGate](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) object by its class name and version number | 
| FindByName(`string` name, `string` version) | [DbGate](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) | Finds the specified [Korzh.EasyQuery.Db.DbGate](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbgate-class) object by its name and version number |