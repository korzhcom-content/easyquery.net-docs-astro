---
title: EntityAttrXmlSerializer<T> class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/entityattrxmlserializer-t--class
---
```csharp
public class Korzh.EasyQuery.EntityAttrXmlSerializer<T>
    : XmlSerializer<T>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EntityAttrXmlSerializer([XmlSerializerFactory](/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadAttribute(`T` attr, `string` propname, `string` propvalue) | `void` |  | 
| LoadFromReader(`T` attr, `XmlReader` reader) | `void` |  | 
| LoadNodes(`T` attr, `XmlReader` reader) | `void` |  | 
| SaveAttributes(`T` attr, `XmlWriter` writer) | `void` |  | 
| SaveNodes(`T` attr, `XmlWriter` writer) | `void` |  | 
| SaveToWriter(`T` attr, `XmlWriter` writer) | `void` |  |