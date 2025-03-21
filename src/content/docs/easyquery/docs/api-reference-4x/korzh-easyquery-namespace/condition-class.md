---
title: Condition class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-namespace/condition-class
---


Represents one condition in the query.
```csharp
public class Korzh.EasyQuery.Condition

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | _isSilent |  | 
| `Predicate` | parent |  | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `EntityAttr` | BaseAttr | Gets the base entity attribute for this condition. | 
| `Boolean` | Enabled | Gets or sets a value indicating whether this [Korzh.EasyQuery.Condition](/api-reference-4x/korzh-easyquery-namespace/condition-class) is enabled. | 
| `String` | FullNum | Gets the full number of condition. | 
| `Int32` | ID | Gets or sets the ID. | 
| `Int32` | Index | Gets the index in the parent's list. | 
| `Boolean` | IsHaving | Gets a value indicating whether this condition must be placed into HAVING clause in result SQL. | 
| `Boolean` | IsInJoin | Gets a value indicating whether this condition must be placed into JOIN clause in result SQL. | 
| `Boolean` | IsParameterized | Gets or sets a value indicating whether this [Korzh.EasyQuery.Condition](/api-reference-4x/korzh-easyquery-namespace/condition-class) is parameterized. | 
| `Boolean` | IsReadOnly | Gets or sets a value indicating whether this [Korzh.EasyQuery.Condition](/api-reference-4x/korzh-easyquery-namespace/condition-class) is read-only. | 
| `Boolean` | IsSilent | Gets a value indicating whether this query is silent - so no event will be raised on change. | 
| `Int32` | Level | Gets the level of this condition in query. | 
| `DataModel` | Model | Gets the model. | 
| `Predicate` | Parent | Gets the parent [Korzh.EasyQuery.Predicate](/api-reference-4x/korzh-easyquery-namespace/predicate-class) which this conditions is included to. | 
| `Query` | Query | Gets the query which this condition belongs to. | 
| `String` | TypeName | Gets the name of the condition type (Simple, Predicate, etc). | 
| `Boolean` | UseDefaultValues | Gets a value indicating whether condition expressions should get default values after creation | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | BeginUpdate() | Starts the update process.  OnConditionsChanged event of corresponding Query object is not raised while condition is in update state | 
| `void` | Changed() | Raises ConditionsChange event in parent object | 
| `void` | CheckDataModel() | Checks DataModel property. Generates an exception if it is null. | 
| `void` | CheckQuery() | Checks Query property. Generates an exception if it is null. | 
| `void` | EndUpdate() | Ends the update process.  Raises ConditionsChange event if some modification(s) was(were) made during update process. | 
| `EntityAttr` | GetBaseAttr() | Gets the base entity attribute for this condition. | 
| `Boolean` | GetHaving() | Gets a value indicating whether this condition must be placed into HAVING clause in result SQL.  Must be overriden in the inherited classes | 
| `String` | GetText(`QueryTextFormats` formats, `String` levelSpace, `String` prefix) | Returns text representation of condition | 
| `String` | GetText(`QueryTextFormats` formats) | Returns text representation of condition | 
| `String` | GetText() | Returns text representation of condition | 
| `IEnumerable<Entity>` | GetUsedEntities() | Gets the list of entities used in this condition | 
| `void` | InnerSetEnabled(`Boolean` newValue) |  | 
| `void` | InnerSetReadOnly(`Boolean` newValue) |  | 
| `void` | LoadFromJsonDict(`JsonDict` dictCond) | Loads condition from IDictionary. Used during loading query from JSON | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | When overriden in a derived class loads [Korzh.EasyQuery.Condition](/api-reference-4x/korzh-easyquery-namespace/condition-class) properties from XML reader. | 
| `void` | LoadXmlAttributes(`XmlReader` reader) | Loads conditions node attributes from XML reader. | 
| `void` | MoveDown() | Moves the condition to one position down (taking into account the level of other conditions). | 
| `void` | MoveUp() | Moves the condition to one position up (taking into account the level of other conditions). | 
| `void` | Refresh() | Refreshes this instance. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves condition object to XML writer. | 
| `void` | SetEnabled(`Boolean` newValue) | Sets the Enabled property. | 
| `void` | SetParameterized(`Boolean` parameterized) | Sets the IsParameterized property. | 
| `void` | SetQuery(`Query` newQuery) | Sets the query. | 
| `void` | SetReadOnly(`Boolean` newValue) | Sets the ReadOnly property. | 
| `void` | ShiftLevel(`Boolean` up) | Shifts the row level (taking into account the level of other rows) | 
| `void` | WriteContent(`XmlWriter` writer) | Writes the content of condition to XmlWriter object. | 


### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Dictionary<String, IConditionCreator>` | ConditionCreators |  | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the condition type used for saving/loading to/from XML. | 
| `String` | XmlTagName | Gets the name of the XML tag used to save condition object into XML file. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Condition` | Create(`String` type, `DataModel` model) | Creates the condition instance (descendant of Condition) of specified class. | 
| `String` | LinkTypeToStr(`LinkType` lt) | Converts LinkType value to its string representation | 
| `Boolean` | RegisterType(`String` condType, `IConditionCreator` creator) | Registers new type of condition. | 
| `LinkType` | StrToLinkType(`String` s) | Convert string representation to LinkType value. |