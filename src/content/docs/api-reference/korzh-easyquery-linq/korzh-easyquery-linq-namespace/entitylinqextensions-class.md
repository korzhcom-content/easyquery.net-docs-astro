---
title: EntityLinqExtensions class
slug: api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/entitylinqextensions-class
---


Contains several useful extensions for types processing and LINQ generation
```csharp
public static class Korzh.EasyQuery.Linq.EntityLinqExtensions

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromProperty(<span style='color: blue'>this</span> [EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr, `PropertyInfo` propInfo, [Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) parent) | `void` | Fills type information in some EntityAttr object from a specified type. | 
| LoadFromType(<span style='color: blue'>this</span> [Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) entity, `Type` entityType, `string` entityName, [Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) parent, `List`&lt;`Type`&gt; ignoredTypes) | `void` | Fills the type information in some Entity object from a specified type. |