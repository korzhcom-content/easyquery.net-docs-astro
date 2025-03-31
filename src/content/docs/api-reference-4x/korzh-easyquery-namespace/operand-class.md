---
title: Operand class
slug: api-reference-4x/korzh-easyquery-namespace/operand-class
---

Represents one operand in some operator's expression
```csharp
public class Korzh.EasyQuery.Operand

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | _defaultValue |  | 
| `Int32` | index | The index of operand (starts from 1) | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DataType` | DataType | Gets or sets the type of the data. | 
| `String` | DefaultText | Gets the text for default operand value. | 
| `String` | DefaultValue | Gets or sets the default value for this operand. | 
| `ValueEditor` | Editor | Gets or sets the value editor associated with this operand. | 
| `DataKind` | Kind | Gets or sets the kind of operand (scalar, list, etc) | 
| `DataModel` | Model | Gets or sets the model. | 
| `String` | Name | Gets or sets the name of operand. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads operand properties from XML reader. | 
| `void` | LoadNodes(`XmlReader` reader) | Loads the nodes. | 
| `JsonDict` | SaveToJsonDict() | Saves to dictionary object (for serialization to JSON) | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves operand content to to XML writer. | 
| `String` | ToString() | Returns a `System.String` that represents this instance. |