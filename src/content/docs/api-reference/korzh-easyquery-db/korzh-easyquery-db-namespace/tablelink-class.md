---
title: TableLink class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class
sidebar:
  order: 100
---

Represents link between two tables
```csharp
public class Korzh.EasyQuery.Db.TableLink

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TableLink() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.TableLink](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionExpr | `string` | Gets or sets the expression of link condition.  This expression will be used if [Korzh.EasyQuery.Db.TableLink.Conditions](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) list is empty. | 
| Conditions | [TableLink.ConditionList](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-conditionlist-class) | Gets list of linking conditions. | 
| IsEnabled | `bool` | Determines whether the link can be used on query building. | 
| LnkType | [TableLinkType](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinktype-enum) | Gets or sets the type of the link (inner, left, right or full). | 
| Model | [DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) |  | 
| QuoteFields | `bool` | Gets or sets a value indicating whether field names in link conditions should be quoted in SQL expressions. | 
| Table1 | [Table](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) | Gets or sets the first table of the link. | 
| Table2 | [Table](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) | Gets or sets the second table of the link. | 
| UseHash | `bool` | Gets or sets value indicating wether database should use hash join algorithm  (experimental feature) | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddCondition([LinkCondType](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/linkcondtype-enum) condType, `string` expr1, `string` expr2, `string` operation) | [TableLink.Condition](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-condition-class) | Adds the link condition by two expressions and operation. | 
| ContainsTable([Table](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table) | `bool` | Returns true if the table passed in parameter participates in this link | 
| CopyFrom([TableLink](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link) | [TableLink](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) | Copy information from other link | 
| GetSqlExpr([SqlFormats](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the SQL expression of the link | 
| SwitchTables(`bool` changeLinkTypeAccordingly = False) | `void` | Switches the tables that participate in the link. Table1 become Table2 and vice versa.  So, the default direction of the link is changed. | 
| ToString() | `string` | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| StrToLinkType(`string` s) | [TableLinkType](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinktype-enum) | Converts text to [Korzh.EasyQuery.Db.TableLinkType](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinktype-enum) value. |
