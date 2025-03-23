---
title: ListValueEditor class
slug: api-reference/easydata-core/easydata-namespace/listvalueeditor-class
---


Represents base abstract type of list value editors.
```csharp
public abstract class EasyData.ListValueEditor
    : ValueEditor

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ListValueEditor() | `void` | Initializes a new instance of the [EasyData.ListValueEditor](/api-reference/easydata-core/easydata-namespace/listvalueeditor-class) class. | 
| ListValueEditor(`string` id) | `void` | Initializes a new instance of the [EasyData.ListValueEditor](/api-reference/easydata-core/easydata-namespace/listvalueeditor-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ControlType | `string` | Gets or sets the type of list control (MENU, LISTBOX, etc). | 
| ExtraParams | `Dictionary`&lt;`string`, `string`&gt; | Gets ExtraParams for this [EasyData.ListValueEditor](/api-reference/easydata-core/easydata-namespace/listvalueeditor-class). | 
| Multiselect | `bool` | Gets or sets a value indicating whether this [EasyData.ListValueEditor](/api-reference/easydata-core/easydata-namespace/listvalueeditor-class) allows to select several items. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one editor's property from JSON (asynchronous way). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes the content of the custom value editor to JSON (asynchronous way). |