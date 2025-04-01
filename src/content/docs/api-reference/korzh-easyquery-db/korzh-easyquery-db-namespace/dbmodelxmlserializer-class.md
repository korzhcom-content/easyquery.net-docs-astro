---
title: DbModelXmlSerializer class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodelxmlserializer-class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.Db.DbModelXmlSerializer
    : DataModelXmlSerializer

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbModelXmlSerializer() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadDbParamsFromReader([DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadLinkFromReader([DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadLinksFromReader([DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadNode([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` |  | 
| LoadOneModelAtrributeFromReader([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadTableFromReader([DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadTablesFromReader([DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlReader` reader) | `void` |  | 
| SaveAttributes([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlWriter` writer, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` |  | 
| SaveDbParamsNode([DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlWriter` writer) | `void` |  | 
| SaveLinksNode([DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlWriter` writer) | `void` |  | 
| SaveNodes([DataModel](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlWriter` writer, [BitOptions](///easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` |  | 
| SaveTablesNode([DbModel](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlWriter` writer) | `void` |  |
