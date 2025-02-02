---
title: QueryColumnChangingEventArgs class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnchangingeventargs-class
---


Provides data for [Korzh.EasyQuery.Query.ColumnsChanging](/api-reference/korzh-easyquery/korzh-easyquery-namespace/query-class) event
```csharp
public class Korzh.EasyQuery.QueryColumnChangingEventArgs
    : QueryColumnsChangeEventArgs

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryColumnChangingEventArgs([ChangeType](/api-reference/korzh-easyquery/korzh-easyquery-namespace/changetype-enum) what, [QueryColumn](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumn-class) column, `int` info, `int` part = 0) | `void` | Initializes a new instance of the [Korzh.EasyQuery.QueryColumnChangingEventArgs](/api-reference/korzh-easyquery/korzh-easyquery-namespace/querycolumnchangingeventargs-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Accepted | `bool` | Gets or sets a value indicating whether the change represented by this event is accepted. |