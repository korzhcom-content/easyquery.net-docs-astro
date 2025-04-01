---
title: EqOkActionResult class
slug: >-
  api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqokactionresult-class
sidebar:
  order: 100
---

Represents a special kind of `System.Web.Mvc.ActionResult` which allows to build an OK (status code 200) response with some extra data  Implements the <seealso cref="T:System.Web.Mvc.ActionResult" />
```csharp
public class Korzh.EasyQuery.AspNet.EqOkActionResult
    : ActionResult

```
Package: `Korzh.EasyQuery.AspNet4` (targets: `net461`)

Assembly: `Korzh.EasyQuery.AspNet4.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqOkActionResult(`object` data) | `void` | Initializes a new instance of the [Korzh.EasyQuery.AspNet.EqOkActionResult](///easyquery/docs/api-reference/korzh-easyquery-aspnet4/korzh-easyquery-aspnet-namespace/eqokactionresult-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| Data | `object` | The data which should be added to the response body. | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| ExecuteResult(`ControllerContext` context) | `void` | Enables processing of the result of an action method by a custom type that inherits  from the `System.Web.Mvc.ActionResult` class. | 
| WriteDataToJson(`JsonWriter` writer) | `void` | Write the extra data to JsonWriter. | 
| WriteResponse(`HttpResponseBase` response) | `void` | Write the response . |
