---
title: ObjectGraph<T> class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-namespace/objectgraph-t--class
---


Represents a graph structure. Each node in graph - is an object of type T.
```csharp
public class Korzh.EasyQuery.ObjectGraph<T>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Dictionary<T, T>` | Parent | Gets the graph parent. | 
| `T` | Root | Gets or sets the root of the graph. | 
| `IEnumerable<T>` | Vertices | Gets the list of all vertices. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddEdge(`T` vertexFrom, `T` vertexTo) | Adds the edge (a connection between two nodes) | 
| `void` | AddVertex(`T` vertex) | Adds the vertex (node) into the graph. | 
| `IDictionary<T, T>` | BreadthFirstSearch(`T` vertex) | Breadthes-first search in the graph for specified vertex. | 
| `void` | Clear() | Clears the graph. | 
| `Boolean` | ContainsVertex(`T` vertex) | Determines whether this graph contains the specified vertex. | 
| `T` | LCA(`T` vertex1, `T` vertex2, `IEnumerable<T>` usedVertices) | Calculates Lowest Common Ancestor for 2 vertices | 
| `void` | RemoveVertex(`T` vertex) | Removes the vertex (node) from the graph. |