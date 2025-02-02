---
title: EasyQueryOptionsExtensionsEfCore class
slug: api-reference-5x/korzh-easyquery-services-namespace/easyqueryoptionsextensionsefcore-class
---


Contains several extension methods for EasyQueryOptions  which allow to tune up the EasyQuery manager and middleware  in case of using them with EntityFrameworkCore
```csharp
public static class Korzh.EasyQuery.Services.EasyQueryOptionsExtensionsEfCore

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | UseDbContext(<span style='color: blue'>this</span> `EasyQueryOptions` options, `Action<DbContextLoaderOptions>` configurator = <span style='color: blue'>null</span>) |  | 
| `void` | UseDbContext(<span style='color: blue'>this</span> `EasyQueryOptions` options, `FormatType` formatType, `Action<DbContextLoaderOptions>` configurator = <span style='color: blue'>null</span>) |  |