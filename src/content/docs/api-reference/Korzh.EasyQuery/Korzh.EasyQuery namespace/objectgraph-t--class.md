---
title: ObjectGraph<T> class
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery namespace/objectgraph-t--class
---


Represents a graph structure. Each node in graph - is an object of type T.
```csharp
public class Korzh.EasyQuery.ObjectGraph<T>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ObjectGraph() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Parent | `Dictionary`&lt;`T`, `T`&gt; | Gets the graph parent. | 
| Root | `ObjectGraph`1.T` | Gets or sets the root of the graph. | 
| Vertices | `IEnumerable`&lt;`T`&gt; | Gets the list of all vertices. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddEdge(`T` vertexFrom, `T` vertexTo) | `void` | Adds the edge (a connection between two nodes) | 
| AddVertex(`T` vertex) | `void` | Adds the vertex (node) into the graph. | 
| BreadthFirstSearch(`T` vertex) | `IDictionary`&lt;`T`, `T`&gt; | Breadthes-first search in the graph for specified vertex. | 
| Clear() | `void` | Clears the graph. | 
| ContainsVertex(`T` vertex) | `bool` | Determines whether this graph contains the specified vertex. | 
| LCA(`T` vertex1, `T` vertex2, `IEnumerable`&lt;`T`&gt; usedVertices) | `ObjectGraph`1.T` | Calculates Lowest Common Ancestor for 2 vertices | 
| RemoveVertex(`T` vertex) | `void` | Removes the vertex (node) from the graph. |