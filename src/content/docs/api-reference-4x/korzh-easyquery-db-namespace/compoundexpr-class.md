---
title: CompoundExpr class
slug: api-reference-4x/korzh-easyquery-db-namespace/compoundexpr-class
sidebar:
  order: 100
---

Represents a compound expression (an expression that contains other expressions).
```csharp
public class Korzh.EasyQuery.Db.CompoundExpr
    : EqExpression, IDbCondition

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Text | Gets or sets the expression text used for visual representation. | 
| `String` | TypeName | Non-static version of [Korzh.EasyQuery.Db.CompoundExpr.STypeName](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/compoundexpr-class) property. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | GetUsedTables(`TableList` tables) | Add the tables used in this expression in the list. | 
| `void` | LoadFromJsonDict(`JsonDict` dict) | Loads expression from IDictionary object (used when we load query from JSON). | 
| `void` | SaveToJsonDictCore(`JsonDict` dict) | Saves expression's properties to dictionary (used to serialize expression into JSON)  This is an abstract method which should be overridden in descendant classes. | 
| `void` | SetContentSilent(`String` val, `String` txt) | Sets the content of the expression silently (without calling ContentChanged event). | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the expression type. |
