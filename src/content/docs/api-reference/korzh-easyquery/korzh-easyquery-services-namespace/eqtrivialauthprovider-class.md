---
title: EqTrivialAuthProvider class
slug: api-reference/korzh-easyquery/korzh-easyquery-services-namespace/eqtrivialauthprovider-class
---

Represents a trivial implementation of [Korzh.EasyQuery.Services.IEqAuthProvider](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqauthprovider-interface)  which authorize any user for any action
```csharp
public class Korzh.EasyQuery.Services.EqTrivialAuthProvider
    : IEqAuthProvider

```
Package: `Korzh.EasyQuery` (targets: `netstandard2.0`)

Assembly: `Korzh.EasyQuery.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| EqTrivialAuthProvider() | `void` |  | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| IsAuthorizedAsync([EasyQueryManager](//easyquery/docs/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) eqManager, `string` action) | `Task`&lt;`bool`&gt; | Determines whether the current user can get access to the the specified action. |