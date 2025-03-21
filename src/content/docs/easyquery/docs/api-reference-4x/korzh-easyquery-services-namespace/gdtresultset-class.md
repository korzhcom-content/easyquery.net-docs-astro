---
title: GdtResultSet class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-services-namespace/gdtresultset-class
---


Represents result set which can be easly convertend into Google's DataTable format
```csharp
public class Korzh.EasyQuery.Services.GdtResultSet
    : JsonDict, IDictionary<String, Object>, ICollection<KeyValuePair<String, Object>>, IEnumerable<KeyValuePair<String, Object>>, IEnumerable, IDictionary, ICollection, IReadOnlyDictionary<String, Object>, IReadOnlyCollection<KeyValuePair<String, Object>>, ISerializable, IDeserializationCallback, IEqResultSet

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | IsDataFillStarted |  | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | ColumnCount |  | 
| `IList<JsonDict>` | Columns |  | 
| `Int64` | RecordCount |  | 
| `IList<JsonDict>` | Rows |  | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddColumn(`String` columnId, `String` title, `Type` columnType) |  | 
| `Boolean` | ContainsTime(`DateTime` dt) |  | 
| `String` | GetGoogleTypeBySystemType(`Type` systemType) |  |