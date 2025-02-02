---
title: GdtResultSet class
slug: api-reference-5x/korzh-easyquery-services-namespace/gdtresultset-class
---


Represents a result set which can be easly convertend into Google's DataTable format
```csharp
public class Korzh.EasyQuery.Services.GdtResultSet
    : IEqResultSet

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | IsDataFillStarted | Indicates whether the data filling process has started already. | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `IList<GdtColumn>` | Cols | Gets the columns. | 
| `Int32` | ColumnCount | Gets the number of columns. | 
| `Int64` | RecordCount | Gets or sets the record count. | 
| `IList<GdtRow>` | Rows | Gets the rows. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddColumn(`String` columnId, `String` title, `Type` columnType) | Adds the column. | 
| `Boolean` | ContainsTime(`DateTime` dt) | Determines whether the specified DateTime object contains time (the time part differs from 0:00) | 
| `String` | GetGoogleTypeBySystemType(`Type` systemType) | Converts the system type to the type identified compatible with Google's DataTable. |