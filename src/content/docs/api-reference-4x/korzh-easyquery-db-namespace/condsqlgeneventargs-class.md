---
title: CondSqlGenEventArgs class
slug: api-reference-4x/korzh-easyquery-db-namespace/condsqlgeneventargs-class
---


Provides data for CondSqlGen event of [Korzh.EasyQuery.Db.SqlQueryBuilder](/api-reference-4x/korzh-easyquery-db-namespace/sqlquerybuilder-class) class
```csharp
public class Korzh.EasyQuery.Db.CondSqlGenEventArgs
    : EventArgs

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Condition` | Condition | Gets the condition which this event occurs for. | 
| `String` | SQL | Gets or sets the SQL expression for the corresponding condition. |