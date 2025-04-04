---
title: EntityFrameworkCoreExtensions class
slug: >-
  api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/entityframeworkcoreextensions-class
sidebar:
  order: 100
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
| LoadFromDbContext(<span style='color: blue'>this</span> [DbModel](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) dbModel, `DbContext` context) | `void` | Loads the model from a database context. | 
| LoadFromDbContext(<span style='color: blue'>this</span> [DbModel](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) dbModel, `DbContext` context, [SqlFormats](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `void` | Loads the model from a database context. | 
| LoadFromDbContext(<span style='color: blue'>this</span> [DbModel](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) dbModel, `DbContext` context, [DbContextModelExtractorOptions](/easyquery/docs/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractoroptions-class) options) | `void` | Loads the model from a database context. |
