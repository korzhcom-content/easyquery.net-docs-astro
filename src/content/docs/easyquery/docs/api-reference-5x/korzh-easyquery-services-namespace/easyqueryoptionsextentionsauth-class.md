---
title: EasyQueryOptionsExtentionsAuth class
slug: easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/easyqueryoptionsextentionsauth-class
---


Contains several extension methods which simplifies the registration  of the default authorithation provider for EasyQuery actions.
```csharp
public static class Korzh.EasyQuery.Services.EasyQueryOptionsExtentionsAuth

```

### Static Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `void` | AddPreExecuteTunningWithHttpContext(<span style='color: blue'>this</span> `EasyQueryOptions` options, `Action<EasyQueryManager, HttpContext>` tunningAction) | Adds an action which allows to tune EasyQueryManager (e.g. add some conditions to the current query) before query execution.  This action can take into the account the current HTTP context (request parameters, current user) passed in the parameter. | 
| `void` | UseDefaultAuthProvider(<span style='color: blue'>this</span> `EasyQueryOptions` options) | Registers the defaul authentication provider - a function (resolver)  that returns and instance of [Korzh.EasyQuery.Services.DefaultEqAuthProvider](/api-reference-5x/korzh-easyquery-services-namespace/defaulteqauthprovider-class) class. | 
| `void` | UseDefaultAuthProvider(<span style='color: blue'>this</span> `EasyQueryOptions` options, `Action<DefaultEqAuthProvider>` tuner) | Registers the defaul authentication provider - a function (resolver)  that returns and instance of [Korzh.EasyQuery.Services.DefaultEqAuthProvider](/api-reference-5x/korzh-easyquery-services-namespace/defaulteqauthprovider-class) class. |