---
title: EntityAttrExpr class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-namespace/entityattrexpr-class
---


An EqExpression descendant that represents an entity attribute.
```csharp
public class Korzh.EasyQuery.EntityAttrExpr
    : EqExpression

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `EntityAttr` | Attribute | Gets or sets the attribute. | 
| `String` | CustomFunc | Gets the custom func for expression if defined | 
| `DataType` | DataType | Gets the type of the expression. | 
| `Boolean` | IsAggregate | Gets a value indicating whether this expression is aggregate. | 
| `Boolean` | IsParentExpr | Gets a value indicating whether this instance is a parent expression. | 
| `DataKind` | Kind | Gets the expression kind. | 
| `Int32` | Tag | Get the expression's tag - a special identifier that is used to distinguish the type of the expression . | 
| `String` | Text | Gets the expression text. For this type it returns entity name + attribute caption. | 
| `String` | Value | Gets or sets the expression value. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AssignExpr(`EqExpression` expr) | Assigns some expression to this one.  This method just does nothing in the base class but can perform some actions in Expression descendants. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads expression from XML. | 
| `void` | ReadOnePropFromJson(`JsonReader` reader, `String` propName) | Reads one property of the expression. or skips unused from the JSON reader. | 
| `Task` | ReadOnePropFromJsonAsync(`JsonReader` reader, `String` propName) | Reads one property of the expression (asynchronous way). or skips unused from the JSON reader. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves the expression to XML writer. | 
| `void` | SetAttribute(`EntityAttr` attr) | Sets the entity attribute. | 
| `void` | SetContentSilent(`String` val, `String` txt) | Sets the content of the expression silently (without calling ContentChanged event). | 
| `void` | WritePropertiesToJson(`JsonWriter` writer) | Saves propeerties of the expression (asynchronous way). to JSON writer. | 
| `Task` | WritePropertiesToJsonAsync(`JsonWriter` writer) | Saves propeerties of the expression (asynchronous way). to JSON writer. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | TextFormat | Gets or sets the format of the text representation for this type of expression. |