---
title: EasyQueryManagerLinqResolver<T> class
slug: >-
  api-reference/korzh-easyquery-linq/microsoft-extensions-dependencyinjection-namespace/easyquerymanagerlinqresolver-t--class
sidebar:
  order: 100
---

This is an auxiliary class which implements [Korzh.EasyQuery.Services.IEasyQueryManagerResolver](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieasyquerymanagerresolver-interface) interface  to register EasyQueryManagerLinq during the intialization of EasyQuery services.
```csharp
public class Microsoft.Extensions.DependencyInjection.EasyQueryManagerLinqResolver<T>
    : IEasyQueryManagerResolver

```
Package: `Korzh.EasyQuery.Linq` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Linq.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyQueryManagerLinqResolver() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetManager([EasyQueryOptions](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `IServiceProvider` services) | [EasyQueryManager](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) | Gets the EasyQuery manager. |
