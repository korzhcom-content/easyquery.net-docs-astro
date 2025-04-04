---
title: ResultSetPortion class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/resultsetportion-class
sidebar:
  order: 100
---

Represents a portion of result set to return
```csharp
public class Korzh.EasyQuery.Db.ResultSetPortion

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ResultSetPortion() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.ResultSetPortion](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/resultsetportion-class) class. | 
| ResultSetPortion(`long` offset, `long` limit) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.ResultSetPortion](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/resultsetportion-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Limit | `long` | Specifies the number of rows to return from result set (starting from the row defined in [Korzh.EasyQuery.Db.ResultSetPortion.Offset](/easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/resultsetportion-class)) | 
| Offset | `long` | Specifies the number of rows to skip, before starting to return rows from the result set. |
