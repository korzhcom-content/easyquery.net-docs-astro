---
title: OperatorList class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-namespace/operatorlist-class
---


Represents list of operators.
```csharp
public class Korzh.EasyQuery.OperatorList
    : Collection<Operator>, IList<Operator>, ICollection<Operator>, IEnumerable<Operator>, IEnumerable, IList, ICollection, IReadOnlyList<Operator>, IReadOnlyCollection<Operator>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddByIDs(`DataModel` model, `String` ids) | Adds opereators by theirs IDs stored in comma-delimited string. | 
| `void` | CopyFrom(`OperatorList` operators) | Copies operators from another list. | 
| `Operator` | FindByID(`String` OpID) | Finds the operator by ID. | 
| `Int32` | IndexByID(`String` OpID) | Find operator list index by ID. | 
| `void` | RemoveByIDs(`DataModel` model, `String` ids) | Removes opereators by theirs IDs stored in comma-delimited string. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves to XML writer. |