---
title: DataModelXmlSerializer class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodelxmlserializer-class
sidebar:
  order: 100
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
| Factory | [XmlSerializerFactory](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadDMEOptions([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadEntitiesFromReader([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadFromFile([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` path, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| LoadFromReader([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| LoadFromStream([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Stream` stream, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| LoadFromString([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` content, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| LoadModelAtrributesFromReader([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadNode([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` |  | 
| LoadOneModelAtrributeFromReader([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadOneOperatorFromReader([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadOneValueEditorFromReader([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadOperatorsFromReader([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadValueEditorsFromReader([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| SaveAttributes([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlWriter` writer, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` |  | 
| SaveDMEOptions([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlWriter` writer) | `void` |  | 
| SaveNodes([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlWriter` writer, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` |  | 
| SaveToFile([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `string` path, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| SaveToStream([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `Stream` stream, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  | 
| SaveToString([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `string` |  | 
| SaveToWriter([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlWriter` writer, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options = <span style='color: blue'>null</span>) | `void` |  |
