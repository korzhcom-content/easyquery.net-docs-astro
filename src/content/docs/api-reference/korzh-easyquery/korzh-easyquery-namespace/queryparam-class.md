---
title: QueryParam class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class
---
Represents one parameter in parametrized query statement
```csharp
public class Korzh.EasyQuery.QueryParam

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryParam() | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryParam](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) class. | 
| QueryParam([QueryParam](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) src) | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryParam](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) class. | 
| QueryParam(`string` id, [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) dataType, `string` value, `bool` generated) | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryParam](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Caption | `string` | Gets or sets the caption. | 
| DataType | [DataType](/api-reference/easydata-core/easydata-namespace/datatype-enum) | Type of the parameter | 
| EditorId | `string` | Gets or sets the default value editor for this parameter | 
| Id | `string` | Parameter ID | 
| IsGenerated | `bool` | Gets a value indicating whether this parameter is generated. | 
| Value | `string` | Parameter value | 
| ValueAsObject | `object` | Returns the value of parameter as object (according to `DataType`). | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CopyFrom([QueryParam](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) param) | `void` | Copies all properties of query parameter to another parameter. |