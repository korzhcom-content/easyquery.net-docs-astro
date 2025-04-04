---
title: EditorsMap class
slug: api-reference/korzh-easyquery/korzh-easyquery-namespace/editorsmap-class
sidebar:
  order: 100
---

Represents editors map - the list which defines what editor will be used for a particular data type and operator.
```csharp
public class Korzh.EasyQuery.EditorsMap
    : Collection<ValueEditorEntry>

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EditorsMap() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddEditor([ValueEditor](/easyquery/docs/api-reference/easydata-core/easydata-namespace/valueeditor-class) editor) | `void` | Adds the editor with empty list of operators | 
| FindEditor([Operator](/easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-namespace/operator-class) op, [DataType](/easyquery/docs/api-reference/easydata-core/easydata-namespace/datatype-enum) type) | [ValueEditor](/easyquery/docs/api-reference/easydata-core/easydata-namespace/valueeditor-class) | Finds the editor by operator and data type. |
