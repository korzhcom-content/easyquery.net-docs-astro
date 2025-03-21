---
title: ResultSetOptions class
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/resultsetoptions-class
---


Represents some options used on fetching data and result set filling.
```csharp
public class Korzh.EasyQuery.Services.ResultSetOptions

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ResultSetOptions() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| AfterColumnsAdded | `Action` | Gets or sets the callback function that is called after the column list is filled (so befor adding the first row) | 
| BeforeAddColumn | `Func`&lt;[EasyDataCol](/api-reference/easydata-core/easydata-namespace/easydatacol-class), `bool`&gt; | Gets or sets the callback function that is called before adding a column to the result set. | 
| BeforeAddRow | `Func`&lt;[EasyDataRow](/api-reference/easydata-core/easydata-namespace/easydatarow-class), `IReadOnlyList`&lt;[EasyDataCol](/api-reference/easydata-core/easydata-namespace/easydatacol-class)&gt;, `bool`&gt; | Gets or sets the callback function that is called before adding a row to the result set. | 
| RowNumberColumnName | `string` | Gets or sets the name of the column that holds the number of rows in the result set. | 
| UseTimezoneOffset | `bool` | Gets or sets value indicating wether timezone offset from query  should be applied to the result |