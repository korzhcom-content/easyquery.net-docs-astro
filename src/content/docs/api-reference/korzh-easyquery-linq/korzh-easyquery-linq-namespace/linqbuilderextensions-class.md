---
title: LinqBuilderExtensions class
slug: api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/linqbuilderextensions-class
---
Exposes some extension methods for LINQ querying
```csharp
public static class Korzh.EasyQuery.Linq.LinqBuilderExtensions

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| DynamicQuery(<span style='color: blue'>this</span> `IEnumerable`&lt;`T`&gt; source, [Query](api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query) | `IEnumerable`&lt;`T`&gt; |  | 
| DynamicQuery(<span style='color: blue'>this</span> `IQueryable`&lt;`TEntity`&gt; source, [Query](api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query, `string` orderByProperty = <span style='color: blue'>null</span>, `bool` descending = False, [QueryBuilderOptions](api-reference/korzh-easyquery/korzh-easyquery-namespace/querybuilderoptions-class) options = <span style='color: blue'>null</span>) | `IQueryable`&lt;`TEntity`&gt; |  | 
| DynamicQuery(<span style='color: blue'>this</span> `IQueryable`&lt;`TEntity`&gt; source, [LinqQueryBuilder](api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/linqquerybuilder-class) builder, `string` orderByProperty = <span style='color: blue'>null</span>, `bool` descending = False, [QueryBuilderOptions](api-reference/korzh-easyquery/korzh-easyquery-namespace/querybuilderoptions-class) options = <span style='color: blue'>null</span>) | `IQueryable`&lt;`TEntity`&gt; |  | 
| FullTextSearchQuery(<span style='color: blue'>this</span> `IEnumerable`&lt;`T`&gt; source, `string` text, [FullTextSearchOptions](api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/fulltextsearchoptions-class) options) | `IEnumerable`&lt;`T`&gt; |  | 
| FullTextSearchQuery(<span style='color: blue'>this</span> `IQueryable`&lt;`T`&gt; source, `string` text, [FullTextSearchOptions](api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/fulltextsearchoptions-class) options = <span style='color: blue'>null</span>) | `IQueryable`&lt;`T`&gt; |  |