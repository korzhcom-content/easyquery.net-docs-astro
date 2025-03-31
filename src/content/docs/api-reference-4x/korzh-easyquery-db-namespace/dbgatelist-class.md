---
title: DbGateList class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbgatelist-class
---

Represents the list of `DbGate` objects
```csharp
public class Korzh.EasyQuery.Db.DbGateList
    : Collection<DbGate>, IList<DbGate>, ICollection<DbGate>, IEnumerable<DbGate>, IEnumerable, IList, ICollection, IReadOnlyList<DbGate>, IReadOnlyCollection<DbGate>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DbGate` | Item | Gets or sets the [Korzh.EasyQuery.Db.DbGate](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) with the specified name. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `DbGate` | Find(`String` className, `String` version) | Finds the specified [Korzh.EasyQuery.Db.DbGate](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) object by its class name and version number | 
| `DbGate` | FindByName(`String` name, `String` version) | Finds the specified [Korzh.EasyQuery.Db.DbGate](//easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbgate-class) object by its name and version number |