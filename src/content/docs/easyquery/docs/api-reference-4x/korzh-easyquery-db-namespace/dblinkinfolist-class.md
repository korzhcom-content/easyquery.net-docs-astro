---
title: DbLinkInfoList class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dblinkinfolist-class
---


Represents the list of [Korzh.EasyQuery.Db.DbLinkInfo](/api-reference-4x/korzh-easyquery-db-namespace/dblinkinfo-class) objects
```csharp
public class Korzh.EasyQuery.Db.DbLinkInfoList
    : Collection<DbLinkInfo>, IList<DbLinkInfo>, ICollection<DbLinkInfo>, IEnumerable<DbLinkInfo>, IEnumerable, IList, ICollection, IReadOnlyList<DbLinkInfo>, IReadOnlyCollection<DbLinkInfo>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `DbLinkInfo` | FindByTableNames(`String` table1, `String` table2) | Finds the link by table names. |