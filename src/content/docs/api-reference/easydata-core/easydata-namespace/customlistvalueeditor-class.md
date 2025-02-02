---
title: CustomListValueEditor class
slug: api-reference/easydata-core/easydata-namespace/customlistvalueeditor-class
---


Represents custom (user-defined) list value editor
```csharp
public class EasyData.CustomListValueEditor
    : ListValueEditor

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| CustomListValueEditor(`string` id, `string` listName, `string` controlType = MENU) | `void` | Initializes a new instance of the [EasyData.CustomListValueEditor](/api-reference/easydata-core/easydata-namespace/customlistvalueeditor-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultText | `string` | Gets or sets the default text. | 
| DefaultValue | `string` | Gets or sets the default value. | 
| IdBase | `string` | Gets the base part of identifier. | 
| ListName | `string` | Gets or sets the name of the list. | 
| ResultType | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the data type of edited values | 
| Tag | `string` | Gets the value editor's tag. | 
| XmlDefinition | `string` | Gets the XML definition of value editor. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one editor's property from JSON (asynchronous way). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes the content of the custom value editor to JSON (asynchronous way). | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| STypeCaption | `string` | Gets the full name of the value editor class type. |