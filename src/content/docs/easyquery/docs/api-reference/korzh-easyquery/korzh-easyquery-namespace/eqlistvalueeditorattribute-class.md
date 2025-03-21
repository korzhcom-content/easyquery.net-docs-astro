---
title: EqListValueEditorAttribute class
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqlistvalueeditorattribute-class
---


Assigns a "List" value editor for an entity member.
```csharp
public class Korzh.EasyQuery.EqListValueEditorAttribute
    : Attribute

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqListValueEditorAttribute(`string` listName = <span style='color: blue'>null</span>) | `void` | Initializes a new instance of the [Korzh.EasyQuery.EqListValueEditorAttribute](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqlistvalueeditorattribute-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Id | `string` | Gets or sets the ID of list value editor  It might be necessary to preserve the same value editor's ID between consequent HTTP requests. | 
| ListName | `string` | Gets the name of the list. | 
| LookupDisplayOrder | [SortDirection](/api-reference/korzh-easyquery/korzh-easyquery-namespace/sortdirection-enum) | Gets or sets the order of the lookup values. | 
| LookupDisplayProperty | `string` | Gets or sets the name of the property in the lookup entity from which we get the textual values to show to the users. | 
| SQL | `string` | Gets or sets the SQL | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ProcessEntityAttr([EntityAttr](/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) attr) | `void` | Adds necessary value editor into the entity attribute passed in parameter. |