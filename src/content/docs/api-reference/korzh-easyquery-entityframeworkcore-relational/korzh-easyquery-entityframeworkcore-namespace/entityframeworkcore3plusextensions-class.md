---
title: EntityFrameworkCore3PlusExtensions class
slug: >-
  api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/entityframeworkcore3plusextensions-class
sidebar:
  order: 100
---

Defines some extensions which unify meta-data functions used in EF Core 3 and higher
```csharp
public static class Korzh.EasyQuery.EntityFrameworkCore.EntityFrameworkCore3PlusExtensions

```
Package: `Korzh.EasyQuery.EntityFrameworkCore.Relational` (targets: `net5.0`, `netstandard2.1`)

Assembly: `Korzh.EasyQuery.EntityFrameworkCore.Relational.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetDbColumnName(<span style='color: blue'>this</span> `IProperty` property) | `string` | Gets the column name for the specified IProperty. | 
| GetDbDefaultSchema(<span style='color: blue'>this</span> `IModel` model) | `string` | Gets the default schema for the specified IModel | 
| GetDbDiscriminatorProperty(<span style='color: blue'>this</span> `IEntityType` entityType) | `IProperty` | Returns the `Microsoft.EntityFrameworkCore.Metadata.IProperty` that will be used for storing a discriminator value. | 
| GetDbDiscriminatorValue(<span style='color: blue'>this</span> `IEntityType` entityType) | `object` | Returns the discriminator value for this entity type. | 
| GetDbSchema(<span style='color: blue'>this</span> `IEntityType` entityType) | `string` | Gets the schema name for the specified IEntityType | 
| GetDbTableName(<span style='color: blue'>this</span> `IEntityType` entityType) | `string` | Gets the table name for the specified IEntityType. |
