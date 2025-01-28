---
title: SubQueryValueEditor class
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery namespace/subqueryvalueeditor-class
---


Represents the subquery value editor.
```csharp
public class Korzh.EasyQuery.SubQueryValueEditor
    : ValueEditor

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | DefaultText | Gets or sets the default text. | 
| `String` | DefaultValue | Gets or sets the default value. | 
| `String` | IDBase | Gets the base part of identifier. | 
| `String` | QueryXml | Gets the query in xml form. | 
| `String` | TypeName | Gets the name of the value editor type. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | LoadContentFromXmlReader(`XmlReader` reader) | Loads the content of value editor from XML reader. | 
| `void` | SaveContentToJsonDict(`JsonDict` dict) | Saves the content of value editor to IDictionary object (for JSON serialization). | 
| `void` | SaveContentToXmlWriter(`XmlWriter` writer) | Saves the content of value editor to XML writer. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. | 
| `String` | STypeName | Gets the name of the value editor type for current class. |