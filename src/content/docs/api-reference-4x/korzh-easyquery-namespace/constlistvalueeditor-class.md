---
title: ConstListValueEditor class
slug: api-reference-4x/korzh-easyquery-namespace/constlistvalueeditor-class
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
| `String` | TypeName | Gets the name of the value editor type. | 
| `ConstValueList` | Values | Gets the list of available values. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `ConstValueList` | CreateValueList() | Creates the value list. | 
| `void` | LoadContentFromXmlReader(`XmlReader` reader) | Loads the content of value editor from XML reader. | 
| `void` | SaveContentToJsonDict(`JsonDict` dict) | Saves the content of value editor to IDictionary object (for JSON serialization). | 
| `void` | SaveContentToXmlWriter(`XmlWriter` writer) | Saves editor parameters to XML. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. | 
| `String` | STypeName | Gets the name of the value editor type for current class. |
