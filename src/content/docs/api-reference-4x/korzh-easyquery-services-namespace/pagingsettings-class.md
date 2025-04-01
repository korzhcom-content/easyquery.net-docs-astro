---
title: PagingSettings class
slug: api-reference-4x/korzh-easyquery-services-namespace/pagingsettings-class
sidebar:
  order: 100
---

Default implementation of IPaging interface
```csharp
public class Korzh.EasyQuery.Services.PagingSettings
    : IPaging

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Boolean` | Enabled | Gets or sets a value indicating whether pagination is enabled. | 
| `Int64` | PageCount | Gets the total number of pages in result.  The value of this property is calculated automatically when `TotalRecords` is changed. | 
| `Int64` | PageIndex | Gets the index of the page (started from 1). | 
| `Int64` | PageSize | Gets the size of the page. | 
| `Int64` | TotalRecords | Gets the total number of records in result. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `JsonDict` | SaveToJsonDict() | Saves to IDictionary object. Used for serialization to JSON. |
