---
title: Predicate class
slug: api-reference-4x/korzh-easyquery-namespace/predicate-class
sidebar:
  order: 100
---

Represents group of conditions linked by some logical operator (AND or OR).
```csharp
public abstract class Korzh.EasyQuery.Predicate
    : Condition

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | _isRoot |  | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `ConditionsStore` | Conditions | Gets the conditions. | 
| `Boolean` | IsEmpty | Gets a value indicating whether this predicate is empty (zero conditions). | 
| `Boolean` | IsRoot | Gets a value indicating whether this predicate is the root predicate in query. | 
| `LinkType` | Linking | Gets or sets the linking type. | 
| `String` | LinkingStr | Gets or sets the text representation of linking type. | 
| `String` | TypeName | Gets the name of the condition type.  The same as STypeName but works for one particular instance of SimpleCondition class. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Predicate` | AddPredicate(`LinkType` lnkType) | Creates and adds a new predicate into current | 
| `SimpleCondition` | AddSimpleCondition(`String` attrId, `String` operatorId, `String[]` values) | Adds a simple condition by attribute ID, operator ID and a list of values | 
| `SimpleCondition` | AddSimpleCondition(`EntityAttr` attr, `Operator` op, `EqExpression[]` exprs) | Adds a simple condition by attribute ID, operator ID and a list of values | 
| `void` | BeginUpdate() | Starts the update process.  OnConditionsChanged event of corresponding Query object is not raised while condition is in update state | 
| `void` | CheckIfEnabled() | This procedure is called when Enable state in one of the child conditions was changed. | 
| `Boolean` | ContainsGhosts(`Condition&` outCond) | Determines whether this predicate contains a condition with a "ghost" attribute. | 
| `void` | EndUpdate() | Ends the update process.  Raises ConditionsChange event if some modification(s) was(were) made during update process. | 
| `Condition` | FindCondByAttr(`EntityAttr` attr) | Finds the condition the by entity attribute set in the left part of this condition. | 
| `Boolean` | GetHaving() | Gets a value indicating whether this condition must be placed into HAVING clause in result SQL. | 
| `Int32` | GetOffspringCount() | Gets the number of all offspings of the predicate | 
| `String` | GetPredicateHeader() | Gets the predicate header text. | 
| `String` | GetText(`QueryTextFormats` formats, `String` levelSpace, `String` prefix) | Returns text representation of condition | 
| `IEnumerable<Entity>` | GetUsedEntities() | Gets the list of entities that are used in conditions of this predicate. | 
| `void` | LoadFromJsonDict(`JsonDict` dictPredicate) | Loads condition from IDictionary. Used during loading query from JSON | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads [Korzh.EasyQuery.Predicate](///easyquery/docs/api-reference-4x/korzh-easyquery-namespace/predicate-class) properties from XML reader. | 
| `void` | Reset() | Clears the condition list and resets linking type | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves root condition group object to XML writer, if the predicate is root. Otherwise calls inherited method. | 
| `void` | SetEnabled(`Boolean` newValue) | Sets the Enabled property. | 
| `void` | SetQuery(`Query` newQuery) | Sets the query object. | 
| `void` | SetReadOnly(`Boolean` newValue) | Sets the ReadOnly property. | 
| `void` | WriteContent(`XmlWriter` writer) | Writes the content of condition to XmlWriter object. | 
| `void` | WriteSubNodesToXml(`XmlWriter` writer) | Writes the sub codnitions to XML. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the S class. |
