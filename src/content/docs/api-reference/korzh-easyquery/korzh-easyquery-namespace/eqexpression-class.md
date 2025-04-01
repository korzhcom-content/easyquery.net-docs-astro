---
title: EqExpression class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class
sidebar:
  order: 100
---

Represents common expression object.
```csharp
public abstract class Korzh.EasyQuery.EqExpression

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqExpression([DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model) | `void` | Initializes a new instance of the [Korzh.EasyQuery.EqExpression](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| _text | `string` | This field contains expression's text | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Attribute | [EntityAttr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Gets or sets the attribute. | 
| CustomFunc | `string` | Gets the custom func for expression if defined | 
| DataType | [DataType](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets or sets the data type. | 
| Hint | `string` | Gets or sets the expression hint. | 
| IsAggregate | `bool` | Gets a value indicating whether this expression is aggregate. | 
| Kind | [DataKind](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) | Gets the expression kind. | 
| Model | [DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets the model. | 
| SystemType | `Type` | Gets the system type for this expreesion (it's used in LINQ query builder) | 
| Tag | `int` | Get the expression's tag - a special identifier that is used to distinguish the type of the expression . | 
| Text | `string` | Gets or sets the expression text used for visual representation. | 
| Value | `string` | Gets or sets the value of expression. | 


### Events

| Name | Type | Description | 
| --- | --- | --- | 
| ContentChange | `EventHandler` | This event is raised after expression was changed | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AssignExpr([EqExpression](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr) | `void` | Assigns some expression to this one.  This method just does nothing in the base class but can perform some actions in Expression descendants. | 
| Clone() | [EqExpression](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) |  | 
| CloneAsync() | `Task`&lt;[EqExpression](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class)&gt; |  | 
| ContentChanged() | `void` | Invoke ContentChange event | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads expression from XML. | 
| OnContentChange(`EventArgs` e) | `void` | Raises the ContentChange event. | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one expression property from JSON  (asynchronous way). | 
| SaveToJsonStringAsync() | `Task`&lt;`string`&gt; |  | 
| SaveToXmlWriter(`XmlWriter` writer, `string` xmlTagName) | `void` | Saves expression to XML writer. | 
| SaveToXmlWriter(`XmlWriter` writer) | `void` | Saves expression to XML writer. | 
| SetContent(`string` val, `string` txt) | `void` | Sets the content of the expression (both its value and text). | 
| SetContentSilent(`string` val, `string` txt) | `void` | Sets the content of the expression silently (without calling ContentChanged event). | 
| TagToOldClassName(`int` tag) | `string` | Converts the expression's tag value to the name of old expression class (like "CONST" or "ENTATTR"). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Writes all experssion properties to JSON (asynchronous way).  This method must be overriden in the descendant classes | 
| WriteToJsonAsync(`JsonWriter` writer) | `Task` | Write the content of the expression to JSON  (asynchronous way). | 
| WriteXmlTagStart(`XmlWriter` writer) | `void` | Writes the expression XML tag start. | 
| WriteXmlTagStart(`XmlWriter` writer, `string` tagName) | `void` | Writes the expression XML tag start. | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| XmlTagName | `string` | Gets the name of the XML tag used for representation of Expression (an all its descendants) object in XML files. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Create([DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `int` tag) | [EqExpression](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | Creates the expression instance of specified type. | 
| CreateByClassName([DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` className) | [EqExpression](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) | Creates the expression instance of specified class (type) name. | 
| ReadFromJsonAsync([DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `JsonReader` reader) | `Task`&lt;[EqExpression](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class)&gt; | Reads one expression from JSON.(asynchronous way).  This static function recognizes the expression type and creates an instance of appropriate class. | 
| RegisterCreator([IExpressionCreator](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/iexpressioncreator-interface) creator) | `bool` | Registers new type of expression. |
