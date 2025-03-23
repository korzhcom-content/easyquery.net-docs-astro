---
title: ParentColumnExpr class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/parentcolumnexpr-class
---


Represents a parent-column expression.
```csharp
public class Korzh.EasyQuery.ParentColumnExpr
    : EqExpression

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ParentColumnExpr([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Initializes a new instance of the [Korzh.EasyQuery.ParentColumnExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/parentcolumnexpr-class) class. | 
| ParentColumnExpr([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` columnId) | `void` | Initializes a new instance of the [Korzh.EasyQuery.ParentColumnExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/parentcolumnexpr-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DataType | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets the expression data type. | 
| Kind | [DataKind](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) | Gets the expression kind. | 
| Name | `string` | The expression name. | 
| Tag | `int` | The expression's tag | 
| Value | `string` | The parent column Id. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads expression from XML reader. | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one expression property from JSON (asynchronous way). | 
| SaveToXmlWriter(`XmlWriter` writer, `string` tagName) | `void` | Saves expression to XML writer. | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Writes all experssion properties to JSON (asynchronous way).  This method must be overriden in the descendant classes |