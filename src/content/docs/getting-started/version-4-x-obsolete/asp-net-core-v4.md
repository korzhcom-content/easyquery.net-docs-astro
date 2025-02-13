---
title: Getting started for EasyQuery ASP.NET Core (version 4.x)
slug: getting-started/version-4-x-obsolete/asp-net-core-v4
---


## 1. Getting started with our demos

To understand the whole process of working with EasyQuery, we recommend installing demo projects from the [EasyQuery Samples repository on GitHub](https://github.com/easyquery/AspNetCoreSamples). You will be able to try different scenarios and find out how the functionality works.
[Data Model](/fundamentals/data-model)

You can find detailed instructions on how to set up and start demo projects in the ReadMe document on this GitHub repository.

## 2. Install EasyQuery into your ASP.NET Core project

Here we suppose that we have ASP.NET Core web project with MVC/Razor as a view engine and EntityFramework Core used for data access. The described approach will work well (with some changes) for Razor Pages.

### 2.1. Add EasyQuery packages
Here are the packages you will need to add to your project:
 * `Korzh.EasyQuery.AspNetCore`
 * `Korzh.EasyQuery.EntityFrameworkCore.Relational`
 * `Korzh.DbExport` (optional, only if you plan to use exporting functionality)

You can do it either using Nuget Package Manager or Nuget Package Console in Visual Studio. You can also use `dotnet` command from the console.
Here is the example of adding packages using .NET Core CLI (please note that you have to run these command from the project's folder):

```console
dotnet add package Korzh.EasyQuery.AspNetCore
dotnet add package Korzh.EasyQuery.EntityFrameworkCore.Relational
```

### 2.2. Install EasyQuery templates package
.NET Core has a new and convenient template system. So, we prepared a special template package which allows you to scaffold an EasyQuery controller and view very quickly.

First, you need to install that template package.
```console
dotnet new --install  Korzh.EasyQuery.AspNetCoreTemplates::*
```

### 2.3. Scaffold an advanced search page using new template
Now, when the template package is installed you can add EasyQuery controller, view, and JavaScript files to your project using the following command:

```console
dotnet new  eq.view.advsearch --DbContextName YourDbContextClassName
```
(as on the step #1 - this command must be run from the project's folder).

The new EasyQueryController.cs file (you can rename it later) will be created in Controllers folder, and the new EasyQuery.cshtml view file - in Views\EasyQuery folder.
The controller is almost ready to run - you just need to add `using` statement to your DbContext namespace to make it compilable.   
For example:
```c#
using MyProjectName.Data;
```

### 2.4. Add EasyQuery services to DI container
The final step will be to register EasyQuery services in the dependency injection container in your project.
Just open your Startup.cs file and add the following line at the end of `ConfigureServices` method:

```c#
services.AddEasyQuery();
```

That's it. Build and run your project. When it's started - open `/EasyQuery` URL to test new page for advanced search.