---
title: IQueryBuilder interface
slug: api-reference-4x/korzh-easyquery-namespace/iquerybuilder-interface
sidebar:
  order: 100
---

Interface IQueryBuilder - represents general-purpose query builder
```csharp
public interface Korzh.EasyQuery.IQueryBuilder

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Type` | ResultType | Gets the the result type. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `QueryBuilderResult` | GetResult() | Gets the result object.  It could be some SQL statement or and an IQueryable object created by LINQ query builder. |
