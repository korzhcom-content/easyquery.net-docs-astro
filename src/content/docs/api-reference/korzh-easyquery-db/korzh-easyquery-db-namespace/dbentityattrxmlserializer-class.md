---
title: DbEntityAttrXmlSerializer class
slug: api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattrxmlserializer-class
---


```csharp
public class Korzh.EasyQuery.Db.DbEntityAttrXmlSerializer
    : EntityAttrXmlSerializer<DbEntityAttr>

```
Package: `Korzh.EasyQuery.Db` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.Db.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DbEntityAttrXmlSerializer([XmlSerializerFactory](/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadAttribute([DbEntityAttr](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattr-class) attr, `string` propName, `string` propValue) | `void` |  | 
| LoadNodes([DbEntityAttr](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattr-class) attr, `XmlReader` reader) | `void` |  | 
| SaveAttributes([DbEntityAttr](/api-reference/korzh-easyquery-db/korzh-easyquery-db-namespace/dbentityattr-class) attr, `XmlWriter` writer) | `void` |  |