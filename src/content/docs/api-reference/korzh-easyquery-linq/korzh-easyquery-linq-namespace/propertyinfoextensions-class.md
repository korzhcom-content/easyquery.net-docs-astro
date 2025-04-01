---
title: PropertyInfoExtensions class
slug: >-
  api-reference/korzh-easyquery-linq/korzh-easyquery-linq-namespace/propertyinfoextensions-class
sidebar:
  order: 100
---

Static class whic contains extension methods for PropertyInfo class
```csharp
public static class Korzh.EasyQuery.Linq.PropertyInfoExtensions

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| Mapped(<span style='color: blue'>this</span> `IEnumerable`&lt;`PropertyInfo`&gt; source) | `IEnumerable`&lt;`PropertyInfo`&gt; | Filters the list of properties (defined by source parameter) to return only those which does not have "NotMapped" attribute. |
