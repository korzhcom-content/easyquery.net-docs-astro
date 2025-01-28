---
title: HttpResponseExtensions class
slug: api-reference/Korzh.EasyQuery.AspNetCore/Microsoft.AspNetCore.Http namespacehttpresponseextensions-class
---


Class HttpResponseExtensions.
```csharp
public static class Microsoft.AspNetCore.Http.HttpResponseExtensions

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| WriteJsonAsync(<span style='color: blue'>this</span> `HttpResponse` response, `object` data) | `Task` | Serializes and object to JSON and writes it to the HTTP response. | 
| WriteObjectAsync(<span style='color: blue'>this</span> `JsonWriter` jsonWriter, `object` data) | `Task` | Serializes and object to JSON and writes it to the JsonWriter. | 
| WriteResultSetAsync(<span style='color: blue'>this</span> `JsonWriter` jsonWriter, [IEqResultSet](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqresultset-interface) resultSet) | `Task` | Serializes result set to JSON and writes it to the JsonWriter. |