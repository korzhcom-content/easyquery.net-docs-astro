---
title: ConstListValueEditor class
slug: api-reference/easydata-core/easydata-namespace/constlistvalueeditor-class
sidebar:
  order: 100
---

Represents the constant list value editor.
```csharp
public class EasyData.ConstListValueEditor
    : ListValueEditor

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ConstListValueEditor(`string` id) | `void` | Initializes a new instance of the [EasyData.ConstListValueEditor](///easyquery/docs/api-reference/easydata-core/easydata-namespace/constlistvalueeditor-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultText | `string` | Gets or sets the default text. | 
| DefaultValue | `string` | Gets or sets the default value. | 
| Tag | `string` | Gets the name of the value editor type. | 
| Values | [ConstValueList](///easyquery/docs/api-reference/easydata-core/easydata-namespace/constvaluelist-class) | Gets the list of available values. | 
| XmlDefinition | `string` | Gets the XML definition of value editor. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CreateValueList() | [ConstValueList](///easyquery/docs/api-reference/easydata-core/easydata-namespace/constvaluelist-class) | Creates the value list. | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one editor's property from JSON. | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes the content of the "CONST LIST" value editor to JSON (asynchronous way). | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| STypeCaption | `string` | Gets the full name of the value editor class type. |
