---
title: DbContextModelLoader class
slug: easyquery/docs/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-services-namespace/dbcontextmodelloader-class
---


Represents a IModelLoader implementation which allows to load  the model from a DbContext object.  Implements the [Korzh.EasyQuery.Services.IModelLoader](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/imodelloader-interface)
```csharp
public class Korzh.EasyQuery.Services.DbContextModelLoader
    : IModelLoader

```
Package: `Korzh.EasyQuery.EntityFramework6` (targets: `net461`)

Assembly: `Korzh.EasyQuery.EntityFramework6.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbContextModelLoader(`DbContext` dbContext, [DbContextModelExtractorOptions](/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/dbcontextmodelextractoroptions-class) options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.DbContextModelLoader](/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-services-namespace/dbcontextmodelloader-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadModelAsync([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` modelId) | `Task`&lt;`bool`&gt; | Loads the model from the DbContext object.  NB: The model ID is not actually taking into account  since the model is defined by a concrete DbContext type. |