---
title: PagedList<T> class
slug: api-reference-4x/korzh-easyquery-services-namespace/pagedlist-t--class
---

Default implementation of `IPagedList` interface
```csharp
public class Korzh.EasyQuery.Services.PagedList<T>
    : IPagedList<T>, IEnumerable<T>, IEnumerable, IPaging

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `List<T>` | subset | Current subset of the whole list according to specified PageIndex and PageSize | 


### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Int64` | PageCount | Gets the total number of pages in result. | 
| `Int64` | PageIndex | Gets the index of the page (started from 1). | 
| `Int64` | PageSize | Gets the size of the page. | 
| `Int64` | TotalRecords | Gets the total number of records in result. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `IEnumerator<T>` | GetEnumerator() | Returns an enumerator that iterates through the collection. |