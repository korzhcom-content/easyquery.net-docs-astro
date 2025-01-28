---
title: LinqStatement class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.Linq namespace/linqstatement-class
---


Represents the result of performing Build function call of LinqQueryBuilder.
```csharp
public class Korzh.EasyQuery.Linq.LinqStatement
    : QueryBuilderResult

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `IQueryable` | ResultQueryable | Gets or sets the queryable result object. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | GetStatement() | Returns the statement (not used in case of LINQ queries). |