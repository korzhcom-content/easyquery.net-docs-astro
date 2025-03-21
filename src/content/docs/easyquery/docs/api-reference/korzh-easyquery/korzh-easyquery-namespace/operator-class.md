---
title: Operator class
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class
---


Represents a logical expression or "predicate". For example: "less than", "is equal to", "starts with".
```csharp
public class Korzh.EasyQuery.Operator

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AppliedTypes | [DataTypeList](/api-reference/easydata-core/easydata-namespace/datatypelist-class) | Gets the list of applied types for this operator. | 
| Caption | `string` | Gets or sets the operator caption. | 
| CaseInsensitive | `bool` | Gets or sets a value indicating whether the operator is case insensative. | 
| ConstValueFormat | `string` | Gets or sets the format of constant values. This property is used to process LIKE and similar operators | 
| DefaultOperand | [Operand](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) | Gets the defaults settings of operator operands. | 
| DisplayFormat | `string` | Gets or sets the display format of operator. | 
| Expr | `string` | Gets or sets the operator expression. | 
| Group | [OperatorGroup](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorgroup-class) | Gets or sets the group which this operator belongs to. | 
| Id | `string` | Gets or sets the operator ID. | 
| IsCondition | `bool` | Gets or sets a value indicating whether this operator instance represents custom condition. | 
| IsRange | `bool` | Gets or sets a value indicating whether this operator requires range values so first value must be less than the second one. | 
| MainText | `string` | Gets the main part of operator's DisplayFormat (this text will be shown as link in query panel) | 
| MathSymbol | `string` | Gets the math symbol that represents this operator. | 
| Model | [DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets or sets the model. | 
| Operands | [OperandList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operandlist-class) | Gets the operands for this operator. | 
| ParamCount | `int` | Gets the number of parameters which are taken by the operator. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CalcParamCount() | `void` | Calculates the count of the parameters. | 
| GetOperand(`int` operandIndex) | [Operand](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) | Gets the operand of current operator by its index. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads operator's content from the JSON (asynchronous way). | 
| ToString() | `string` | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Writes operator's content to JSON (asynchronous way). |