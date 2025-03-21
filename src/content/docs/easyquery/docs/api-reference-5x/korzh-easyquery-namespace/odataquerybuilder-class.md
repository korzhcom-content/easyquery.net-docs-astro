---
title: ODataQueryBuilder class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-namespace/odataquerybuilder-class
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
| `IQueryFormats` | Formats | Gets the builder formats. | 
| `Query` | Query | Gets the query this builder is defined for | 
| `Type` | ResultType | Gets the type of result object (string by default) | 
| `Boolean` | UseUtcTime | Gets or sets a value indicating whether the query builder will use UTC time zone for all date/time values (like FirstDayOfYear and others). | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | Build() | Builds the query and returns the OData string | 
| `QueryBuilderResult` | GetResult() | Gets the result object.  In this case it represents an ODATA filtering expression. | 
| `String` | ToString() | Returns a `System.String` that represents this instance. |