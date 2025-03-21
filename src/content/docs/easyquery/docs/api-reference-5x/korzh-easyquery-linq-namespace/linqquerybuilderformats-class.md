---
title: LinqQueryBuilderFormats class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-linq-namespace/linqquerybuilderformats-class
---


Represents different formats which control LinqQueryBuilder behaviour.  This class is empty for now.
```csharp
public class Korzh.EasyQuery.Linq.LinqQueryBuilderFormats
    : IQueryFormats

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | UseTimezoneOffset | Gets or sets a value indicating whether query builder should use the timezone offset when generates date/time values.  The timezone offeset is usually received from the client side. | 
| `Boolean` | UseUtcTime | Gets or sets a value indicating whether the query builder will use UTC time zone for all date/time values (like FirstDayOfYear and others). | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | CopyFrom(`IQueryFormats` source) | Copies the formats from another formats object. |