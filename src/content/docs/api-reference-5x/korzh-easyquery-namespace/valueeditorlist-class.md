---
title: ValueEditorList class
slug: api-reference-5x/korzh-easyquery-namespace/valueeditorlist-class
---

Represents list of value editors
```csharp
public class Korzh.EasyQuery.ValueEditorList
    : Collection<ValueEditor>, IList<ValueEditor>, ICollection<ValueEditor>, IEnumerable<ValueEditor>, IEnumerable, IList, ICollection, IReadOnlyList<ValueEditor>, IReadOnlyCollection<ValueEditor>

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `ValueEditor` | FindByID(`String` editorId) | Finds the valueeditor by ID. | 
| `Int32` | IndexByID(`String` editorId) | Find valueeditor index by ID. | 
| `String` | NormalizeId(`String` id) |  | 
| `void` | ReadFromJson(`JsonReader` reader) | Reads the list of value editors from JSON. | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Reads the list of value editors from JSON (asynchronous way). | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves to XML writer. | 
| `void` | WriteToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions, `Boolean` includeDefaults = False) | Writes the list of the value editors to JSON. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions, `Boolean` includeDefaults = False) | Writes the list of the value editors to JSON (asynchronous way). |