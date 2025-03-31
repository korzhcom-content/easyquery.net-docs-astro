---
title: IDbResultSet interface
slug: api-reference/korzh-easyquery-db/korzh-easyquery-services-namespace/idbresultset-interface
---

Represents an extension of IEqResultSet interface which also contains a function for creating a row.  Implements the [Korzh.EasyQuery.Services.IEqResultSet](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqresultset-interface)
```csharp
public interface Korzh.EasyQuery.Services.IDbResultSet
    : IEqResultSet, IEasyDataResultSet, IDisposable

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CreateRow(`IDataReader` dataReader) | [EasyDataRow](//easyquery/docs/api-reference/easydata-core/easydata-namespace/easydatarow-class) | Creates a new row and fills it from the data reader. |