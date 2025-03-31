---
title: ChunkSettings class
slug: api-reference/korzh-easyquery/korzh-easyquery-services-namespace/chunksettings-class
---

Defines the parameters of one chunk of data requested from the client
```csharp
public class Korzh.EasyQuery.Services.ChunkSettings

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ChunkSettings() | `void` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| IsActive | `bool` | Gets or sets a value indicating whether we need to consider Chunk properties when getting the result set. | 
| Limit | `long` | Gets or sets the number of requested records. | 
| NeedTotal | `bool` | Gets or sets a value indicating whether the client needs to know the total number of records returned by the current query. | 
| Offset | `long` | Gets or sets the offset. | 
| Page | `long` | Page number to support old scenarios with paging |