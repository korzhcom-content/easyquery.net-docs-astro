---
title: AggrFuncExpr.ArgStore class
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfuncexpr-argstore-class
---


Represents the list of aggregate function arguments
```csharp
public class Korzh.EasyQuery.AggrFuncExpr.ArgStore
    : ExprList

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ArgStore([AggrFuncExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfuncexpr-class) aggrFuncExpr) | `void` | Initializes a new instance of the `ArgStore` class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| InsertItem(`int` index, [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| RemoveItem(`int` index) | `void` | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. | 
| SetItem(`int` index, [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) item) | `void` | Replaces the element at the specified index. |