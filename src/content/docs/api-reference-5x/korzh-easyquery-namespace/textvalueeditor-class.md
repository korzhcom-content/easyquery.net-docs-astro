---
title: TextValueEditor class
slug: api-reference-5x/korzh-easyquery-namespace/textvalueeditor-class
---


Represents the simpliest value editor.
```csharp
public class Korzh.EasyQuery.TextValueEditor
    : ValueEditor

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | DefaultText | Gets or sets the default text. | 
| `String` | DefaultValue | Gets or sets the default value. | 
| `String` | IDBase | Gets the base part of identifier. | 
| `Boolean` | Multiline | Gets or sets a value indicating whether text editor should be multiline. | 
| `DataType` | ResultType | Gets or sets the data type of edited values | 
| `String` | Tag | Gets the tag of the value editor. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | LoadAttribute(`String` attrName, `String` attrValue) | Loads one attribute from XML reader. | 
| `void` | LoadContentFromXmlReader(`XmlReader` reader) | Loads the content of value editor from XML reader. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one editor's property from JSON. | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one editor's property from JSON (asynchronous way). | 
| `void` | SaveAttributesToXmlWriter(`XmlWriter` writer) | Saves all attributes of value editor's node to XML writer. | 
| `void` | WritePropertiesToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of the text value editor to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of the text value editor to JSON (asynchronous way). | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. |