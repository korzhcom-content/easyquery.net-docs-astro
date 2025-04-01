---
title: OperandList class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/operandlist-class
sidebar:
  order: 100
---

Represents list of operands.
```csharp
public class Korzh.EasyQuery.OperandList
    : Collection<Operand>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| OperandList([DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Initializes a new instance of the [Korzh.EasyQuery.OperandList](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operandlist-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Model | [DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets the model. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| InsertItem(`int` index, [Operand](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) item) | `void` | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads the list of operands from JSON (asynchronous way). | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Writes the list of operands to JSON (asynchronous way). |
