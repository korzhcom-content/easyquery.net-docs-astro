---
title: DbEntity class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbentity-class
sidebar:
  order: 100
---

Base SQL Entity
```csharp
public class Korzh.EasyQuery.Db.DbEntity
    : Entity, IComparable<Entity>

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `ICollection<DbEntityLink>` | EntityLinks | Gets the entity links. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `EntityAttr` | FindAttribute(`EntityAttrProp` what, `String` val) | Finds the attribute by its ID. | 
| `void` | LoadNodes(`XmlReader` reader) | Loads the root nodes of the entity. |
