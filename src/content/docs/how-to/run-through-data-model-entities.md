---
title: Navigate through data model entities and attributes
slug: how-to/run-through-data-model-entities
---


Sometimes you need to run through all entities and attributes in your data model to perform some operation for each of them or to find a particular entity or attribute. Here is a code snippet which demonstrates this operation: 

```js
private void RunThroughEntity(Entity entity) {
  //do whatever you need with this entity
 
  //run through all sub-entities
  foreach (Entity ent in entity.SubEntities) {
  RunThroughEntity(ent);
  }
 
  //run through all attributes of this entity
  for each (EntityAttr attr in entity.Attributes) {
  //do whatever you need with this attribute
  }
 
}
 
. . . . . . . . . . .
 
//to start the process just call this function for the root entity and your model
RunThroughEntity(dataModel1.EntityRoot);
```