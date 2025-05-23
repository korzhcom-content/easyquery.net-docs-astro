---
title: OperandList class
slug: api-reference-5x/korzh-easyquery-namespace/operandlist-class
sidebar:
  order: 100
---

Represents list of operands.
```csharp
public class Korzh.EasyQuery.OperandList
    : Collection<Operand>, IList<Operand>, ICollection<Operand>, IEnumerable<Operand>, IEnumerable, IList, ICollection, IReadOnlyList<Operand>, IReadOnlyCollection<Operand>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DataModel` | Model | Gets the model. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | InsertItem(`Int32` index, `Operand` item) | Inserts an element into the `System.Collections.ObjectModel.Collection'1` at the specified index. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads operand list form XML. | 
| `void` | ReadFromJson(`JsonReader` reader) | Reads the list of operands from JSON. | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Reads the list of operands from JSON (asynchronous way). | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves operand list to XML. | 
| `void` | WriteToJson(`JsonWriter` writer) | Writes the list of operands to JSON. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer) | Writes the list of operands to JSON (asynchronous way). |
