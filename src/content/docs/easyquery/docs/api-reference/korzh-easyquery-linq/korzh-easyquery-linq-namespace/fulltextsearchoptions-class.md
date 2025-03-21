---
title: FullTextSearchOptions class
slug: easyquery/docs/api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/fulltextsearchoptions-class
---


Contains options for full text search
```csharp
public class Korzh.EasyQuery.Linq.FullTextSearchOptions

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| FullTextSearchOptions() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Depth | `int` | Depth of full text search. | 
| Filter | `Func`&lt;`PropertyInfo`, `bool`&gt; | Lamda expression, which filters properties to use in full text search | 
| IsDescendingOrder | `bool` | if set to <c>true</c> then we use descending order | 
| OrderBy | `string` | The name of the property to order by the result list |