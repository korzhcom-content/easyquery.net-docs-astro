---
title: LinkStore class
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery.Db namespace/linkstore-class
---


Represetns storage of links.
```csharp
public class Korzh.EasyQuery.Db.LinkStore
    : TableLinkList, IList<TableLink>, ICollection<TableLink>, IEnumerable<TableLink>, IEnumerable, IList, ICollection, IReadOnlyList<TableLink>, IReadOnlyCollection<TableLink>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | ClearItems() | Clears the items. | 
| `void` | InsertItem(`Int32` index, `TableLink` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| `void` | RemoveByTable(`Table` table) | Removes all links which contain the table passed in parameter | 
| `void` | RemoveItem(`Int32` index) | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. |