---
title: CustomValueEditor class
slug: api-reference-4x/korzh-easyquery-namespace/customvalueeditor-class
sidebar:
  order: 100
---

Represents custom (user defined) value editor.
```csharp
public class Korzh.EasyQuery.CustomValueEditor
    : ValueEditor

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Data | Gets or sets the data assigned with the editor. | 
| `String` | DefaultText | Gets or sets the default text. | 
| `String` | DefaultValue | Gets or sets the default value. | 
| `String` | TypeName | Gets the name of the value editor type. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | LoadAttribute(`String` attrName, `String` attrValue) | Loads one attribute from XML reader. | 
| `void` | LoadContentFromXmlReader(`XmlReader` reader) | Loads the content of value editor from XML reader. | 
| `void` | SaveContentToJsonDict(`JsonDict` dict) | Saves the content of value editor to IDictionary object (for JSON serialization). | 
| `void` | SaveContentToXmlWriter(`XmlWriter` writer) | Saves editor parameters to XML. | 
| `void` | SetTypeName(`String` typeName) | Sets the name of the value editor's type. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. | 
| `String` | STypeName | Gets the name of the value editor class type. |
