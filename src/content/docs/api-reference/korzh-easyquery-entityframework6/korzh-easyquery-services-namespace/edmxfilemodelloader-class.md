---
title: EdmxFileModelLoader class
slug: >-
  api-reference/korzh-easyquery-entityframework6/korzh-easyquery-services-namespace/edmxfilemodelloader-class
sidebar:
  order: 100
---

Represents a IModelLoader implementation which allows to load  the model from an EDMX file  Implements the [Korzh.EasyQuery.Services.IModelLoader](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/imodelloader-interface).
```csharp
public class Korzh.EasyQuery.Services.EdmxFileModelLoader
    : IModelLoader

```
Package: `Korzh.EasyQuery.EntityFramework6` (targets: `net461`)

Assembly: `Korzh.EasyQuery.EntityFramework6.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EdmxFileModelLoader(`string` fileName, [EdmxModelExtractorOptions](///////////////easyquery/docs/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-entityframework-namespace/edmxmodelextractoroptions-class) options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EdmxFileModelLoader](///////////////easyquery/docs/api-reference/korzh-easyquery-entityframework6/korzh-easyquery-services-namespace/edmxfilemodelloader-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadModelAsync([DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` modelId) | `Task`&lt;`bool`&gt; | Loads the model from the EDMX file.  NB: The model ID is not actually taking into account  since the model is defined by a concrete EDMX file. |
