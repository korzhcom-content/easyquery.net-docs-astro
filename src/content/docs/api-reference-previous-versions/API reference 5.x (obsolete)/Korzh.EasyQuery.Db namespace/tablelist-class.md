---
title: TableList class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Db namespace/tablelist-class
---


Represents list of the [Korzh.EasyQuery.Db.Table](/api-reference-5x/korzh-easyquery-db-namespace/table-class) objects.
```csharp
public class Korzh.EasyQuery.Db.TableList
    : Collection<Table>, IList<Table>, ICollection<Table>, IEnumerable<Table>, IEnumerable, IList, ICollection, IReadOnlyList<Table>, IReadOnlyCollection<Table>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddRange(`IEnumerable<Table>` tables) | Adds the range of tables | 
| `void` | CopyFrom(`TableList` tables) | Copies tables from another list. | 
| `Table` | FindByAlias(`String` alias) | Finds the [Korzh.EasyQuery.Db.Table](/api-reference-5x/korzh-easyquery-db-namespace/table-class) object by its alias. | 
| `Table` | FindByName(`String` name) | Finds the [Korzh.EasyQuery.Db.Table](/api-reference-5x/korzh-easyquery-db-namespace/table-class) object by its name. | 
| `String` | GetCommaText() | Gets the string whcih contains comma separated list of tables | 
| `String` | GetUniqueAlias(`String` baseName) | Generates an unique [Korzh.EasyQuery.Db.Table](/api-reference-5x/korzh-easyquery-db-namespace/table-class) object alias by some base name | 
| `void` | SortAlphabetically() | Sorts the list alphabetically. |