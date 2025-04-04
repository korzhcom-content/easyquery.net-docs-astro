---
title: DbPredicate class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbpredicate-class
sidebar:
  order: 100
---

Represents predicate in [Korzh.EasyQuery.Db.DbQuery](/easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbquery-class)
```csharp
public class Korzh.EasyQuery.Db.DbPredicate
    : Predicate, IDbCondition

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | TypeName | Gets the name of the condition type.  The same as STypeName but works for one particular instance of SimpleCondition class. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | GetUsedTables(`TableList` usedTables) | Returns list of tables used in condition. | 
| `void` | SaveToXmlWriter(`XmlWriter` writer) | Saves root condition group object to XML writer. | 


### Static Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | STypeName | Gets the name of the condition type used for saving to XML. |
