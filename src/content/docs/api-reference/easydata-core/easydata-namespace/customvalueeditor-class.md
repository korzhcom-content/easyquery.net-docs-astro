---
title: CustomValueEditor class
slug: api-reference/easydata-core/easydata-namespace/customvalueeditor-class
sidebar:
  order: 100
---

Represents custom (user defined) value editor.
```csharp
public class EasyData.CustomValueEditor
    : ValueEditor

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| CustomValueEditor() | `void` | Initializes a new instance of the [EasyData.CustomValueEditor](///easyquery/docs/api-reference/easydata-core/easydata-namespace/customvalueeditor-class) class. | 
| CustomValueEditor(`string` tag) | `void` | Initializes a new instance of the [EasyData.CustomValueEditor](///easyquery/docs/api-reference/easydata-core/easydata-namespace/customvalueeditor-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Data | `string` | Gets or sets the data assigned with the editor. | 
| DefaultText | `string` | Gets or sets the default text. | 
| DefaultValue | `string` | Gets or sets the default value. | 
| Tag | `string` | Gets the name of the value editor type. | 
| XmlDefinition | `string` | Gets the XML definition of value editor. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one editor's property from JSON (asynchronous way). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes the content of the "CUSTOM" value editor to JSON (asynchronous way). | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| STypeCaption | `string` | Gets the full name of the value editor class type. |
