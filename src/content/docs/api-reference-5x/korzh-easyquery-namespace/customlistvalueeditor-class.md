---
title: CustomListValueEditor class
slug: api-reference-5x/korzh-easyquery-namespace/customlistvalueeditor-class
sidebar:
  order: 100
---

Represents custom (user-defined) list value editor
```csharp
public class Korzh.EasyQuery.CustomListValueEditor
    : ListValueEditor

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | IDBase | Gets the base part of identifier. | 
| `String` | ListName | Gets or sets the name of the list. | 
| `DataType` | ResultType | Gets or sets the data type of edited values | 
| `String` | Tag | Gets the value editor's tag. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | LoadAttribute(`String` attrName, `String` attrValue) | Loads one attribute from XML reader. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one editor's property from JSON. | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one editor's property from JSON (asynchronous way). | 
| `void` | SaveAttributesToXmlWriter(`XmlWriter` writer) | Saves the content of value editor to XML writer. | 
| `void` | WritePropertiesToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of the custom value editor to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of the custom value editor to JSON (asynchronous way). | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. |
