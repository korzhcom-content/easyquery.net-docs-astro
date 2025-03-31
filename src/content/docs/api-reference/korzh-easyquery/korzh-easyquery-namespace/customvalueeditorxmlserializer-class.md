---
title: CustomValueEditorXmlSerializer class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/customvalueeditorxmlserializer-class
---

```csharp
public class Korzh.EasyQuery.CustomValueEditorXmlSerializer
    : ValueEditorXmlSerializer<CustomValueEditor>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| CustomValueEditorXmlSerializer([XmlSerializerFactory](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadAttribute([CustomValueEditor](//easyquery/docs/api-reference/easydata-core/easydata-namespace/customvalueeditor-class) editor, `string` propName, `string` propValue) | `void` |  | 
| LoadContent([CustomValueEditor](//easyquery/docs/api-reference/easydata-core/easydata-namespace/customvalueeditor-class) editor, `XmlReader` reader) | `void` |  | 
| SaveAttributes([CustomValueEditor](//easyquery/docs/api-reference/easydata-core/easydata-namespace/customvalueeditor-class) editor, `XmlWriter` writer) | `void` |  | 
| SaveContent([CustomValueEditor](//easyquery/docs/api-reference/easydata-core/easydata-namespace/customvalueeditor-class) editor, `XmlWriter` writer) | `void` |  |