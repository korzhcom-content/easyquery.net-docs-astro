---
title: TextValueEditor class
slug: api-reference-4x/korzh-easyquery-namespace/textvalueeditor-class
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
| `String` | TypeName | Gets the name of the value editor type. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | LoadAttribute(`String` attrName, `String` attrValue) | Loads one attribute from XML reader. | 
| `void` | LoadContentFromXmlReader(`XmlReader` reader) | Loads the content of value editor from XML reader. | 
| `void` | SaveAttributesToXmlWriter(`XmlWriter` writer) | Saves all attributes of value editor's node to XML writer. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. | 
| `String` | STypeName | Gets the name of the value editor class type. |