---
title: IEasyQueryManagerResolver interface
slug: api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieasyquerymanagerresolver-interface
---
Interface IEasyQueryManagerResolver  Contains only one function: GetManager which returns an instance of EasyQueryManagerBase descendant (like EasyQueryManagerSql or EasyQueryManagerLinq)  by DI services and options (an instance of [Korzh.EasyQuery.Services.EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) object)
```csharp
public interface Korzh.EasyQuery.Services.IEasyQueryManagerResolver

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| GetManager([EasyQueryOptions](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `IServiceProvider` services) | [EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) | Gets the EasyQuery manager. |