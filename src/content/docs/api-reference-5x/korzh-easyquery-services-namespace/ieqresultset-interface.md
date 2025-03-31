---
title: IEqResultSet interface
slug: api-reference-5x/korzh-easyquery-services-namespace/ieqresultset-interface
---

Represents a type used to store the result set of the query execution.
```csharp
public interface Korzh.EasyQuery.Services.IEqResultSet

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | ColumnCount | Gets the number of columns in this result set. | 
| `Int64` | RecordCount | Gets the number of records in this result set. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddColumn(`String` columnId, `String` title, `Type` columnType) | Adds a column. |