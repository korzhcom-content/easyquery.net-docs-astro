---
title: AggrFunctionList class
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfunctionlist-class
---


Represents the list of [Korzh.EasyQuery.AggrFunction](/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfunction-class) objects
```csharp
public class Korzh.EasyQuery.AggrFunctionList
    : Collection<AggrFunction>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| AggrFunctionList() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Add([AggrFunctionDescriptor](/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfunctiondescriptor-struct) descriptor) | `void` | Adds an aggregate function by its descriptor. | 
| FindById(`string` id) | [AggrFunction](/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfunction-class) | Finds aggregate function by its ID. |