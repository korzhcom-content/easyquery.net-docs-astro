---
title: SqlValueListResolver class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/sqlvaluelistresolver-class
sidebar:
  order: 100
---

Represents a value editor which returns the list of values  retrieved from a database with some SQL SELECT statement.  Implements the [Korzh.EasyQuery.Services.IValueListResolver](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ivaluelistresolver-interface)
```csharp
public class Korzh.EasyQuery.Services.SqlValueListResolver
    : IValueListResolver

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SqlValueListResolver(`Func`&lt;`DbConnection`&gt; connectionResolver) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.SqlValueListResolver](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/sqlvaluelistresolver-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetListBySql(`string` sql, [ListRequestOptions](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class) options = <span style='color: blue'>null</span>) | `IEnumerable`&lt;[ListItem](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listitem-class)&gt; | Executes the SQL statement, retrieve the result set and fills the list. | 
| TryGetValues([ListRequestOptions](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/listrequestoptions-class) options, `IEnumerable`1&` result) | `bool` | Gets the list of values by the value editor specified in the parameter. |
