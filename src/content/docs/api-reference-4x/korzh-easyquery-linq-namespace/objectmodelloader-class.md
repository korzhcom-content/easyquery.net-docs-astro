---
title: ObjectModelLoader class
slug: api-reference-4x/korzh-easyquery-linq-namespace/objectmodelloader-class
sidebar:
  order: 100
---

Represents a data model
```csharp
public class Korzh.EasyQuery.Linq.ObjectModelLoader

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | IsLoadedFromType |  | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetCollectionName(`Type` type) | Used to get the name of the collection in context | 
| `void` | LoadFromContext(`DataModel` model, `Type` type) | Loads model from context class. | 
| `void` | LoadFromContextType(`DataModel` model, `Type` type, `ContextLoadingOptions` options) | Loads model from context class. | 
| `void` | LoadFromEntityType(`DataModel` model, `Type` type, `ContextLoadingOptions` loadingOptions) | Loads model from some type (class).  All properties of this class with primitive types will be added as attributes of the root entity.  All complex type properties - as sub-entities and so on recursively . | 
| `void` | LoadModelFromType(`DataModel` model, `Type` type) | Loads model from some type (class).  All properties of this class with primitive types will be added as attributes of the root entity.  All complex type properties - as sub-entities and so on recursively . |
