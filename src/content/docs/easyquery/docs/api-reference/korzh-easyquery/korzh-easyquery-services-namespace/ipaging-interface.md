---
title: IPaging interface
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ipaging-interface
---


Represents basic pagination parameters
```csharp
public interface Korzh.EasyQuery.Services.IPaging

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| PageCount | `long` | Gets the total number of pages in result. | 
| PageIndex | `long` | Gets the index of the page (started from 1). | 
| PageSize | `long` | Gets the size of the page. | 
| TotalRecords | `long` | Gets the total number of records in result. |