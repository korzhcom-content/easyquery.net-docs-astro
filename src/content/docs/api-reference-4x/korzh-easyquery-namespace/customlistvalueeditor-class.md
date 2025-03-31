---
title: CustomListValueEditor class
slug: api-reference-4x/korzh-easyquery-namespace/customlistvalueeditor-class
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
| `String` | TypeName | Gets the name of the value editor type. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | LoadAttribute(`String` attrName, `String` attrValue) | Loads one attribute from XML reader. | 
| `void` | SaveAttributesToXmlWriter(`XmlWriter` writer) | Saves the content of value editor to XML writer. | 
| `void` | SaveContentToJsonDict(`JsonDict` dict) | Saves the content of value editor to JsonDict object (for JSON serialization). | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. | 
| `String` | STypeName | Gets the name of the value editor class type. |