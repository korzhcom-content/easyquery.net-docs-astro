---
title: IPaging interface
slug: api-reference-4x/korzh-easyquery-services-namespace/ipaging-interface
sidebar:
  order: 100
---
# IPaging interface

Represents basic pagination parameters
```csharp
public interface Korzh.EasyQuery.Services.IPaging

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Int64` | PageCount | Gets the total number of pages in result. | 
| `Int64` | PageIndex | Gets the index of the page (started from 1). | 
| `Int64` | PageSize | Gets the size of the page. | 
| `Int64` | TotalRecords | Gets the total number of records in result. |
