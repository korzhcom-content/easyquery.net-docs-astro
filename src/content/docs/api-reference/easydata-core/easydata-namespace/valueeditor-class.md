---
title: ValueEditor class
slug: api-reference/easydata-core/easydata-namespace/valueeditor-class
---
Represents an abstract value editor.
```csharp
public abstract class EasyData.ValueEditor

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ValueEditor() | `void` | Initializes a new instance of the [EasyData.ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) class. | 
| ValueEditor(`string` id) | `void` | Initializes a new instance of the [EasyData.ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultText | `string` | Gets or sets the default text. | 
| DefaultValue | `string` | Gets or sets the default value. | 
| Id | `string` | Gets or sets the ID of this value editor instance. | 
| IdBase | `string` | Gets the base part of identifier. | 
| IsDefault | `bool` | Gets or sets a value indicating whether this editor is one of the default ones. | 
| Model | [MetaData](/api-reference/easydata-core/easydata-namespace/metadata-class) | Gets the model which this editor belongs to | 
| ResultType | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the data type of edited values | 
| Tag | `string` | Gets the name of the value editor type. | 
| XmlDefinition | `string` | Gets the XML definition of value editor. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CheckInModel([MetaData](/api-reference/easydata-core/easydata-namespace/metadata-class) model) | `void` | Check current editor in model and adds it into Editors list if necessary. | 
| ReadContentFromJsonAsync(`JsonReader` reader) | `Task` | Reads the content of the value editor from JSON (asynchronous way). | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one editor's property from JSON (asynchronous way). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes the content of the value editor to JSON (asynchronous way). | 
| WriteToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes the value editor to JSON (asynchronous way). | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| STypeCaption | `string` | Gets the full name of the value editor class type. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Create(`string` tag) | [ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class) | Creates a value editor instance of the specified type. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task`&lt;[ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class)&gt; | Creates a value editor based on the value of "tag" property and reads the content of the newly created editor from JSON (asynchronous way). | 
| RegisterCreator([IValueEditorCreator](/api-reference/easydata-core/easydata-namespace/ivalueeditorcreator-interface) creator) | `bool` | Registers new type of value editor. |