---
title: MacroRequestEventArgs class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/macrorequesteventargs-class
sidebar:
  order: 100
---

Provides data for [Korzh.EasyQuery.DataModel.MacroRequest](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/datamodel-class) event
```csharp
public class Korzh.EasyQuery.MacroRequestEventArgs

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| MacroRequestEventArgs([IMacroValue](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/imacrovalue-interface) val) | `void` | Initializes a new instance of the [Korzh.EasyQuery.MacroRequestEventArgs](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/macrorequesteventargs-class) class. | 


### Properties

| Name | Type | Description | 
| --- | --- | --- | 
| DataType | [DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) | Macro data type | 
| MacroId | `string` | Macro ID | 
| Value | `string` | Value of this macro |
