---
title: Version 5.1 release notes
slug: release-notes/version-5-x/version-5-1
sidebar:
  order: 4
---

Version 5.1 is a minor update to version 5.0 which fixes several small bugs and brings few new classes to support authentication/authorization procedures for EasyQuery middleware actions.

## Core library

### 1. IEqAuthProvider interface

Version 5.1 introduces `IEqAuthProvider` interface which defines the structure of the authentication provider class. An instance of that class is attached to EasyQuery middleware and controls the access to the particular actions for the current user.


### 2. DefaultEqAuthProvider

This is the default implementation of `IEqAuthProvide` interface with the following behavior:
 
  - All EasyQuery middleware actions (like `GetModel`, `GetQuery`, `ExecuteQuery`, etc) requires authorization - so the user must be logged in to make the corresponding requests.
  - The actions which allow modifying queries in the server-side store (`SaveQuery`, `NewQuery`, `RemoveQuery`) in addition to being authorized, also require a special user role (`eq-manager` by default).

This default implementation also contains several useful methods (like `AllowAnonymous` or `RequireRole`) which allow you to specify some custom authorization rules for EasyQuery actions.

To add the default authorization provide to your EasyQuery middleware - there is a `UseDefaultAuthProvider` extension function inside middleware configuration action:

```
app.UseEasyQuery(options =>
{
   .    .    .    .    .    .    .
	options.UseDefaultAuthProvider();
});
```

Here is an example of defining some custom rules: 

```
app.UseEasyQuery(options =>
{
   .    .    .    .    .    .    .
	options.UseDefaultAuthProvider((provider) => provider
			.RequireAuthorization(EqAction.NewQuery, EqAction.SaveQuery)   
			.RequireRole("admin", EqAction.RemoveQuery));
}
```

### 3. New middleware options 

 - QueryRecordCount - If `true` (the default value) EasyQuery will execute the second query (like `SELECT COUNT(*) FROM ({the original SQL SELECT})`) to get the total number of records for the original query when the pagination is turned on.
  
 - SaveNewQuery - defines whether we need to save the new query to the storage when `NewQuery` request has arrived. If you only want to create a new query and set some defaults for it - set this option to `false`. In this case, this new query will be saved only when the user initiates `SaveQuery` request on the client-side


### 4. Middleware performance improvements

Some operations in EasyQuery middleware are executed faster now because of the optimizations we did with the code that processes the client-side requests' parameters.

## Client-side scripts

The main functionality of the client-side EasyQuery scripts remains mostly the same. There are a few small changes and fixed bugs.

### Internationalization support

Now you can call `eqi18n.addLocale` function to add new locale with all text resources for this locale. Additionally, there are `setLocale` function and a special `LocaleWidget` which allow users to switch the current language.

### Custom dialogs in AdvancedSearchView

It's possible now to define custom dialogs (for example using JQuery Dialogs) for New/Save/Remove Query operations. There is a [tutorial which describes how to do it](/easyquery/docs/tutorials/custom-javascript-dialogs-saving-loading).

### New functions in the Query object

It's quite easy to add a new column or new condition on the client-side with new `addColumn` and `addSimpleCondition` methods of the Query object. 

### JS code documentation

All EasyQuery classes and functions are fully documented now with TSDoc (an analog of JSDoc for TypeScript). 
So, if you are using a code editor with IntelliSense support (like Visual Studio or VS Code) - you will see the descriptions and hints while editing your TypeScript code that works with EasyQuery structures.  


## Upgrade instructions

If you are upgrading from version 5.0 - you just need to change the version numbers of all EasyQuery packages or script files you are using from `5.0.0` to `5.1.1`. It includes:
 
 -  EasyQuery Nuget packages referenced in your project file
 -  EasyQuery NPM packages specified in the `package.json` (if you use this way of building client-side scripts). 
 -  EasyQuery script and CSS files linked to your pages from our CDN. Now it must be something like `https://cdn.korzh.com/eq/5.1.1/eq.all.min.js`

In the latest case (when the CDN scripts are used) you will also need to modify the full path to the EasyQuery classes and add `ui` namespace to it.

So, instead of:

```
let view = new easyquery.AdvancedSearchViewJQuery();
```

now it should be:
```
let view = new easyquery.ui.AdvancedSearchViewJQuery();
```

> NB: For those, who upgrades from the version  4.x of EasyQuery for ASP.NET Core - please follow these [detailed upgrade instructions](/easyquery/docs/release-notes/upgrade-from-4-x-to-5-0) first.
