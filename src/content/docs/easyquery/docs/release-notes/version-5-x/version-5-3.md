---
title: Version 5.3 + EasyQuery.JS 6.0 release notes
slug: easyquery/docs/release-notes/version-5-x/version-5-3
---


## What was changed?

The biggest change in this release is a new major update (version 6.0) of JavaScript library (EasyQuery.JS) used with ASP.NET or ASP.NET Core editions of EasyQuery.  

### Why do version numbers of the client-side and server-side parts differ?

Version 5.3 of EasyQuery contains rather small improvements in the core libraries and all .NET editions. Since there are no breaking changes, we've changed only the minor version number (so it's 5.3.0 now). Whereas the client-side/JavaScript part now has two different editions and completely rewritten UI part (without using JQuery).  

## 1. EasyQuery.JS

### 1.1 Two editions: Community and Enterprise 

EasyQuery.JS is available now as a separate product. Moreover, there are two possible options available: Community edition and Enterprise edition. 

As the name implies Community edition is free and may be used free of charge in any web application on any platform and with as many end users as necessary. Community edition packages include [@easyquery/core](https://www.npmjs.com/package/@easyquery/core), [@easyquery/ui](https://www.npmjs.com/package/@easyquery/ui).

There are some limitations in Community edition (no condition grouping, no sub-queries, no "Custom SQL" columns, etc) but you still can use it for some basic scenarios of advanced search or data filtering. 

Enterprise edition supports all the functionality of EasyQuery. It is represented by one extra package [@easyquery/enterprise](https://www.npmjs.com/package/@easyquery/enterprise). 

Both Community and Enterprise editions are available on CDN as well:

* https://cdn.korzh.com/eq/6.0.0/eq.community.min.js
* https://cdn.korzh.com/eq/6.0.0/eq.enterprise.min.js

Please note, only one of those files need to be included to your app. You should not include both of them on the same page. 

### 1.2 JQuery is no longer required

All previous versions of EasyQuery.JS required JQuery library to render it visual controls. Starting from version 6.0 JQuery library is not used anymore. What does it mean?

1. `@easyquery/ui-jquery` package is deprecated now. 
You may remove it from your project. 

2. All widgets and other visual classes from `@easyquery/ui-jquery` are moved to `@easyquery/ui` package. 

3. All "view" components lost their  `JQuery` suffix in their names. For example, `AdvancedSearchViewJQuery` became `AdvancedSearchView`.

### 1.3. @easyquery/broker-eqs package is deprecated

We've improved the way EasyQuery.JS widgets communicate with the server-side. Most of the "broker" functionality has been moved to `@easyquery/core` or `@easyquery/enterprise` packages.

### 1.4 Enterprise edition licensing

All license owners of EasyQuery for ASP.NET or EasyQuery for ASP.NET Core automatically got a license for EasyQuery.JS as well. All you need to do is to get the license key on Korzh.com [Client's Area](https://korzh.com/account) and apply it properly. For more information - please read the [Upgrade instructions](//$aid/eqdn-id43xyj36zph)  


## 2. Core library
There are no major changes in the core library in this release. Most of them were added just to support some special cases of using EasyQuery in .NET Framework editions.

### 2.1. New License static class

Starting from version 5.3.0 we have a separate License static class for each namespace. So, if you previously used `Korzh.EasyQuery.License.Key = ...` to set your key, now for ASP.NET Core edition it will be

```
Korzh.EasyQuery.AspNetCore.License.Key = "YourLicenseKey";
```

Respectively, you should use `Korzh.EasyQuery.AspNet...` for ASP.NET, `...WinForms` for Windows Forms edition or `...Wpf` for WPF.

Additionally, you can set your license key for EasyQuery.JS library used on EasyQuery Razor UI pages (in case you are using some):

```
Korzh.EasyQuery.AspNetCore.JSLicense.Key = "YourEasyQueryJsLicenseKey";
```

### 2.2. New format types for SQLite and PostgreSQL

Now you can use `FormatType.SqLite` and `FormatType.PostgreSql` values when setting the formats for generated SQL statements.
For example:

```
app.UseEasyQuery(options => {
   .   .   .   .
   options.UseSqlFormats(FormatType.PostgreSql);
}
```


### 2.3 Better support for multi-reference between 2 tables

Sometimes two tables in your database may be connected by more than one join. This situation is described more in detail [here](//$aid/d7a61bd9-de6f-43f0-acac-167591ed5be3). 

If the data model is loaded from a DbContext or directly from a DB connection EasyQuery now correctly processes such a scheme and creates additional table aliases for each extra connection.


### 2.4 Better table joining algorithm

We've changed the default way EasyQuery assembles tables to the generated SQL. Now it starts with the "most detailed" table (in terms of "master-detail" relationships between 2 tables) and then goes from it to all "masters". 

In most cases the new approach should not change the way your application works. Please, [let us know](https://korzh.com/support) if it caused any problems in your case.


### 2.5 DynamicQuery and FullTextSearch can be used together now

Now you can combine `DynamicQuery` and `FullTextSearch` extension method to implement the scenario when a user makes a general search for some text in your DB and then narrow down the filter by particular fields. 

You can see how it works in the [data filtering live demo](https://korzh.com/demo/easyquery-asp-net-core-razor/data-filtering). The source code for that page is [available on GitHub](https://github.com/easyquery/AspNetCoreSamples/blob/master/EqAspNetCoreDemo/Controllers/OrderController.cs) as usual.

### 2.6 Fixes

Here are some problems that were fixed in version 5.3.0:

* Incorrect table name saving for MySqlGate
* Wrong SQL for "None" type of condition group
* Incorrect alias generation for DbColumn
* Incorrect macro values (like `${{Today}}`) processing in operand defaults

## Upgrade instructions for version 5.x users

 The upgrade from the previous version is pretty easy. Here are the detailed instructions:
 
 [$$-Upgrade instructions: EasyQuery.NET 5.3 + EasyQuery.JS 6.0-$$](//$aid/eqdn-id43xyj36zph)

## Upgrade instructions for version 3.x users

To upgrade from previous versions (below 5.0) you need to make an upgrade to 5.x branch first. Here are the instructions: 

* [Upgrading to 5.x: Windows Forms and WPF projects](//$aid/eqdn-r52qbyr2aamr)
* [$$-Upgrading to 5.x: ASP.NET (MVC and WebForms) projects-$$](//$aid/eqdn-sy2qc0b7h1i8)


## Version 5.3.x updates in  EasyQuery for .NET (Core)
For the latest changes please see [$$-Change Log-$$](//$aid/eqdn-id4za3lbv7bz)

* Added (*version 5.3.4*): `ReturnQueryOnSave` option for EasyQueryMiddleware option.
* Fixed (*version 5.3.4*): Spaces are not considered as list separators in WinForms edition anymore
* Fixed (*version 5.3.4*): Joins constructions didn't work properly in some cases after the changes made in version 5.3.0.
* Fixed (*version 5.3.4*): `CustomFunc` is processed before applying the aggregate functions in columns.
* Added (*version 5.3.3*): More data types are supported in NpgSqlGate
* Fixed (*version 5.3.3*): Table and field name prettyfier works better now on model loading from a DbContext
* Fixed (*version 5.3.3*): Queries with parameters were not saved correctly
* Added (*version 5.3.3*): `In sub query` and `Not in sub query` operators are included into the list of default operators now.
* Added (*version 5.3.1*): `DbContextLoaderOptions.SplitTablesOnMultiReference` options that tells DbContextModelLoader to split tables on 2 (or more) aliases if there are 2 (or more) links between them
* Added (*version 5.3.1*): The possibility to define JS license key on the backend return it on `/.easyquery/lck request` (added automatically when you define EasyQuery middleware). The key can be defined right in code (`Korzh.EasyQuery.AspNetCore.JSLicense.Key`) or via configuration (`EasyQuery:JSLicenseKey` setting).
* Added (*version 5.3.1*): Add Data Model ID (`modelId` property) when saving Query to JSON.
* Fixed (*version 5.3.3, EasyQueryWPF*): Properly update panels' layout on query change.
* Fixed (*version 5.3.4, EasyQueryWPF*): List name was not correctly passed into `ListRequest` event parameters.
* Fixed (*version 5.3.3, EasyQueryWPF*): Hidden entities and attributes were still visible in EntitiesPanel.