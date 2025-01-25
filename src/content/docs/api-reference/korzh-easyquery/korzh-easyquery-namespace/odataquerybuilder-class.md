---
title: ODataQueryBuilder class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/odataquerybuilder-class
---
Builds OData expressions
```csharp
public class Korzh.EasyQuery.ODataQueryBuilder
    : IQueryBuilder

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ODataQueryBuilder([Query](api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) query) | `void` | Initializes a new instance of the [Korzh.EasyQuery.ODataQueryBuilder](api-reference/korzh-easyquery/korzh-easyquery-namespace/odataquerybuilder-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| CanBuild | `bool` | Determines whether there is enough information to build the query | 
| Options | [QueryBuilderOptions](api-reference/korzh-easyquery/korzh-easyquery-namespace/querybuilderoptions-class) | Gets or sets the builder's options. | 
| Query | [Query](api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) | Gets the query this builder is defined for | 
| Result | [ODataStatement](api-reference/korzh-easyquery/korzh-easyquery-namespace/odatastatement-class) | Builder result. | 
| StatementType | `Type` | Gets the type of result object (string by default) | 
| UseUtcTime | `bool` | Gets or sets a value indicating whether the query builder will use UTC time zone for all date/time values (like FirstDayOfYear and others). | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Build() | `bool` | Builds the query and stores the result OData filter in the [Korzh.EasyQuery.ODataQueryBuilder.Result](api-reference/korzh-easyquery/korzh-easyquery-namespace/odataquerybuilder-class) property. |