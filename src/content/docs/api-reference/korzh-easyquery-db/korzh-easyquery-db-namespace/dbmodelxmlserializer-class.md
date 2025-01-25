---
title: DbModelXmlSerializer class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodelxmlserializer-class
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
| LoadDbParamsFromReader([DbModel](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadLinkFromReader([DbModel](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadLinksFromReader([DbModel](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadNode([DataModel](api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` |  | 
| LoadOneModelAtrributeFromReader([DataModel](api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadTableFromReader([DbModel](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlReader` reader) | `void` |  | 
| LoadTablesFromReader([DbModel](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlReader` reader) | `void` |  | 
| SaveAttributes([DataModel](api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlWriter` writer, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` |  | 
| SaveDbParamsNode([DbModel](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlWriter` writer) | `void` |  | 
| SaveLinksNode([DbModel](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlWriter` writer) | `void` |  | 
| SaveNodes([DataModel](api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) model, `XmlWriter` writer, [BitOptions](api-reference/easydata-core/easydata-namespace/bitoptions-class) options) | `void` |  | 
| SaveTablesNode([DbModel](api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbmodel-class) model, `XmlWriter` writer) | `void` |  |