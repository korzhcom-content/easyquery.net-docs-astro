---
title: TableLinkList class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinklist-class
sidebar:
  order: 100
---

Represents list of the links ([Korzh.EasyQuery.Db.TableLink](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) objects).
```csharp
public class Korzh.EasyQuery.Db.TableLinkList
    : Collection<TableLink>

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TableLinkList() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| FindByTables(`string` alias1, `string` alias2) | `IEnumerable`&lt;[TableLink](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class)&gt; | Finds links by tables. | 
| FindByTables([Table](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table1, [Table](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table2) | `IEnumerable`&lt;[TableLink](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class)&gt; | Finds links by tables. | 
| FindForeignKeyLink([Table](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table1, [Table](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table2, `string` field1, `string` field2) | [TableLink](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) | Finds a link created by some foreign key constraints. |
