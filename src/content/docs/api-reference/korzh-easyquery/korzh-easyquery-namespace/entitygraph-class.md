---
title: EntityGraph class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/entitygraph-class
---

Represents the entity graph created during the loading of the model from some context type  Implements the [Korzh.EasyQuery.ObjectGraph`1](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/objectgraph-t--class)
```csharp
public class Korzh.EasyQuery.EntityGraph
    : ObjectGraph<Type>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntityGraph() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ContextType | `Type` | Gets or sets the type of the context. | 
| IsEmpty | `bool` | Returns <see langword="true" /> if this graph is empty; otherwise, <see langword="false" />. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetCollectionName(`Type` type) | `string` | Used to get the name of the collection in context | 
| GetEdgeInfo([ObjectModelType](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/objectmodeltype-class) t1, [ObjectModelType](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/objectmodeltype-class) t2) | [EdgeInfo](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/edgeinfo-class) | Gets the information about some edge in entity graph (see [Korzh.EasyQuery.EntityGraph](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entitygraph-class) for details). | 
| GetNavigationPropertyName(`Type` from, `Type` to) | `string` | Gets the name of the navigation property. | 
| SetCollectionName(`Type` type, `string` name) | `void` | Sets the name of the collection. | 
| SetNavigationPropertyName(`Type` from, `Type` to, `string` name) | `void` | Sets the name of the navigation property. | 
| UpdateEntityJoinInfo(`Type` outerType, `Type` innerType, `string` outerPropertyName, `string` innerPropertyName) | `void` | Updates the information about some edge (join) in the entity graph.  This method adds new edge if it's not defined yet or update the existing one. |