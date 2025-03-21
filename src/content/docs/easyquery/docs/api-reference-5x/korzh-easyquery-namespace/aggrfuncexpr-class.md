---
title: AggrFuncExpr class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-namespace/aggrfuncexpr-class
---


Represents an expression which is a result of applying some functions to other expressions
```csharp
public class Korzh.EasyQuery.AggrFuncExpr
    : EqExpression

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `AggrFunction` | function | The function of [Korzh.EasyQuery.AggrFuncExpr](/api-reference-5x/korzh-easyquery-namespace/aggrfuncexpr-class) | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `EqExpression` | Argument | Gets or sets the main argument. | 
| `EntityAttr` | Attribute | Gets or sets the attribute. | 
| `String` | CustomFunc | Gets the custom func for expression if defined | 
| `DataType` | DataType | Gets or sets the data type. | 
| `Boolean` | Distinct | Gets or sets a value indicating whether this `AggrFuncExpr` has "DISTINCT" attribute. | 
| `AggrFunction` | Function | Gets or sets the function. | 
| `Boolean` | IsAggregate | gets a value indicating whether this expression is aggregate. | 
| `Int32` | Tag | Get the expression's tag - a special identifier that is used to distinguish the type of the expression . | 
| `String` | Text | Gets the expression text. | 
| `String` | Value | Gets or sets the expression value. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AssignExpr(`EqExpression` expr) | Assigns some expression to this one.  For AggrFuncExpr class this method assigns the Expression object passed in parameter to Argument property | 
| `void` | AttachArgument(`EqExpression` argument) |  | 
| `void` | DetachArgument(`EqExpression` argument) |  | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads expression from XML. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one property from JSON | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one property from JSON (asynchronous way). | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves expression to XML writer. | 
| `void` | SetContentSilent(`String` val, `String` txt) | Sets the content of the expression silently (without calling ContentChanged event). | 
| `void` | WritePropertiesToJson(`JsonWriter` writer) | Writes one property to JSON. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer) | Writes one property to JSON (asynchronous way). |