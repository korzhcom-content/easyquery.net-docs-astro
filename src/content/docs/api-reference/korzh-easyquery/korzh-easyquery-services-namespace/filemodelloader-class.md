---
title: FileModelLoader class
slug: api-reference/korzh-easyquery/korzh-easyquery-services-namespace/filemodelloader-class
---

Represents a IModelLoader implemenation  which allows to load data model definitions (either XML or JSON) from the file system.  Implements the [Korzh.EasyQuery.Services.IModelLoader](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/imodelloader-interface)
```csharp
public class Korzh.EasyQuery.Services.FileModelLoader
    : IModelLoader

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| FileModelLoader(`string` dataPath) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.FileModelLoader](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/filemodelloader-class) class. | 
| FileModelLoader(`IOptions`&lt;[FileModelLoaderSettings](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/filemodelloadersettings-class)&gt; options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.FileModelLoader](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/filemodelloader-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadModelAsync([DataModel](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` modelId) | `Task`&lt;`bool`&gt; | Loads the model by its ID. |