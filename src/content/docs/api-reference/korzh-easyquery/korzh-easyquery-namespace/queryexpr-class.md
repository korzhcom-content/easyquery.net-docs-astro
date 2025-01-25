---
title: QueryExpr class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/queryexpr-class
---
Represents a sub-query expression
```csharp
public class Korzh.EasyQuery.QueryExpr
    : EqExpression

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryExpr([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryExpr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryexpr-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DataType | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the data type. | 
| IsPlainSql | `bool` | Gets a value indicating whether this instance contains a plain SQL statement. | 
| Kind | [DataKind](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) | Gets the expression kind. | 
| Query | [Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets or sets the query. | 
| Tag | `int` | Get the expression's tag - a special identifier that is used to distinguish the type of the expression . | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads expression from `System.Xml.XmlReader` object. | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads the expression properties from JSON (asynchronous way). | 
| SaveToXmlWriter(`XmlWriter` writer, `string` tagName) | `void` | Saves expression to `System.Xml.XmlWriter` object. | 
| TagToOldClassName(`int` tag) | `string` | Converts the expression's tag value to the name of old expression class (like "CONST" or "ENTATTR"). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Writes expression properties to JSON (asynchronous way). |