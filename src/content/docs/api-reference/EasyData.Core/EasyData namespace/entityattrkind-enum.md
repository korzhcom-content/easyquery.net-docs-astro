---
title: EntityAttrKind enum
slug: api-reference/EasyData.Core/EasyData namespace/entityattrkind-enum
---


Represents an attribute's kind
```csharp
public enum EasyData.EntityAttrKind
    : Enum

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| Data | `0` | The data attribute represents a field in some database table | 
| Virtual | `1` | The virtual or calculated attribute does not has a direct representations in a database.  It is defined as a calculation of few data attributes (fields) | 
| Lookup | `2` | The lookup attribute represents the connection between two entities.  It usually correspond to a navigation property in a model class. |