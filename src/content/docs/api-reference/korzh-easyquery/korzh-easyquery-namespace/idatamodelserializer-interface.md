---
title: IDataModelSerializer interface
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/idatamodelserializer-interface
---

```csharp
public interface Korzh.EasyQuery.IDataModelSerializer

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromFile([DataModel](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` filePath, [BitOptions](//easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| LoadFromStream([DataModel](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Stream` stream, [BitOptions](//easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| LoadFromString([DataModel](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` content, [BitOptions](//easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| SaveToFile([DataModel](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` filePath, [BitOptions](//easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| SaveToStream([DataModel](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Stream` stream, [BitOptions](//easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| SaveToString([DataModel](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [BitOptions](//easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `string` |  |