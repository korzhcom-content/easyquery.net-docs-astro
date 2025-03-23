---
title: DefaultEqAuthProvider class
slug: api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/defaulteqauthprovider-class
---


The default implementation of the [Korzh.EasyQuery.Services.IEqAuthProvider](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/ieqauthprovider-interface) interface.  Contains several methods which allow to mark some EasyQuery actions as "anonymous" (so they can be accessed by any user)  and to restrict the access to them depening on user role.
```csharp
public class Korzh.EasyQuery.Services.DefaultEqAuthProvider
    : IEqAuthProvider

```
Package: `Korzh.EasyQuery.AspNetCore` (targets: `net5.0`, `netcoreapp3.1`, `netstandard2.0`)

Assembly: `Korzh.EasyQuery.AspNetCore.dll`

### Constructors

| Name | Type | Description | 
| --- | --- | --- | 
| DefaultEqAuthProvider(`IServiceProvider` services) | `void` | Initializes a new instance of the [Korzh.EasyQuery.Services.DefaultEqAuthProvider](/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/defaulteqauthprovider-class) class. | 


### Fields

| Name | Type | Description | 
| --- | --- | --- | 
| ActionGuards | `Dictionary`&lt;`string`, `Func`&lt;`Task`&lt;`bool`&gt;&gt;&gt; | Contains the dictionary of action guards.  Each EasyQuery action has a function (guard) which return true if this action can be accessed by the current user | 
| AuthService | `IAuthorizationService` | The authorization service for policy | 
| User | `ClaimsPrincipal` | The current user | 


### Methods

| Name | Type | Description | 
| --- | --- | --- | 
| AllowAnonymous(`String[]` actions) | [DefaultEqAuthProvider](/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/defaulteqauthprovider-class) | Sets anonymous access for the actions specified in the parameter. | 
| FillDefaultActionGuards() | `void` | Fills the [Korzh.EasyQuery.Services.DefaultEqAuthProvider.ActionGuards](/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/defaulteqauthprovider-class) list with the default guards.  The default setup includes the following 2 rules:  1. All actions requires authorization.  2. NewQuery, SaveQuery and RemoveQuery actions requires also the "EasyQuery Manager" (`eqmanager`) role. | 
| GetAuthorizedGuard() | `Func`&lt;`Task`&lt;`bool`&gt;&gt; | Gets the guard functions which returnc <c>true</c> only if the current user is authenticated. | 
| GetGrantAccessForPolicyGuard(`string` policy) | `Func`&lt;`Task`&lt;`bool`&gt;&gt; | Gets the guard functions which returnc <c>true</c> only if the current user with specified policy. | 
| GetGrantAccessForRolesGuard(`String[]` roles) | `Func`&lt;`Task`&lt;`bool`&gt;&gt; | Gets the guard functions which grants access only for users with the specifeid roles. | 
| GrantAccessForRoles(`string` action, `String[]` roles) | [DefaultEqAuthProvider](/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/defaulteqauthprovider-class) | Grants the access to specified action for one more roles passed in the second parameter. | 
| IsAuthorizedAsync([EasyQueryManager](/api-reference/korzh-easyquery/korzh-easyquery-services-namespace/easyquerymanager-class) eqManager, `string` action) | `Task`&lt;`bool`&gt; | Determines whether the current user can get access to the the specified action. | 
| RequireAuthorization(`String[]` actions) | [DefaultEqAuthProvider](/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/defaulteqauthprovider-class) | Sets the restricted access for the specified actions (only authorized users can access them). | 
| RequirePolicy(`string` policy, `String[]` actions) | [DefaultEqAuthProvider](/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/defaulteqauthprovider-class) | Restricts the access to the actions specified in the second parameter by the user policy passed in the first parameter. | 
| RequireRole(`string` role, `String[]` actions) | [DefaultEqAuthProvider](/api-reference/korzh-easyquery-aspnetcore/korzh-easyquery-services-namespace/defaulteqauthprovider-class) | Restricts the access to the actions specified in the second parameter by the user role passed in the first parameter. | 


### Static Fields

| Name | Type | Description | 
| --- | --- | --- | 
| EqManagerRole | `string` | The default ID for "EasyQuery Manager" role  The user with this role can access the actions which modify queries in the storage. |