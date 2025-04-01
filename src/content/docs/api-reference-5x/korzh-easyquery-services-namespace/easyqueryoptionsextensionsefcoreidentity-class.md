---
title: EasyQueryOptionsExtensionsEfCoreIdentity class
slug: >-
  api-reference-5x/korzh-easyquery-services-namespace/easyqueryoptionsextensionsefcoreidentity-class
sidebar:
  order: 100
---

Contains several extension methods for EasyQueryOptions  which allow to tune up the EasyQuery manager and middleware  in case of using them with EntityFrameworkCore and ASP.NET Core Identity
```csharp
public static class Korzh.EasyQuery.Services.EasyQueryOptionsExtensionsEfCoreIdentity

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | UseDbContextWithoutIdentity(<span style='color: blue'>this</span> `EasyQueryOptions` options, `Action<DbContextLoaderOptions>` configurator = <span style='color: blue'>null</span>) |  |
