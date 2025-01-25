---
title: EqOkResult class
slug: api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/eqokresult-class
---
Represents a special kind of `Microsoft.AspNetCore.Mvc.IActionResult` which allows to build an OK (status code 200) response with some extra data  Implements the
```csharp
public class Korzh.EasyQuery.AspNetCore.EqOkResult
    : ActionResult

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqOkResult() | `void` | Initializes a new instance of the [Korzh.EasyQuery.AspNetCore.EqOkResult](/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/eqokresult-class) class. | 
| EqOkResult(`object` data) | `void` | Initializes a new instance of the [Korzh.EasyQuery.AspNetCore.EqOkResult](/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-aspnetcore-namespace/eqokresult-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Data | `object` | The data which should be added to the response body. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ExecuteResult(`ActionContext` context) | `void` | Executes the result operation of the action method synchronously. This method is called by MVC to process  the result of an action method. | 
| ExecuteResultAsync(`ActionContext` context) | `Task` | Executes the result operation of the action method asynchronously. This method is called by MVC to process  the result of an action method.  The default implementation of this method calls the `Microsoft.AspNetCore.Mvc.ActionResult.ExecuteResult(Microsoft.AspNetCore.Mvc.ActionContext)` method and  returns a completed task. | 
| WriteDataToJsonAsync(`JsonWriter` writer) | `Task` | Write the extra data to JsonWriter. | 
| WriteResponseAsync(`HttpResponse` response) | `Task` | Write the response as an asynchronous operation. |