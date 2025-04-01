---
title: EntityTypeModelLoader<T> class
slug: >-
  api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/entitytypemodelloader-t--class
sidebar:
  order: 100
---

An implementation of [Korzh.EasyQuery.Services.IModelLoader](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/imodelloader-interface)  which loads the model from some type.
```csharp
public class Korzh.EasyQuery.Services.EntityTypeModelLoader<T>
    : IModelLoader

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntityTypeModelLoader() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EntityTypeModelLoader`1](///easyquery/docs/api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/entitytypemodelloader-t--class) class. | 
| EntityTypeModelLoader([EntityTypeModelLoaderOptions](///easyquery/docs/api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/entitytypemodelloaderoptions-class) options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EntityTypeModelLoader`1](///easyquery/docs/api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/entitytypemodelloader-t--class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadModelAsync([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` modelId) | `Task`&lt;`bool`&gt; | Loads the model |
