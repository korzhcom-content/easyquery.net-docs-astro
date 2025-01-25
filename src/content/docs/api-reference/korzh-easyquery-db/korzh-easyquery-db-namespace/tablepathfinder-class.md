---
title: TablePathFinder class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablepathfinder-class
---
Contains logic for finding path between two tables
```csharp
public class Korzh.EasyQuery.Db.TablePathFinder

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TablePathFinder() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| FindPath([Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table1, [Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) table2) | [Path](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/path-class) | CalcPath method finds a path between tables and return it to caller or  returns null if there is no any path between specified tables. |