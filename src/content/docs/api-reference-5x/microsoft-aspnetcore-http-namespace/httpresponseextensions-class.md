---
title: HttpResponseExtensions class
slug: api-reference-5x/microsoft-aspnetcore-http-namespace/httpresponseextensions-class
---


Class HttpResponseExtensions.
```csharp
public static class Microsoft.AspNetCore.Http.HttpResponseExtensions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Task` | WriteJsonAsync(<span style='color: blue'>this</span> `HttpResponse` response, `Object` data) | Serializes and object to JSON and writes it to the HTTP response. | 
| `Task` | WriteObjectAsync(<span style='color: blue'>this</span> `JsonWriter` jsonWriter, `Object` data) | Serializes and object to JSON and writes it to the JsonWriter. |