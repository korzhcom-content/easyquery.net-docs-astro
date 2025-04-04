---
title: EntityXmlSerializer class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/entityxmlserializer-class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.EntityXmlSerializer
    : XmlSerializer<Entity>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntityXmlSerializer([XmlSerializerFactory](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadAttribute([Entity](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) entity, `string` propName, `string` propValue) | `void` |  | 
| LoadFromReader([Entity](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) entity, `XmlReader` reader) | `void` |  | 
| LoadNodes([Entity](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) entity, `XmlReader` reader) | `void` |  | 
| SaveAttributes([Entity](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) entity, `XmlWriter` writer) | `void` |  | 
| SaveNodes([Entity](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) entity, `XmlWriter` writer) | `void` |  | 
| SaveToWriter([Entity](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/entity-class) entity, `XmlWriter` writer) | `void` |  |
