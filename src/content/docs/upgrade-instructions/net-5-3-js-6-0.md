---
title: Upgrade instructions EasyQuery.NET 5.3 + EasyQuery.JS 6.0
slug: upgrade-instructions/net-5-3-js-6-0
sidebar:
  order: 100
---

## What was changed

There are some breaking changes made in JavaScript part of EasyQuery (EasyQuery.JS). Please read [Version 5.3 + EasyQuery.JS 6.0 release notes](///////////////easyquery/docs/release-notes/version-5-3) for more information.


## 1. Update EasyQuery.NET NuGet packages

For the server-side part of your ASP.NET Core or ASP.NET project or your desktop (WinForms or WPF) solution - just change the version numbers of your EasyQuery NuGet packages to `5.3.0` and rebuild your solution. 

In general case, that's all what you need to do. Please [contact us](https://korzh.com/support) if you have any troubles with compiling your project after the update.

## 2. Update EasyQuery.JS scripts

### 2.1 Remove JQuery (if you don't need it elsewhere)

EasyQuery.JS does not use JQuery anymore. So, if you don't use it in your project - you can remove all inclusions of JQuery and JQuery-UI libraries from your code (either as  `<script>` tags on your HTML pages or as NPM packages).

### 2.2 Update scripts

#### 2.2.1 Update NPM packages

If you use EasyQuery.JS via NPM packages (for example, in your Angular or React project) you need to do the following changes:

1. Since JQuery is not used anyore, you can remove `@easyquery/ui-jquery` package  from your project. All widgets and other visual classes from `@easyquery/ui-jquery` are moved to `@easyquery/ui` package, so replace the `import` commands in your code where necessary. All "view" components lost their  `JQuery` suffix in their name. For example, `AdvancedSearchViewJQuery` now became simply `AdvancedSearchView`

2. `@easyquery/broker-eqs` package is deprecated. Just remove it from your project (from `package.json` file). All functionality from this package was moved either to `@easyquery/core` or `@easyquery/enterprise` packages.

3. Add `@easyquery/enterprise` package if you need full set of features as in previous version (5.1.x) of EasyQuery. You will also need to import this package in the initialization module (more about it later).

4. Obviously, set the version number for all EasyQuery packages to 6.0.0 (or higher).
5. 

#### 2.2.2 Update .js and .css files

This step is relevant only for those who use EasyQuery script bundles (like `eq.all.min.js`) either from our CDN or distributed directly with the application.

So, in this case you need to make the following changes.

1. Replace the version number in URLs for all EasyQuery `.js` or `.CSS` files referenced from our CDN. For example, instead of :

```
<link rel="stylesheet" href="https://cdn.korzh.com/eq/5.1.12/eq.core.min.css">
```

use

```
<link rel="stylesheet" href="https://cdn.korzh.com/eq/6.0.1/eq.core.min.css">
```

2. Replace, `eq.all.min.js` with either `eq.enterprise.min.js`:

```
   <script src="https://cdn.korzh.com/eq/6.0.1/eq.enterprise.min.js"></script>
```


### 2.3 Initialize Enterprise edition features

As a final step, you need to add  `useEnterprise()` call on initialization and pass your license key to it.

1. Get the license key for EasyQuery Enterprise. Just open [Client's Area](https://korzh.com/account) and click on "Get Key" link near EasyQuery.JS product listed for your license. If you don't see EasyQuery.JS in the list of the products for your license or you can't access the Client Area, please [contact us](https://korzh.com/support)

2. Add the following line of code right after creating the view object but before calling `init()` method of that view:

```js
var view = new easyquery.ui.AdvancedSearchView();
view.getContext().useEnterprise('YourEasyQueryJsKeyGoesHere'); //<-------- add this line
view.init(options);
```


## Done!
