---
title: EqEntityAttrAttribute class
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqentityattrattribute-class
---


Provides a general-purpose attribute that lets you specify different options for entity attribute classes.
```csharp
public class Korzh.EasyQuery.EqEntityAttrAttribute
    : Attribute

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqEntityAttrAttribute(`bool` include) | `void` | Initializes a new instance of the [Korzh.EasyQuery.EqEntityAttrAttribute](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqentityattrattribute-class) class. | 
| EqEntityAttrAttribute() | `void` | Initializes a new instance of the [Korzh.EasyQuery.EqEntityAttrAttribute](/api-reference/korzh-easyquery/korzh-easyquery-namespace/eqentityattrattribute-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DisplayFormat | `string` | Gets or sets the display format of attribute | 
| DisplayName | `string` | Gets the display name of entity. | 
| Ignore | `bool` | Gets or sets a value indicating whether this entity attribute should be ignored during the model loading | 
| Index | `int` | Gets or sets the index for EntityAttr | 
| UseInConditions | `bool` | Gets or sets a value indicating whether this entity attribute can be used in conditions | 
| UseInResult | `bool` | Gets or sets a value indicating whether this entity attribute can be used in result | 
| UseInSorting | `bool` | Gets or sets a value indicating whether this entity attribute can be used in sorting panel |