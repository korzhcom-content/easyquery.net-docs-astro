---
title: SqlValueListResolver class
slug: api-reference-5x/korzh-easyquery-services-namespace/sqlvaluelistresolver-class
sidebar:
  order: 100
---

Represents a value editor which returns the list of values  retrieved from a database with some SQL SELECT statement.  Implements the [Korzh.EasyQuery.Services.IValueListResolver](/easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/ivaluelistresolver-interface)
```csharp
public class Korzh.EasyQuery.Services.SqlValueListResolver
    : IValueListResolver

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `IEnumerable<ListItem>` | GetListBySql(`String` modelId, `String` sql) | Executes the SQL statement, retrieve the result set and fills the list. | 
| `Boolean` | TryGetValues(`ListValueEditor` editor, `IEnumerable`1&` result) | Gets the list of values by the value editor specified in the parameter. |
