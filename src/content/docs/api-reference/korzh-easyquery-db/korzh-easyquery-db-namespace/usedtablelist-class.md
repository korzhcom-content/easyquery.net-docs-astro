---
title: UsedTableList class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/usedtablelist-class
sidebar:
  order: 100
---

Represents a list of "used" tables.  The only difference with orginal TableList is that this class doesn't allow to insert already existing table and inserts tables in list according their priority
```csharp
public class Korzh.EasyQuery.Db.UsedTableList
    : TableList

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| UsedTableList() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| InsertItem(`int` index, [Table](///////////////easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) item) | `void` | Inserts the item. |
