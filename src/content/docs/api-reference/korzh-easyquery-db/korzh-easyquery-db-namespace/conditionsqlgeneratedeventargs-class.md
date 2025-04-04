---
title: ConditionSqlGeneratedEventArgs class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/conditionsqlgeneratedeventargs-class
sidebar:
  order: 100
---

Provides data for ConditionSqlGenerated event of [Korzh.EasyQuery.Db.SqlQueryBuilder](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlquerybuilder-class) class
```csharp
public class Korzh.EasyQuery.Db.ConditionSqlGeneratedEventArgs
    : EventArgs

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionSqlGeneratedEventArgs([Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) cond, `string` sql) | `void` | Initializes a new instance of the `CondSqlGenEventArgs` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Condition | [Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Gets the condition which this event occurs for. | 
| SQL | `string` | Gets or sets the SQL expression for the corresponding condition. |
