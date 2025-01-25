---
title: ExprTag class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/exprtag-class
---
Contains several constant definitions for expressions tag
```csharp
public static class Korzh.EasyQuery.ExprTag

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| AggregateFunction | `int` | Aggregate function expression | 
| Constant | `int` | Constant expression | 
| EntityAttribute | `int` | Entity attribute expressio`n | 
| ParentColumn | `int` | Parent column expression | 
| ParentEntityAttribute | `int` | Parent entity attribute expression | 
| Query | `int` | Query expression | 
| Unknown | `int` | Unknown expression type | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| OldClassNameToTag(`string` className) | `int` | Converts old class name to tag. | 
| TagToOldClassName(`int` tag) | `string` | Converts the expression's tag value to the name of old expression class (like "CONST" or "ENTATTR"). |