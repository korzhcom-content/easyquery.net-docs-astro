---
title: EasyQueryOptionsExtensionsEfCore class
slug: easyquery/docs/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-services-namespace/easyqueryoptionsextensionsefcore-class
---


Contains several extension methods for EasyQueryOptions  which allow to tune up the EasyQuery manager and middleware  in case of using them with EntityFrameworkCore
```csharp
public static class Korzh.EasyQuery.Services.EasyQueryOptionsExtensionsEfCore

```
Package: `Korzh.EasyQuery.EntityFrameworkCore.Relational` (targets: `net5.0`, `netstandard2.0`, `netstandard2.1`)

Assembly: `Korzh.EasyQuery.EntityFrameworkCore.Relational.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| UseDbContext(<span style='color: blue'>this</span> [EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, [FormatType](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/formattype-enum) formatType, `Action`&lt;[DbContextModelExtractorOptions](/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractoroptions-class)&gt; configurator = <span style='color: blue'>null</span>) | `void` |  | 
| UseDbContext(<span style='color: blue'>this</span> [EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `Action`&lt;[DbContextModelExtractorOptions](/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractoroptions-class)&gt; configurator = <span style='color: blue'>null</span>) | `void` |  |