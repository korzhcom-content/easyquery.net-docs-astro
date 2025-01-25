---
title: TableLink class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class
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
| TableLink() | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.TableLink](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ConditionExpr | `string` | Gets or sets the expression of link condition.  This expression will be used if [Korzh.EasyQuery.Db.TableLink.Conditions](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) list is empty. | 
| Conditions | [TableLink.ConditionList](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-conditionlist-class) | Gets list of linking conditions. | 
| IsEnabled | `bool` | Determines whether the link can be used on query building. | 
| LnkType | [TableLinkType](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinktype-enum) | Gets or sets the type of the link (inner, left, right or full). | 
| Model | [DbModel](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) |  | 
| QuoteFields | `bool` | Gets or sets a value indicating whether field names in link conditions should be quoted in SQL expressions. | 
| Table1 | [Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) | Gets or sets the first table of the link. | 
| Table2 | [Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) | Gets or sets the second table of the link. | 
| UseHash | `bool` | Gets or sets value indicating wether database should use hash join algorithm  (experimental feature) | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddCondition([LinkCondType](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/linkcondtype-enum) condType, `string` expr1, `string` expr2, `string` operation) | [TableLink.Condition](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-condition-class) | Adds the link condition by two expressions and operation. | 
| ContainsTable([Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table) | `bool` | Returns true if the table passed in parameter participates in this link | 
| CopyFrom([TableLink](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link) | [TableLink](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) | Copy information from other link | 
| GetSqlExpr([SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the SQL expression of the link | 
| SwitchTables(`bool` changeLinkTypeAccordingly = False) | `void` | Switches the tables that participate in the link. Table1 become Table2 and vice versa.  So, the default direction of the link is changed. | 
| ToString() | `string` | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| StrToLinkType(`string` s) | [TableLinkType](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinktype-enum) | Converts text to [Korzh.EasyQuery.Db.TableLinkType](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinktype-enum) value. |