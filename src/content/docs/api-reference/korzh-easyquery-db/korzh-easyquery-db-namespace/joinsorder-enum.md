---
title: JoinsOrder enum
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/joinsorder-enum
---
Represents differt types of table order in the FROM clause of generated SQL statement
```csharp
public enum Korzh.EasyQuery.Db.JoinsOrder
    : Enum

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Enum

| Name | Value | Description | 
| --- | --- | --- | 
| Basic | `0` | No particular order. The tables in FROM section will be listed in the same order how they appear in the query | 
| LinksDirection | `1` | The table with the most "outbounds" links will be listed first.  After that tables are linked according to their connections with the "root" table. | 
| TablePriority | `2` | The table with the highest value of Priority field will be listed first. |