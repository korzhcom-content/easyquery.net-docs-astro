---
title: IDataModelSerializer interface
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery namespace/idatamodelserializer-interface
---


```csharp
public interface Korzh.EasyQuery.IDataModelSerializer

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromFile([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` filePath, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| LoadFromStream([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Stream` stream, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| LoadFromString([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` content, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| SaveToFile([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` filePath, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| SaveToStream([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Stream` stream, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| SaveToString([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `string` |  |