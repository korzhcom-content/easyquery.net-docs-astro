---
title: OperatorXmlSerializer<T> class
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery namespace/operatorxmlserializer-t--class
---


```csharp
public class Korzh.EasyQuery.OperatorXmlSerializer<T>
    : XmlSerializer<T>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| OperatorXmlSerializer([XmlSerializerFactory](/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadAttribute(`T` op, `string` propName, `string` propValue) | `void` |  | 
| LoadFromReader(`T` value, `XmlReader` reader) | `void` |  | 
| LoadNodes(`T` op, `XmlReader` reader) | `void` |  | 
| SaveAttributes(`T` op, `XmlWriter` writer) | `void` |  | 
| SaveNodes(`T` op, `XmlWriter` writer) | `void` |  | 
| SaveToWriter(`T` value, `XmlWriter` writer) | `void` |  |