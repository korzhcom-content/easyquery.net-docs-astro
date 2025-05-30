---
title: ResultSetPortion class
slug: api-reference-5x/korzh-easyquery-db-namespace/resultsetportion-class
sidebar:
  order: 100
---

Represents a portion of result set to return
```csharp
public class Korzh.EasyQuery.Db.ResultSetPortion

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Int64` | Limit | Specifies the number of rows to return from result set (starting from the row defined in [Korzh.EasyQuery.Db.ResultSetPortion.Offset](/easyquery/docs/api-reference-5x/korzh-easyquery-db-namespace/resultsetportion-class)) | 
| `Int64` | Offset | Specifies the number of rows to skip, before starting to return rows from the result set. |
