---
title: DbConnectionModelLoaderOptions class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class
sidebar:
  order: 100
---

Represents different options for [Korzh.EasyQuery.Services.DbConnectionModelLoader](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/dbconnectionmodelloader-class) class
```csharp
public class Korzh.EasyQuery.Db.DbConnectionModelLoaderOptions

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbConnectionModelLoaderOptions() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| FieldFilters | `IReadOnlyList`&lt;`Func`&lt;[DbFieldInfo](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfo-class), `bool`&gt;&gt; | Gets the field filters. Each filter is a function which returns <c>true</c> for the field that should be processed. | 
| HideKeyFields | `bool` | Gets a value indicating whether we need to hide key fields. | 
| PrettifyNames | `bool` | Gets a value indicating whether we need to prettify table and column names | 
| ReplaceToSingularNames | `bool` | Gets a value indicating whether replace the name of the table in plural form (like Customers)  to it singular variant (Customer) when we create an entity by some table. | 
| Schemas | `IReadOnlyList`&lt;`string`&gt; | Gets the list of schemas. | 
| SplitTablesOnMultiReference | `bool` | Split one table on two (or more) if there are multi-references between two tables | 
| TableFilters | `IReadOnlyList`&lt;`Func`&lt;[DbTableInfo](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtableinfo-class), `bool`&gt;&gt; | Gets the table filters. Each filter is a function which returns <c>true</c> for the tables that should be processed. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddFieldFilter(`Func`&lt;[DbFieldInfo](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbfieldinfo-class), `bool`&gt; filter) | [DbConnectionModelLoaderOptions](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) | Adds the field filter. | 
| AddTableFilter(`Func`&lt;[DbTableInfo](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbtableinfo-class), `bool`&gt; filter) | [DbConnectionModelLoaderOptions](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) | Adds the table filter. | 
| DoNotPrettifyNames() | [DbConnectionModelLoaderOptions](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) | Sets the value [Korzh.EasyQuery.Db.DbConnectionModelLoaderOptions.PrettifyNames](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) property to false.  This function returns the same instance of [Korzh.EasyQuery.Db.DbConnectionModelLoaderOptions](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) so it can be used in the method chaining calls. | 
| DoNotReplaceToSingularNames() | [DbConnectionModelLoaderOptions](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) | Sets the value [Korzh.EasyQuery.Db.DbConnectionModelLoaderOptions.ReplaceToSingularNames](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) property to false.  This function returns the same instance of [Korzh.EasyQuery.Db.DbConnectionModelLoaderOptions](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) so it can be used in the method chaining calls. | 
| DoNotSplitTablesOnMultiReference() | [DbConnectionModelLoaderOptions](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) | Sets the value [Korzh.EasyQuery.Db.DbConnectionModelLoaderOptions.SplitTablesOnMultiReference](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) property to false.  This function returns the same instance of [Korzh.EasyQuery.Db.DbConnectionModelLoaderOptions](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) so it can be used in the method chaining calls. | 
| IgnoreViews() | [DbConnectionModelLoaderOptions](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) | Add the filter which makes model loader to ignore the views and process only the tables.  This function returns the same instance of [Korzh.EasyQuery.Db.DbConnectionModelLoaderOptions](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) so it can be used in the method chaining calls. | 
| UseSchemas(`String[]` schemas) | [DbConnectionModelLoaderOptions](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class) | Specifies which schemas will be used during loading the model. |
