---
title: OperatorStore class
slug: api-reference-5x/korzh-easyquery-namespace/operatorstore-class
---


This class represents the list of operators associated with a particular DataModel
```csharp
public class Korzh.EasyQuery.OperatorStore
    : OperatorList, IList<Operator>, ICollection<Operator>, IEnumerable<Operator>, IEnumerable, IList, ICollection, IReadOnlyList<Operator>, IReadOnlyCollection<Operator>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | ReadFromJson(`JsonReader` reader) | Reads all operator's properties from JSON. | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Reads all operator's properties from JSON (asynchronous way). | 
| `void` | RemoveItem(`Int32` index) | Removes the item. | 
| `void` | WriteToJson(`JsonWriter` writer) | Writes all operator's properties to JSON. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer) | Writes all operator's properties to JSON (asynchronous way). |