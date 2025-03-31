---
title: Version 5.0 release notes
slug: release-notes/version-5-x/version-5-0
---

Version 5.0 is a completely rewritten major update of EasyQuery which now can be used in any ASP.NET Core (version 2.0 and higher) project and with almost any frontend platform (MVC, Razor pages, Angular, React, Vue, etc).

There are a lot of changes both on the server-side part and in the client-side library (EasyQuery.JS). Below we will describe the most important ones:

## Core library

### 1. JSON format
The base format for saving data models and queries is JSON. The old XML format is still supported but we advise to switch to JSON whenever it's possible since it's more compact and has faster saving/loading functions.

### 2. Simplified class structure
We remove unnecessary complexity whenever it's possible. For example instead of 6 classes which represented query conditions in version 4.4.2 (`Condition`, `SimpleCondition`, `Predicate`, `DbCondition`, `DbSimpleCondition`, `DbPredicate`), in version 5.0 we have only one `Condition` class which ~~rules them all~~ covers all cases where those old classes were used.

The similar situation we have with EqExpression class and its descendants. The number of "expression" classes has been cut in half.

## ASP.NET Core middleware
Before version 5.0 EasyQuery required to set up a special controller (usually named `EasyQueryController`) which handled all AJAX requests from EasyQuery.JS widgets. 
Now all these requests are handled by a special EasyQuery middleware which has rich possibilities for customization and can cover all cases of using EasyQuery components.

For example, the most usual case for an ASP.NET Core web application is when the data model is loaded from some EF Core's DbContext. This case requires only the following 3 lines of code now:

```
app.UseEasyQuery(options => {
    options.UseDbContext<AppDbContext>();
});
```

So, now you don't need to copy/paste the controller's code from one of our samples and then modify that code for your case. You just need to add the EasyQuery middleware in your `Startup.Configure` and define some of its settings. The examples of the middleware settings for different cases you can find in our [demo project, published on GitHub](https://github.com/easyquery/AspNetCoreSamples/tree/master/EqAspNetCoreDemo/Startup.cs){target=_blank}



## Client-side scripts
The most radical changes were made in the JavaScript part of EasyQuery library. First of all, it was completely rewritten in TypeScript. 
Instead of inlcuding one monolith script ([`eq.all.min.js`](https://cdn.korzh.com/eq/5.0.0/eq.all.min.js)) we split the client-side code onto several [NPM packages](https://www.npmjs.com/org/easyquery) which can be now used in any SPA application. Of course, the old way is still supported, but it's more convenient now to use the separate packages, especially in TypeScript projects.
The internal structure of the classes in a new library replicates the classes from the backend library. So, most of the EasyQuery concepts you used in your server-side applications (like "data model", "entity", "condition", "column", "expression", etc) are available on the client-side now as well. 

In our demo project [EqAspNetCoreDemo](https://github.com/easyquery/AspNetCoreSamples/tree/master/EqAspNetCoreDemo) we show both approaches of using EasyQuery.JS scripts in your application:
1. Via including one script [available on our CDN](https://cdn.korzh.com/eq/5.0.0/eq.all.min.js). Look at [AdvancedSearch.cshtml](https://github.com/easyquery/AspNetCoreSamples/tree/master/EqAspNetCoreDemo/Pages/AdvancedSearch.cshtml) page in our demo project as an example.
2. By using NPM packages. Here is an example of [adhoc-reporting.ts](https://github.com/easyquery/AspNetCoreSamples/tree/master/EqAspNetCoreDemo/ts/adhoc-reporting.ts) script which is compiled with WebPack and then included to ["Adhoc reporting" Razor view](https://github.com/easyquery/AspNetCoreSamples/tree/master/EqAspNetCoreDemo/Views/Home/AdhocReporting.cshtml) as a local JS file. 

Additionally, in our GitHub repository we published an example of [Angular project](https://github.com/easyquery/AspNetCoreSamples/tree/master/EqAngularDemo) which uses EasyQuery scripts in a usual (for Angular) way - via NPM packages. Here you will get all the benefits of using TypeScript as a base language: IntelliSense, compile-time checking of types and parameters, etc .
	

## Upgrade instructions
If you want to update your project from version 4.x of EasyQuery for ASP.NET Core to version 5.0 - here are the [upgrade instructions](//easyquery/docs/release-notes/upgrade-from-4-x-to-5-0).