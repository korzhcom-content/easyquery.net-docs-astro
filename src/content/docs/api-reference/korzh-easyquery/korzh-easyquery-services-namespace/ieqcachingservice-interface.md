---
title: IEqCachingService interface
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqcachingservice-interface
sidebar:
  order: 100
---

Represents a type used to perform caching.
```csharp
public interface Korzh.EasyQuery.Services.IEqCachingService

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetValue(`string` key) | `string` | Gets the value from the cache. | 
| PutValue(`string` key, `string` value) | `void` | Puts the value to the cache |
