---
title: LinqStatement class
slug: api-reference-4x/korzh-easyquery-linq-namespace/linqstatement-class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.Linq.LinqStatement
    : QueryBuilderResult

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `IQueryable` | ResultQueryable |  | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetStatement() | Returns the statement (SQL, filter expression, etc - depending on the concrete QueryBuilderResult type). |
