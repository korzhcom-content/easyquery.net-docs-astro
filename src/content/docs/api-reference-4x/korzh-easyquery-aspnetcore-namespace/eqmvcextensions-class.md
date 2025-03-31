---
title: EqMvcExtensions class
slug: api-reference-4x/korzh-easyquery-aspnetcore-namespace/eqmvcextensions-class
---

```csharp
public static class Korzh.EasyQuery.AspNetCore.EqMvcExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddEasyQuery(<span style='color: blue'>this</span> `IServiceCollection` services) | Adds configuration of `Microsoft.AspNetCore.Mvc.MvcJsonOptions` for the application. | 
| `ListViewOptions` | ToListViewOptions(<span style='color: blue'>this</span> `String` json) | Converts JSON string to `ListViewOptions` object. | 
| `ListViewOptions` | ToListViewOptions(<span style='color: blue'>this</span> `JsonDict` jsonDict) | Converts JSON string to `ListViewOptions` object. | 
| `IPagedList<T>` | ToPagedList(<span style='color: blue'>this</span> `IQueryable<T>` superset, `Int32` pageIndex, `Int32` pageSize) |  |