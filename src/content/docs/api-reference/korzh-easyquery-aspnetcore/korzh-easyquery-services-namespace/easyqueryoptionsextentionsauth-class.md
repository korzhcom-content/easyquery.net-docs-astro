---
title: EasyQueryOptionsExtentionsAuth class
slug: >-
  api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/easyqueryoptionsextentionsauth-class
sidebar:
  order: 100
---

Contains several extension methods which simplifies the registration  of the default authorithation provider for EasyQuery actions.
```csharp
public static class Korzh.EasyQuery.Services.EasyQueryOptionsExtentionsAuth

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Static Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AddPreFetchTunerWithHttpContext(<span style='color: blue'>this</span> [EasyQueryOptions](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `Action`&lt;[EasyQueryManager](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class), `HttpContext`&gt; tunningAction) | `void` | Adds an action which allows to tune EasyQueryManager (e.g. add some conditions to the current query) before query execution.  This action can take into the account the current HTTP context (request parameters, current user) passed in the parameter. | 
| UseDefaultAuthProvider(<span style='color: blue'>this</span> [EasyQueryOptions](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options) | `void` | Registers the defaul authentication provider - a function (resolver)  that returns and instance of [Korzh.EasyQuery.Services.DefaultEqAuthProvider](///////////////easyquery/docs/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/defaulteqauthprovider-class) class. | 
| UseDefaultAuthProvider(<span style='color: blue'>this</span> [EasyQueryOptions](///////////////easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyqueryoptions-class) options, `Action`&lt;[DefaultEqAuthProvider](///////////////easyquery/docs/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/defaulteqauthprovider-class)&gt; tuner) | `void` | Registers the defaul authentication provider - a function (resolver)  that returns and instance of [Korzh.EasyQuery.Services.DefaultEqAuthProvider](///////////////easyquery/docs/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/defaulteqauthprovider-class) class. |
