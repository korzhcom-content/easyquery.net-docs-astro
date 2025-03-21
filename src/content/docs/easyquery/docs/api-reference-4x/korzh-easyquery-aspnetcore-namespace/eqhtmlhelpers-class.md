---
title: EqHtmlHelpers class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-aspnetcore-namespace/eqhtmlhelpers-class
---


Extension methods for generating query panel and paging placeholders.
```csharp
public static class Korzh.EasyQuery.AspNetCore.EqHtmlHelpers

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `IHtmlContent` | DisplayNameFor(<span style='color: blue'>this</span> `IHtmlHelper<IPagedList<TModel>>` html, `Expression<Func<TModel, TValue>>` expression) |  | 
| `IHtmlContent` | FilterBar(<span style='color: blue'>this</span> `IHtmlHelper` html, `Object` htmlAttributes = <span style='color: blue'>null</span>) | Renders the placeholder for QueryPanel widget. | 
| `IHtmlContent` | PageNavigator(<span style='color: blue'>this</span> `IHtmlHelper` html, `IPaging` paging) | Renders the placeholder for the configurable paging control. |