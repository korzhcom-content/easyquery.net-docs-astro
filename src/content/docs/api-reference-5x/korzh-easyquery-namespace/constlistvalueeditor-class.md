---
title: ConstListValueEditor class
slug: api-reference-5x/korzh-easyquery-namespace/constlistvalueeditor-class
sidebar:
  order: 100
---

Represents the constant list value editor.
```csharp
public class Korzh.EasyQuery.ConstListValueEditor
    : ListValueEditor

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | DefaultText | Gets or sets the default text. | 
| `String` | DefaultValue | Gets or sets the default value. | 
| `String` | Tag | Gets the name of the value editor type. | 
| `ConstValueList` | Values | Gets the list of available values. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `ConstValueList` | CreateValueList() | Creates the value list. | 
| `void` | LoadContentFromXmlReader(`XmlReader` reader) | Loads the content of value editor from XML reader. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one editor's property from JSON. | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one editor's property from JSON. | 
| `void` | SaveContentToXmlWriter(`XmlWriter` writer) | Saves editor parameters to XML. | 
| `void` | WritePropertiesToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of the "CONST LIST" value editor to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of the "CONST LIST" value editor to JSON (asynchronous way). | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. |
