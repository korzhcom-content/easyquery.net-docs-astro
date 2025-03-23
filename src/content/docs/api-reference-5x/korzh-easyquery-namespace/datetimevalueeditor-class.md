---
title: DateTimeValueEditor class
slug: api-reference-5x/korzh-easyquery-namespace/datetimevalueeditor-class
---


Represents the value editor for date and/or time.
```csharp
public class Korzh.EasyQuery.DateTimeValueEditor
    : ValueEditor, IDefaultValuesStorage

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | DefaultText | Gets or sets the default text. | 
| `String` | DefaultValue | Gets or sets the default value. | 
| `ConstValueList` | DefaultValues | Gets the list of default values | 
| `DataType` | SubType | Gets or sets the type of data (Date, Time or DateTime). | 
| `String` | Tag | Gets the name of the value editor type. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | LoadAttribute(`String` attrName, `String` attrValue) | Loads one attribute from XML reader. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one editor's property from JSON. | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one editor's property from JSON (asynchronous way). | 
| `void` | SaveAttributesToXmlWriter(`XmlWriter` writer) | Saves all attributes of value editor's node to XML writer. | 
| `void` | WritePropertiesToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of the date/time value editor to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of the date/time value editor to JSON (asynchronous way). | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. |