---
title: Path class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/path-class
---


Represents list of tables which are linked to each other
```csharp
public class Korzh.EasyQuery.Db.Path
    : TableList

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| Path() | `void` |  | 
| Path([Path](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/path-class) path) | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| EndPoint | [Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) | Gets the end point (the last table) in the path. | 
| Printed | `string` |  | 
| StartPoint | [Table](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/table-class) | Gets the start point (first table) of the path. | 
| Weight | `int` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ToString() | `string` |  |