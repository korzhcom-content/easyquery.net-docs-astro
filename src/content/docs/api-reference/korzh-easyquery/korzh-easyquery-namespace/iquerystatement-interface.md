---
title: IQueryStatement interface
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/iquerystatement-interface
---


Represents the result of query builder's work.
```csharp
public interface Korzh.EasyQuery.IQueryStatement

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Params | [QueryParamList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) | Gets the list of parameters used in generated SQL statement. | 
| Statement | `string` | Gets the statement (SQL, filter expression, etc - depending on the concrete QueryStatement type). |