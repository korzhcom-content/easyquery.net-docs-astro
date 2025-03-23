---
title: EasyQueryOptionsExtentionsDb class
slug: api-reference-5x/korzh-easyquery-services-namespace/easyqueryoptionsextentionsdb-class
---


Contains several extension methods for EasyQueryOptions  which allows to tune up the EasyQuery manager and middleware.
```csharp
public static class Korzh.EasyQuery.Services.EasyQueryOptionsExtentionsDb

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | UseDbCommandTuner(<span style='color: blue'>this</span> `EasyQueryOptions` options, `Action<T>` tuner) |  | 
| `void` | UseDbConnection(<span style='color: blue'>this</span> `EasyQueryOptions` options, `String` connectionString = <span style='color: blue'>null</span>) | Registers the database connection resolver. | 
| `void` | UseDbConnection(<span style='color: blue'>this</span> `EasyQueryOptions` options, `Func<IServiceProvider, String, DbConnection>` resolver) | Registers the database connection resolver. | 
| `void` | UseDbConnectionModelLoader(<span style='color: blue'>this</span> `EasyQueryOptions` easyQueryOptions, `Action<DbConnectionLoaderOptions>` configurator = <span style='color: blue'>null</span>) | Register the model loader resolver which returns [Korzh.EasyQuery.Services.DbConnectionModelLoader](/api-reference-5x/korzh-easyquery-services-namespace/dbconnectionmodelloader-class) the database connection model loader. | 
| `void` | UseSqlFormats(<span style='color: blue'>this</span> `EasyQueryOptions` options, `FormatType` formatType, `Action<DbQueryFormats>` formatsTuner = <span style='color: blue'>null</span>) | Set the formats for result SQL statements to some format type (e.g. MsSqlServer or MySQL) | 
| `void` | UseSqlFormats(<span style='color: blue'>this</span> `EasyQueryOptions` options, `Action<DbQueryFormats>` formatsTuner) | Set the formats for result SQL statements to some format type (e.g. MsSqlServer or MySQL) |