---
title: TableLink class
slug: api-reference-4x/korzh-easyquery-db-namespace/tablelink-class
sidebar:
  order: 100
---

Represents link between two tables
```csharp
public class Korzh.EasyQuery.Db.TableLink

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | ConditionExpr | Gets or sets the expression of link condition.  This expression will be used if [Korzh.EasyQuery.Db.TableLink.Conditions](///////////////easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/tablelink-class) list is empty. | 
| `ConditionList` | Conditions | Gets list of linking conditions. | 
| `LinkType` | LnkType | Gets or sets the type of the link (inner, left, right or full). | 
| `Boolean` | QuoteFields | Gets or sets a value indicating whether field names in link conditions should be quoted in SQL expressions. | 
| `Table` | Table1 | Gets or sets the first table of the link. | 
| `Table` | Table2 | Gets or sets the second table of the link. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Condition` | AddCondition(`LinkCondType` condType, `String` expr1, `String` expr2, `String` operation) | Adds the link condition by two expressions and operation. | 
| `void` | AddConditionExpr(`String` condExpr) |  | 
| `void` | ClearParent() | Clears the reference to parent list. | 
| `Boolean` | ContainsTable(`Table` table) | Returns true if the table passed in parameter participates in this link | 
| `TableLink` | CopyFrom(`TableLink` link) | Gets or sets a value indicating whether field names in link conditions should be quoted in SQL expressions. | 
| `void` | EnsureExistenceInTables() | Ensures the existence in tables. | 
| `String` | GetSqlExpr(`DbQueryFormats` formats) | Gets the SQL expression of the link | 
| `void` | RemoveFromTables() | Removes link reference from linked tables. | 
| `void` | SetParent(`TableLinkList` parent) | Sets the reference to parent list. | 
| `void` | SetTable1Silently(`Table` tbl1) |  | 
| `void` | SetTable2Silently(`Table` tbl2) |  | 
| `String` | ToString() | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `LinkType` | StrToLinkType(`String` s) | Converts text to [Korzh.EasyQuery.Db.TableLink.LinkType](///////////////easyquery/docs/api-reference-4x/korzh-easyquery-db-namespace/tablelink-class) value. |
