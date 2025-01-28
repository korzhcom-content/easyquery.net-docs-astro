---
title: EasyQueryMiddlewareExtensions class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Microsoft.AspNetCore.Builder namespace/easyquerymiddlewareextensions-class
---


Contains the method which adds EasyQueryMiddleware to the pipeline.
```csharp
public static class Microsoft.AspNetCore.Builder.EasyQueryMiddlewareExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `IApplicationBuilder` | UseEasyQuery(<span style='color: blue'>this</span> `IApplicationBuilder` appBuilder, `Action<EasyQueryOptions>` optionsAction = <span style='color: blue'>null</span>) | Adds the EasyQueryMiddleware to the middleware pipeline. |