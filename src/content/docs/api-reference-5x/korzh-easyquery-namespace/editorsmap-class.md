---
title: EditorsMap class
slug: api-reference-5x/korzh-easyquery-namespace/editorsmap-class
---


Represents editors map - the list which defines what editor will be used for a particular data type and operator.
```csharp
public class Korzh.EasyQuery.EditorsMap
    : Collection<ValueEditorEntry>, IList<ValueEditorEntry>, ICollection<ValueEditorEntry>, IEnumerable<ValueEditorEntry>, IEnumerable, IList, ICollection, IReadOnlyList<ValueEditorEntry>, IReadOnlyCollection<ValueEditorEntry>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddEditor(`ValueEditor` editor) | Adds the editor with empty list of operators | 
| `ValueEditor` | FindEditor(`Operator` op, `DataType` type) | Finds the editor by operator and data type. |