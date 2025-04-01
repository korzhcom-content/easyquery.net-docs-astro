---
title: DbOperator class
slug: api-reference-5x/korzh-easyquery-db-namespace/dboperator-class
sidebar:
  order: 100
---

Represents a logical expression or "predicate". For example: "less than", "is equal to", "starts with".
```csharp
public class Korzh.EasyQuery.Db.DbOperator
    : Operator

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DbModel` | Model | Gets or sets the model. | 
| `TableList` | Tables | Gets the list of the tables used in this operator (only for operators with "isCondition==true" ). | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | LoadAttribute(`String` propname, `String` propvalue) | Loads the attribute. | 
| `void` | SaveAttributes(`XmlWriter` writer) | Saves the attributes. |
