---
title: FileModelLoader class
slug: api-reference-5x/korzh-easyquery-services-namespace/filemodelloader-class
sidebar:
  order: 100
---

Represents a IModelLoader implemenation  which allows to load data model definitions (either XML or JSON) from the file system.  Implements the [Korzh.EasyQuery.Services.IModelLoader](///easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/imodelloader-interface)
```csharp
public class Korzh.EasyQuery.Services.FileModelLoader
    : IModelLoader

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Task<Boolean>` | LoadModelAsync(`DataModel` model, `String` modelId) | Loads the model by its ID. |
