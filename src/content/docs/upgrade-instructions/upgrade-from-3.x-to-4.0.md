---
title: Upgrading from version 3.x to 4.0
slug: upgrade-instructions/upgrade-from-3.x-to-4.0
sidebar:
  order: 100
---

## 1. Change your assemblies
In version 3.x you referenced EasyQuery assemblies stored somewhere on your hard drive. This approach does not work anymore in ASP.NET Core application instead you need to reference Nuget packages.
The number of EasyQuery assemblies has been increased to reflect the modular approach used in .NET Core.
Here is an example of a .csproj section which references EasyQuery packages in a typical ASP.NET Core project with Entity Framework:
 
```xml
   <PackageReference Include="Korzh.EasyQuery" Version="4.0.0" />
   <PackageReference Include="Korzh.EasyQuery.Db" Version="4.0.0" />
   <PackageReference Include="Korzh.EasyQuery.Json" Version="4.0.0" />
   <PackageReference Include="Korzh.EasyQuery.Linq" Version="4.0.0" />
   <PackageReference Include="Korzh.EasyQuery.AspNetCore" Version="4.0.0" />
   <PackageReference Include="Korzh.EasyQuery.EntityFrameworkCore.Relational" Version="4.0.0" />
```
 
## 2. Change your controller’s methods
EasyQuery widgets from version 3.x used `application/x-www-form-urlencoded` content type to send data from client to the server.
Version 4.0 widgets send data in plain JSON - so you need to change the signature of all action method in your EasyQueryController (or whatever name you gave it) class.
The easiest way to do it - download the latest sample project from [GitHub](https://github.com/easyquery/AspNetCoreSamples) and copy action methods from EasyQueryConroller.cs to your controller class. Most of the action methods have the same names as in version 3.x but slightly different set of parameters.
Here is an example of `SyncQuery` method:
 
Version 3.x
```c#
       [HttpPost]
       public ActionResult SyncQuery(string queryJson, string optionsJson) {
           var query = eqService.SyncQueryDict(queryJson.ToDictionary());
           var statement = eqService.BuildQuery(query, optionsJson.ToDictionary());
           Dictionary<string, object> dict = new Dictionary<string, object>();
           dict.Add("statement", statement);
           return Json(dict);
       }
```
 
Version 4.0
```c#
       [HttpPost]
       public IActionResult SyncQuery([FromBody] JsonDict jsonDict) {
           var queryDict = jsonDict["query"];
           var optionsDict = jsonDict["options"] as JsonDict;
           var query = eqService.SyncQueryDict(queryDict as JsonDict);
           var statement = eqService.BuildQuery(query, optionsDict);
           Dictionary<string, object> dict = new Dictionary<string, object>();
           dict.Add("statement", statement);
           return Json(dict);
       }
```
 
## 3. Add EasyQuery services to DI
To make it work properly, you need to register some EasyQuery services in Dependency Injection (DI) mechanism. There are one extension method `AddEasyQuery` which does all necessary work.
Call it in `ConfigureServices` method of your `Startup` class:
 
```c#
public void ConfigureServices(IServiceCollection services)
{
    .    .    .    .    .    .    .
    services.AddEasyQuery();
}
```

## 4. Change your EasyQuery.JS files
EasyQuery JavaScript and CSS files have been updated as well, so you need to use their latest versions.
You can either place them directly to your project’s `wwwroot` folder our use our CDN as in the previous version:
 
* https://cdn.korzh.com/eq/4.0/eq.all.min.js
* https://cdn.korzh.com/eq/4.0/eq.view.basic.js
* https://cdn.korzh.com/eq/4.0/eq.view.grid.js
* https://cdn.korzh.com/eq/4.0/eq.view.report.js
 
* https://cdn.korzh.com/eq/4.0/themes/default/easyquery.css
* https://cdn.korzh.com/eq/4.0/themes/default/eqview.css
