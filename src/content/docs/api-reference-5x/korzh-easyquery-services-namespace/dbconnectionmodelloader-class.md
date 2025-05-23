---
title: DbConnectionModelLoader class
slug: >-
  api-reference-5x/korzh-easyquery-services-namespace/dbconnectionmodelloader-class
sidebar:
  order: 100
---

Represents a IModelLoader implementation which allows to load the model directly from a connection (using DB meta data)
```csharp
public class Korzh.EasyQuery.Services.DbConnectionModelLoader
    : IModelLoader

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Task<Boolean>` | LoadModelAsync(`DataModel` model, `String` modelId) | Loads the model from the connection passed in the loader's constructor.  NB: The model ID is not actually taking into account. |
