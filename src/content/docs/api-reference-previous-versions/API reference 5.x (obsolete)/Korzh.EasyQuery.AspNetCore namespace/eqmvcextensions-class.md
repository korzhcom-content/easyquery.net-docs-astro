---
title: EqMvcExtensions class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.AspNetCore namespace/eqmvcextensions-class
---


Contains several useful extension methods for working with EasyQuery types in MVC applications
```csharp
public static class Korzh.EasyQuery.AspNetCore.EqMvcExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `ListViewOptions` | ToListViewOptions(<span style='color: blue'>this</span> `String` json) | Converts JSON string to `ListViewOptions` object. | 
| `ListViewOptions` | ToListViewOptions(<span style='color: blue'>this</span> `JObject` jObject) | Converts JSON string to `ListViewOptions` object. | 
| `IPagedList<T>` | ToPagedList(<span style='color: blue'>this</span> `IQueryable<T>` superset, `Int64` pageIndex, `Int64` pageSize) |  |