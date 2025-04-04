---
title: EqOkHttpActionResult class
slug: >-
  api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqokhttpactionresult-class
sidebar:
  order: 100
---

Represents a special kind of `System.Web.Http.IHttpActionResult` which allows to build an OK (status code 200) response with some extra data  Implements the
```csharp
public class Korzh.EasyQuery.AspNet.EqOkHttpActionResult
    : IHttpActionResult

```
Package: `Korzh.EasyQuery.AspNet4` (targets: `net461`)

Assembly: `Korzh.EasyQuery.AspNet4.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqOkHttpActionResult(`HttpRequestMessage` request) | `void` | Initializes a new instance of the [Korzh.EasyQuery.AspNet.EqOkHttpActionResult](/easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqokhttpactionresult-class) class. | 
| EqOkHttpActionResult(`object` data, `HttpRequestMessage` request) | `void` | Initializes a new instance of the [Korzh.EasyQuery.AspNet.EqOkHttpActionResult](/easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqokhttpactionresult-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Data | `object` | The data which should be added to the response body. | 
| Request | `HttpRequestMessage` | The request message | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ExecuteAsync(`CancellationToken` cancellationToken) | `Task`&lt;`HttpResponseMessage`&gt; | Creates an `System.Net.Http.HttpResponseMessage` asynchronously. | 
| WriteDataToJsonAsync(`JsonWriter` writer) | `Task` | Write the extra data to JsonWriter. | 
| WriteResponseAsync(`Stream` stream, `HttpContent` content, `TransportContext` context) | `Task` | Write the response as an asynchronous operation. |
