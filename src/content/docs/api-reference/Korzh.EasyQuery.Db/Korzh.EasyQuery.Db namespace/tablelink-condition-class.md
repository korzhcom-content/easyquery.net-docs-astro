---
title: TableLink.Condition class
slug: api-reference/Korzh.EasyQuery.Db/Korzh.EasyQuery.Db namespace/tablelink-condition-class
---


Represents linking condition
```csharp
public class Korzh.EasyQuery.Db.TableLink.Condition

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| Condition([TableLink](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.TableLink.Condition](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) class. | 
| Condition([TableLink](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link, [Condition](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-condition-class) cond) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Db.TableLink.Condition](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| CondType | [LinkCondType](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/linkcondtype-enum) | Gets or sets the type of condition (field to field or field to expression). | 
| CustomExpr | `string` | Gets or sets the custom expression of condition (if 'CustomExpr' condition type is used) | 
| Expr1 | `string` | Gets or sets the left side of linking condition. | 
| Expr2 | `string` | Gets or sets the right side of linking condition. | 
| Info | `IDictionary`&lt;`string`, `object`&gt; | Stores additional information associated with this condition | 
| Operator | `string` | Gets or sets the condition operator. | 
| Table1 | [Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) | Gets the first (left) table taken part in link. | 
| Table2 | [Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) | Gets the second (right) table taken part in link. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetSqlExpr([SqlFormats](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/sqlformats-class) formats) | `string` | Gets the SQL expression that represents the condition. | 
| ToString() | `string` | Returns a <see cref="T:System.String"></see> that represents the current <see cref="T:System.Object"></see>. | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LinkCondTypeToStr([LinkCondType](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/linkcondtype-enum) type) | `string` | Convert [Korzh.EasyQuery.Db.LinkCondType](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/linkcondtype-enum) value to its text representation | 
| StrToLinkCondType(`string` s) | [LinkCondType](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/linkcondtype-enum) | Allows to get [Korzh.EasyQuery.Db.LinkCondType](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/linkcondtype-enum) by its text representation |