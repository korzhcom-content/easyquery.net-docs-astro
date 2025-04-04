---
title: ConditionsStore class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/conditionsstore-class
sidebar:
  order: 100
---

Represents a list of conditions linked to some Query object
```csharp
public class Korzh.EasyQuery.ConditionsStore
    : ConditionList

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionsStore([Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) parent) | `void` | Initializes a new instance of the [Korzh.EasyQuery.ConditionsStore](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/conditionsstore-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Query | [Query](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets the Query object. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| BeginUpdate() | `void` | Begins the update process. | 
| ClearItems() | `void` | Removes all elements from the `System.Collections.ObjectModel.Collection'1`. | 
| EndUpdate() | `void` | Ends the update process. | 
| GetNewID() | `int` | Gets the new ID. | 
| InsertItem(`int` index, [Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| OnAdded([Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) condition, `int` index) | `void` | Called when [added]. | 
| OnListChange() | `void` | Called when condition list is changed. | 
| OnRemoved([Condition](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) condition) | `void` | Called on condition removal. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads the list of conditions from JSON (asynchronous way). | 
| RemoveItem(`int` index) | `void` | Removes the element at the specified index of the `System.Collections.ObjectModel.Collection'1`. | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Writes the list of conditions to JSON (asynchronous way). |
