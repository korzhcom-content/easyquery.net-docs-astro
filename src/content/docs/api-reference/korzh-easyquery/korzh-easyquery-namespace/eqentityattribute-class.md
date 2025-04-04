---
title: EqEntityAttribute class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/eqentityattribute-class
sidebar:
  order: 100
---

Provides a general-purpose attribute that lets you specify different options for entity classes.
```csharp
public class Korzh.EasyQuery.EqEntityAttribute
    : Attribute

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqEntityAttribute(`bool` include) | `void` | Initializes a new instance of the [Korzh.EasyQuery.EqEntityAttribute](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqentityattribute-class) class. | 
| EqEntityAttribute() | `void` | Initializes a new instance of the [Korzh.EasyQuery.EqEntityAttribute](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqentityattribute-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DisplayName | `string` | Gets the display name of entity. | 
| Ignore | `bool` | Gets or sets a value indicating whether this entity should be ignored during the model loading | 
| Index | `int` | Gets or sets the index for Entity | 
| UseInConditions | `bool` | Gets or sets a value indicating whether this entity can be used in conditions | 
| UseInResult | `bool` | Gets or sets a value indicating whether this entity can be used in result | 
| UseInSorting | `bool` | Gets or sets a value indicating whether this entity can be used in sorting panel |
