---
title: TableLinkList class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Db namespace/tablelinklist-class
---


Represents list of the links ([Korzh.EasyQuery.Db.TableLink](/api-reference-5x/korzh-easyquery-db-namespace/tablelink-class) objects).
```csharp
public class Korzh.EasyQuery.Db.TableLinkList
    : Collection<TableLink>, IList<TableLink>, ICollection<TableLink>, IEnumerable<TableLink>, IEnumerable, IList, ICollection, IReadOnlyList<TableLink>, IReadOnlyCollection<TableLink>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `IEnumerable<TableLink>` | FindByTables(`Table` table1, `Table` table2) | Finds links by tables. |