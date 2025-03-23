---
title: EasyQueryMiddleware class
slug: api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/easyquerymiddleware-class
---


Represents the middleware which processes all requests from EasyQuery client-side widgets
```csharp
public class Korzh.EasyQuery.AspNetCore.EasyQueryMiddleware
    : EasyQueryMiddleware<EasyQueryApiHandler>

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyQueryMiddleware(`RequestDelegate` next, [EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.AspNetCore.EasyQueryMiddleware](/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/easyquerymiddleware-class) class. |