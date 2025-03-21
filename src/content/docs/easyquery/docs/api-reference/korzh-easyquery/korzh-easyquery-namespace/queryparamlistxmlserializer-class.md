---
title: QueryParamListXmlSerializer class
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlistxmlserializer-class
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
| QueryParamListXmlSerializer([XmlSerializerFactory](/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromReader([QueryParamList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) value, `XmlReader` reader) | `void` |  | 
| LoadQueryParamFronReader([QueryParam](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) param, `XmlReader` reader) | `void` |  | 
| SaveQueryParamToWriter([QueryParam](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparam-class) param, `XmlWriter` writer) | `void` |  | 
| SaveToWriter([QueryParamList](/api-reference/korzh-easyquery/korzh-easyquery-namespace/queryparamlist-class) value, `XmlWriter` writer) | `void` |  |