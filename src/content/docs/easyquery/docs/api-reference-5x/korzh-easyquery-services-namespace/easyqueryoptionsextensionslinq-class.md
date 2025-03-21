---
title: EasyQueryOptionsExtensionsLinq class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/easyqueryoptionsextensionslinq-class
---


Contains several extension methods for EasyQueryOptions  which allow to tune up the EasyQuery manager and middleware  in case of using it for LINQ queries genereation
```csharp
public static class Korzh.EasyQuery.Services.EasyQueryOptionsExtensionsLinq

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | UseEntity(<span style='color: blue'>this</span> `EasyQueryOptions` options, `Func<IServiceProvider, String, IEnumerable<T>>` contextResolver) |  | 
| `void` | UseEntity(<span style='color: blue'>this</span> `EasyQueryOptions` options, `Func<IServiceProvider, String, IQueryable<T>>` contextResolver) |  |