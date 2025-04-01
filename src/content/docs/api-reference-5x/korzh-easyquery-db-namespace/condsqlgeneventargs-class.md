---
title: CondSqlGenEventArgs class
slug: api-reference-5x/korzh-easyquery-db-namespace/condsqlgeneventargs-class
sidebar:
  order: 100
---

Provides data for CondSqlGen event of [Korzh.EasyQuery.Db.SqlQueryBuilder](///////////////easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/sqlquerybuilder-class) class
```csharp
public class Korzh.EasyQuery.Db.CondSqlGenEventArgs
    : EventArgs

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Condition` | Condition | Gets the condition which this event occurs for. | 
| `String` | SQL | Gets or sets the SQL expression for the corresponding condition. |
