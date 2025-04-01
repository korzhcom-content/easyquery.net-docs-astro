---
title: IEqResultSet interface
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqresultset-interface
sidebar:
  order: 100
---

Represents a type used to store the result set of the query execution.
```csharp
public interface Korzh.EasyQuery.Services.IEqResultSet
    : IEasyDataResultSet, IDisposable

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddColumn([EasyDataCol](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatacol-class) column) | `void` | Adds a column | 
| CreateColumn([EasyDataColDesc](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatacoldesc-class) desc) | [EasyDataCol](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatacol-class) | Creates a column. |
