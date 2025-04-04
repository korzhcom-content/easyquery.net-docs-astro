---
title: SqlListValueEditor class
slug: api-reference-5x/korzh-easyquery-namespace/sqllistvalueeditor-class
sidebar:
  order: 100
---

Represents the list [Korzh.EasyQuery.ValueEditor](/easyquery/docs/api-reference-5x/korzh-easyquery-namespace/valueeditor-class).
```csharp
public class Korzh.EasyQuery.SqlListValueEditor
    : ListValueEditor

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | DefaultText | Gets or sets the default text. | 
| `String` | DefaultValue | Gets or sets the default value. | 
| `String` | IDBase | Gets the base part of identifier. | 
| `DataType` | ResultType | Gets or sets the data type of edited values | 
| `String` | SQL | Gets or sets the text of SQL SELECT statement. | 
| `String` | SQLCount | Gets or sets the text of SQLCount SELECT statement. | 
| `String` | Tag | Gets the name of the value editor type. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | LoadContentFromXmlReader(`XmlReader` reader) | Loads the content of value editor from XML reader. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one editor's property from JSON. | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one editor's property from JSON. | 
| `void` | SaveContentToXmlWriter(`XmlWriter` writer) | Saves editor parameters to XML. | 
| `void` | WritePropertiesToJson(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of the "SQL LIST" value editor to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer, `ModelReadWriteOptions` rwOptions) | Writes the content of the "SQL LIST" value editor to JSON (asynchronous way). | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. |
