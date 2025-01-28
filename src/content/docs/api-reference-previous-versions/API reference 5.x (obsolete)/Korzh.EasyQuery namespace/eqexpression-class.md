---
title: EqExpression class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/eqexpression-class
---


Represents common expression object.
```csharp
public abstract class Korzh.EasyQuery.EqExpression

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | _text | This field contains expression's text | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `EntityAttr` | Attribute | Gets or sets the attribute. | 
| `String` | CustomFunc | Gets the custom func for expression if defined | 
| `DataType` | DataType | Gets or sets the data type. | 
| `String` | Hint | Gets or sets the expression hint. | 
| `Boolean` | IsAggregate | Gets a value indicating whether this expression is aggregate. | 
| `DataKind` | Kind | Gets the expression kind. | 
| `DataModel` | Model | Gets the model. | 
| `Type` | SystemType | Gets the system type for this expreesion (it's used in LINQ query builder) | 
| `Int32` | Tag | Get the expression's tag - a special identifier that is used to distinguish the type of the expression . | 
| `String` | Text | Gets or sets the expression text used for visual representation. | 
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
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads expression from XML. | 
| `void` | OnContentChange(`EventArgs` e) | Raises the ContentChange event. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one expression property from JSON. | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one expression property from JSON  (asynchronous way). | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` xmlTagName) | Saves expression to XML writer. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves expression to XML writer. | 
| `void` | SetContent(`String` val, `String` txt) | Sets the content of the expression (both its value and text). | 
| `void` | SetContentSilent(`String` val, `String` txt) | Sets the content of the expression silently (without calling ContentChanged event). | 
| `String` | TagToOldClassName(`Int32` tag) | Converts the expression's tag value to the name of old expression class (like "CONST" or "ENTATTR"). | 
| `void` | WritePropertiesToJson(`JsonWriter` writer) | Writes all experssion properties to JSON.  This method must be overriden in the descendant classes | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer) | Writes all experssion properties to JSON (asynchronous way).  This method must be overriden in the descendant classes | 
| `void` | WriteToJson(`JsonWriter` writer) | Write the content of the expression to JSON | 
| `Task` | WriteToJsonAsync(`JsonWriter` writer) | Write the content of the expression to JSON  (asynchronous way). | 
| `void` | WriteXmlTagStart(`XmlWriter` writer) | Writes the expression XML tag start. | 
| `void` | WriteXmlTagStart(`XmlWriter` writer, `String` tagName) | Writes the expression XML tag start. | 


### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `IList<IExpressionCreator>` | Creators |  | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | XmlTagName | Gets the name of the XML tag used for representation of Expression (an all its descendants) object in XML files. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | ApplyCustomFunc(`String` func, `String` expr) | Applies the custom function. | 
| `EqExpression` | Create(`DataModel` model, `Int32` tag) | Creates the expression instance of specified type. | 
| `EqExpression` | CreateByClassName(`DataModel` model, `String` className) | Creates the expression instance of specified class (type) name. | 
| `EqExpression` | ReadFromJson(`DataModel` model, `JsonReader` reader) | Reads one expression from JSON.  This static function recognizes the expression type and creates an instance of appropriate class. | 
| `Task<EqExpression>` | ReadFromJsonAsync(`DataModel` model, `JsonReader` reader) | Reads one expression from JSON.(asynchronous way).  This static function recognizes the expression type and creates an instance of appropriate class. | 
| `Boolean` | RegisterCreator(`IExpressionCreator` creator) | Registers new type of expression. |