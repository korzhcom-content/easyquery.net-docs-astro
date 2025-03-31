---
title: EntityLinqExtensions class
slug: api-reference-5x/korzh-easyquery-linq-namespace/entitylinqextensions-class
---

Contains several useful extensions for types processing and LINQ generation
```csharp
public static class Korzh.EasyQuery.Linq.EntityLinqExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | LoadFromProperty(<span style='color: blue'>this</span> `EntityAttr` attr, `PropertyInfo` propInfo, `Entity` parent) | Fills type information in some EntityAttr object from a specified type. | 
| `void` | LoadFromType(<span style='color: blue'>this</span> `Entity` entity, `Type` entityType, `String` entityName, `Entity` parent, `List<Type>` ignoredTypes) | Fills the type information in some Entity object from a specified type. |