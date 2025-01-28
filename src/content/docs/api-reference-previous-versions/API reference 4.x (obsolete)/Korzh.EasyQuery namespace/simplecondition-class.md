---
title: SimpleCondition class
slug: api-reference-previous-versions/API reference 4.x (obsolete)/Korzh.EasyQuery namespace/simplecondition-class
---


Represents the default condition with {field} {operator} {value} structure.
```csharp
public abstract class Korzh.EasyQuery.SimpleCondition
    : Condition

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `EqExpression` | BaseExpr | Gets or sets the base expression of the condtion. | 
| `Operand` | DefaultOperand | Gets the default operand. | 
| `SimpleCondExprList` | Expressions | Gets the list of all expressions used in condition.  First expression in the list is base expression. | 
| `Operator` | Operator | Gets or sets the operator used in this condition. | 
| `String` | TypeName | Gets the name of the condition type.  The same as STypeName but works for one particular instance of SimpleCondition class. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AdjustOperator() | Adjusts the operator by base expression. | 
| `void` | AttachExpr(`EqExpression` expr) | Attaches the handler for expression's OnContentChange event to DoExprContentChanged method | 
| `EqExpression` | CreateValueExpr(`Int32` index) | Creates the value expression. | 
| `EqExpression` | CreateValueExprByOperand(`Operand` opnd) | Creates a value expression by operand. | 
| `void` | DetachExpr(`EqExpression` expr) | Detaches the handler for expression's OnContentChange event | 
| `void` | DoExprContentChanged(`Object` sender, `EventArgs` e) | Does the expr changed. | 
| `EntityAttr` | GetBaseAttr() | Gets the base entity attribute for this condition. | 
| `Operand` | GetOperand(`Int32` index) | Gets the condition operand based on its index. Index 0 stands for an attribute | 
| `String` | GetText(`QueryTextFormats` formats, `String` levelSpace, `String` prefix) | Returns text representation of  condition | 
| `IEnumerable<Entity>` | GetUsedEntities() | Gets the list of all entities used in condition. | 
| `void` | LoadFromJsonDict(`JsonDict` dictCond) | Loads condition from IDictionary. Used during loading query from JSON | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads [Korzh.EasyQuery.SimpleCondition](/api-reference-4x/korzh-easyquery-namespace/simplecondition-class) properties from XML reader. | 
| `EqExpression` | RecreateValueExpr(`Int32` index) | Recreates the value expression. | 
| `void` | SetOperator(`Operator` newOperator) | Sets the operator. | 
| `void` | SetOperatorSilent(`Operator` newOperator) | Sets the operator in "silent" mode (no event is raised, no expression is adjusted). | 
| `void` | SetValueExpr(`Int32` index, `EqExpression` expr) | Sets the value expression. | 
| `void` | WriteContent(`XmlWriter` writer) | Writes the content of condition to XmlWriter object. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the condition type used for saving to XML. |