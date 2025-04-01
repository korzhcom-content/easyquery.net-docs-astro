---
title: EntityAttrExpr class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattrexpr-class
sidebar:
  order: 100
---

An EqExpression descendant that represents an entity attribute.
```csharp
public class Korzh.EasyQuery.EntityAttrExpr
    : EqExpression

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntityAttrExpr([DataModel](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [EntityAttr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Attribute | [EntityAttr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Gets or sets the attribute. | 
| CustomFunc | `string` | Gets the custom func for expression if defined | 
| DataType | [DataType](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Gets the type of the expression. | 
| IsAggregate | `bool` | Gets a value indicating whether this expression is aggregate. | 
| IsParentExpr | `bool` | Gets a value indicating whether this instance is a parent expression. | 
| Kind | [DataKind](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datakind-enum) | Gets the expression kind. | 
| Tag | `int` | Get the expression's tag - a special identifier that is used to distinguish the type of the expression . | 
| Text | `string` | Gets the expression text. For this type it returns entity name + attribute caption. | 
| Value | `string` | Gets or sets the expression value. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AssignExpr([EqExpression](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqexpression-class) expr) | `void` | Assigns some expression to this one.  This method just does nothing in the base class but can perform some actions in Expression descendants. | 
| LoadFromXmlReader(`XmlReader` reader) | `void` | Loads expression from XML. | 
| ReadOnePropFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one property of the expression (asynchronous way). or skips unused from the JSON reader. | 
| SaveToXmlWriter(`XmlWriter` writer, `string` tagName) | `void` | Saves the expression to XML writer. | 
| SetAttribute([EntityAttr](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `void` | Sets the entity attribute. | 
| SetContentSilent(`string` val, `string` txt) | `void` | Sets the content of the expression silently (without calling ContentChanged event). | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Saves propeerties of the expression (asynchronous way). to JSON writer. |
