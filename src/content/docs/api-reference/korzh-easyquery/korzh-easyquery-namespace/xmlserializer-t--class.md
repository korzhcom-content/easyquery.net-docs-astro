---
title: XmlSerializer<T> class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializer-t--class
---
```csharp
public abstract class Korzh.EasyQuery.XmlSerializer<T>
    : XmlSerializer

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| XmlSerializer() | `void` |  | 
| XmlSerializer([XmlSerializerFactory](api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromReader(`object` value, `XmlReader` reader) | `void` |  | 
| LoadFromReader(`T` value, `XmlReader` reader) | `void` |  | 
| SaveToWriter(`object` value, `XmlWriter` writer) | `void` |  | 
| SaveToWriter(`T` value, `XmlWriter` writer) | `void` |  |