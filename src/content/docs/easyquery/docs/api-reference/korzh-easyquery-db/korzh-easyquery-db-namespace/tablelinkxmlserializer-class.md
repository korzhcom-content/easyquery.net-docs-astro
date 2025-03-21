---
title: TableLinkXmlSerializer class
slug: easyquery/docs/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelinkxmlserializer-class
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
| TableLinkXmlSerializer([XmlSerializerFactory](/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromReader([TableLink](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) value, `XmlReader` reader) | `void` |  | 
| LoadNodes([TableLink](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link, `XmlReader` reader) | `void` |  | 
| LoadOneAttribute([TableLink](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link, `string` propName, `string` propValue) | `void` |  | 
| SaveAttributes([TableLink](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link, `XmlWriter` writer) | `void` |  | 
| SaveNodes([TableLink](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) link, `XmlWriter` writer) | `void` |  | 
| SaveToWriter([TableLink](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablelink-class) value, `XmlWriter` writer) | `void` |  |