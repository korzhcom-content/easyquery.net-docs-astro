---
title: LinqStatement class
slug: api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/linqstatement-class
---


Represents the result of performing Build function call of LinqQueryBuilder.
```csharp
public class Korzh.EasyQuery.Linq.LinqStatement
    : QueryStatement

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| LinqStatement() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| ResultQueryable | `IQueryable` | Gets or sets the queryable result object. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetStatement() | `string` | Returns the statement (not used in case of LINQ queries). |