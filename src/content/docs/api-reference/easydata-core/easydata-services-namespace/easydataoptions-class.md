---
title: EasyDataOptions class
slug: api-reference/easydata-core/easydata-services-namespace/easydataoptions-class
sidebar:
  order: 100
---

```csharp
public class EasyData.Services.EasyDataOptions

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyDataOptions(`IServiceProvider` services) | `void` | Initializes a new instance of the [EasyData.Services.EasyDataOptions](/easyquery/docs/api-reference/easydata-core/easydata-services-namespace/easydataoptions-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Endpoint | `string` |  | 
| ManagerResolver | `EasyDataManagerResolver` |  | 
| MetaDataLoaderOptionsBuilder | `Action`&lt;`object`&gt; | Gets or sets the options builder for metadata loader.  This action will be called before metadata loader creation to adjust the options passed to it | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| RegisterFilter(`string` filterClass, `Type` filterType) | `void` |  | 
| RegisterFilter(`string` filterClass) | `void` |  | 
| ResolveFilter(`string` filterClass, [MetaData](/easyquery/docs/api-reference/easydata-core/easydata-namespace/metadata-class) model) | [EasyFilter](/easyquery/docs/api-reference/easydata-core/easydata-services-namespace/easyfilter-class) |  | 
| UseManager(`EasyDataManagerResolver` managerResolver) | `void` | Defines the function which creates and returns an instance of EasyQuery manager.  The manager defines all basic operations with the models and queries: creating, loading, saving and query building itself. | 
| UseManager() | `void` | Defines the function which creates and returns an instance of EasyQuery manager.  The manager defines all basic operations with the models and queries: creating, loading, saving and query building itself. |
