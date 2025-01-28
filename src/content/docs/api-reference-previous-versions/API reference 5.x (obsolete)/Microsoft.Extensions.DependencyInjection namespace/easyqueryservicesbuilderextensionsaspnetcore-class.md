---
title: EasyQueryServicesBuilderExtensionsAspNetCore class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Microsoft.Extensions.DependencyInjection namespace/easyqueryservicesbuilderextensionsaspnetcore-class
---


Contains several extension methods which simplifies EasyQuery services registration in the DI.
```csharp
public static class Microsoft.Extensions.DependencyInjection.EasyQueryServicesBuilderExtensionsAspNetCore

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `EasyQueryServicesBuilder` | AddEasyQuery(<span style='color: blue'>this</span> `IServiceCollection` services) | Registers EasyQuery services in the DI container. | 
| `EasyQueryServicesBuilder` | UseSessionCache(<span style='color: blue'>this</span> `EasyQueryServicesBuilder` builder) | Adds [Korzh.EasyQuery.Services.EqSessionCachingService](/api-reference-5x/korzh-easyquery-services-namespace/eqsessioncachingservice-class) implementation of the [Korzh.EasyQuery.Services.IEqCachingService](/api-reference-5x/korzh-easyquery-services-namespace/ieqcachingservice-interface) to the DI container.  DO NOT forget to turn on session in your application |