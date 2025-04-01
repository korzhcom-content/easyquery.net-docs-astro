---
title: AggrFuncExpr class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfuncexpr-class
sidebar:
  order: 100
---

Represents an expression which is a result of applying some functions to other expressions
```csharp
public class Korzh.EasyQuery.AggrFuncExpr
    : EqExpression

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| AggrFuncExpr([DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` funcId, [EqExpression](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) argExpr) | `void` | Initializes a new instance of the [Korzh.EasyQuery.AggrFuncExpr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfuncexpr-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| _function | [AggrFunction](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfunction-class) | The function of [Korzh.EasyQuery.AggrFuncExpr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfuncexpr-class) | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Argument | [EqExpression](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | Gets or sets the main argument. | 
| Attribute | [EntityAttr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Gets or sets the attribute. | 
| CustomFunc | `string` | Gets the custom func for expression if defined | 
| DataType | [DataType](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the data type. | 
| Function | [AggrFunction](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/aggrfunction-class) | Gets or sets the function. | 
| IsAggregate | `bool` | gets a value indicating whether this expression is aggregate. | 
| IsDistinct | `bool` | Gets or sets a value indicating whether this `AggrFuncExpr` has "DISTINCT" attribute. | 
| Tag | `int` | Get the expression's tag - a special identifier that is used to distinguish the type of the expression . | 
| Text | `string` | Gets the expression text. | 
| Value | `string` | Gets or sets the expression value. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AssignExpr([EqExpression](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr) | `void` | Assigns some expression to this one.  For AggrFuncExpr class this method assigns the Expression object passed in parameter to Argument property | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads expression from XML. | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one property from JSON (asynchronous way). | 
| SaveToXmlWriter(`XmlWriter` writer, `string` tagName) | `void` | Saves expression to XML writer. | 
| SetContentSilent(`string` val, `string` txt) | `void` | Sets the content of the expression silently (without calling ContentChanged event). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Writes one property to JSON (asynchronous way). |
