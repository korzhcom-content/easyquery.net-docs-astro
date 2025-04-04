---
title: EntityAttr class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class
sidebar:
  order: 100
---

Represents one entity attribute of data model.
```csharp
public class Korzh.EasyQuery.EntityAttr
    : MetaEntityAttr, IComparable<EntityAttr>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| CustomFunc | `string` | Gets or sets the custom function. | 
| Editors | [EditorsMap](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/editorsmap-class) | Gets the editors map. | 
| Entity | [Entity](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) | Gets or sets the entity. | 
| HasSubQuery | `bool` | Gets or sets a value indicating whether this attribute includes a sub-query in its expression. | 
| IsAggregate | `bool` | Gets or sets a value indicating whether this attribute represents some aggregate column. | 
| IsGhost | `bool` | Gets a value indicating whether this is a "ghost attribute" - an attribute which was not found in the model. | 
| LookupAttr | [EntityAttr](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | The lookup attribute | 
| Model | [DataModel](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets the model. | 
| Operations | [OperatorList](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operatorlist-class) | Gets the list of operators which can be applied for this attribute. | 
| Params | [QueryParamList](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) | The parameters associated with this entity attribute | 
| UseInConditions | `bool` | Gets or sets a value indicating whether the attribute can be used in query conditions. | 
| UseInResult | `bool` | Gets or sets a value indicating whether the attribute can be used in result columns (SELECT clause). | 
| UseInSorting | `bool` | Gets or sets a value indicating whether the attribute can be used in sorting. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddParamsTo([QueryParamList](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) paramList) | `void` | Adds all query parameters used in this attribute to the list passed via paramList. | 
| CopyFrom([EntityAttr](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `void` | Copies all attribute's properties from another entity attribute | 
| ExtractParams() | `void` | Parse attribute's expression and extract all parameters (like @Param1) used there. | 
| FillOperatorsWithDefaults([DataModel](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Fills the operators list with default operators depending of attribute type. | 
| GetDefaultOperator() | [Operator](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) | Gets the default operator (usually it is first operator in Operations list). | 
| GetValueEditor([Operator](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op, `int` operandIndex) | [ValueEditor](/easyquery/docs/api-reference/easydata-core/easydata-namespace/valueeditor-class) | Gets the most suitable value editor for this attribute and operator. | 
| HasParams() | `bool` | Determines whether this attribute has parameters in its expression. | 
| Hide() | `void` | Hides this entity attribute.  It means that this function just sets all UseInResult, UseInConditions and UseInSorting properties to <c>false</c>. | 
| OnModelAssignment() | `void` | Called when model is assigned. | 
| ProcessVirtualExpr() | `void` | Scans attribute's expression for new parameters, tables, etc | 
| ReadPropertyFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one attribute's property from JSON (asynchronous way). | 
| SetDefaultOperator([Operator](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op) | `void` | Sets the default operator. | 
| WritePropertiesToJsonAsync(`JsonWriter` writer, [BitOptions](/easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) rwOptions) | `Task` | Writes attribute properties to JSON (asynchronous way). |
