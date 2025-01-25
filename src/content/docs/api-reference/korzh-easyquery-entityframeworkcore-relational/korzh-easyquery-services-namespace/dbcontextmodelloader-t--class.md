---
title: DbContextModelLoader<T> class
slug: api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-services-namespace/dbcontextmodelloader-t--class
---
Represents a IModelLoader implementation which allows to load  the model from a DbContext object.  Implements the [Korzh.EasyQuery.Services.IModelLoader](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/imodelloader-interface)
```csharp
public class Korzh.EasyQuery.Services.DbContextModelLoader<T>
    : IModelLoader

```
Package: `Korzh.EasyQuery.EntityFrameworkCore.Relational` (targets: `net5.0`, `netstandard2.0`, `netstandard2.1`)

Assembly: `Korzh.EasyQuery.EntityFrameworkCore.Relational.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbContextModelLoader(`IServiceProvider` services) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.DbContextModelLoader`1](/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-services-namespace/dbcontextmodelloader-t--class) class. | 
| DbContextModelLoader(`IServiceProvider` services, [DbContextModelExtractorOptions](/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractoroptions-class) options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.DbContextModelLoader`1](/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-services-namespace/dbcontextmodelloader-t--class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AdjustExtractorOptions(`string` modelId, [DbContextModelExtractorOptions](/api-reference/korzh-easyquery-entityframeworkcore-relational/korzh-easyquery-entityframeworkcore-namespace/dbcontextmodelextractoroptions-class) options) | `void` | Allows to adjust the loader options in descendant classes | 
| LoadModelAsync([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` modelId) | `Task`&lt;`bool`&gt; | Loads the model from the DbContext object that we get from the DI container.  NB: The model ID is not actually taking into account  since the model is defined by a concrete DbContext type. |