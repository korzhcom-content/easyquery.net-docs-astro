---
title: EasyDataManager class
slug: api-reference/easydata-core/easydata-services-namespace/easydatamanager-class
---


```csharp
public abstract class EasyData.Services.EasyDataManager
    : IDisposable

```
Package: `EasyData.Core` (targets: `netstandard2.0`)

Assembly: `EasyData.Core.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EasyDataManager(`IServiceProvider` services, [EasyDataOptions](/api-reference/easydata-core/easydata-services-namespace/easydataoptions-class) options) | `void` |  | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Options | [EasyDataOptions](/api-reference/easydata-core/easydata-services-namespace/easydataoptions-class) |  | 
| Services | `IServiceProvider` |  | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| Model | [MetaData](/api-reference/easydata-core/easydata-namespace/metadata-class) |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| CreateEntityAsync(`string` modelId, `string` entityContainer, `JObject` props) | `Task`&lt;`object`&gt; |  | 
| DeleteEntityAsync(`string` modelId, `string` entityContainer, `string` keyStr) | `Task` |  | 
| Dispose(`bool` disposing) | `void` | Releases unmanaged and - optionally - managed resources. | 
| Dispose() | `void` | Releases unmanaged and - optionally - managed resources. | 
| GetEntitiesAsync(`string` modelId, `string` entityContainer, `IEnumerable`&lt;[EasyFilter](/api-reference/easydata-core/easydata-services-namespace/easyfilter-class)&gt; filters = <span style='color: blue'>null</span>, `bool` isLookup = False, `Nullable`&lt;`int`&gt; offset = <span style='color: blue'>null</span>, `Nullable`&lt;`int`&gt; fetch = <span style='color: blue'>null</span>) | `Task`&lt;[EasyDataResultSet](/api-reference/easydata-core/easydata-namespace/easydataresultset-class)&gt; |  | 
| GetEntityAsync(`string` modelId, `string` entityContainer, `string` keyStr) | `Task`&lt;`object`&gt; |  | 
| GetModelAsync(`string` modelId) | `Task`&lt;[MetaData](/api-reference/easydata-core/easydata-namespace/metadata-class)&gt; |  | 
| GetTotalEntitiesAsync(`string` modelId, `string` entityContainer, `IEnumerable`&lt;[EasyFilter](/api-reference/easydata-core/easydata-services-namespace/easyfilter-class)&gt; filters = <span style='color: blue'>null</span>, `bool` isLookup = False) | `Task`&lt;`long`&gt; |  | 
| LoadModelAsync(`string` modelId) | `Task` |  | 
| UpdateEntityAsync(`string` modelId, `string` entityContainer, `string` keyStr, `JObject` props) | `Task`&lt;`object`&gt; |  |