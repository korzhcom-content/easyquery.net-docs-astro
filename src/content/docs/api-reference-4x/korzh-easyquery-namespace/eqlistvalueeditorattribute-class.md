---
title: EqListValueEditorAttribute class
slug: api-reference-4x/korzh-easyquery-namespace/eqlistvalueeditorattribute-class
sidebar:
  order: 100
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
| `String` | SQL | Gets or sets the SQL | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | ProcessEntityAttr(`EntityAttr` attr) | Adds necessary value editor into the entity attribute passed in parameter. |
