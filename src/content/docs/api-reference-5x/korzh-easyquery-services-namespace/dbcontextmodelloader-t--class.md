---
title: DbContextModelLoader<T> class
slug: api-reference-5x/korzh-easyquery-services-namespace/dbcontextmodelloader-t--class
---


Represents a IModelLoader implementation which allows to load  the model from a DbContext object.  Implements the [Korzh.EasyQuery.Services.IModelLoader](/api-reference-5x/korzh-easyquery-services-namespace/imodelloader-interface)
```csharp
public class Korzh.EasyQuery.Services.DbContextModelLoader<T>
    : IModelLoader

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Task<Boolean>` | LoadModelAsync(`DataModel` model, `String` modelId) | Loads the model from the DbContext object that we get from the DI container.  NB: The model ID is not actually taking into account  since the model is defined by a concrete DbContext type. |