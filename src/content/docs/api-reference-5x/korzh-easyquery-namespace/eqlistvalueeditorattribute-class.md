---
title: EqListValueEditorAttribute class
slug: api-reference-5x/korzh-easyquery-namespace/eqlistvalueeditorattribute-class
---


Assigns a "List" value editor for an entity member.
```csharp
public class Korzh.EasyQuery.EqListValueEditorAttribute
    : Attribute

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Id | Gets or sets the ID of list value editor  It might be necessary to preserve the same value editor's ID between consequent HTTP requests. | 
| `String` | ListName | Gets the name of the list. | 
| `SortDirection` | LookupDisplayOrder | Gets or sets the order of the lookup values. | 
| `String` | LookupDisplayProperty | Gets or sets the name of the property in the lookup entity from which we get the textual values to show to the users. | 
| `String` | SQL | Gets or sets the SQL | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | ProcessEntityAttr(`EntityAttr` attr) | Adds necessary value editor into the entity attribute passed in parameter. |