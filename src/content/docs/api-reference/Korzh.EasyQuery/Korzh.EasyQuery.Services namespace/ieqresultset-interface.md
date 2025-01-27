---
title: IEqResultSet interface
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery.Services namespace/ieqresultset-interface
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
| AddColumn([EasyDataCol](/api-reference/easydata-core/easydata-namespace/easydatacol-class) column) | `void` | Adds a column | 
| CreateColumn([EasyDataColDesc](/api-reference/easydata-core/easydata-namespace/easydatacoldesc-class) desc) | [EasyDataCol](/api-reference/easydata-core/easydata-namespace/easydatacol-class) | Creates a column. |