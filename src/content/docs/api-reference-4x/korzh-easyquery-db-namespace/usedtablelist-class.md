---
title: UsedTableList class
slug: api-reference-4x/korzh-easyquery-db-namespace/usedtablelist-class
---

Represents a list of "used" tables.  The only difference with orginal TableList is that this class doesn't allow to insert already existing table and inserts tables in list according their priority
```csharp
public class Korzh.EasyQuery.Db.UsedTableList
    : TableList, IList<Table>, ICollection<Table>, IEnumerable<Table>, IEnumerable, IList, ICollection, IReadOnlyList<Table>, IReadOnlyCollection<Table>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | InsertItem(`Int32` index, `Table` item) | Inserts the item. |