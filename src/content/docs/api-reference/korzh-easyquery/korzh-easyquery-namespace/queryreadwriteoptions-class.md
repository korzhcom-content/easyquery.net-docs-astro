---
title: QueryReadWriteOptions class
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-namespace/queryreadwriteoptions-class
sidebar:
  order: 100
---

```csharp
public static class Korzh.EasyQuery.QueryReadWriteOptions

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| All | [BitOptions](/easyquery/docs/api-reference/easydata-core/easydata-namespace/bitoptions-class) |  | 
| ClientSide | `UInt64` | Using this option means that we are going to create query's representation for the client-side scripts.  Warning: Don't inlcude this option directly, it's for internal use only. Use ClientSideContent instead | 
| ClientSideContent | `UInt64` | Represents the default set of options for serializing a JSON representation of the query for the client-side (without all DB-related info) | 
| Columns | `UInt64` | Only columns will be loaded/saved | 
| Conditions | `UInt64` | Only conditions will be loaded/saved | 
| Content | `UInt64` | Conditions and columns and query description will be loaded/saved | 
| Description | `UInt64` | Only query description will be loaded/saved | 
| Options | `UInt64` | Only query options will be loaded/saved |
