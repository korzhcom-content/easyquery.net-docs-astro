---
title: IQueryBuilder interface
slug: api-reference-5x/korzh-easyquery-namespace/iquerybuilder-interface
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
| `IQueryFormats` | Formats | Gets the builder formats. | 
| `Query` | Query | Gets the query this builder is defined for | 
| `Type` | ResultType | Gets the the result type. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `QueryBuilderResult` | GetResult() | Gets the result object.  It could be some SQL statement or and an IQueryable object created by LINQ query builder. |
