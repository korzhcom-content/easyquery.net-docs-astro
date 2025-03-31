---
title: OperandList class
slug: api-reference-4x/korzh-easyquery-namespace/operandlist-class
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
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves operand list to XML. |