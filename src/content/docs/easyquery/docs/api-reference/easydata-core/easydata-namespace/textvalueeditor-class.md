---
title: TextValueEditor class
slug: easyquery/docs/api-reference/easydata-core/easydata-namespace/textvalueeditor-class
---


Represents the simpliest value editor.
```csharp
public class EasyData.TextValueEditor
    : ValueEditor

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TextValueEditor(`string` id, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) type = 1) | `void` | Initializes a new instance of the [EasyData.TextValueEditor](/api-reference/easydata-core/easydata-namespace/textvalueeditor-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultText | `string` | Gets or sets the default text. | 
| DefaultValue | `string` | Gets or sets the default value. | 
| IdBase | `string` | Gets the base part of identifier. | 
| Multiline | `bool` | Gets or sets a value indicating whether text editor should be multiline. | 
| ResultType | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the data type of edited values | 
| Tag | `string` | Gets the tag of the value editor. | 
| XmlDefinition | `string` | Gets the XML definition of value editor. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one editor's property from JSON (asynchronous way). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes the content of the text value editor to JSON (asynchronous way). | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| STypeCaption | `string` | Gets the full name of the value editor class type. |