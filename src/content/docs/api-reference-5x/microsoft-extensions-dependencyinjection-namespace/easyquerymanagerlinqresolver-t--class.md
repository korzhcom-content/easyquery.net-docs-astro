---
title: EasyQueryManagerLinqResolver<T> class
slug: >-
  api-reference-5x/microsoft-extensions-dependencyinjection-namespace/easyquerymanagerlinqresolver-t--class
sidebar:
  order: 100
---

This is an auxiliary class which implements [Korzh.EasyQuery.Services.IEasyQueryManagerResolver](/easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/ieasyquerymanagerresolver-interface) interface  to register EasyQueryManagerLinq during the intialization of EasyQuery services.
```csharp
public class Microsoft.Extensions.DependencyInjection.EasyQueryManagerLinqResolver<T>
    : IEasyQueryManagerResolver

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `EasyQueryManager` | GetManager(`IServiceProvider` services, `EasyQueryOptions` options) | Gets the EasyQuery manager. |
