---
title: QueryColumnChangingEventArgs class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnchangingeventargs-class
sidebar:
  order: 100
---

Provides data for [Korzh.EasyQuery.Query.ColumnsChanging](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) event
```csharp
public class Korzh.EasyQuery.QueryColumnChangingEventArgs
    : QueryColumnsChangeEventArgs

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryColumnChangingEventArgs([ChangeType](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/changetype-enum) what, [QueryColumn](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, `int` info, `int` part = 0) | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryColumnChangingEventArgs](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnchangingeventargs-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Accepted | `bool` | Gets or sets a value indicating whether the change represented by this event is accepted. |
