---
title: LinqBuilderExtensions class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Linq namespace/linqbuilderextensions-class
---


Exposes some extension methods for LINQ querying
```csharp
public static class Korzh.EasyQuery.Linq.LinqBuilderExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `IEnumerable<T>` | DynamicQuery(<span style='color: blue'>this</span> `IEnumerable<T>` source, `Query` query) |  | 
| `IQueryable<TEntity>` | DynamicQuery(<span style='color: blue'>this</span> `IQueryable<TEntity>` source, `Query` query, `String` orderByProperty = <span style='color: blue'>null</span>, `Boolean` descending = False, `IQueryFormats` formats = <span style='color: blue'>null</span>) |  | 
| `IQueryable<TEntity>` | DynamicQuery(<span style='color: blue'>this</span> `IQueryable<TEntity>` source, `LinqQueryBuilder` builder, `String` orderByProperty = <span style='color: blue'>null</span>, `Boolean` descending = False) |  | 
| `IQueryable<T>` | FullTextSearchQuery(<span style='color: blue'>this</span> `IQueryable<T>` source, `String` text, `FullTextSearchOptions` options = <span style='color: blue'>null</span>) |  |