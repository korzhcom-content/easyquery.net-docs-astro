---
title: SqlListValueEditor class
slug: api-reference-4x/korzh-easyquery-namespace/sqllistvalueeditor-class
---

Represents the list [Korzh.EasyQuery.ValueEditor](//easyquery/docs/api-reference-4x/korzh-easyquery-namespace/valueeditor-class).
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
| `String` | TypeName | Gets the name of the value editor type. | 
| `String` | XmlDefinition | Gets the XML definition of value editor. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | LoadContentFromXmlReader(`XmlReader` reader) | Loads the content of value editor from XML reader. | 
| `void` | SaveContentToJsonDict(`JsonDict` dict) | Saves the content of value editor to IDictionary object (for JSON serialization). | 
| `void` | SaveContentToXmlWriter(`XmlWriter` writer) | Saves editor parameters to XML. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeCaption | Gets the full name of the value editor class type. | 
| `String` | STypeName | Gets the name of the value editor type for current class. |