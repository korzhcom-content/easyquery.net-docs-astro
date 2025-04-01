---
title: Path class
slug: api-reference-5x/korzh-easyquery-db-namespace/path-class
sidebar:
  order: 100
---

Represents list of tables which are linked to each other
```csharp
public class Korzh.EasyQuery.Db.Path
    : TableList, IList<Table>, ICollection<Table>, IEnumerable<Table>, IEnumerable, IList, ICollection, IReadOnlyList<Table>, IReadOnlyCollection<Table>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Table` | EndPoint | Gets the end point (the last table) in the path. | 
| `Table` | StartPoint | Gets the start point (first table) of the path. |
