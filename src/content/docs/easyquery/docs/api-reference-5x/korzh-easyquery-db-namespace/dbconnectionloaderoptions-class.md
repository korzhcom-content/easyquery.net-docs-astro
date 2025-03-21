---
title: DbConnectionLoaderOptions class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/dbconnectionloaderoptions-class
---


Represents different options for [Korzh.EasyQuery.Services.DbConnectionModelLoader](/api-reference-5x/korzh-easyquery-services-namespace/dbconnectionmodelloader-class) class
```csharp
public class Korzh.EasyQuery.Db.DbConnectionLoaderOptions

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `IReadOnlyList<Func<DbFieldInfo, Boolean>>` | FieldFilters | Gets the field filters. Each filter is a function which returns <c>true</c> for the field that should be processed. | 
| `Boolean` | ReplaceToSingularNames | Gets a value indicating whether replace the name of the table in plural form (like Customers)  to it singular variant (Customer) when we create an entity by some table. | 
| `IReadOnlyList<Func<DbTableInfo, Boolean>>` | TableFilters | Gets the table filters. Each filter is a function which returns <c>true</c> for the tables that should be processed. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `DbConnectionLoaderOptions` | AddFieldFilter(`Func<DbFieldInfo, Boolean>` filter) | Adds the field filter. | 
| `DbConnectionLoaderOptions` | AddTableFilter(`Func<DbTableInfo, Boolean>` filter) | Adds the table filter. | 
| `DbConnectionLoaderOptions` | DoNotReplaceToSingularNames() | Sets the value [Korzh.EasyQuery.Db.DbConnectionLoaderOptions.ReplaceToSingularNames](/api-reference-5x/korzh-easyquery-db-namespace/dbconnectionloaderoptions-class) property to false.  This function returns the same instance of [Korzh.EasyQuery.Db.DbConnectionLoaderOptions](/api-reference-5x/korzh-easyquery-db-namespace/dbconnectionloaderoptions-class) so it can be used in the method chaining calls. | 
| `DbConnectionLoaderOptions` | IgnoreViews() | Add the filter which makes model loader to ignore the views and process only the tables.  This function returns the same instance of [Korzh.EasyQuery.Db.DbConnectionLoaderOptions](/api-reference-5x/korzh-easyquery-db-namespace/dbconnectionloaderoptions-class) so it can be used in the method chaining calls. |