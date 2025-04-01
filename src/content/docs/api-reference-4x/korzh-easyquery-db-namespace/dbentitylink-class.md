---
title: DbEntityLink class
slug: api-reference-4x/korzh-easyquery-db-namespace/dbentitylink-class
sidebar:
  order: 100
---

Represents link between two tables
```csharp
public class Korzh.EasyQuery.Db.DbEntityLink

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | ConditionExpr | Gets or sets the expression of link condition.  This expression will be used if [Korzh.EasyQuery.Db.DbEntityLink.Conditions](///////////////easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/dbentitylink-class) list is empty. | 
| `ConditionList` | Conditions | Gets list of linking conditions. | 
| `DbEntity` | Entity1 | Gets or sets the first entity of the link. | 
| `DbEntity` | Entity2 | Gets or sets the second entity of the link. | 
| `LinkType` | LnkType | Gets or sets the type of the link (inner, left, right or full). | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Condition` | AddCondition(`LinkCondType` condType, `String` expr1, `String` expr2, `String` operation) | Adds the link condition by two expressions and operation. | 
| `String` | GetSqlExpr(`DbQueryFormats` formats) | Gets the SQL expression of the link | 
| `String` | ToString() | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `LinkType` | StrToLinkType(`String` s) | Converts text to `TableLink.LinkType` value. |
