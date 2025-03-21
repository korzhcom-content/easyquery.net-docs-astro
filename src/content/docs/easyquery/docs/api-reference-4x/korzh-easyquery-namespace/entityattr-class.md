---
title: EntityAttr class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-namespace/entityattr-class
---


Represents one entity attribute of data model.
```csharp
public class Korzh.EasyQuery.EntityAttr
    : IComparable<EntityAttr>

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Operator` | _defaultOperator | The default operator | 
| `Boolean` | _isGhost |  | 
| `Entity` | entity |  | 
| `String` | expr | Attribute expression | 
| `EntAttrKind` | kind | Attribute kind. | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Caption | Gets or sets the entityAttr attribute caption. | 
| `String` | ColumnName | Gets or sets the name of the column associated with property (in EntityFramework context definition). | 
| `String` | CustomFunc | Gets or sets the custom function. | 
| `DataType` | DataType | Gets or sets the type of data represented by attribute. | 
| `ValueEditor` | DefaultEditor | Gets or sets the default value editor. | 
| `String` | Description | Gets or sets the description of entity attribute. | 
| `EditorsMap` | Editors | Gets the editors map. | 
| `Entity` | Entity | Gets or sets the entity. | 
| `String` | Expr | Gets or sets the attribute expression. | 
| `String` | FullExpr | Gets the full expression of entity attribute. | 
| `String` | ID | Gets or sets the ID. | 
| `Boolean` | IsGhost | Gets a value indicating whether this is a "ghost attribute" - an attribute which was not found in the model. | 
| `Boolean` | IsNullable |  | 
| `EntAttrKind` | Kind | Gets or sets the attribute kind. | 
| `EntityAttr` | LookupAttr | Gets the lookup attribute. | 
| `DataModel` | Model | Gets the model. | 
| `OperatorList` | Operations | Gets the list of operators which can be applied for this attribute. | 
| `QueryParamList` | Params | The parameters associated with this entity attribute | 
| `PropertyInfo` | PropInfo | Gets or sets the property information. | 
| `String` | PropName | Gets or sets the name of the property. | 
| `Int64` | Size | Gets or sets the size of data represented by attribute. | 
| `Boolean` | UseInConditions | Gets or sets a value indicating whether the attribute can be used in query conditions. | 
| `Boolean` | UseInResult | Gets or sets a value indicating whether the attribute can be used in result columns (SELECT clause). | 
| `Boolean` | UseInSorting | Gets or sets a value indicating whether the attribute can be used in sorting. | 
| `Object` | UserData | Gets or sets the user data object assosiated with attribute. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddParamsTo(`QueryParamList` prms) |  | 
| `void` | CheckModel() | Checks the Model property and raises an exception if it's null. | 
| `void` | CopyFrom(`EntityAttr` attr) | Copies all attribute's properties from another entity attribute | 
| `void` | ExtractParams() | Parse attribute's expression and extract all parameters (like @Param1) used there. | 
| `void` | FillOperatorsWithDefaults(`DataModel` model) | Fills the operators list with default operators depending of attribute type. | 
| `String` | GetDataAttrFullExpr() | Gets full expression of the entity attribute. | 
| `Operator` | GetDefaultOperator() | Gets the default operator (usually it is first operator in Operations list). | 
| `ValueEditor` | GetValueEditor(`Operator` op, `Int32` operandIndex) | Gets the most suitable value editor for this attribute and operator. | 
| `Boolean` | HasParams() | Determines whether this attribute has parameters in its expression. | 
| `void` | LoadAttribute(`String` propname, `String` propvalue) | Loads the attribute. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads attribute from XML reader. | 
| `void` | LoadNodes(`XmlReader` reader) | Loads the sub-nodes of entity attribute's node. | 
| `void` | OnModelAssignment() | Called when model is assigned. | 
| `void` | ProcessVirtualExpr() | Scans attribute's expression for new parameters, tables, etc | 
| `void` | SaveToJsonDict(`JsonDict` dict) | Saves attribute properties to Dictionary object (used for serialization to JSON). | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves [Korzh.EasyQuery.EntityAttr](/api-reference-4x/korzh-easyquery-namespace/entityattr-class) to XML writer. | 
| `void` | SaveXmlAttributes(`XmlWriter` writer) | Saves the attributes to XML writer. | 
| `void` | SaveXmlNodes(`XmlWriter` writer) | Saves the nodes to XML writer. | 
| `void` | SetDefaultOperator(`Operator` op) | Sets the default operator. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `EntAttrKind` | StrToEntAttrKind(`String` s) | Converts string representation of attribute kind to EntAttrKind value. |