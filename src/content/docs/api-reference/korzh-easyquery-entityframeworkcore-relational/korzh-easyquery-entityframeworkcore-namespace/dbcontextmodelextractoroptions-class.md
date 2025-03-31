---
title: DbContextModelExtractorOptions class
slug: api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractoroptions-class
---

Contains different options for [Korzh.EasyQuery.EntityFrameworkCore.DbContextModelExtractor](//easyquery/docs/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractor-class)
```csharp
public class Korzh.EasyQuery.EntityFrameworkCore.DbContextModelExtractorOptions

```
Package: `Korzh.EasyQuery.EntityFrameworkCore.Relational` (targets: `net5.0`, `netstandard2.0`, `netstandard2.1`)

Assembly: `Korzh.EasyQuery.EntityFrameworkCore.Relational.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbContextModelExtractorOptions() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Filters | `IReadOnlyList`&lt;`Func`&lt;`IEntityType`, `bool`&gt;&gt; | The Filtes | 
| HidePrimaryKeys | `bool` | Gets or sets a value indicating whether we need to hide primary key fields in the data model. | 
| SkipForeignKeys | `bool` | Gets or sets a value indicating whether we need to skip foreign key fields and don't include them into the data model. | 
| SortAlphabetically | `bool` | If true, sorts all entities and their attributes in alphabet order | 
| SplitTablesOnMultiReference | `bool` | Split one table on two (or more) if there are multi-references between two tables | 
| SqlFormats | [SqlFormats](//easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) | Gets or sets the SQL formats used during the model extraction | 
| TablePerHierarchy | `bool` | If true, add one table for each entity derived from one abstract type | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddFilter(`Func`&lt;`IEntityType`, `bool`&gt; filter) | `void` | Adds a filter, which will be used during model loading from `Microsoft.EntityFrameworkCore.DbContext` |