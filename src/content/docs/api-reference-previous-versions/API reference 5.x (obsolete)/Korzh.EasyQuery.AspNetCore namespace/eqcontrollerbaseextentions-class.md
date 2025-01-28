---
title: EqControllerBaseExtentions class
slug: api-reference-previous-versions/API reference 5.x (obsolete)/Korzh.EasyQuery.AspNetCore namespace/eqcontrollerbaseextentions-class
---


Contains useful expression which allows to build some specific IActionResult objects.
```csharp
public static class Korzh.EasyQuery.AspNetCore.EqControllerBaseExtentions

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `EqOkResult` | EqOk(<span style='color: blue'>this</span> `ControllerBase` controller, `Object` data) | An extension function which returns an action result with 200 (OK) status code and some additional data (in JSON) in the response body. |