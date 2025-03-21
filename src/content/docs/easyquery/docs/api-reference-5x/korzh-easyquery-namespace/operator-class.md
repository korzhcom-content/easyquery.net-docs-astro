---
title: Operator class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-namespace/operator-class
---


Represents a logical expression or "predicate". For example: "less than", "is equal to", "starts with".
```csharp
public class Korzh.EasyQuery.Operator

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | expr |  | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `DataTypeList` | AppliedTypes | Gets the list of applied types for this operator. | 
| `String` | Caption | Gets or sets the operator caption. | 
| `Boolean` | CaseInsensitive | Gets or sets a value indicating whether the operator is case insensative. | 
| `String` | ConstValueFormat | Gets or sets the format of constant values. This property is used to process LIKE and similar operators | 
| `Operand` | DefaultOperand | Gets the defaults settings of operator operands. | 
| `String` | DisplayFormat | Gets or sets the display format of operator. | 
| `String` | Expr | Gets or sets the operator expression. | 
| `OperatorGroup` | Group | Gets or sets the group which this operator belongs to. | 
| `String` | ID | Gets or sets the operator ID. | 
| `Boolean` | IsCondition | Gets or sets a value indicating whether this operator instance represents custom condition. | 
| `Boolean` | IsRange | Gets or sets a value indicating whether this operator requires range values so first value must be less than the second one. | 
| `String` | MainText | Gets the main part of operator's DisplayFormat (this text will be shown as link in query panel) | 
| `String` | MathSymbol | Gets the math symbol which represents operator. | 
| `DataModel` | Model | Gets or sets the model. | 
| `OperandList` | Operands | Gets the operands for this operator. | 
| `Int32` | ParamCount | Gets the number of parameters which are taken by the operator. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CalcParamCount() | Calculates the count of the parameters. | 
| `Operand` | GetOperand(`Int32` operandIndex) | Gets the operand of current operator by its index. | 
| `void` | LoadAttribute(`String` propname, `String` propvalue) | Loads the attribute. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads from XML reader. | 
| `void` | LoadNodes(`XmlReader` reader) | Loads the nodes. | 
| `void` | ReadFromJson(`JsonReader` reader) | Reads operator's content from the JSON (asynchronous way). | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Reads operator's content from the JSON (asynchronous way). | 
| `void` | SaveAttributes(`XmlWriter` writer) | Saves the attributes. | 
| `void` | SaveNodes(`XmlWriter` writer) | Saves the nodes. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves to XML writer. | 
| `String` | ToString() | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. | 
| `void` | WriteToJson(`JsonWriter` writer) | Writes operator's content to JSON. | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer) | Writes operator's content to JSON (asynchronous way). |