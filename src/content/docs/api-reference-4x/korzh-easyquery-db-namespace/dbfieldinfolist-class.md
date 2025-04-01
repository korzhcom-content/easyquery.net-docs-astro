---
title: DbFieldInfoList class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbfieldinfolist-class
sidebar:
  order: 100
---

Represents the list of [Korzh.EasyQuery.Db.DbTableInfo](///////////////easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbtableinfo-class) objects
```csharp
public class Korzh.EasyQuery.Db.DbFieldInfoList
    : Collection<DbFieldInfo>, IList<DbFieldInfo>, ICollection<DbFieldInfo>, IEnumerable<DbFieldInfo>, IEnumerable, IList, ICollection, IReadOnlyList<DbFieldInfo>, IReadOnlyCollection<DbFieldInfo>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | SortedByPosition | Gets or sets a value indicating whether the list of fields should be sorted by position or alphabetically (default value). | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | InsertItem(`Int32` index, `DbFieldInfo` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. |
