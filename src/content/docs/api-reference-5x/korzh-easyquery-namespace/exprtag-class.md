---
title: ExprTag class
slug: api-reference-5x/korzh-easyquery-namespace/exprtag-class
---


Contains several constant definitions for expressions tag
```csharp
public static class Korzh.EasyQuery.ExprTag

```

### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | AggregateFunction | Aggregate function expression | 
| `Int32` | Constant | Constant expression | 
| `Int32` | EntityAttribute | Entity attribute expression | 
| `Int32` | ParentEntityAttribute | Parent entity attribute expression | 
| `Int32` | Query | Query expression | 
| `Int32` | Unknown | Unknown expression type | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | OldClassNameToTag(`String` className) | Converts old class name to tag. | 
| `String` | TagToOldClassName(`Int32` tag) | Converts the expression's tag value to the name of old expression class (like "CONST" or "ENTATTR"). |