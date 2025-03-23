---
title: Entity class
slug: api-reference-4x/korzh-easyquery-namespace/entity-class
---


Represents one entity
```csharp
public class Korzh.EasyQuery.Entity
    : IComparable<Entity>

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Entity` | parent |  | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `EntityAttrStore` | Attributes | List of Attributes that belong to this entity. | 
| `String` | DbSetName | Gets or sets the name of the DbSet associated with entity | 
| `String` | Description | Gets or sets the description. | 
| `String` | Id | Gets or sets the entity identifier | 
| `Boolean` | IsEmpty | Gets a value indicating whether this instance is empty. | 
| `Boolean` | IsRoot | Gets a value indicating whether this entity is a root entity. | 
| `DataModel` | Model | Gets the model. | 
| `String` | Name | Gets or sets the name of the entity. | 
| `Type` | ObjType | Gets or sets the type of the entity. | 
| `Entity` | Parent | Gets the parent entity. | 
| `EntityStore` | SubEntities | List of sub entities that belong to this entity. | 
| `String` | TypeName | Gets or sets the path for building query for complex types | 
| `Boolean` | UseInConditions | Gets or sets a value indicating whether the attribute can be used in query conditions. | 
| `Boolean` | UseInResult | Gets or sets a value indicating whether the attribute can be used in result columns (SELECT clause). | 
| `Boolean` | UseInSorting | Gets or sets a value indicating whether the attribute can be used in sorting. | 
| `Object` | UserData | Gets or sets the user data object associated with entity. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `EntityAttr` | FindAttribute(`EntityAttrProp` what, `String` val) | Finds the attribute by its ID. | 
| `Entity` | FindSubEntity(`String` entityName) | Finds a sub-entity in current entity by its name. | 
| `EntityAttr` | GetFirstLeaf() | Gets the first attribute in all attributes and sub-entities of the current entity. | 
| `String` | GetFullName(`String` separator) | Gets the full name. | 
| `void` | LoadAttribute(`String` propname, `String` propvalue) | Loads the attribute of the entity. | 
| `void` | LoadFromXmlReader(`XmlReader` reader) | Loads entity from XML reader. | 
| `void` | LoadNodes(`XmlReader` reader) | Loads the root nodes of the entity. | 
| `void` | OnModelAssignment() | Called when the entity is inserted into model. | 
| `void` | SaveAttributes(`XmlWriter` writer) | Saves the entity attributes. | 
| `void` | SaveNodes(`XmlWriter` writer) | Saves the entity nodes. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves the entity to XML writer. | 
| `void` | Scan(`Action<Entity>` entityHandler, `Action<EntityAttr>` attrHandler, `Boolean` processRoot = True) | Scans all child entities and attributes (including this one one) calls entityHandler and attrHanlder delegates (correspondingly) for each of them |