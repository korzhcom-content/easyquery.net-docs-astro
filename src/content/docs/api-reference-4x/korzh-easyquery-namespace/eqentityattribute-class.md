---
title: EqEntityAttribute class
slug: api-reference-4x/korzh-easyquery-namespace/eqentityattribute-class
---

Provides a general-purpose attribute that lets you specify different options for entity classes.
```csharp
public class Korzh.EasyQuery.EqEntityAttribute
    : Attribute

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | DisplayName | Gets the display name of entity. | 
| `Boolean` | Ignore | Gets or sets a value indicating whether this entity should be ignored during the model loading | 
| `Boolean` | UseInConditions | Gets or sets a value indicating whether this entity can be used in conditions | 
| `Boolean` | UseInResult | Gets or sets a value indicating whether this entity can be used in result | 
| `Boolean` | UseInSorting | Gets or sets a value indicating whether this entity can be used in sorting panel |