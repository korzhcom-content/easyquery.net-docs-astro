---
title: IEqAuthProvider interface
slug: >-
  api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqauthprovider-interface
sidebar:
  order: 100
---

Defines the functions necessary to check the authorization status of the current user  over EasyQuery actions
```csharp
public interface Korzh.EasyQuery.Services.IEqAuthProvider

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| IsAuthorizedAsync([EasyQueryManager](///easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) eqManager, `string` action) | `Task`&lt;`bool`&gt; | Determines whether the current user can get access to the the specified action. |
