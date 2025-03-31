---
title: EntityFrameworkCoreExtensions class
slug: api-reference-5x/korzh-easyquery-entityframeworkcore-namespace/entityframeworkcoreextensions-class
---

Contains some extensions for using EasyQuery with Entity Framework Core.
```csharp
public static class Korzh.EasyQuery.EntityFrameworkCore.EntityFrameworkCoreExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | LoadFromDbContext(<span style='color: blue'>this</span> `DbModel` dbModel, `DbContext` context) | Loads the model from a database context. | 
| `void` | LoadFromDbContext(<span style='color: blue'>this</span> `DbModel` dbModel, `DbContext` context, `DbQueryFormats` formats) | Loads the model from a database context. | 
| `void` | LoadFromDbContext(<span style='color: blue'>this</span> `DbModel` dbModel, `DbContext` context, `DbContextLoaderOptions` options) | Loads the model from a database context. | 
| `void` | LoadFromDbContext(<span style='color: blue'>this</span> `DbModel` dbModel, `DbContext` context, `DbContextLoaderOptions` options, `DbQueryFormats` formats) | Loads the model from a database context. |