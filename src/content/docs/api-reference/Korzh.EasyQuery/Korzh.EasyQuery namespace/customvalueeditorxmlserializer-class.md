---
title: CustomValueEditorXmlSerializer class
slug: api-reference/Korzh.EasyQuery/Korzh.EasyQuery namespace/customvalueeditorxmlserializer-class
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
| CustomValueEditorXmlSerializer([XmlSerializerFactory](/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadAttribute([CustomValueEditor](/api-reference/easydata-core/easydata-namespace/customvalueeditor-class) editor, `string` propName, `string` propValue) | `void` |  | 
| LoadContent([CustomValueEditor](/api-reference/easydata-core/easydata-namespace/customvalueeditor-class) editor, `XmlReader` reader) | `void` |  | 
| SaveAttributes([CustomValueEditor](/api-reference/easydata-core/easydata-namespace/customvalueeditor-class) editor, `XmlWriter` writer) | `void` |  | 
| SaveContent([CustomValueEditor](/api-reference/easydata-core/easydata-namespace/customvalueeditor-class) editor, `XmlWriter` writer) | `void` |  |