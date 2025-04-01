---
title: ModelReadWriteOptions class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/modelreadwriteoptions-class
sidebar:
  order: 100
---

Represents different options used during data model loading or saving
```csharp
public static class Korzh.EasyQuery.ModelReadWriteOptions

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| AggrFunctions | `UInt64` | If set - we need to save or load the list of aggregate functions | 
| ClientSideContent | `UInt64` | Represents the default set of options for serializing a JSON representation of the model for the client-side (without all DB-related info) | 
| CustomInfo | `UInt64` | Whether we need to save or load the model's custom info | 
| DbInfo | `UInt64` | Tables, links and other DB specific info will be saved/loaded | 
| DbParams | `UInt64` | DB connection settings will be saved | 
| Defaults | [BitOptions](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) | The default options. | 
| DefQueryPath | `UInt64` | The path to the default query path will be saved/loaded | 
| Description | `UInt64` | The model's description will be saved/loaded | 
| DMEOptions | `UInt64` | Data Model Editor options will be saved together with the data model | 
| Editors | `UInt64` | The value editors will be saved/loaded | 
| Entities | `UInt64` | The entities and their attributes will be saved/loaded | 
| KeepCurrent | `UInt64` | If this option is set - then the previous model will not be cleared before the loading of the new one | 
| Operators | `UInt64` | Include operators when saving or loading the model | 


### Static Properties

| Name | Type | Description | 
| --- | --- | --- | 
| All | [BitOptions](///////////////easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) |  |
