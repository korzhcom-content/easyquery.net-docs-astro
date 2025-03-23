---
title: Condition class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class
---


Represents one condition in the query.
```csharp
public class Korzh.EasyQuery.Condition

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| BaseAttr | [EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Gets the base entity attribute for this condition. | 
| BaseExpr | [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | Gets or sets the base expression of the condtion. | 
| Conditions | [ConditionsStore](/api-reference/korzh-easyquery/korzh-easyquery-namespace/conditionsstore-class) | Gets the conditions. | 
| DefaultOperand | [Operand](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) | Gets the default operand. | 
| Expressions | [ConditionExprList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/conditionexprlist-class) | Gets the list of all expressions used in condition.  First expression in the list is base expression. | 
| FullNum | `string` | Gets the full number of condition. | 
| HasEnabled | `bool` | Gets a value indicating whether this group has at least one enabled condition. | 
| Id | `int` | Gets or sets the ID. | 
| Index | `int` | Gets the index in the parent's list. | 
| IsEmpty | `bool` | Gets a value indicating whether this condition is empty (zero conditions). | 
| IsEnabled | `bool` | Gets or sets a value indicating whether this [Korzh.EasyQuery.Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) is enabled. | 
| IsGroup | `bool` | Gets a value indicating whether this instance is a group of conditions | 
| IsHaving | `bool` | Gets a value indicating whether this condition must be placed into HAVING clause in result SQL. | 
| IsInJoin | `bool` | Gets a value indicating whether this condition must be placed into JOIN clause in result SQL. | 
| IsParameterized | `bool` | Gets or sets a value indicating whether this [Korzh.EasyQuery.Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) is parameterized. | 
| IsReadOnly | `bool` | Gets or sets a value indicating whether this [Korzh.EasyQuery.Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) is read-only. | 
| IsRoot | `bool` | Gets a value indicating whether this condition is the root condition of the query. | 
| IsUpdating | `bool` | Gets a value indicating whether this instance is updating. | 
| Level | `int` | Gets the level of this condition in query. | 
| Linking | [Condition.LinkType](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-linktype-enum) | Gets or sets the linking type. | 
| LinkingStr | `string` | Gets or sets the text representation of linking type. | 
| Model | [DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets the model. | 
| Operator | [Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) | Gets or sets the operator used in this condition. | 
| Parent | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Gets the parent [Korzh.EasyQuery.Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) which this condition is included to. | 
| Query | [Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets the query which this condition belongs to. | 
| UseDefaultValues | `bool` | Gets a value indicating whether condition expressions should get default values after creation | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddConditionGroup([LinkType](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-linktype-enum) lnkType = 99) | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Creates and adds a new group of conditions into the current one | 
| AddConditionWithExpr(`string` attrId, `string` operatorId, `EqExpression[]` values) | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Adds a simple condition by the entity attribute's ID, the operator's ID and the list of values | 
| AddSimpleCondition(`string` attrId, `string` operatorId = <span style='color: blue'>null</span>, `String[]` values) | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Adds a simple condition by attribute ID, operator ID and a list of values | 
| AddSimpleCondition([EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr, [Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op, `EqExpression[]` exprs) | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Adds a simple condition by attribute ID, operator ID and a list of values | 
| AdjustOperator() | `void` | Adjusts the operator by base expression. | 
| BeginUpdate() | `void` | Starts the update process.  OnConditionsChanged event of corresponding Query object is not raised while condition is in update state | 
| CheckDataModel() | `void` | Checks DataModel property. Generates an exception if it is null. | 
| CheckQuery() | `void` | Checks Query property. Generates an exception if it is null. | 
| Clone() | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Creates a duplicate of the current condition. | 
| ContainsGhosts(`Condition&` outCond) | `bool` | Determines whether this condition group contains a condition with a "ghost" attribute. | 
| CreateValueExpr(`int` index) | [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | Creates the value expression. | 
| CreateValueExprByOperand([Operand](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) opnd) | [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | Creates a value expression by operand. | 
| DoExprContentChanged(`object` sender, `EventArgs` e) | `void` | Does the expr changed. | 
| EndUpdate() | `void` | Ends the update process.  Raises ConditionsChange event if some modification(s) was(were) made during update process. | 
| FindCondByAttr([EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Finds the condition the by entity attribute set in the left part of this condition. | 
| GetBaseAttr() | [EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Gets the base entity attribute for this condition. | 
| GetConditionGroupHeader() | `string` | Gets the condition group header text. | 
| GetConditionText([QueryTextFormats](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querytextformats-class) formats, `string` levelSpace, `string` prefix) | `string` | Returns text representation of the search condition | 
| GetHaving() | `bool` | Gets a value indicating whether this condition must be placed into HAVING clause in result SQL.  Must be overriden in the inherited classes | 
| GetOffspringCount() | `int` | Gets the number of all offspings of the condition group | 
| GetOldClassName() | `string` | Gets the old name of the condition class (PDCT or SMPL). | 
| GetOperand(`int` index) | [Operand](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) | Gets the condition operand based on its index. Index 0 stands for an attribute | 
| GetSimpleConditionText([QueryTextFormats](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querytextformats-class) formats, `string` levelSpace, `string` prefix) | `string` | Returns text representation of thesimple condition | 
| GetText([QueryTextFormats](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querytextformats-class) formats) | `string` | Returns text representation of condition | 
| GetText() | `string` | Returns text representation of condition | 
| GetText([QueryTextFormats](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querytextformats-class) formats, `string` levelSpace, `string` prefix) | `string` | Returns text representation of condition | 
| GetUsedEntities() | `IEnumerable`&lt;[Entity](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class)&gt; | Gets the list of entities that are used in conditions of this group. | 
| InsertSimpleCondition(`int` index, [EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr, [Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op, `EqExpression[]` exprs) | [Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) | Inserts a simple condition by the attribute, the operator and the list of expressions | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads the propertis of the [Korzh.EasyQuery.Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class) from the XML reader. | 
| LoadXmlAttributes(`XmlReader` reader) | `void` | Loads conditions node attributes from XML reader. | 
| MoveDown() | `void` | Moves the condition to one position down (taking into account the level of other conditions). | 
| MoveUp() | `void` | Moves the condition to one position up (taking into account the level of other conditions). | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads the content of the condition from JSON  (asynchronous way). | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one property of the condition from JSON  (asynchronous way). | 
| RecreateValueExpr(`int` index) | [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | Recreates the value expression. | 
| Refresh() | `void` | Refreshes this instance. | 
| Reset() | `void` | Clears the condition list and resets linking type | 
| SaveToXmlWriter(`XmlWriter` writer) | `void` | Saves condition object to XML writer. | 
| Scan(`Action`&lt;[Condition](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-class)&gt; conditionHandler, `bool` processRoot = True) | `void` | Scans all sub-conditions of this condition group and calls a handler for each of them | 
| SetEnabled(`bool` newValue, `bool` updateChildren = True, `bool` silent = False) | `void` | Sets the Enabled property. | 
| SetOperator([Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) newOperator) | `void` | Sets the operator. | 
| SetOperatorSilent([Operator](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) newOperator) | `void` | Sets the operator in "silent" mode (no event is raised, no expression is adjusted). | 
| SetQuery([Query](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) newQuery) | `void` | Sets the query. | 
| SetReadOnly(`bool` newValue, `bool` silent = False) | `void` | Sets the ReadOnly property. | 
| SetValueExpr(`int` index, [EqExpression](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr) | `void` | Sets the value expression. | 
| ShiftLevel(`bool` up) | `void` | Shifts the row level (taking into account the level of other rows) | 
| WriteContentToXml(`XmlWriter` writer) | `void` | Writes the content of condition to the XmlWriter object. | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Writes all condition properties to JSON (asynchronous way).  (this method can be overriden in inherited classes) | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Writes the content of the condition to JSON (asynchronous way). | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| GroupTag | `string` | The tag (condition class) which represents a group of conditions | 
| SimpleConditionTag | `string` | The tag (condition class) which represents a simple condition | 
| XmlTagName | `string` | The name of the tag which used when we serialize condition to XML | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LinkTypeToStr([LinkType](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-linktype-enum) lt) | `string` | Converts LinkType value to its string representation | 
| StrToLinkType(`string` s) | [Condition.LinkType](/api-reference/korzh-easyquery/korzh-easyquery-namespace/condition-linktype-enum) | Convert string representation to LinkType value. |