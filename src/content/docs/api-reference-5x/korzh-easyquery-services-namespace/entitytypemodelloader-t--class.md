---
title: EntityTypeModelLoader<T> class
slug: api-reference-5x/korzh-easyquery-services-namespace/entitytypemodelloader-t--class
---


An implementation of [Korzh.EasyQuery.Services.IModelLoader](/api-reference-5x/korzh-easyquery-services-namespace/imodelloader-interface)  which loads the model from some type.
```csharp
public class Korzh.EasyQuery.Services.EntityTypeModelLoader<T>
    : IModelLoader

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Task<Boolean>` | LoadModelAsync(`DataModel` model, `String` modelId) | Loads the model |