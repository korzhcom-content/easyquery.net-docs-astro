---
title: EasyQueryManagerSqlResolver class
slug: api-reference-5x/microsoft-extensions-dependencyinjection-namespace/easyquerymanagersqlresolver-class
---

This is an auxiliary class which implements [Korzh.EasyQuery.Services.IEasyQueryManagerResolver](//easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/ieasyquerymanagerresolver-interface) interface  to register EasyQueryManagerSql during EasyQuery's intialization.  Implements the [Korzh.EasyQuery.Services.IEasyQueryManagerResolver](//easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/ieasyquerymanagerresolver-interface)
```csharp
public class Microsoft.Extensions.DependencyInjection.EasyQueryManagerSqlResolver
    : IEasyQueryManagerResolver

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `EasyQueryManager` | GetManager(`IServiceProvider` services, `EasyQueryOptions` options) | Returns an instance of EasyQueryManagerSql. |