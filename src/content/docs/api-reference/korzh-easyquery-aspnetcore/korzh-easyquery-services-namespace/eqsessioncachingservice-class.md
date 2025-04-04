---
title: EqSessionCachingService class
slug: >-
  api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/eqsessioncachingservice-class
sidebar:
  order: 100
---

Represents an implemenation of [Korzh.EasyQuery.Services.IEqCachingService](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqcachingservice-interface)  which uses Session for storing cached objects.
```csharp
public class Korzh.EasyQuery.Services.EqSessionCachingService
    : IEqCachingService

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqSessionCachingService(`IHttpContextAccessor` httpContextAccessor) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.EqSessionCachingService](/easyquery/docs/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/eqsessioncachingservice-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetValue(`string` key) | `string` | Gets the value from the cache. | 
| PutValue(`string` key, `string` value) | `void` | Puts the value to the cache |
