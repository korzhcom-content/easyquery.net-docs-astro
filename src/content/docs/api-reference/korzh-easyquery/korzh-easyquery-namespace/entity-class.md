---
title: Entity class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class
sidebar:
  order: 100
---

Represents one entity
```csharp
public class Korzh.EasyQuery.Entity
    : MetaEntity, IComparable<Entity>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Attributes | [EntityAttrStore](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattrstore-class) |  | 
| Model | [DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) | Gets the model. | 
| ObjType | `Type` |  | 
| Parent | [Entity](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) | Gets the parent entity. | 
| SubEntities | [EntityStore](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entitystore-class) |  | 
| UseInConditions | `bool` | Gets or sets a value indicating whether the attribute can be used in query conditions. | 
| UseInResult | `bool` | Gets or sets a value indicating whether the attribute can be used in result columns (SELECT clause). | 
| UseInSorting | `bool` | Gets or sets a value indicating whether the attribute can be used in sorting. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CreateEntityAttrStore() | [MetaEntityAttrStore](///easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentityattrstore-class) |  | 
| CreateEntityStore() | [MetaEntityStore](///easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentitystore-class) |  | 
| DeleteSubEntities(`Func`&lt;[Entity](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class), `bool`&gt; entityToDeleteFilter) | `int` | Deletes the sub-entities. | 
| FindAttribute(`Func`&lt;[EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class), `bool`&gt; predicate) | [EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) |  | 
| FindAttributeByCaption(`string` caption) | [EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) |  | 
| FindAttributeByExpression(`string` expr) | [EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) |  | 
| FindAttributeById(`string` id) | [EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Finds the attribute by its ID. | 
| FindSubEntity(`string` entityName) | [Entity](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) | Finds a sub-entity in current entity by its name. | 
| GetFirstLeaf() | [EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class) | Gets the first attribute in all attributes and sub-entities of the current entity. | 
| Hide() | `void` | Hides this entity (turns off UseInConditions, UseInResult and UseInSorting) | 
| ReadOnePropertyFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one entity property from JSON (asynchronous way) or skips unused. | 
| Scan(`Action`&lt;[Entity](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class)&gt; entityHandler, `Action`&lt;[EntityAttr](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattr-class)&gt; attrHandler, `bool` processRoot = True) | `void` | Scans all child entities and attributes (including this one one) calls entityHandler and attrHanlder delegates (correspondingly) for each of them | 
| Show() | `void` | Shows this entity (turns on UseInConditions, UseInResult and UseInSorting) | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Writes entity's properties to JSON (asynchronous way). |
