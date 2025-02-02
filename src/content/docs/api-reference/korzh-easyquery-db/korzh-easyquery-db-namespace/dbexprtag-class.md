---
title: DbExprTag class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbexprtag-class
---


Contains several constants for db-related expressions tags values
```csharp
public static class Korzh.EasyQuery.Db.DbExprTag

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| CustomSql | `int` | Constant expression | 


### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| OldClassNameToTag(`string` className) | `int` | Converts old class name to tag. | 
| TagToOldClassName(`int` tag) | `string` | Converts the expression's tag value to the name of old expression class (like "CONST" or "ENTATTR"). |