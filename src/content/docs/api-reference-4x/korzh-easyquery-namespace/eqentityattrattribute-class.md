---
title: EqEntityAttrAttribute class
slug: api-reference-4x/korzh-easyquery-namespace/eqentityattrattribute-class
---

Provides a general-purpose attribute that lets you specify different options for entity attribute classes.
```csharp
public class Korzh.EasyQuery.EqEntityAttrAttribute
    : Attribute

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | Ignore | Gets or sets a value indicating whether this entity attribute should be ignored during the model loading | 
| `Boolean` | UseInConditions | Gets or sets a value indicating whether this entity attribute can be used in conditions | 
| `Boolean` | UseInResult | Gets or sets a value indicating whether this entity attribute can be used in result | 
| `Boolean` | UseInSorting | Gets or sets a value indicating whether this entity attribute can be used in sorting panel |