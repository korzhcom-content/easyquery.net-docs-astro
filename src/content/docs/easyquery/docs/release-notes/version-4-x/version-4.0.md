---
title: Version 4.0 release notes
slug: easyquery/docs/release-notes/version-4-x/version-4.0
---


Version 4.0 of EasyQuery includes a lot of changes. Here is the list of the most significant ones.
 
## 1. Support for .NET Core 
From the version 4.0 and further on, we add support for the .NET Core. All basic EasyQuery assemblies now target .NET Standard version 1.3 (or 1.5 for some assemblies) - so they can be used both in .NET Core and .NET 4.5.2 (or higher) projects.
 
## 2. New edition: EasyQuery for ASP.NET Core
Currently, version 4.0 is available only for the new edition of EasyQuery - **EasyQuery for ASP.NET Core** (short version: **EasyQuery ANC** ).    
As the name implies, this edition can be used in new ASP.NET Core projects only. All current license owners of EasyQuery for ASP.NET can get the license for EasyQuery ANC with 80% discount (limited time offer).

## 3. Version 3.x branch
As we stated above, at the moment, version 4.0 can only be used in ASP.NET Core applications. For the rest of the .NET platforms (Windows Forms, ASP.NET 4, WPF) you can still use version 3.x of EasyQuery which we are going to develop and maintain for the next 2 years at least.

During this time, we are going to transfer the rest of the editions (except EasyQuery Silverlight) to version 4.x.
 
## 4. New distribution model

.NET Core projects only support referencing Nuget packages but not binary assemblies. So, that’s why we changed our distribution model both for trial version users and for license owners. 

Here are the main principles:

* Nuget only.    
No installation is needed. 
All EasyQuery assemblies are distributed as Nuget packages now.   
The only exception from this rule is Data Model Editor utility which is available for [free download](//download/dme_setup.exe) as a separate setup file.

* Product key for license owners.    
Instead of downloading and installing the full version of EasyQuery - you will now need a unique product key and one line of code to remove all trial version limitations.    
Here how it looks:

```
Korzh.EasyQuery.License.Key = "YourProductKeyCodeGoesHere";  
```
The product key will be available on your [Client’s Area](https://korzh.com/account) page of our web-site. If it's not generated yet - just click on "Get key" button for the version you would like to use.
  
## 5. Version 4.0 samples 
All sample projects for EasyQuery 4.0 are available on [GitHub] (https://github.com/easyquery/AspNetCoreSamples) now.
 
## 6. Upgrade from version 3.x
There are many changes in EasyQuery API version 4.x in comparison with version 3.x.
Here you will find the [detailed list of them and the instructions](//easyquery/release-notes/upgrade-from-3.x-to-4.0) for upgrading your projects.