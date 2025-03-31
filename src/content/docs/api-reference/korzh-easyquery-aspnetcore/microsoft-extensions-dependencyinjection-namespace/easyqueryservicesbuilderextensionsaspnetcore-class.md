---
title: EasyQueryServicesBuilderExtensionsAspNetCore class
slug: api-reference/korzh-easyquery-aspnetcore/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilderextensionsaspnetcore-class
---

Contains several extension methods which simplifies EasyQuery services registration in the DI.
```csharp
public static class Microsoft.Extensions.DependencyInjection.EasyQueryServicesBuilderExtensionsAspNetCore

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddEasyQuery(<span style='color: blue'>this</span> `IServiceCollection` services) | [EasyQueryServicesBuilder](//easyquery/docs/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) | Registers EasyQuery services in the DI container. | 
| UseSessionCache(<span style='color: blue'>this</span> [EasyQueryServicesBuilder](//easyquery/docs/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) builder) | [EasyQueryServicesBuilder](//easyquery/docs/api-reference/korzh-easyquery/microsoft-extensions-dependencyinjection-namespace/easyqueryservicesbuilder-class) | Adds [Korzh.EasyQuery.Services.EqSessionCachingService](//easyquery/docs/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/eqsessioncachingservice-class) implementation of the [Korzh.EasyQuery.Services.IEqCachingService](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqcachingservice-interface) to the DI container.  DO NOT forget to turn on session in your application |