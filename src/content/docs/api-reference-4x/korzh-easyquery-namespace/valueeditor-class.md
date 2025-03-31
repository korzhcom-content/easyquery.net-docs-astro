---
title: ValueEditor class
slug: api-reference-4x/korzh-easyquery-namespace/valueeditor-class
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
| `Boolean` | IsDefault | Gets or sets a value indicating whether this instance is default. | 
| `DataType` | ResultType | Gets or sets the data type of edited values | 
| `String` | TypeName | Gets the name of the value editor type. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CheckInModel(`DataModel` model) | Check current editor in model and adds it into Editors list if necessary. | 
| `Boolean` | LoadAttribute(`String` attrName, `String` attrValue) | Loads one attribute from XML reader. | 
| `void` | LoadContentFromXmlReader(`XmlReader` reader) | Loads the content of value editor from XML reader. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads from XML node. | 
| `void` | SaveAttributesToXmlWriter(`XmlWriter` writer) | Saves all attributes of value editor's node to XML writer. | 
| `void` | SaveContentToJsonDict(`JsonDict` dict) | Saves the content of value editor to IDictionary object (for JSON serialization). | 
| `void` | SaveContentToXmlWriter(`XmlWriter` writer) | Saves the content of value editor to XML writer. | 
| `JsonDict` | SaveToJsonDict() | Saves the content of value editor to IDictionary object (for JSON serialization). | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves editor parameters to XML. | 


### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Dictionary<String, IValueEditorCreator>` | Creators |  | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. | 
| `String` | STypeName | Gets the name of the value editor class type. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `ValueEditor` | Create(`String` type) | Creates the value editor instance of specified type. | 
| `Int32` | GetNextID() | Gets the next value editor identifier. | 
| `Boolean` | RegisterType(`String` type, `IValueEditorCreator` creator) | Registers new type of value editor. |