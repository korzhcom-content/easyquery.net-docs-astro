---
title: ValueEditor class
slug: api-reference-5x/korzh-easyquery-namespace/valueeditor-class
---


Represents an abstract value editor.
```csharp
public class Korzh.EasyQuery.ValueEditor

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | DefaultText | Gets or sets the default text. | 
| `String` | DefaultValue | Gets or sets the default value. | 
| `String` | Id | Gets or sets the ID of this value editor instance. | 
| `String` | IDBase | Gets the base part of identifier. | 
| `Boolean` | IsDefault | Gets or sets a value indicating whether this editor is one of the default ones. | 
| `DataModel` | Model | Gets the model which this editor belongs to | 
| `DataType` | ResultType | Gets or sets the data type of edited values | 
| `String` | Tag | Gets the name of the value editor type. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CheckInModel(`DataModel` model) | Check current editor in model and adds it into Editors list if necessary. | 
| `Boolean` | LoadAttribute(`String` attrName, `String` attrValue) | Loads one attribute from XML reader. | 
| `void` | LoadContentFromXmlReader(`XmlReader` reader) | Loads the content of value editor from XML reader. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads from XML node. | 
| `void` | ReadContentFromJson(`JsonReader` reader) | Reads the content of the value editor from JSON. | 
| `Task` | ReadContentFromJsonAsync(`JsonReader` reader) | Reads the content of the value editor from JSON (asynchronous way). | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one editor's property from JSON. | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one editor's property from JSON (asynchronous way). | 
| `void` | SaveAttributesToXmlWriter(`XmlWriter` writer) | Saves all attributes of value editor's node to XML writer. | 
| `void` | SaveContentToXmlWriter(`XmlWriter` writer) | Saves the content of value editor to XML writer. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves editor parameters to XML. | 
| `void` | WritePropertiesToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of the value editor to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of the value editor to JSON (asynchronous way). | 
| `void` | WriteToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the value editor to JSON. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the value editor to JSON (asynchronous way). | 


### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `IList<IValueEditorCreator>` | Creators |  | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `ValueEditor` | Create(`String` tag) | Creates a value editor instance of the specified type. | 
| `Int32` | GetNextID() | Gets the next value editor identifier. | 
| `ValueEditor` | ReadFromJson(`JsonReader` reader) | Creates a value editor based on the value of "tag" property and reads the content of the newly created editor from JSON. | 
| `Task<ValueEditor>` | ReadFromJsonAsync(`JsonReader` reader) | Creates a value editor based on the value of "tag" property and reads the content of the newly created editor from JSON (asynchronous way). | 
| `Boolean` | RegisterCreator(`IValueEditorCreator` creator) | Registers new type of value editor. |