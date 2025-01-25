---
title: EdgeInfo class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/edgeinfo-class
---
Represents edges for entity graph defined in some [Korzh.EasyQuery.ObjectGraph`1](/api-reference/korzh-easyquery/korzh-easyquery-namespace/objectgraph-t--class) object
```csharp
public class Korzh.EasyQuery.EdgeInfo

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EdgeInfo() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| InnerProperty | `string` | Gets or sets the property in inner vertex. | 
| InnerType | [ObjectModelType](/api-reference/korzh-easyquery/korzh-easyquery-namespace/objectmodeltype-class) | Gets or sets the inner vertex of the edge. | 
| OuterProperty | `string` | Gets or sets the property in outer vertex. | 
| OuterType | [ObjectModelType](/api-reference/korzh-easyquery/korzh-easyquery-namespace/objectmodeltype-class) | Gets or sets the outer vertex (in graph) of the edge. |