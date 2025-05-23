---
title: FullTextSearchOptions class
slug: api-reference-5x/korzh-easyquery-linq-namespace/fulltextsearchoptions-class
sidebar:
  order: 100
---

Contains options for full text search
```csharp
public class Korzh.EasyQuery.Linq.FullTextSearchOptions

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | Depth | Depth of full text search. | 
| `Func<PropertyInfo, Boolean>` | Filter | Lamda expression, which filters properties to use in full text search | 
| `Boolean` | IsDescendingOrder | if set to <c>true</c> then we use descending order | 
| `String` | OrderBy | The name of the property to order by the result list |
