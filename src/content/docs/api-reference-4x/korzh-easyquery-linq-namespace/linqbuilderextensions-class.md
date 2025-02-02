---
title: LinqBuilderExtensions class
slug: api-reference-4x/korzh-easyquery-linq-namespace/linqbuilderextensions-class
---


Exposes some extension methods for LINQ querying
```csharp
public static class Korzh.EasyQuery.Linq.LinqBuilderExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `IEnumerable<T>` | DynamicQuery(<span style='color: blue'>this</span> `IEnumerable<T>` source, `Query` query) |  | 
| `IQueryable<T>` | DynamicQuery(<span style='color: blue'>this</span> `IQueryable<T>` source, `Query` query, `String` orderByProperty = <span style='color: blue'>null</span>, `Boolean` descending = False, `QueryFormats` formats = <span style='color: blue'>null</span>) |  | 
| `IQueryable<T>` | FullTextSearchQuery(<span style='color: blue'>this</span> `IQueryable<T>` source, `String` text, `FullTextSearchOptions` options = <span style='color: blue'>null</span>) |  |