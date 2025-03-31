---
title: AggrFunctionList class
slug: api-reference-5x/korzh-easyquery-namespace/aggrfunctionlist-class
---

Represents the list of [Korzh.EasyQuery.AggrFunction](//easyquery/docs/api-reference-5x/korzh-easyquery-namespace/aggrfunction-class) objects
```csharp
public class Korzh.EasyQuery.AggrFunctionList
    : Collection<AggrFunction>, IList<AggrFunction>, ICollection<AggrFunction>, IEnumerable<AggrFunction>, IEnumerable, IList, ICollection, IReadOnlyList<AggrFunction>, IReadOnlyCollection<AggrFunction>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `AggrFunction` | FindByID(`String` id) | Finds aggregate function by its ID. | 
| `void` | ReadFromJson(`JsonReader` reader) |  | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) |  | 
| `void` | WriteToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) |  | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) |  |