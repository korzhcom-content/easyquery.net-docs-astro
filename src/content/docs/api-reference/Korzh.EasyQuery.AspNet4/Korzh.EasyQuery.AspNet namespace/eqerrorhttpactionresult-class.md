---
title: EqErrorHttpActionResult class
slug: api-reference/Korzh.EasyQuery.AspNet4/Korzh.EasyQuery.AspNet namespace/eqerrorhttpactionresult-class
---


Represents a special kind of `System.Web.Http.IHttpActionResult` which allows to build an BadRequest (status code 400) response with error message  Implements the <seealso cref="T:System.Web.Http.IHttpActionResult" />.
```csharp
public class Korzh.EasyQuery.AspNet.EqErrorHttpActionResult
    : IHttpActionResult

```
Package: `Korzh.EasyQuery.AspNet4` (targets: `net461`)

Assembly: `Korzh.EasyQuery.AspNet4.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqErrorHttpActionResult(`string` message, `HttpRequestMessage` request) | `void` | Initializes a new instance of the [Korzh.EasyQuery.AspNet.EqErrorHttpActionResult](/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqerrorhttpactionresult-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Message | `string` | The error message which should be added to the response body. | 
| Request | `HttpRequestMessage` | The request message | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ExecuteAsync(`CancellationToken` cancellationToken) | `Task`&lt;`HttpResponseMessage`&gt; | Creates an `System.Net.Http.HttpResponseMessage` asynchronously. | 
| WriteResponseAsync(`Stream` stream, `HttpContent` content, `TransportContext` context) | `Task` | Write the response as an asynchronous operation. |