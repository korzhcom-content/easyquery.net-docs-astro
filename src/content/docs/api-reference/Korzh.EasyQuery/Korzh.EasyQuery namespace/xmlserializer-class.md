---
title: XmlSerializer class
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery namespace/xmlserializer-class
---


```csharp
public abstract class Korzh.EasyQuery.XmlSerializer

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| XmlSerializer() | `void` |  | 
| XmlSerializer([XmlSerializerFactory](/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Factory | [XmlSerializerFactory](/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromReader(`object` value, `XmlReader` reader) | `void` |  | 
| SaveToWriter(`object` value, `XmlWriter` writer) | `void` |  |