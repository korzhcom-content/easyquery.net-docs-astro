---
title: IEqResultSet interface
slug: api-reference-4x/korzh-easyquery-services-namespace/ieqresultset-interface
sidebar:
  order: 100
---

```csharp
public interface Korzh.EasyQuery.Services.IEqResultSet
    : IDictionary<String, Object>, ICollection<KeyValuePair<String, Object>>, IEnumerable<KeyValuePair<String, Object>>, IEnumerable

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | ColumnCount |  | 
| `Int64` | RecordCount |  | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddColumn(`String` columnId, `String` title, `Type` columnType) |  |
