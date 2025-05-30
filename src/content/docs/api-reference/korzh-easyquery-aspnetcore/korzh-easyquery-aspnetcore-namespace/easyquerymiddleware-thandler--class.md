---
title: EasyQueryMiddleware<THandler> class
slug: >-
  api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/easyquerymiddleware-thandler--class
sidebar:
  order: 100
---

Represents the middleware which processes all requests from EasyQuery client-side widgets
```csharp
public class Korzh.EasyQuery.AspNetCore.EasyQueryMiddleware<THandler>

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyQueryMiddleware(`RequestDelegate` next, [EasyQueryOptions](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options) | `void` | Initializes a new instance of the [Korzh.EasyQuery.AspNetCore.EasyQueryMiddleware](/easyquery/docs/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/easyquerymiddleware-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| InvokeAsync(`HttpContext` context) | `Task` | The method which is called during the processing of incoming HTTP request. |
