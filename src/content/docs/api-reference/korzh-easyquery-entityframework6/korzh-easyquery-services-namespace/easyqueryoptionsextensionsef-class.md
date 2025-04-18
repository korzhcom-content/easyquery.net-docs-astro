---
title: EasyQueryOptionsExtensionsEf class
slug: >-
  api-reference/korzh-easyquery-entityframework6/korzh-easyquery-services-namespace/easyqueryoptionsextensionsef-class
sidebar:
  order: 100
---

Contains several extension methods for EasyQueryOptions  which allow to tune up the EasyQuery manager and middleware  in case of using them with EntityFramework 6.x
```csharp
public static class Korzh.EasyQuery.Services.EasyQueryOptionsExtensionsEf

```
Package: `Korzh.EasyQuery.EntityFramework6` (targets: `net461`)

Assembly: `Korzh.EasyQuery.EntityFramework6.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| UseDbContext(<span style='color: blue'>this</span> [EasyQueryOptions](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `DbContext` dbContext, `Action`&lt;[DbContextModelExtractorOptions](/easyquery/docs/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/dbcontextmodelextractoroptions-class)&gt; configurator = <span style='color: blue'>null</span>) | `void` | Registers the model loader and connection resolver  based on the DbContext type passed in a type parameter. | 
| UseDbContext(<span style='color: blue'>this</span> [EasyQueryOptions](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `DbContext` dbContext, [FormatType](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/formattype-enum) formatType, `Action`&lt;[DbContextModelExtractorOptions](/easyquery/docs/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/dbcontextmodelextractoroptions-class)&gt; configurator = <span style='color: blue'>null</span>) | `void` | Registers the model loader and connection resolver  based on the DbContext type passed in a type parameter. | 
| UseEdmxFile(<span style='color: blue'>this</span> [EasyQueryOptions](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `string` fileName, `Action`&lt;[EdmxModelExtractorOptions](/easyquery/docs/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/edmxmodelextractoroptions-class)&gt; configurator = <span style='color: blue'>null</span>) | `void` | Registers the model loader  from Entity Framework Edmx file |
