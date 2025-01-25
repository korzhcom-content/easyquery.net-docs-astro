---
title: EasyQueryOptionsExtensionsLinq class
slug: api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/easyqueryoptionsextensionslinq-class
---
Contains several extension methods for EasyQueryOptions  which allow to tune up the EasyQuery manager and middleware  in case of using it for LINQ queries genereation
```csharp
public static class Korzh.EasyQuery.Services.EasyQueryOptionsExtensionsLinq

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| UseEntity(<span style='color: blue'>this</span> [EasyQueryOptions](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `Func`&lt;[EasyQueryManager](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), `IEnumerable`&lt;`T`&gt;&gt; contextResolver, `Action`&lt;[EntityTypeModelLoaderOptions](api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/entitytypemodelloaderoptions-class)&gt; optionsTuner = <span style='color: blue'>null</span>) | `void` |  | 
| UseEntity(<span style='color: blue'>this</span> [EasyQueryOptions](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `Func`&lt;[EasyQueryManager](api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), `IQueryable`&lt;`T`&gt;&gt; contextResolver, `Action`&lt;[EntityTypeModelLoaderOptions](api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/entitytypemodelloaderoptions-class)&gt; optionsTuner = <span style='color: blue'>null</span>) | `void` |  |