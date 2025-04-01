---
title: PagedList<T> class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-services-namespace/pagedlist-t--class
sidebar:
  order: 100
---

Default implementation of `IPagedList` interface
```csharp
public class Korzh.EasyQuery.Services.PagedList<T>
    : IPagedList<T>, IEnumerable<T>, IEnumerable, IPaging

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| PagedList(`IQueryable`&lt;`T`&gt; superset, `long` pageIndex, `long` pageSize) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.PagedList`1](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/pagedlist-t--class) class. | 
| PagedList(`IEnumerable`&lt;`T`&gt; superset, `long` pageIndex, `long` pageSize) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.PagedList`1](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/pagedlist-t--class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| subset | `List`&lt;`T`&gt; | Current subset of the whole list according to specified PageIndex and PageSize | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| PageCount | `long` | Gets the total number of pages in result. | 
| PageIndex | `long` | Gets the index of the page (started from 1). | 
| PageSize | `long` | Gets the size of the page. | 
| TotalRecords | `long` | Gets the total number of records in result. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetEnumerator() | `IEnumerator`&lt;`T`&gt; | Returns an enumerator that iterates through the collection. |
