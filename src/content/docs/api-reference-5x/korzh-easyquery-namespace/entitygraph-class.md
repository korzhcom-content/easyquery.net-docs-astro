---
title: EntityGraph class
slug: api-reference-5x/korzh-easyquery-namespace/entitygraph-class
sidebar:
  order: 100
---

Represents the entity graph created during the loading of the model from some context type  Implements the [Korzh.EasyQuery.ObjectGraph`1](///easyquery/docs/api-reference-5x/korzh-easyquery-namespace/objectgraph-t--class)
```csharp
public class Korzh.EasyQuery.EntityGraph
    : ObjectGraph<Type>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Type` | ContextType | Gets or sets the type of the context. | 
| `Boolean` | IsEmpty | Returns <see langword="true" /> if this graph is empty; otherwise, <see langword="false" />. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetCollectionName(`Type` type) | Used to get the name of the collection in context | 
| `EdgeInfo` | GetEdgeInfo(`ObjectModelType` t1, `ObjectModelType` t2) | Gets the information about some edge in entity graph (see [Korzh.EasyQuery.EntityGraph](///easyquery/docs/api-reference-5x/korzh-easyquery-namespace/entitygraph-class) for details). | 
| `String` | GetNavigationPropertyName(`Type` from, `Type` to) | Gets the name of the navigation property. | 
| `void` | SetCollectionName(`Type` type, `String` name) | Sets the name of the collection. | 
| `void` | SetNavigationPropertyName(`Type` from, `Type` to, `String` name) | Sets the name of the navigation property. | 
| `void` | UpdateEntityJoinInfo(`Type` outerType, `Type` innerType, `String` outerPropertyName, `String` innerPropertyName) | Updates the information about some edge (join) in the entity graph.  This method adds new edge if it's not defined yet or update the existing one. |
