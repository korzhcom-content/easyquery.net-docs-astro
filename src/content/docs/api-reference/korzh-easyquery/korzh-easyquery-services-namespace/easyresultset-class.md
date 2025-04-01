---
title: EasyResultSet class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyresultset-class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.Services.EasyResultSet
    : IEqResultSet, IEasyDataResultSet, IDisposable

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyResultSet([Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query, [ResultSetOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/resultsetoptions-class) options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyResultSet](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyresultset-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Columns | `List`&lt;[EasyDataCol](///easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatacol-class)&gt; |  | 
| Options | [ResultSetOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/resultsetoptions-class) |  | 
| Query | [Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Cols | `IReadOnlyList`&lt;[EasyDataCol](///easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatacol-class)&gt; | Gets the columns. | 
| Rows | `IEnumerable`&lt;[EasyDataRow](///easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatarow-class)&gt; | Gets the rows. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddColumn([EasyDataCol](///easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatacol-class) column) | `void` | Add column to result set | 
| CreateColumn([EasyDataColDesc](///easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatacoldesc-class) desc) | [EasyDataCol](///easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatacol-class) | Creates the column. | 
| Dispose(`bool` disposing) | `void` | Releases unmanaged and - optionally - managed resources. | 
| Dispose() | `void` | Releases unmanaged and - optionally - managed resources. |
