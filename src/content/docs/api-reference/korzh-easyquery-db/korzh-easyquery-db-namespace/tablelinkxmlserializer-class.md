---
title: TableLinkXmlSerializer class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinkxmlserializer-class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.Db.TableLinkXmlSerializer
    : XmlSerializer<TableLink>

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TableLinkXmlSerializer([XmlSerializerFactory](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromReader([TableLink](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) value, `XmlReader` reader) | `void` |  | 
| LoadNodes([TableLink](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link, `XmlReader` reader) | `void` |  | 
| LoadOneAttribute([TableLink](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link, `string` propName, `string` propValue) | `void` |  | 
| SaveAttributes([TableLink](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link, `XmlWriter` writer) | `void` |  | 
| SaveNodes([TableLink](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link, `XmlWriter` writer) | `void` |  | 
| SaveToWriter([TableLink](///easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) value, `XmlWriter` writer) | `void` |  |
