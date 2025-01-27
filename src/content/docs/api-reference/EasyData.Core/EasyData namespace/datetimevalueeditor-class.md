---
title: DateTimeValueEditor class
slug: api-reference/EasyData.Core/EasyData namespace/datetimevalueeditor-class
---


Represents the value editor for date and/or time.
```csharp
public class EasyData.DateTimeValueEditor
    : ValueEditor, IDefaultValuesStorage

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DateTimeValueEditor() | `void` | Initializes a new instance of the [EasyData.DateTimeValueEditor](/api-reference/easydata-core/easydata-namespace/datetimevalueeditor-class) class. | 
| DateTimeValueEditor(`string` id, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) subType) | `void` | Initializes a new instance of the [EasyData.DateTimeValueEditor](/api-reference/easydata-core/easydata-namespace/datetimevalueeditor-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultText | `string` | Gets or sets the default text. | 
| DefaultValue | `string` | Gets or sets the default value. | 
| DefaultValues | [ConstValueList](/api-reference/easydata-core/easydata-namespace/constvaluelist-class) | Gets the list of default values | 
| SubType | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the type of data (Date, Time or DateTime). | 
| Tag | `string` | Gets the name of the value editor type. | 
| XmlDefinition | `string` | Gets the XML definition of value editor. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one editor's property from JSON (asynchronous way). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes the content of the date/time value editor to JSON (asynchronous way). | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| STypeCaption | `string` | Gets the full name of the value editor class type. |