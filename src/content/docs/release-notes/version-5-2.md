---
title: Version 5.2 release notes
slug: release-notes/version-5-2
---


Version 5.2 of EasyQuery not only brings some improvements to the .NET Core edition, it;s also the first release of 5.x branch for all other editions of EasyQuery which uses on .NET Framework 4.x and still were on 3.x branch until now: WinForms, WPF and ASP.NET 4 editions.  

## Core library
There are no many really big updates in the core library in this release. Most of them were added just to support some special cases of using EasyQuery in .NET Framework editions.

### 1.  Syncronious read/write operations

We added full implementation of the synchronious version for all loading/saving operations (such  `LoadFromFile`, `LoadFromSream`, `SaveToFile`, etc) both for DataModel (DbMode) and Query (DbQuery) classes.

### 2. EasyQueryOptions class extensions

Most of the extension methods for EasyQueryOptions class are moved to `Korzh.EasyQuery.Services` namespace now (instead of `Microsoft.AspNetCore.Builder` used previously). So, don't forget to add `using Korzh.EasyQuery.Services` to your Startup.cs file if it's not included previously.


## .NET Framework packages

This update finally brings the latest EasyQuery code base to all .NET Framework editions. So, starting from now the 3.x branch of EasyQuery (the latest version is 3.10.0) become obsolete. We still provide support of it for all active subscribers of our software maintenance package but there will be no updates to version 3.10 except, possibly, some small bug fixing releases.

### Installation

The main difference for current users of EasyQuery 3.x branch will be the way EasyQuery assemblies are referenced in projects. Version 5.x packages are distributed only as NuGet packages. The old approach when you include a DLL file stored somewhere on your hard drive is not available now. So, the only way to reference some EasyQuery package now - is to search for using NuGet Package Manager in Visual Studio or execute `Install-Package` command Package Manager Console. 

The only exception from this rule is Data Model Editor utility which is available for free download as a [separate setup file](https://korzh.com/download/dme_setup.exe).

### Product key for license owners.

Another big change (which actually is a consequence of the previous one) is the way you convert your trial version to the full one after the registering.

Instead of downloading and installing the full version of EasyQuery - you will now need an unique [license key](/getting-started/product-key) and just one line of code which removes all trial version limitations:
```
Korzh.EasyQuery.License.Key = "YourLicenseKeyCodeGoesHere";
```

The product key will be available on your [Client’s Area page](https://korzh.com/account) of our website. If it's not generated yet - just click on "Get key" button for the version you would like to use.


### Windows Forms and WPF

There are no big changes in functionality of WPF and WinForms editions of EasyQuery in this update (except one small addition in EasyQuery WPF). 
Only some re-namings in EasyQuery namespaces and class names. All of them are described in the [upgrading instructions for WPF/WinForms](//$aid/eqdn-r52qbyr2aamr)

The small addition in WPF we mentioned above is a new `ShowCheckboxes` option in ColumnPanel control. If it's turned on, the user will see the checboxes at the beginning of each row and will be able to disable corresponding query column temporarely (without deleting). 


### ASP.NET 4.x with MVC

There are 2 big changes in ASP.NET edition of EasyQuery which affects your MVC project when you upgrade to EasyQuery version 5.2.0 or higher.

#### 1. New EasyQuery.JS library

Starting from version 5.2.0 EasyQuery for ASP.NET uses the latest version of the client-side library (EasyQuery.JS 5.1.8 for now) which is the same that is used in ASP.NET Core edition. 

#### 2. WebAPI controller

Instead of MVC controller used in the previous version, now EasyQuery provides you with a default implementation of WebAPI controller `EasyQueryApiController` class from which you can derive your own contoller class and tune it according to your requirements. 

For more information about using EasyQuery in ASP.NET MVC applications please read [$$-Getting started for ASP.NET 4-$$](//$aid/eqdn-tp2v66l73lbj) tutorial or the [upgrade instructions](//$aid/eqdn-sy2qc0b7h1i8) for ASP.NET MVC projects.

### ASP.NET 4.x with WebForms

We discontinue our EasyQuery WebForms controls. However, it does not mean you can't use EasyQuery in WebForms applications now. Quite the contrary - now using EasyQuery in WebForms will be much easier and more enjoyable than before. 

The same as for MVC applications, for WebForms we now use the latest version of EasyQuery.JS library on the client-side and a WebAPI controller on the server-side. The only difference with MVC is that instead of an MVC view you will need to define some .aspx page with all markup and scripts necessary to run EasyQuery.JS widgets.   

For more information please read [$$-Getting started for ASP.NET 4-$$](//$aid/eqdn-tp2v66l73lbj) tutorial and the [upgrade instructions](//$aid/eqdn-sy2qc0b7h1i8) for WebForms projects.

## Version 5.2.x updates
Since the initial release of version 5.2.0 we have made few updates of EasyQuery. Here are the list of the most essential changes:

* Support for ASP.NET Core 3.0 and Entity Framework Core 3.0!
* QueryFormats property in EasyQueryManager - now it's possible to specify the formats of result SQL statements right in the manager's constructor.
* New property `EntityAttributeFormat` in ColumsPanel and QueryPanel controls in WPF edition. It allows you to set up the format of entity attributes (field) in columns or conditions.
* Bug fixed: timezoneOffset parameter in client-side request was not properly processed.
* Bug fixed: UseUtcTime was not taken into the account during LINQ query generation.
* Bug fixed: UserData property in entity attributes was not saved/loaded. 
* Bug fixed: "enabled" property in query conditions was not saved and loaded correctly.
* Bug fixed: An exception in DynamicQuery if "is in list" operator was applied to a field of enumeration type. 
* Bug fixed: Disabled columns were included into GROUP BY section
* Bug fixed in WPF edition: Empty column title on edit
* Bug fixed in WPF edition: Wrong behavior of "Duplicate condition" operation


## Upgrade instructions for version 5.x users

If you are upgrading from version 5.x  for ASP.NET Core - you just need to change the version numbers of all EasyQuery NuGet packages you are using to `5.2.0` and the version of the EasyQuery script files (or NPM packages) to `5.1.8`


> __NB__: For the users of EasyQuery script bundles (like `eq.all.min.js`) published on our CDN
> 
>  You will also need to modify the full path to the EasyQuery classes and add `ui` namespace to it.
>
> So, instead of  `let view = new easyquery.AdvancedSearchViewJQuery();`  now it should be  `let view = new easyquery.ui.AdvancedSearchViewJQuery();`
 

## Upgrade instructions for version 3.x users

For the upgrade instructions for other editions - please use one of the articles listed below:

* [Upgrading to 5.x: Windows Forms and WPF projects](//$aid/eqdn-r52qbyr2aamr)
* [$$-Upgrading to 5.x: ASP.NET (MVC and WebForms) projects-$$](//$aid/eqdn-sy2qc0b7h1i8)