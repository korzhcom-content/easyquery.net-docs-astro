---
title: EasyQueryManagerSqlResolver class
slug: >-
  api-reference/korzh-easyquery-db/microsoft-extensions-dependencyinjection-namespace/easyquerymanagersqlresolver-class
sidebar:
  order: 100
---

This is an auxiliary class which implements [Korzh.EasyQuery.Services.IEasyQueryManagerResolver](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieasyquerymanagerresolver-interface) interface  to register EasyQueryManagerSql during EasyQuery's intialization.  Implements the [Korzh.EasyQuery.Services.IEasyQueryManagerResolver](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieasyquerymanagerresolver-interface)
```csharp
public class Microsoft.Extensions.DependencyInjection.EasyQueryManagerSqlResolver
    : IEasyQueryManagerResolver

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyQueryManagerSqlResolver() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetManager([EasyQueryOptions](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `IServiceProvider` services) | [EasyQueryManager](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) | Returns an instance of EasyQueryManagerSql. |
