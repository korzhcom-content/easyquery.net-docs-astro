---
title: AggrFuncExpr class
slug: api-reference-4x/korzh-easyquery-namespace/aggrfuncexpr-class
sidebar:
  order: 100
---

Represents an expression which is a result of applying some functions to other expressions
```csharp
public abstract class Korzh.EasyQuery.AggrFuncExpr
    : EqExpression

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | distinct | Indicates whether all entries of the result must be different | 
| `AggrFunction` | function | The function of [Korzh.EasyQuery.AggrFuncExpr](/easyquery/docs/api-reference-4x/korzh-easyquery-namespace/aggrfuncexpr-class) | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `EqExpression` | Argument | Gets or sets the main argument. | 
| `String` | CustomFunc | Gets the custom func for expression if defined | 
| `DataType` | DataType | Gets or sets the data type. | 
| `Boolean` | Distinct | Gets or sets a value indicating whether this `AggrFuncExpr` has "DISTINCT" attribute. | 
| `AggrFunction` | Function | Gets or sets the function. | 
| `String` | Text | Gets the expression text. | 
| `String` | Value | Gets or sets the expression value. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AssignExpr(`EqExpression` expr) | Assigns some expression to this one.  For AggrFuncExpr class this method assigns the Expression object passed in parameter to Argument property | 
| `void` | AttachArgument(`EqExpression` argument) |  | 
| `void` | DetachArgument(`EqExpression` argument) |  | 
| `void` | LoadFromJsonDict(`JsonDict` dict) | Loads expression from IDictionary object (used when we load query from JSON). | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads expression from XML. | 
| `void` | SaveToJsonDictCore(`JsonDict` dict) | Saves expression's properties to dictionary (used to serialize expression into JSON)  This is an abstract method which should be overridden in descendant classes. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves expression to XML writer. | 
| `void` | SetContentSilent(`String` val, `String` txt) | Sets the content of the expression silently (without calling ContentChanged event). |
