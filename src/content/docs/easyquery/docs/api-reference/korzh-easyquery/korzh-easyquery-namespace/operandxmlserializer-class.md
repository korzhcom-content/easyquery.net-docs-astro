---
title: OperandXmlSerializer class
slug: easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operandxmlserializer-class
---


```csharp
public class Korzh.EasyQuery.OperandXmlSerializer
    : XmlSerializer<Operand>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| OperandXmlSerializer([XmlSerializerFactory](/api-reference/korzh-easyquery/korzh-easyquery-namespace/xmlserializerfactory-class) factory) | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| LoadFromReader([Operand](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) op, `XmlReader` reader) | `void` |  | 
| LoadNodes([Operand](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) op, `XmlReader` reader) | `void` |  | 
| LoadOneAttribute([Operand](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) op, `string` propName, `string` propValue) | `void` |  | 
| SaveAttributes([Operand](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) op, `XmlWriter` writer) | `void` |  | 
| SaveNodes([Operand](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) op, `XmlWriter` writer) | `void` |  | 
| SaveToWriter([Operand](/api-reference/korzh-easyquery/korzh-easyquery-namespace/operand-class) op, `XmlWriter` writer) | `void` |  |