---
title: DbOperator class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dboperator-class
---
Represents a logical expression or "predicate". For example: "less than", "is equal to", "starts with".
```csharp
public class Korzh.EasyQuery.Db.DbOperator
    : Operator

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Model | [DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) | Gets or sets the model. | 
| Tables | [TableList](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelist-class) | Gets the list of the tables used in this operator (only for operators with "isCondition==true" ). |