---
title: TableLinkList class
slug: api-reference-4x/korzh-easyquery-db-namespace/tablelinklist-class
sidebar:
  order: 100
---

Represents list of the links ([Korzh.EasyQuery.Db.TableLink](///easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/tablelink-class) objects).
```csharp
public class Korzh.EasyQuery.Db.TableLinkList
    : Collection<TableLink>, IList<TableLink>, ICollection<TableLink>, IEnumerable<TableLink>, IEnumerable, IList, ICollection, IReadOnlyList<TableLink>, IReadOnlyCollection<TableLink>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `TableLink` | FindByTables(`Table` table1, `Table` table2) | Finds the Link by tables. |
