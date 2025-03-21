---
title: MetaEntity class
slug: easyquery/docs/api-reference/easydata-core/easydata-namespace/metaentity-class
---


Represents one entity
```csharp
public class EasyData.MetaEntity
    : IComparable<MetaEntity>

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| _model | [MetaData](/api-reference/easydata-core/easydata-namespace/metadata-class) |  | 
| Attributes | [MetaEntityAttrStore](/api-reference/easydata-core/easydata-namespace/metaentityattrstore-class) | List of Attributes that belong to this entity. | 
| ClrType | `Type` | Gets or sets the type of the entity. | 
| DbSetName | `string` | Gets or sets the name of the DbSet associated with entity | 
| Description | `string` | Gets or sets the description. | 
| Id | `string` | Gets or sets the entity identifier | 
| Index | `int` | Gets or sets the index of Entity | 
| IsEmpty | `bool` | Gets a value indicating whether this instance is empty. | 
| IsRoot | `bool` | Gets a value indicating whether this entity is a root entity. | 
| Model | [MetaData](/api-reference/easydata-core/easydata-namespace/metadata-class) | Gets the model. | 
| Name | `string` | Gets or sets the name of the entity. | 
| NamePlural | `string` | Gets or sets the name of the entity in plural form. | 
| Parent | [MetaEntity](/api-reference/easydata-core/easydata-namespace/metaentity-class) | Gets the parent entity. | 
| SubEntities | [MetaEntityStore](/api-reference/easydata-core/easydata-namespace/metaentitystore-class) | List of sub entities that belong to this entity. | 
| TypeName | `string` | Gets or sets the path for building query for complex types | 
| UserData | `object` | Gets or sets the user data object associated with entity. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CreateEntityAttrStore() | [MetaEntityAttrStore](/api-reference/easydata-core/easydata-namespace/metaentityattrstore-class) |  | 
| CreateEntityStore() | [MetaEntityStore](/api-reference/easydata-core/easydata-namespace/metaentitystore-class) |  | 
| DeleteSubEntities(`String[]` namesToDelete) | `int` | Deletes the sub-entities specified by name(s) passed in method's parameter(s). | 
| DeleteSubEntities(`Func`&lt;[MetaEntity](/api-reference/easydata-core/easydata-namespace/metaentity-class), `bool`&gt; entityToDeleteFilter) | `int` | Deletes the sub-entities specified by name(s) passed in method's parameter(s). | 
| FindAttribute(`Func`&lt;[MetaEntityAttr](/api-reference/easydata-core/easydata-namespace/metaentityattr-class), `bool`&gt; predicate) | [MetaEntityAttr](/api-reference/easydata-core/easydata-namespace/metaentityattr-class) |  | 
| FindAttributeByCaption(`string` caption) | [MetaEntityAttr](/api-reference/easydata-core/easydata-namespace/metaentityattr-class) |  | 
| FindAttributeByExpression(`string` expr) | [MetaEntityAttr](/api-reference/easydata-core/easydata-namespace/metaentityattr-class) |  | 
| FindAttributeById(`string` id) | [MetaEntityAttr](/api-reference/easydata-core/easydata-namespace/metaentityattr-class) |  | 
| FindSubEntity(`string` entityName) | [MetaEntity](/api-reference/easydata-core/easydata-namespace/metaentity-class) | Finds a sub-entity in current entity by its name. | 
| GetFirstLeaf() | [MetaEntityAttr](/api-reference/easydata-core/easydata-namespace/metaentityattr-class) | Gets the first attribute in all attributes and sub-entities of the current entity. | 
| GetFullName(`string` separator) | `string` | Gets the full name. | 
| ReadFromJsonAsync(`JsonReader` reader) | `Task` | Reads the entity content from JSON (asynchronous way). | 
| ReadOnePropertyFromJsonAsync(`JsonReader` reader, `string` propName) | `Task` | Reads one entity property from JSON (asynchronous way) or skips unused. | 
| Scan(`Action`&lt;[MetaEntity](/api-reference/easydata-core/easydata-namespace/metaentity-class)&gt; entityHandler, `Action`&lt;[MetaEntityAttr](/api-reference/easydata-core/easydata-namespace/metaentityattr-class)&gt; attrHandler, `bool` processRoot = True) | `void` | Scans all child entities and attributes (including this one one) calls entityHandler and attrHanlder delegates (correspondingly) for each of them | 
| WritePropertiesToJsonAsync(`JsonWriter` writer) | `Task` | Writes entity's properties to JSON (asynchronous way). | 
| WriteToJsonAsync(`JsonWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `Task` | Writes the content of the entity to JSON (asynchronious way) |