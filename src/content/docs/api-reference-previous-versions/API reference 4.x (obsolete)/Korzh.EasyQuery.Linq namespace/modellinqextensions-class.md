---
title: ModelLinqExtensions class
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery.Linq namespace/modellinqextensions-class
---


```csharp
public static class Korzh.EasyQuery.Linq.ModelLinqExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | LoadFromContextType(<span style='color: blue'>this</span> `DataModel` model, `Type` context) | Loads model from some context class.  All IEnumerable properties of this class will be represented as entities in result model.  All primitive type properties of generic type parameter class for each such IEnumerable will be added as attributes of corresponding entity. | 
| `void` | LoadFromContextType(<span style='color: blue'>this</span> `DataModel` model, `Type` context, `ContextLoadingOptions` loadingOptions) | Loads model from some context class.  All IEnumerable properties of this class will be represented as entities in result model.  All primitive type properties of generic type parameter class for each such IEnumerable will be added as attributes of corresponding entity. | 
| `void` | LoadFromEntityType(<span style='color: blue'>this</span> `DataModel` model, `Type` type) | Loads model from some type (class).  All properties of this class with primitive types will be added as attributes of the root entity.  All complex type properties - as sub-entities and so on recursively . | 
| `void` | LoadFromEntityType(<span style='color: blue'>this</span> `DataModel` model, `Type` type, `ContextLoadingOptions` loadingOptions) | Loads model from some type (class).  All properties of this class with primitive types will be added as attributes of the root entity.  All complex type properties - as sub-entities and so on recursively . |