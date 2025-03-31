---
title: DbParameters class
slug: api-reference-5x/korzh-easyquery-db-namespace/dbparameters-class
---

Represents different parameters of database linked with this [Korzh.EasyQuery.DataModel](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/datamodel-class) object
```csharp
public class Korzh.EasyQuery.Db.DbParameters
    : Collection<DbParam>, IList<DbParam>, ICollection<DbParam>, IEnumerable<DbParam>, IEnumerable, IList, ICollection, IReadOnlyList<DbParam>, IReadOnlyCollection<DbParam>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | ConnectionString | Gets or sets the connection string. | 
| `String` | GateClass | Gets or sets the ID of database gate. | 
| `String` | Item | Gets or sets the `String` with the specified name. | 
| `Boolean` | LoginPrompt | Gets or sets a value indicating whether [Korzh.EasyQuery.Db.DbGate](//easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbgate-class) object should ask user for login and password when connect to database. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `DbParam` | FindByName(`String` name) | Finds the database parameter by key. |