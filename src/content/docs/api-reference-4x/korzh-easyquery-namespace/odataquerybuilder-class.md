---
title: ODataQueryBuilder class
slug: api-reference-4x/korzh-easyquery-namespace/odataquerybuilder-class
---


Builds OData expressions
```csharp
public class Korzh.EasyQuery.ODataQueryBuilder
    : IQueryBuilder

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | CanBuild | Determines whether there is enough information to build the query | 
| `Type` | ResultType | Gets the type of result object (string by default) | 
| `Boolean` | UseUtcTime | Gets or sets a value indicating whether the query builder will use UTC time zone for all date/time values (like FirstDayOfYear and others). | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Build() | Builds the query and returns the OData string | 
| `QueryBuilderResult` | GetResult() |  | 
| `String` | ToString() | Returns a `System.String` that represents this instance. |