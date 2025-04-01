---
title: LinqQueryBuilder class
slug: api-reference-4x/korzh-easyquery-linq-namespace/linqquerybuilder-class
sidebar:
  order: 100
---

Builds Linq expressions
```csharp
public class Korzh.EasyQuery.Linq.LinqQueryBuilder
    : IQueryBuilder

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | CanBuild | Determines whether there is enough information to build the query | 
| `LinqStatement` | Result | Gets the result object | 
| `Type` | ResultType | Type of result set | 
| `Boolean` | SelectDistinct | Gets or sets a value indicating whether the result set must not contain duplicates. | 
| `Int32` | Skip | Gets or sets the number of items that will be skipped from result set. | 
| `Int32` | Take | Gets or sets the number of items that will be taken from result set. | 
| `Int32` | TimezoneOffset | Gets or sets the timezone offset for the special date values (like FirstDayOfYear). | 
| `Boolean` | UseUtcTime | Gets or sets a value indicating whether the query builder will use UTC time zone for all date/time values (like FirstDayOfYear and others). | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `IQueryable` | Build(`Object` context) | Builds the query and returns IQueryable object. | 
| `BuilderResult<T>` | Build() | Builds the query and returns IQueryable object. | 
| `IEnumerable` | BuildIEnumerable(`Object` context) | Builds IEnumerable expression for use in Linq2Objects scenarios, in other cases consider using Build() method for building IQueryable expression | 
| `QueryBuilderResult` | GetResult() | Gets the result object | 
| `String` | ToString() | Returns a `System.String` that represents this instance. |
