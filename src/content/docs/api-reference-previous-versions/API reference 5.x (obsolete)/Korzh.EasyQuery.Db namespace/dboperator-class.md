---
title: DbOperator class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Db namespace/dboperator-class
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