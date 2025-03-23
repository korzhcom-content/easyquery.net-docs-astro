---
title: How to restrict access to EasyQuery middleware for non-authenticated users
slug: how-to/version-5-x/easyquery-middleware-non-authenticated-users
---


## Problem
Your web application has an open part (main page, some info pages, login/registration forms) and the part that requires the authorization. 
And you want that the data-filtering or ad-hoc reporting functionality provided by EasyQuery be available only for authorized users. 

## Solution
Starting from version 5.1 EasyQuery introduces the concept of "auth provider" (`IEqAuthProvider` interface) which is responsible for controlling the access to all EasyQuery middleware actions.
There is a default implementation of that provider which grants acts exactly as described: it grants the access to EasyQuery functions only for authorized users.

To apply that provider just add the following line to the EasyQuery middleware setup in your `Startup.Configure`:

```
app.UseEasyQuery(options => {
    
	.    .    .    .    .
	
	options.UseDefaultAuthProvider();
});
```


By default, such actions as "NewQuery", "SaveQuery" or "RemoveQuery" are available not for all authorized users but only for those who has a special role: `eq-manager`.
To remove this requirement you can "tune" the provider after its initialization:

```
options.UseDefaultAuthProvider(provider => {
    provider.RequireAuthorization(EqAction.NewQuery, EqAction.SaveQuery, EqAction.RemoveQuery);
});

```

If you want to require the user has some role to access some action you can use `RequireRole` function. Here is an example:

```
options.UseDefaultAuthProvider(provider => {
    provider.RequireRole("some-special-role", EqAction.RemoveQuery);
});

```

The code above granted the access to "RemoveQuery" action only to users with "some-special-role" role.