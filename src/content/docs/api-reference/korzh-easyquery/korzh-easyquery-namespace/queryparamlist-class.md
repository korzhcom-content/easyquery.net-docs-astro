---
title: QueryParamList class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class
sidebar:
  order: 100
---

Represents simple list of [Korzh.EasyQuery.QueryParam](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) objects.
```csharp
public class Korzh.EasyQuery.QueryParamList
    : Collection<QueryParam>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryParamList() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ClearGeneratedParams() | `void` | Clears the list of generated parameters. | 
| CopyFrom([QueryParamList](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) prms, `bool` clearFirst = False) | `void` | Copies all parameters from some other parameter list | 
| ExtractFromExpr(`string` expr) | `void` | Extracts parameters from expression. | 
| FindById(`string` paramId) | [QueryParam](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) | Finds parameter by its ID. | 
| GenNextParamId(`string` paramIdBase, `String&` suffix) | `string` | Generates the next parameter identifier. | 
| IndexById(`string` paramId) | `int` | Returns index of parameter by its ID. | 
| InsertItem(`int` index, [QueryParam](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads the list of query parameters from JSON (asynchronous way). | 
| ResetParamIdGenerator() | `void` | Resets the parameter identifier generator. | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Writes the list of query parameters to JSON (asynchronous way). |
