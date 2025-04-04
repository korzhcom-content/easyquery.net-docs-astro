---
title: EqErrorActionResult class
slug: >-
  api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqerroractionresult-class
sidebar:
  order: 100
---

Represents a special kind of `System.Web.Mvc.ActionResult` which allows to build an BadRequest (status code 400) response with some extra data  Implements the <seealso cref="T:System.Web.Mvc.ActionResult" />
```csharp
public class Korzh.EasyQuery.AspNet.EqErrorActionResult
    : ActionResult

```
Package: `Korzh.EasyQuery.AspNet4` (targets: `net461`)

Assembly: `Korzh.EasyQuery.AspNet4.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqErrorActionResult(`string` message) | `void` | Initializes a new instance of the [Korzh.EasyQuery.AspNet.EqErrorActionResult](/easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqerroractionresult-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Message | `string` | The error message which should be added to the response body. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ExecuteResult(`ControllerContext` context) | `void` | Enables processing of the result of an action method by a custom type that inherits  from the `System.Web.Mvc.ActionResult` class. | 
| WriteResponse(`HttpResponseBase` response) | `void` | Write the response . |
