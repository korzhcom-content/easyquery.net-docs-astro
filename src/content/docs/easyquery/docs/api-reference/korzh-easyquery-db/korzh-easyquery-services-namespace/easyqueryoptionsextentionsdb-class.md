---
title: EasyQueryOptionsExtentionsDb class
slug: easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/easyqueryoptionsextentionsdb-class
---


Contains several extension methods for EasyQueryOptions  which allows to tune up the EasyQuery manager and middleware.
```csharp
public static class Korzh.EasyQuery.Services.EasyQueryOptionsExtentionsDb

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| UseDbCommandTuner(<span style='color: blue'>this</span> [EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `Action`&lt;`T`&gt; tuner) | `void` |  | 
| UseDbConnection(<span style='color: blue'>this</span> [EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `string` connectionString = <span style='color: blue'>null</span>) | `void` |  | 
| UseDbConnection(<span style='color: blue'>this</span> [EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `Func`&lt;[EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), `T`&gt; resolver) | `void` |  | 
| UseDbConnectionModelLoader(<span style='color: blue'>this</span> [EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) easyQueryOptions, `Action`&lt;[DbConnectionModelLoaderOptions](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbconnectionmodelloaderoptions-class)&gt; configurator = <span style='color: blue'>null</span>) | `void` | Register the model loader resolver which returns [Korzh.EasyQuery.Services.DbConnectionModelLoader](/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/dbconnectionmodelloader-class) the database connection model loader. | 
| UseSqlFormats(<span style='color: blue'>this</span> [EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, [FormatType](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/formattype-enum) formatType, `Action`&lt;[SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class)&gt; formatsTuner = <span style='color: blue'>null</span>) | `void` | Set the formats for result SQL statements to some format type (e.g. MsSqlServer or MySQL) | 
| UseSqlFormats(<span style='color: blue'>this</span> [EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `Action`&lt;[SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class)&gt; formatsTuner) | `void` | Set the formats for result SQL statements to some format type (e.g. MsSqlServer or MySQL) |