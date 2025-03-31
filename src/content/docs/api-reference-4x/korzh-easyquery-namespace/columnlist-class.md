---
title: ColumnList class
slug: api-reference-4x/korzh-easyquery-namespace/columnlist-class
---

Represents a list of columns.
```csharp
public class Korzh.EasyQuery.ColumnList
    : Collection<Column>, IList<Column>, ICollection<Column>, IEnumerable<Column>, IEnumerable, IList, ICollection, IReadOnlyList<Column>, IReadOnlyCollection<Column>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | HasAggregate | Gets a value indicating whether this list has at least one aggregate column. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | ContainsGhosts(`Column&` column) | Gets a value indicating whether this instance contains columns with "ghost" attributes. | 
| `Column` | FindByAlias(`String` alias) | Finds the column by alias. | 
| `Column` | FindByBaseAttrID(`String` attrID) | Finds the column by its base attribute ID. | 
| `Column` | FindByCaption(`String` caption) | Finds the column by its caption. |