---
title: ValueEditorsList class
slug: api-reference-4x/korzh-easyquery-namespace/valueeditorslist-class
---


Represents list of value editors
```csharp
public class Korzh.EasyQuery.ValueEditorsList
    : Collection<ValueEditor>, IList<ValueEditor>, ICollection<ValueEditor>, IEnumerable<ValueEditor>, IEnumerable, IList, ICollection, IReadOnlyList<ValueEditor>, IReadOnlyCollection<ValueEditor>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `ValueEditor` | FindByID(`String` editorId) | Finds the valueeditor by ID. | 
| `Int32` | IndexByID(`String` editorId) | Find valueeditor index by ID. | 
| `String` | NormalizeId(`String` id) |  | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves to XML writer. |