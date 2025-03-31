---
title: DbExprTag class
slug: api-reference-5x/korzh-easyquery-db-namespace/dbexprtag-class
---

Contains several constants for db-related expressions tags values
```csharp
public static class Korzh.EasyQuery.Db.DbExprTag

```

### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | CustomSql | Constant expression | 


### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | OldClassNameToTag(`String` className) | Converts old class name to tag. | 
| `String` | TagToOldClassName(`Int32` tag) | Converts the expression's tag value to the name of old expression class (like "CONST" or "ENTATTR"). |