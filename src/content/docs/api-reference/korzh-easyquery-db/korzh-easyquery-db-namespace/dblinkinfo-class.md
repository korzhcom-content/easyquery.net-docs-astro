---
title: DbLinkInfo class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dblinkinfo-class
---

Represents a structure that contains information about some link between two database tables
```csharp
public class Korzh.EasyQuery.Db.DbLinkInfo

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbLinkInfo(`string` table1, `string` table2, `string` field1, `string` field2) | `void` | Initializes a new instance of the `DbLinkInfo` class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Field1Name | `string` | Gets or sets the name of the field from the table 1. | 
| Field2Name | `string` | Gets or sets the name of the field from the table 2. | 
| Table1Name | `string` | Gets or sets the name of the table 1. | 
| Table2Name | `string` | Gets or sets the name of the table 2. |