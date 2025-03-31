---
title: IEasyQueryManagerResolver interface
slug: api-reference-5x/korzh-easyquery-services-namespace/ieasyquerymanagerresolver-interface
---

Interface IEasyQueryManagerResolver  Contains only one function: GetManager which returns an instance of EasyQueryManagerBase descendant (like EasyQueryManagerSql or EasyQueryManagerLinq)  by DI services and options (an instance of [Korzh.EasyQuery.Services.EasyQueryOptions](//easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/easyqueryoptions-class) object)
```csharp
public interface Korzh.EasyQuery.Services.IEasyQueryManagerResolver

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `EasyQueryManager` | GetManager(`IServiceProvider` services, `EasyQueryOptions` options) | Gets the EasyQuery manager. |