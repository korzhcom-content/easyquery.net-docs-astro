---
title: EasyObjectResultSet class
slug: >-
  api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/easyobjectresultset-class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.Services.EasyObjectResultSet
    : EasyResultSet, IObjectResultSet, IEqResultSet, IEasyDataResultSet, IDisposable

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyObjectResultSet([Query](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query, [ResultSetOptions](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/resultsetoptions-class) options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyObjectResultSet](///easyquery/docs/api-reference/korzh-easyquery-linq/korzh-easyquery-services-namespace/easyobjectresultset-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CreateRow(`object` item, `IEnumerable`&lt;`PropertyInfo`&gt; properties) | [EasyDataRow](///easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatarow-class) | Adds a new row to the result set and fills it with the data from the list of properties. |
