---
title: DbContextExtractorOptionsExtensionsIdentity class
slug: api-reference/Korzh.EasyQuery.EntityFrameworkCore.Identity/Korzh.EasyQuery.EntityFrameworkCore namespace/dbcontextextractoroptionsextensionsidentity-class
---


Contains extension methods for [Korzh.EasyQuery.EntityFrameworkCore.DbContextModelExtractorOptions](/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractoroptions-class)
```csharp
public static class Korzh.EasyQuery.EntityFrameworkCore.DbContextExtractorOptionsExtensionsIdentity

```
Package: `Korzh.EasyQuery.EntityFrameworkCore.Identity` (targets: `net5.0`, `netstandard2.0`, `netstandard2.1`)

Assembly: `Korzh.EasyQuery.EntityFrameworkCore.Identity.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| IgnoreIdentityEntities(<span style='color: blue'>this</span> [DbContextModelExtractorOptions](/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractoroptions-class) extractorOptions) | `void` | Adds filter, that ignores all ASP.NET Core identity store types,  like `Microsoft.AspNetCore.Identity.IdentityUser'1`, `Microsoft.AspNetCore.Identity.IdentityRole'1` etc. |