---
title: EqErrorResult class
slug: >-
  api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/eqerrorresult-class
sidebar:
  order: 100
---

Represents a special kind of `Microsoft.AspNetCore.Mvc.ActionResult` which allows to build an Error Request (with status code) response with some extra data  Implements the <seealso cref="T:Microsoft.AspNetCore.Mvc.ActionResult" />
```csharp
public class Korzh.EasyQuery.AspNetCore.EqErrorResult
    : ActionResult

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqErrorResult(`string` message, `int` statusCode) | `void` | Initializes a new instance of the [Korzh.EasyQuery.AspNetCore.EqErrorResult](///easyquery/docs/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/eqerrorresult-class) class. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ExecuteResult(`ActionContext` context) | `void` | Executes the result operation of the action method synchronously. This method is called by MVC to process  the result of an action method. | 
| ExecuteResultAsync(`ActionContext` context) | `Task` | Executes the result operation of the action method asynchronously. This method is called by MVC to process  the result of an action method.  The default implementation of this method calls the `Microsoft.AspNetCore.Mvc.ActionResult.ExecuteResult(Microsoft.AspNetCore.Mvc.ActionContext)` method and  returns a completed task. | 
| WriteResponseAsync(`HttpResponse` response) | `Task` | Write the response as an asynchronous operation. |
