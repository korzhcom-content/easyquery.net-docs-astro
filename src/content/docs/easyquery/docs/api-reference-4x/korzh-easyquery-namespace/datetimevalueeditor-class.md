---
title: DateTimeValueEditor class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-namespace/datetimevalueeditor-class
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
| `String` | TypeName | Gets the name of the value editor type. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | LoadAttribute(`String` attrName, `String` attrValue) | Loads one attribute from XML reader. | 
| `void` | SaveAttributesToXmlWriter(`XmlWriter` writer) | Saves all attributes of value editor's node to XML writer. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. | 
| `String` | STypeName | Gets the name of the value editor class type. |