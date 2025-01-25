---
title: ObjectModelLoader class
slug: api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/objectmodelloader-class
---
Represents a data model loader
```csharp
public class Korzh.EasyQuery.Linq.ObjectModelLoader

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ObjectModelLoader() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetCollectionName(`Type` type) | `string` | Used to get the name of the collection in context | 
| LoadFromContext([DataModel](api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Type` type) | `void` | Loads model from a context class. | 
| LoadFromContextType([DataModel](api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Type` type, [ContextLoadingOptions](api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/contextloadingoptions-enum) options) | `void` | Loads model from context class. | 
| LoadFromEntityType([DataModel](api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Type` type, [ContextLoadingOptions](api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/contextloadingoptions-enum) loadingOptions) | `void` | Loads model from some type (class).  All properties of this class with primitive types will be added as attributes of the root entity.  All complex type properties - as sub-entities and so on recursively . | 
| LoadModelFromType([DataModel](api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Type` type) | `void` | Loads model from some type (class).  All properties of this class with primitive types will be added as attributes of the root entity.  All complex type properties - as sub-entities and so on recursively . |