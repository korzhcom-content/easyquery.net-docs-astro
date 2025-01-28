---
title: DbConnectionModelLoader class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Services namespace/dbconnectionmodelloader-class
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