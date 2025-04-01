---
title: EqTrivialAuthProvider class
slug: >-
  api-reference-5x/korzh-easyquery-services-namespace/eqtrivialauthprovider-class
sidebar:
  order: 100
---

Represents a trivial implementation of [Korzh.EasyQuery.Services.IEqAuthProvider](///////////////easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/ieqauthprovider-interface)  which authorize any user for any action
```csharp
public class Korzh.EasyQuery.Services.EqTrivialAuthProvider
    : IEqAuthProvider

```

### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `Task<Boolean>` | IsAuthorizedAsync(`EasyQueryManager` eqManager, `String` action) | Determines whether the current user can get access to the the specified action. |
