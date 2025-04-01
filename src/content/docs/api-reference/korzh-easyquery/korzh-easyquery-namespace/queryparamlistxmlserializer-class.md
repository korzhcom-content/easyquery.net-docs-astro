---
title: QueryParamListXmlSerializer class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlistxmlserializer-class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.QueryParamListXmlSerializer
    : XmlSerializer<QueryParamList>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| QueryParamListXmlSerializer() | `void` |  | 
| QueryParamListXmlSerializer([XmlSerializerFactory](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromReader([QueryParamList](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) value, `XmlReader` reader) | `void` |  | 
| LoadQueryParamFronReader([QueryParam](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) param, `XmlReader` reader) | `void` |  | 
| SaveQueryParamToWriter([QueryParam](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) param, `XmlWriter` writer) | `void` |  | 
| SaveToWriter([QueryParamList](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) value, `XmlWriter` writer) | `void` |  |
