---
title: EqControllerBaseExtentions class
slug: api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/eqcontrollerbaseextentions-class
---
Contains useful expression which allows to build some specific IActionResult objects.
```csharp
public static class Korzh.EasyQuery.AspNetCore.EqControllerBaseExtentions

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| EqError(<span style='color: blue'>this</span> `ControllerBase` controller, `string` message, `int` statusCode = 400) | [EqErrorResult](/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/eqerrorresult-class) | An extension function which returns an action result with error status code  and some additional message (in JSON) in the response body in EasyQuery format. | 
| EqOk(<span style='color: blue'>this</span> `ControllerBase` controller, `object` data) | [EqOkResult](/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/eqokresult-class) | An extension function which returns an action result with 200 (OK) status code  and some additional data (in JSON) in the response body in EasyQuery format. |