---
title: DbContextModelExtractorOptions class
slug: api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/dbcontextmodelextractoroptions-class
---
Contains different options for [Korzh.EasyQuery.EntityFramework.DbContextModelExtractor](api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/dbcontextmodelextractor-class)
```csharp
public class Korzh.EasyQuery.EntityFramework.DbContextModelExtractorOptions

```
Package: `Korzh.EasyQuery.EntityFramework6` (targets: `net461`)

Assembly: `Korzh.EasyQuery.EntityFramework6.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbContextModelExtractorOptions() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Filters | `IReadOnlyList`&lt;`Func`&lt;`IEntityMap`, `bool`&gt;&gt; | The Filtes | 
| HidePrimaryKeys | `bool` | Gets or sets a value indicating whether we need to hide primary key fields in the data model. | 
| SplitTablesOnMultiReference | `bool` | Split one table on two (or more) if there are multi-references between two tables | 
| SqlFormats | [SqlFormats](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) | Gets or sets the SQL formats. | 
| TablePerHierarchy | `bool` | If true, add one table for each entity derived from one abstract type | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddFilter(`Func`&lt;`IEntityMap`, `bool`&gt; filter) | `void` | Adds a filter, which will be used during model loading from <see cref="!:DbContext" /> |