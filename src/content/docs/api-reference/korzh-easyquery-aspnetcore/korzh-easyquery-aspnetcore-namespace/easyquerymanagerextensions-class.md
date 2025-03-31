---
title: EasyQueryManagerExtensions class
slug: api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/easyquerymanagerextensions-class
---

Contains several useful extension methods for working with EasyQuery types in ASP.NET Core applications
```csharp
public static class Korzh.EasyQuery.AspNetCore.EasyQueryManagerExtensions

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ReadRequestContentFromStreamAsync(<span style='color: blue'>this</span> [EasyQueryManager](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) manager, `string` modelId, `Stream` stream) | `Task` | Loads all reaquest's data (like query, options, etc) from the stream. |