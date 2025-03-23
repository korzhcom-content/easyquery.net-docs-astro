---
title: DbOperator class
slug: api-reference-4x/korzh-easyquery-db-namespace/dboperator-class
---


Represents a logical expression or predicate, like comparisons or LIKE predicate.
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