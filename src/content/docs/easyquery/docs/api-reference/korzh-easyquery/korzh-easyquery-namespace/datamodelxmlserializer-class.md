---
title: DataModelXmlSerializer class
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodelxmlserializer-class
---


```csharp
public class Korzh.EasyQuery.DataModelXmlSerializer
    : IDataModelSerializer

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DataModelXmlSerializer() | `void` |  | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Factory | [XmlSerializerFactory](/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadDMEOptions([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadEntitiesFromReader([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadFromFile([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` path, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| LoadFromReader([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| LoadFromStream([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Stream` stream, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| LoadFromString([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` content, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| LoadModelAtrributesFromReader([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadNode([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` |  | 
| LoadOneModelAtrributeFromReader([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadOneOperatorFromReader([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadOneValueEditorFromReader([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadOperatorsFromReader([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadValueEditorsFromReader([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| SaveAttributes([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` |  | 
| SaveDMEOptions([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlWriter` writer) | `void` |  | 
| SaveNodes([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` |  | 
| SaveToFile([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` path, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| SaveToStream([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Stream` stream, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| SaveToString([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `string` |  | 
| SaveToWriter([DataModel](/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlWriter` writer, [BitOptions](/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  |