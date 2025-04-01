---
title: ModelLinqExtensions class
slug: >-
  api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/modellinqextensions-class
sidebar:
  order: 100
---

Contains different extension functions for loading data model from types.
```csharp
public static class Korzh.EasyQuery.Linq.ModelLinqExtensions

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddUpdateLinqOperator(<span style='color: blue'>this</span> [DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` id, `string` caption, `string` format, `Func`&lt;`Expression`, `IEnumerable`&lt;`Expression`&gt;, `Expression`&gt; linqExprResolver, [DataKind](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) kind = 0, [OperatorGroup](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgroup-class) group = <span style='color: blue'>null</span>) | [LinqOperator](///easyquery/docs/api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/linqoperator-class) |  | 
| LoadFromContextType(<span style='color: blue'>this</span> [DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Type` context) | `void` | Loads model from some context class.  All IEnumerable properties of this class will be represented as entities in result model.  All primitive type properties of generic type parameter class for each such IEnumerable will be added as attributes of corresponding entity. | 
| LoadFromContextType(<span style='color: blue'>this</span> [DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Type` context, [ContextLoadingOptions](///easyquery/docs/api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/contextloadingoptions-enum) loadingOptions) | `void` | Loads model from some context class.  All IEnumerable properties of this class will be represented as entities in result model.  All primitive type properties of generic type parameter class for each such IEnumerable will be added as attributes of corresponding entity. | 
| LoadFromEntityType(<span style='color: blue'>this</span> [DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Type` type) | `void` | Loads model from some type (class).  All properties of this class with primitive types will be added as attributes of the root entity.  All complex type properties - as sub-entities and so on recursively . | 
| LoadFromEntityType(<span style='color: blue'>this</span> [DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Type` type, [ContextLoadingOptions](///easyquery/docs/api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/contextloadingoptions-enum) loadingOptions) | `void` | Loads model from some type (class).  All properties of this class with primitive types will be added as attributes of the root entity.  All complex type properties - as sub-entities and so on recursively . |
