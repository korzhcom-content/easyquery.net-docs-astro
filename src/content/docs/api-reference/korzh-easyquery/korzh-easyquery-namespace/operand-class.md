---
title: Operand class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class
sidebar:
  order: 100
---

Represents one operand in some operator's expression
```csharp
public class Korzh.EasyQuery.Operand

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| Operand([DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [DataType](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, [DataKind](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) kind, [ValueEditor](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/valueeditor-class) editor) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Operand](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) class. | 
| Operand([Operand](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) source) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Operand](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) class. | 
| Operand([DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Operand](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DataType | [DataType](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the type of the data. | 
| DefaultText | `string` | Gets the text for default operand value. | 
| DefaultValue | `string` | Gets or sets the default value for this operand. | 
| Editor | [ValueEditor](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/valueeditor-class) | Gets or sets the value editor associated with this operand.  If there is no such editor in the model, it will be added on Set. | 
| Kind | [DataKind](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) | Gets or sets the kind of operand (scalar, list, etc) | 
| Model | [DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets or sets the model. | 
| Name | `string` | Gets or sets the name of operand. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads all operand's properties from JSON (asynchronous way). | 
| SetEditorWithoutChecking([ValueEditor](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/valueeditor-class) editor) | `void` | Sets editor without adding it to model. | 
| ToString() | `string` | Returns a `System.String` that represents this instance. | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Writes operand's content to JSON (asynchronous way). |
