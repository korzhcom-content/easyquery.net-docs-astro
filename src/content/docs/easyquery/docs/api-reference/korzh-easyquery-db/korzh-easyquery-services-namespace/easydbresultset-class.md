---
title: EasyDbResultSet class
slug: easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/easydbresultset-class
---


The result set.
```csharp
public class Korzh.EasyQuery.Services.EasyDbResultSet
    : EasyResultSet, IDbResultSet, IEqResultSet, IEasyDataResultSet, IDisposable

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyDbResultSet([DbQuery](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbquery-class) query, `IDataReader` dataReader = <span style='color: blue'>null</span>, [ResultSetOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/resultsetoptions-class) options = <span style='color: blue'>null</span>) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EasyDbResultSet](/api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/easydbresultset-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| DataReader | `IDataReader` | The data reader | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CreateRow(`IDataReader` dataReader) | [EasyDataRow](/api-reference/easydata-core/easydata-namespace/easydatarow-class) | Creates a new row and fills its content from the data reader. | 
| Dispose(`bool` disposing) | `void` | Releases unmanaged and - optionally - managed resources. |