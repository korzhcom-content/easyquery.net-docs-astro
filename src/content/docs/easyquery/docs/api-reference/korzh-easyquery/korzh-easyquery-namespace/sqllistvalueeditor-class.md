---
title: SqlListValueEditor class
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/sqllistvalueeditor-class
---


Represents the list [EasyData.ValueEditor](/api-reference/easydata-core/easydata-namespace/valueeditor-class).
```csharp
public class Korzh.EasyQuery.SqlListValueEditor
    : ListValueEditor

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| SqlListValueEditor(`string` id, `string` sql) | `void` | Initializes a new instance of the [Korzh.EasyQuery.SqlListValueEditor](/api-reference/korzh-easyquery/korzh-easyquery-namespace/sqllistvalueeditor-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultText | `string` | Gets or sets the default text. | 
| DefaultValue | `string` | Gets or sets the default value. | 
| IdBase | `string` | Gets the base part of identifier. | 
| ResultType | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the data type of edited values | 
| SQL | `string` | Gets or sets the text of SQL SELECT statement. | 
| SQLCount | `string` | Gets or sets the text of SQLCount SELECT statement. | 
| Tag | `string` | Gets the name of the value editor type. | 
| XmlDefinition | `string` | Gets the XML definition of value editor. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one editor's property from JSON. | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes the content of the "SQL LIST" value editor to JSON (asynchronous way). | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| STypeCaption | `string` | Gets the full name of the value editor class type. |