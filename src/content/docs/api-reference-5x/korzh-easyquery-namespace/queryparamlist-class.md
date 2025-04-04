---
title: QueryParamList class
slug: api-reference-5x/korzh-easyquery-namespace/queryparamlist-class
sidebar:
  order: 100
---

Represents simple list of [Korzh.EasyQuery.QueryParam](/easyquery/docs/api-reference-5x/korzh-easyquery-namespace/queryparam-class) objects.
```csharp
public class Korzh.EasyQuery.QueryParamList
    : Collection<QueryParam>, IList<QueryParam>, ICollection<QueryParam>, IEnumerable<QueryParam>, IEnumerable, IList, ICollection, IReadOnlyList<QueryParam>, IReadOnlyCollection<QueryParam>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | ClearGeneratedParams() | Clears the list of generated parameters. | 
| `void` | CopyFrom(`QueryParamList` prms, `Boolean` clearFirst = False) | Copies all parameters from some other parameter list | 
| `void` | ExtractFromExpr(`String` expr) | Extracts parameters from expression. | 
| `QueryParam` | FindById(`String` paramId) | Finds parameter by its ID. | 
| `String` | GenNextParamId(`String` paramIdBase, `String&` suffix) | Generates the next parameter identifier. | 
| `Int32` | IndexById(`String` paramId) | Returns index of parameter by its ID. | 
| `void` | InsertItem(`Int32` index, `QueryParam` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads paramter list from XML reader. | 
| `void` | ReadFromJson(`JsonReader` reader) | Reads the list of query parameters from JSON. | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Reads the list of query parameters from JSON (asynchronous way). | 
| `void` | ResetParamIdGenerator() | Resets the parameter identifier generator. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves to XML writer. | 
| `void` | WriteToJson(`JsonWriter` writer) | Writes the list of query parameters to JSON. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer) | Writes the list of query parameters to JSON (asynchronous way). |
