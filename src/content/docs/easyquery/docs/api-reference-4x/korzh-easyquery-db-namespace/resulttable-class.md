---
title: ResultTable class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/resulttable-class
---


Represents a table used in query.
```csharp
public class Korzh.EasyQuery.Db.ResultTable

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `ResultTableList` | ChildTables | Gets the list of child tables. | 
| `TableLink` | Link | Link to other (parent) table used in query. | 
| `Table` | Table | Gets the table. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `ResultTable` | AddChildTable(`Table` aTable, `TableLink` aLink) | Adds the child table. | 
| `ResultTable` | FindTableByAlias(`String` alias) | Finds the table in result table tree by its alias. |