---
title: ValueEditorList class
slug: api-reference/easydata-core/easydata-namespace/valueeditorlist-class
---
Represents list of value editors
```csharp
public class EasyData.ValueEditorList
    : Collection<ValueEditor>

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ValueEditorList() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Add([ValueEditor](api-reference/easydata-core/easydata-namespace/valueeditor-class) editor) | `void` |  | 
| ClearItems() | `void` |  | 
| FindById(`string` editorId) | [ValueEditor](api-reference/easydata-core/easydata-namespace/valueeditor-class) | Finds the valueeditor by ID. | 
| IndexById(`string` editorId) | `int` | Find valueeditor index by ID. | 
| InsertItem(`int` index, [ValueEditor](api-reference/easydata-core/easydata-namespace/valueeditor-class) item) | `void` |  | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads the list of value editors from JSON (asynchronous way). | 
| RemoveItem(`int` index) | `void` |  | 
| WriteToJsonAsync(`JsonWriter` writer, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions, `bool` includeDefaults = False) | `Task` | Writes the list of the value editors to JSON (asynchronous way). |