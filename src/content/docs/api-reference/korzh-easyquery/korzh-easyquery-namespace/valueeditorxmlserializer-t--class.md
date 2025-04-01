---
title: ValueEditorXmlSerializer<T> class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/valueeditorxmlserializer-t--class
sidebar:
  order: 100
---

```csharp
public class Korzh.EasyQuery.ValueEditorXmlSerializer<T>
    : XmlSerializer<T>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| ValueEditorXmlSerializer([XmlSerializerFactory](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadAttribute(`T` editor, `string` propName, `string` propValue) | `void` |  | 
| LoadContent(`T` editor, `XmlReader` reader) | `void` |  | 
| LoadFromReader(`T` editor, `XmlReader` reader) | `void` |  | 
| SaveAttributes(`T` editor, `XmlWriter` writer) | `void` |  | 
| SaveContent(`T` editor, `XmlWriter` writer) | `void` |  | 
| SaveToWriter(`T` editor, `XmlWriter` writer) | `void` |  |
