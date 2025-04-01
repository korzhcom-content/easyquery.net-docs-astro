---
title: TableXmlSerializer<T> class
slug: >-
  api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/tablexmlserializer-t--class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.Db.TableXmlSerializer<T>
    : XmlSerializer<T>

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| TableXmlSerializer([XmlSerializerFactory](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromReader(`T` value, `XmlReader` reader) | `void` |  | 
| LoadNodes(`T` table, `XmlReader` reader) | `void` |  | 
| LoadOneAttribute(`T` table, `string` propName, `string` propValue) | `void` |  | 
| SaveAttributes(`T` table, `XmlWriter` writer) | `void` |  | 
| SaveNodes(`T` table, `XmlWriter` writer) | `void` |  | 
| SaveToWriter(`T` value, `XmlWriter` writer) | `void` |  |
