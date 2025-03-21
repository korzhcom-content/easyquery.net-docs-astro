---
title: EqTrivialAuthProvider class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/eqtrivialauthprovider-class
---


Represents a trivial implementation of [Korzh.EasyQuery.Services.IEqAuthProvider](/api-reference-5x/korzh-easyquery-services-namespace/ieqauthprovider-interface)  which authorize any user for any action
```csharp
public class Korzh.EasyQuery.Services.EqTrivialAuthProvider
    : IEqAuthProvider

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Task<Boolean>` | IsAuthorizedAsync(`EasyQueryManager` eqManager, `String` action) | Determines whether the current user can get access to the the specified action. |