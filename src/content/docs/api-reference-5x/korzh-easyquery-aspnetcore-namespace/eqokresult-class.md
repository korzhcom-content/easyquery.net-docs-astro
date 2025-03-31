---
title: EqOkResult class
slug: api-reference-5x/korzh-easyquery-aspnetcore-namespace/eqokresult-class
---

Represents a special kind of `Microsoft.AspNetCore.Mvc.IActionResult` which allows to build an OK (status code 200) response with some extra data  Implements the
```csharp
public class Korzh.EasyQuery.AspNetCore.EqOkResult
    : ActionResult, IActionResult

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Object` | Data | The data which should be added to the response body. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | ExecuteResult(`ActionContext` context) | Executes the result operation of the action method synchronously. This method is called by MVC to process  the result of an action method. | 
| `Task` | ExecuteResultAsync(`ActionContext` context) | Executes the result operation of the action method asynchronously. This method is called by MVC to process  the result of an action method.  The default implementation of this method calls the `Microsoft.AspNetCore.Mvc.ActionResult.ExecuteResult(Microsoft.AspNetCore.Mvc.ActionContext)` method and  returns a completed task. | 
| `Task` | WriteDataToJsonAsync(`JsonWriter` writer) | Write the extra data to JsonWriter. | 
| `Task` | WriteResponseAsync(`HttpResponse` response) | Write the response as an asynchronous operation. |