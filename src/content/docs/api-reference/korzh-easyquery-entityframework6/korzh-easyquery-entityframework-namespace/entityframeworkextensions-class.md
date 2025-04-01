---
title: EntityFrameworkExtensions class
slug: >-
  api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/entityframeworkextensions-class
sidebar:
  order: 100
---

Contains some extensions for using EasyQuery with Entity Framework.
```csharp
public static class Korzh.EasyQuery.EntityFramework.EntityFrameworkExtensions

```
Package: `Korzh.EasyQuery.EntityFramework6` (targets: `net461`)

Assembly: `Korzh.EasyQuery.EntityFramework6.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromDbContext(<span style='color: blue'>this</span> [DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) dbModel, `DbContext` context) | `void` | Loads the model from a database context. | 
| LoadFromDbContext(<span style='color: blue'>this</span> [DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) dbModel, `DbContext` context, [SqlFormats](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `void` | Loads the model from a database context. | 
| LoadFromDbContext(<span style='color: blue'>this</span> [DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) dbModel, `DbContext` context, [DbContextModelExtractorOptions](///easyquery/docs/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/dbcontextmodelextractoroptions-class) options) | `void` | Loads the model from a database context. | 
| LoadFromEdmx(<span style='color: blue'>this</span> [DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `string` path, [EdmxModelExtractorOptions](///easyquery/docs/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/edmxmodelextractoroptions-class) options = <span style='color: blue'>null</span>) | `void` | Loads DataModel from EDMX file | 
| LoadFromEdmx(<span style='color: blue'>this</span> [DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XDocument` doc, [EdmxModelExtractorOptions](///easyquery/docs/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/edmxmodelextractoroptions-class) options = <span style='color: blue'>null</span>) | `void` | Loads DataModel from EDMX file |
