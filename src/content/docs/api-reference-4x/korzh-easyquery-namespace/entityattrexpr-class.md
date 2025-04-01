---
title: EntityAttrExpr class
slug: api-reference-4x/korzh-easyquery-namespace/entityattrexpr-class
sidebar:
  order: 100
---

An Expression descendant which represents an attribute.
```csharp
public abstract class Korzh.EasyQuery.EntityAttrExpr
    : EqExpression

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `EntityAttr` | Attribute | Gets or sets the attribute. | 
| `String` | CustomFunc | Gets the custom func for expression if defined | 
| `DataType` | DataType | Gets the type of the expression. | 
| `Boolean` | IsParentExpr | Gets a value indicating whether this instance is a parent expression. | 
| `DataKind` | Kind | Gets the expression kind. | 
| `String` | Text | Gets the expression text. For this type it returns entity name + attribute caption. | 
| `String` | TypeName | Non-static version of [Korzh.EasyQuery.EntityAttrExpr.STypeName](///////////////easyquery/docs/api-reference-4x/korzh-easyquery-namespace/entityattrexpr-class) property. | 
| `String` | Value | Gets or sets the expression value. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AssignExpr(`EqExpression` expr) | Assigns some expression to this one.  This method just does nothing in the base class but can perform some actions in Expression descendants. | 
| `void` | Init(`DataModel` model, `EntityAttr` attr) | Initializes a new instance of the [Korzh.EasyQuery.EntityAttrExpr](///////////////easyquery/docs/api-reference-4x/korzh-easyquery-namespace/entityattrexpr-class) class with specified model and attribute. | 
| `void` | LoadFromJsonDict(`JsonDict` dict) | Loads expression from IDictionary object (used when we load query from JSON). | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads expression from XML. | 
| `void` | SaveToJsonDictCore(`JsonDict` dict) | Saves expression's properties to dictionary (used to serialize expression into JSON)  This is an abstract method which should be overridden in descendant classes. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer, `String` tagName) | Saves the expression to XML writer. | 
| `void` | SetAttribute(`EntityAttr` attr) | Sets the entity attribute. | 
| `void` | SetContentSilent(`String` val, `String` txt) | Sets the content of the expression silently (without calling ContentChanged event). | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the expression type. | 
| `String` | TextFormat | Gets or sets the format of the text representation for this type of expression. |
