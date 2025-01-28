---
title: DbContextLoaderOptions class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.EntityFrameworkCore namespace/dbcontextloaderoptions-class
---


Contains different options for [Korzh.EasyQuery.EntityFrameworkCore.DbContextLoader](/api-reference-5x/korzh-easyquery-entityframeworkcore-namespace/dbcontextloader-class)
```csharp
public class Korzh.EasyQuery.EntityFrameworkCore.DbContextLoaderOptions

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `IReadOnlyList<Func<IEntityType, Boolean>>` | Filters | The Filtes | 
| `DbQueryFormats` | Formats |  | 
| `Boolean` | HidePrimaryKeys | Gets or sets a value indicating whether we need to hide primary key fields in the data model. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddFilter(`Func<IEntityType, Boolean>` filter) | Adds a filter, which will be used during model loading from `Microsoft.EntityFrameworkCore.DbContext` |