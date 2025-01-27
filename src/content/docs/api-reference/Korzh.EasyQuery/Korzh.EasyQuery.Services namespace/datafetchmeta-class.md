---
title: DataFetchMeta class
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery.Services namespace/datafetchmeta-class
---


Defines some meta data of the executed query.
```csharp
public class Korzh.EasyQuery.Services.DataFetchMeta

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DataFetchMeta([EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) manager) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.DataFetchMeta](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/datafetchmeta-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Offset | `long` |  | 
| TotalRecords | `long` | Gets the total number of records returned by the query (without limitations defined in the Chunk property). |