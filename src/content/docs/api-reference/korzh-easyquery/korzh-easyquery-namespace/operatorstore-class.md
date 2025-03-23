---
title: OperatorStore class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorstore-class
---


This class represents the list of operators associated with a particular DataModel
```csharp
public class Korzh.EasyQuery.OperatorStore
    : OperatorList

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| OperatorStore([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Initializes a new instance of the [Korzh.EasyQuery.OperatorStore](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorstore-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads all operator's properties from JSON (asynchronous way). | 
| RemoveItem(`int` index) | `void` | Removes the item. | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Writes all operator's properties to JSON (asynchronous way). |