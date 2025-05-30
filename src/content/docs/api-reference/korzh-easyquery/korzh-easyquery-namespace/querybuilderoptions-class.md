---
title: QueryBuilderOptions class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/querybuilderoptions-class
sidebar:
  order: 100
---

Contains differrent options for QueryBuilder
```csharp
public class Korzh.EasyQuery.QueryBuilderOptions

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryBuilderOptions() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Limit | `long` |  | 
| Offset | `long` |  | 
| UseParams | `bool` |  | 
| UseTimezoneOffset | `bool` | Gets or sets a value indicating whether query builder should use the timezone offset when generates date/time values.  The timezone offeset is usually received from the client side. | 
| UseUtcTime | `bool` | Gets or sets a value indicating whether the query builder will use UTC time zone for all date/time values (like FirstDayOfYear and others). |
