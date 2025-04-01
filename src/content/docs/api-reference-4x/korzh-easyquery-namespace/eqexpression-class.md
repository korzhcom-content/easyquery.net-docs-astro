---
title: EqExpression class
slug: api-reference-4x/korzh-easyquery-namespace/eqexpression-class
sidebar:
  order: 100
---

Represents common expression object.
```csharp
public abstract class Korzh.EasyQuery.EqExpression

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | text | This field contains expression's text | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | CustomFunc | Gets the custom func for expression if defined | 
| `DataType` | DataType | Gets or sets the data type. | 
| `String` | Hint | Gets or sets the expression hint. | 
| `Boolean` | IsAggregate | Gets a value indicating whether this expression is aggregate. | 
| `DataKind` | Kind | Gets the expression kind. | 
| `Type` | SystemType | Gets the system type for this expreesion (it's used in LINQ query builder) | 
| `String` | Text | Gets or sets the expression text used for visual representation. | 
| `String` | TypeName | Non-static version of [Korzh.EasyQuery.EqExpression.STypeName](///easyquery/docs/api-reference-4x/korzh-easyquery-namespace/eqexpression-class) property. | 
| `String` | Value | Gets or sets the value of expression. | 


### Events

| Type | Name | Description | 
| --- | --- | --- | 
| `EventHandler` | ContentChange | This event is raised after expression was changed | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AssignExpr(`EqExpression` expr) | Assigns some expression to this one.  This method just does nothing in the base class but can perform some actions in Expression descendants. | 
| `void` | ContentChanged() | Invoke ContentChange event | 
| `void` | LoadFromJsonDict(`JsonDict` dict) | Loads expression from dictionary object (used when we load query from JSON). | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads expression from XML. | 
| `void` | OnContentChange(`EventArgs` e) | Raises the ContentChange event. | 
| `void` | SaveToJsonDict(`JsonDict` dict) | Saves expression's properties to dictionary (used to serialize expression into JSON) | 
| `void` | SaveToJsonDictCore(`JsonDict` dict) | Saves expression's properties to dictionary (used to serialize expression into JSON)  This is an abstract method which should be overridden in descendant classes. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves expression to XML writer. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves expression to XML writer. | 
| `void` | SetContent(`String` val, `String` txt) | Sets the content of the expression (both its value and text). | 
| `void` | SetContentSilent(`String` val, `String` txt) | Sets the content of the expression silently (without calling ContentChanged event). | 
| `void` | WriteXmlTagStart(`XmlWriter` writer) | Writes the expression XML tag start. | 
| `void` | WriteXmlTagStart(`XmlWriter` writer, `String` tagName) | Writes the expression XML tag start. | 


### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Dictionary<String, IExpressionCreator>` | Creators |  | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the expression type. | 
| `String` | XmlTagName | Gets the name of the XML tag used for representation of Expression (an all its descendants) object in XML files. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | ApplyCustomFunc(`String` func, `String` expr) | Applies the custom function. | 
| `EqExpression` | Create(`String` exprType, `DataModel` model) | Creates the expression instance of specified type. | 
| `Boolean` | RegisterType(`String` type, `IExpressionCreator` creator) | Registers new type of expression. |
