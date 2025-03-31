---
title: EasyQueryManagerExtensions class
slug: api-reference-5x/korzh-easyquery-aspnetcore-namespace/easyquerymanagerextensions-class
---

Contains several useful extension methods for working with EasyQuery types in ASP.NET Core applications
```csharp
public static class Korzh.EasyQuery.AspNetCore.EasyQueryManagerExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Task` | ReadRequestContentFromStreamAsync(<span style='color: blue'>this</span> `EasyQueryManager` manager, `String` modelId, `Stream` stream) | Loads all reaquest's data (like query, options, etc) from the stream. |