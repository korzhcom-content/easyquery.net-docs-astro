---
title: EntityAttrProp enum
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery namespace/entityattrprop-enum
---


Represents attribute property used in FindAttribute methods
```csharp
public enum Korzh.EasyQuery.EntityAttrProp
    : Enum, IComparable, IFormattable, IConvertible

```

### Enum

| Value | Name | Description | 
| --- | --- | --- | 
| `0` | ID | Attribute ID | 
| `1` | Caption | Attribute caption | 
| `2` | Expression | Some expression (should be defined in descendants). Same as ID for [Korzh.EasyQuery.Entity](/api-reference-5x/korzh-easyquery-namespace/entity-class) class. |