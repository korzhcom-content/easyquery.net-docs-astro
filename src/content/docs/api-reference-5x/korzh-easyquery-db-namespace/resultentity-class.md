---
title: ResultEntity class
slug: api-reference-5x/korzh-easyquery-db-namespace/resultentity-class
---

Represents a table used in query.
```csharp
public class Korzh.EasyQuery.Db.ResultEntity

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `ResultEntityList` | ChildEntites | Gets the list of child tables. | 
| `Entity` | Entity | Gets the table. | 
| `DbEntityLink` | Link | Link to other (parent) table used in query. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `ResultEntity` | AddChildEntity(`Entity` entity, `DbEntityLink` link) | Adds the child entity. | 
| `ResultEntity` | FindEntityByName(`String` name) | Finds the table in result entity by its name |