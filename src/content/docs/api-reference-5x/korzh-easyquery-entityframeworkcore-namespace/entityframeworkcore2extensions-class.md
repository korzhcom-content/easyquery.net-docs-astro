---
title: EntityFrameworkCore2Extensions class
slug: api-reference-5x/korzh-easyquery-entityframeworkcore-namespace/entityframeworkcore2extensions-class
---


Defines some extensions which unify meta-data functions used in EF Core 2 with EF Core 3 API.
```csharp
public static class Korzh.EasyQuery.EntityFrameworkCore.EntityFrameworkCore2Extensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetColumnName(<span style='color: blue'>this</span> `IProperty` property) | Gets the column name for the specified IProperty. | 
| `String` | GetSchema(<span style='color: blue'>this</span> `IEntityType` entityType) | Gets the schema name for the specified IEntityType | 
| `String` | GetTableName(<span style='color: blue'>this</span> `IEntityType` entityType) | Gets the table name for the specified IEntityType. |