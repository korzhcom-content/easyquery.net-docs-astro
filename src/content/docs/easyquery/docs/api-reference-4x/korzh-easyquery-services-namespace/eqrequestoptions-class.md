---
title: EqRequestOptions class
slug: easyquery/docs/api-reference-4x/korzh-easyquery-services-namespace/eqrequestoptions-class
---


Represents different options used in AJAX requests from EasyQuery JS widgets to server-side controller.
```csharp
public class Korzh.EasyQuery.Services.EqRequestOptions

```

### Properties

| Type | Name | Description | 
| --- | --- | --- | 
| `Int32` | ResultFormat | Gets or sets the result format. 1 - Google DataTable (default), 0 - old style. | 
| `Boolean` | ReturnStatement | Gets or sets a value indicating whether the generated SQL / LINQ statement should be returned in result. | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | LoadFromJsonDict(`JsonDict` dict) | Loads request options from IDictionary object. Useful for deserialization from JSON. |