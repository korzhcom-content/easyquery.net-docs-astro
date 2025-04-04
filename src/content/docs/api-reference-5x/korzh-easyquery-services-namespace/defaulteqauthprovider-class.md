---
title: DefaultEqAuthProvider class
slug: >-
  api-reference-5x/korzh-easyquery-services-namespace/defaulteqauthprovider-class
sidebar:
  order: 100
---

The default implementation of the [Korzh.EasyQuery.Services.IEqAuthProvider](/easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/ieqauthprovider-interface) interface.  Contains several methods which allow to mark some EasyQuery actions as "anonymous" (so they can be accessed by any user)  and to restrict the access to them depening on user role.
```csharp
public class Korzh.EasyQuery.Services.DefaultEqAuthProvider
    : IEqAuthProvider

```

### Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `Dictionary<String, Func<Boolean>>` | ActionGuards | Contains the dictionary of action guards.  Each EasyQuery action has a function (guard) which return true if this action can be accessed by the current user | 
| `ClaimsPrincipal` | User | The current user | 


### Methods

| Type | Name | Description | 
| --- | --- | --- | 
| `DefaultEqAuthProvider` | AllowAnonymous(`String[]` actions) | Sets anonymous access for the actions specified in the parameter. | 
| `void` | FillDefaultActionGuards() | Fills the [Korzh.EasyQuery.Services.DefaultEqAuthProvider.ActionGuards](/easyquery/docs/api-reference-5x/korzh-easyquery-services-namespace/defaulteqauthprovider-class) list with the default guards.  The default setup includes the following 2 rules:  1. All actions requires authorization.  2. NewQuery, SaveQuery and RemoveQuery actions requires also the "EasyQuery Manager" (`eqmanager`) role. | 
| `Func<Boolean>` | GetAuthorizedGuard() | Gets the guard functions which returnc <c>true</c> only if the current user is authenticated. | 
| `Func<Boolean>` | GetGrantAccessForRolesGuard(`String[]` roles) | Gets the guard functions which grants access only for users with the specifeid roles. | 
| `DefaultEqAuthProvider` | GrantAccessForRoles(`String` action, `String[]` roles) | Grants the access to specified action for one more roles passed in the second parameter. | 
| `Task<Boolean>` | IsAuthorizedAsync(`EasyQueryManager` eqManager, `String` action) | Determines whether the current user can get access to the the specified action. | 
| `DefaultEqAuthProvider` | RequireAuthorization(`String[]` actions) | Sets the restricted access for the specified actions (only authorized users can access them). | 
| `DefaultEqAuthProvider` | RequireRole(`String` role, `String[]` actions) | Restricts the access to the actions specified in the second parameter by the user role passed in the first parameter. | 


### Static Fields

| Type | Name | Description | 
| --- | --- | --- | 
| `String` | EqManagerRole | The default ID for "EasyQuery Manager" role  The user with this role can access the actions which modify queries in the storage. |
