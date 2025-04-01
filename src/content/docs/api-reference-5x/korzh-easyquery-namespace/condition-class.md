---
title: Condition class
slug: api-reference-5x/korzh-easyquery-namespace/condition-class
sidebar:
  order: 100
---

Represents one condition in the query.
```csharp
public class Korzh.EasyQuery.Condition

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | _isRoot |  | 
| `Boolean` | _isSilent | Gets a value indicating whether this query is silent - so no event will be raised on change. | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `EntityAttr` | BaseAttr | Gets the base entity attribute for this condition. | 
| `EqExpression` | BaseExpr | Gets or sets the base expression of the condtion. | 
| `ConditionsStore` | Conditions | Gets the conditions. | 
| `Operand` | DefaultOperand | Gets the default operand. | 
| `ConditionExprList` | Expressions | Gets the list of all expressions used in condition.  First expression in the list is base expression. | 
| `String` | FullNum | Gets the full number of condition. | 
| `Int32` | Id | Gets or sets the ID. | 
| `Int32` | Index | Gets the index in the parent's list. | 
| `Boolean` | IsEmpty | Gets a value indicating whether this condition is empty (zero conditions). | 
| `Boolean` | IsEnabled | Gets or sets a value indicating whether this [Korzh.EasyQuery.Condition](///////////////easyquery/docs/api-reference-5x/korzh-easyquery-namespace/condition-class) is enabled. | 
| `Boolean` | IsGroup | Gets a value indicating whether this instance is a group of conditions | 
| `Boolean` | IsHaving | Gets a value indicating whether this condition must be placed into HAVING clause in result SQL. | 
| `Boolean` | IsInJoin | Gets a value indicating whether this condition must be placed into JOIN clause in result SQL. | 
| `Boolean` | IsParameterized | Gets or sets a value indicating whether this [Korzh.EasyQuery.Condition](///////////////easyquery/docs/api-reference-5x/korzh-easyquery-namespace/condition-class) is parameterized. | 
| `Boolean` | IsReadOnly | Gets or sets a value indicating whether this [Korzh.EasyQuery.Condition](///////////////easyquery/docs/api-reference-5x/korzh-easyquery-namespace/condition-class) is read-only. | 
| `Boolean` | IsRoot | Gets a value indicating whether this condition is the root condition of the query. | 
| `Int32` | Level | Gets the level of this condition in query. | 
| `LinkType` | Linking | Gets or sets the linking type. | 
| `String` | LinkingStr | Gets or sets the text representation of linking type. | 
| `DataModel` | Model | Gets the model. | 
| `Operator` | Operator | Gets or sets the operator used in this condition. | 
| `Condition` | Parent | Gets the parent [Korzh.EasyQuery.Condition](///////////////easyquery/docs/api-reference-5x/korzh-easyquery-namespace/condition-class) which this condition is included to. | 
| `Query` | Query | Gets the query which this condition belongs to. | 
| `Boolean` | UseDefaultValues | Gets a value indicating whether condition expressions should get default values after creation | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Condition` | AddConditionGroup(`LinkType` lnkType = Auto) | Creates and adds a new group of conditions into the current one | 
| `Condition` | AddConditionWithExpr(`String` attrId, `String` operatorId, `EqExpression[]` values) | Adds a simple condition by the entity attribute's ID, the operator's ID and the list of values | 
| `Condition` | AddSimpleCondition(`String` attrId, `String` operatorId = <span style='color: blue'>null</span>, `String[]` values) | Adds a simple condition by attribute ID, operator ID and a list of values | 
| `Condition` | AddSimpleCondition(`EntityAttr` attr, `Operator` op, `EqExpression[]` exprs) | Adds a simple condition by attribute ID, operator ID and a list of values | 
| `void` | AdjustOperator() | Adjusts the operator by base expression. | 
| `void` | AttachExpr(`EqExpression` expr) | Attaches the handler for expression's OnContentChange event to DoExprContentChanged method | 
| `void` | BeginUpdate() | Starts the update process.  OnConditionsChanged event of corresponding Query object is not raised while condition is in update state | 
| `void` | Changed(`Condition` cond = <span style='color: blue'>null</span>, `ChangeType` changeType = Update, `Int32` info = 0) | Raises ConditionsChange event in parent object | 
| `void` | CheckDataModel() | Checks DataModel property. Generates an exception if it is null. | 
| `void` | CheckQuery() | Checks Query property. Generates an exception if it is null. | 
| `Boolean` | ContainsGhosts(`Condition&` outCond) | Determines whether this condition group contains a condition with a "ghost" attribute. | 
| `EqExpression` | CreateValueExpr(`Int32` index) | Creates the value expression. | 
| `EqExpression` | CreateValueExprByOperand(`Operand` opnd) | Creates a value expression by operand. | 
| `void` | DetachExpr(`EqExpression` expr) | Detaches the handler for expression's OnContentChange event | 
| `void` | DoExprContentChanged(`Object` sender, `EventArgs` e) | Does the expr changed. | 
| `void` | EndUpdate() | Ends the update process.  Raises ConditionsChange event if some modification(s) was(were) made during update process. | 
| `Condition` | FindCondByAttr(`EntityAttr` attr) | Finds the condition the by entity attribute set in the left part of this condition. | 
| `EntityAttr` | GetBaseAttr() | Gets the base entity attribute for this condition. | 
| `String` | GetConditionGroupHeader() | Gets the condition group header text. | 
| `String` | GetConditionText(`QueryTextFormats` formats, `String` levelSpace, `String` prefix) | Returns text representation of the search condition | 
| `Boolean` | GetHaving() | Gets a value indicating whether this condition must be placed into HAVING clause in result SQL.  Must be overriden in the inherited classes | 
| `Int32` | GetOffspringCount() | Gets the number of all offspings of the condition group | 
| `String` | GetOldClassName() | Gets the old name of the condition class (PDCT or SMPL). | 
| `Operand` | GetOperand(`Int32` index) | Gets the condition operand based on its index. Index 0 stands for an attribute | 
| `String` | GetSimpleConditionText(`QueryTextFormats` formats, `String` levelSpace, `String` prefix) | Returns text representation of thesimple condition | 
| `String` | GetText(`QueryTextFormats` formats) | Returns text representation of condition | 
| `String` | GetText() | Returns text representation of condition | 
| `String` | GetText(`QueryTextFormats` formats, `String` levelSpace, `String` prefix) | Returns text representation of condition | 
| `IEnumerable<Entity>` | GetUsedEntities() | Gets the list of entities that are used in conditions of this group. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads the propertis of the [Korzh.EasyQuery.Condition](///////////////easyquery/docs/api-reference-5x/korzh-easyquery-namespace/condition-class) from the XML reader. | 
| `void` | LoadXmlAttributes(`XmlReader` reader) | Loads conditions node attributes from XML reader. | 
| `void` | MoveDown() | Moves the condition to one position down (taking into account the level of other conditions). | 
| `void` | MoveUp() | Moves the condition to one position up (taking into account the level of other conditions). | 
| `void` | ReadFromJson(`JsonReader` reader) | Reads the content of the condition from JSON | 
| `Task` | ReadFromJsonAsync(`JsonReader` reader) | Reads the content of the condition from JSON  (asynchronous way). | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one property of the condition from JSON | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one property of the condition from JSON  (asynchronous way). | 
| `EqExpression` | RecreateValueExpr(`Int32` index) | Recreates the value expression. | 
| `void` | Refresh() | Refreshes this instance. | 
| `void` | Reset() | Clears the condition list and resets linking type | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves condition object to XML writer. | 
| `void` | Scan(`Action<Condition>` conditionHandler, `Boolean` processRoot = True) | Scans all sub-conditions of this condition group and calls a handler for each of them | 
| `void` | SetEnabled(`Boolean` newValue, `Boolean` silent = False) | Sets the Enabled property. | 
| `void` | SetOperator(`Operator` newOperator) | Sets the operator. | 
| `void` | SetOperatorSilent(`Operator` newOperator) | Sets the operator in "silent" mode (no event is raised, no expression is adjusted). | 
| `void` | SetQuery(`Query` newQuery) | Sets the query. | 
| `void` | SetReadOnly(`Boolean` newValue, `Boolean` silent = False) | Sets the ReadOnly property. | 
| `void` | SetValueExpr(`Int32` index, `EqExpression` expr) | Sets the value expression. | 
| `void` | ShiftLevel(`Boolean` up) | Shifts the row level (taking into account the level of other rows) | 
| `void` | UpdateEnableStateByChilds() | This procedure is called when Enable state in one of the child conditions was changed. | 
| `void` | WriteContentToXml(`XmlWriter` writer) | Writes the content of condition to the XmlWriter object. | 
| `void` | WritePropertiesToJson(`JsonWriter` writer) | Writes all condition properties to JSON  (this method can be overriden in inherited classes) | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer) | Writes all condition properties to JSON (asynchronous way).  (this method can be overriden in inherited classes) | 
| `void` | WriteToJson(`JsonWriter` writer) | Writes the content of the condition to JSON | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer) | Writes the content of the condition to JSON (asynchronous way). | 


### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GroupTag | The tag (condition class) which represents a group of conditions | 
| `String` | SimpleConditionTag | The tag (condition class) which represents a simple condition | 
| `String` | XmlTagName | The name of the tag which used when we serialize condition to XML | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | LinkTypeToStr(`LinkType` lt) | Converts LinkType value to its string representation | 
| `LinkType` | StrToLinkType(`String` s) | Convert string representation to LinkType value. |
