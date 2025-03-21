---
title: EntityFrameworkCoreExtensions class
slug: easyquery/docs/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/entityframeworkcoreextensions-class
---


Contains some extensions for using EasyQuery with Entity Framework Core.
```csharp
public static class Korzh.EasyQuery.EntityFrameworkCore.EntityFrameworkCoreExtensions

```
Package: `Korzh.EasyQuery.EntityFrameworkCore.Relational` (targets: `net5.0`, `netstandard2.0`, `netstandard2.1`)

Assembly: `Korzh.EasyQuery.EntityFrameworkCore.Relational.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromDbContext(<span style='color: blue'>this</span> [DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) dbModel, `DbContext` context) | `void` | Loads the model from a database context. | 
| LoadFromDbContext(<span style='color: blue'>this</span> [DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) dbModel, `DbContext` context, [SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `void` | Loads the model from a database context. | 
| LoadFromDbContext(<span style='color: blue'>this</span> [DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) dbModel, `DbContext` context, [DbContextModelExtractorOptions](/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractoroptions-class) options) | `void` | Loads the model from a database context. |