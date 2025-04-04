---
title: EntityGraph class
slug: api-reference-4x/korzh-easyquery-namespace/entitygraph-class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.EntityGraph
    : ObjectGraph<Type>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Type` | ContextType |  | 
| `Boolean` | IsEmpty | Returns <see langword="true" /> if this graph is empty; otherwise, <see langword="false" />. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetCollectionName(`Type` type) | Used to get the name of the collection in context | 
| `EdgeInfo` | GetEdgeInfo(`ObjectModelType` t1, `ObjectModelType` t2) | Gets the information about some edge in entity graph (see [Korzh.EasyQuery.EntityGraph](/easyquery/docs/api-reference-4x/korzh-easyquery-namespace/entitygraph-class) for details). | 
| `String` | GetNavigationPropertyName(`Type` from, `Type` to) |  | 
| `void` | SetCollectionName(`Type` type, `String` name) |  | 
| `void` | SetNavigationPropertyName(`Type` from, `Type` to, `String` name) |  | 
| `void` | UpdateEntityJoinInfo(`Type` outerType, `Type` innerType, `String` outerPropertyName, `String` innerPropertyName) | Updates the information about some edge (join) in the entity graph.  This method adds new edge if it's not defined yet or update the existing one. |
