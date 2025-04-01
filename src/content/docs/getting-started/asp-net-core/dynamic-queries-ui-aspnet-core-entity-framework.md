---
title: Dynamic queries for ASP.NET Core projects with Entity Framework Core
slug: getting-started/asp-net-core/dynamic-queries-ui-aspnet-core-entity-framework
sidebar:
  order: 100
---

## Prerequisites

Let's suppose we have 

 - an ASP.NET Core project
 - that uses Entity Framework Core for all data access operations
 
 Pretty usual, yeah? 

## Objectives

We want:

 - to create a view/page where our users can build custom (dynamic) queries to our database
 - to run those queries over our DbContext to get the result sets.
 - to export the result data to some popular formats (CSV, Excel, PDF)

## Solution

Here is the point where EasyQuery framework comes to help. It takes a few minutes to add a new page with all necessary UI for building dynamic queries and to setup a middleware that  will process all requests from that page, convert those request to the queries to your DB and return the result set back for visualization.


### Step 0: Register EasyQuery trial

This step is necessary to get the trial keys for EasyQuery framework. You can skip it if you already have your keys (with a trial version registered earlier or as a license owner). 

So, to get your trial version keys, please [visit EasyQuery page](https://korzh.com/easyquery) and click on "Get Free Trial" button there.  The whole process takes about 2-3 minutes. The keys can be aquired on the [main page of your Korzh.com account](https://korzh.com/account) after the registration. You will have two keys, in the result. One for ASP.NET Core packages and another one - for EasyQuery.JS scripts.  Just add them to your configuration file (`appsettings.json`) as the following:

```
{
  .   .   .   .
  "EasyQuery": {
    "LicenseKey": "Your license key for EasyQuery ASP.NET Core",
	"JSLicenseKey": "Your license key for EasyQuery.JS"
  }
}
```

### Step 1: Add EasyQuery packages to your project

First, we are going to add EasyQuery to your ASP.NET Core backend project. You can do it directly in your .csproj file:

```
    <PackageReference Include="Korzh.EasyQuery.AspNetCore" Version="7.0.7" />
    <PackageReference Include="Korzh.EasyQuery.EntityFrameworkCore.Relational" Version="7.0.7" />
    <PackageReference Include="Korzh.EasyQuery.RazorUI" Version="7.0.7" />
```

Obviously, it's better to use the latest version of the packages available for the moment of reading.

The latest package is a Razor UI library that contains several ready-to-use pages and partial views for advanced search and data filtering.


### Step 2: Add EasyQuery services 

On the next step we a going to register necessary services in DI container:
```
public void ConfigureServices(IServiceCollection services)
{
    .    .    .    .   .   .
    services.AddEasyQuery()
        .UseSqlManager()
        .AddDefaultExporters();
}
```

Here `AddEasyQuery` call registers all EasyQuery services in the DI container. The the next call (`UseSqlManager`)  sets the default EasyQuery manager - the main "engine" which processes all requests. Currently EasyQuery library contains 2 possible types of manager: `EasyQueryManagerSql` and `EasyQueryManagerLinq`.  In the code above we've set the first one as the default.

### Step 3: Add EasyQuery middleware

Now we need to add the middleware which will catch all HTTP requests from the client-side, pass them to the manager, collect the result and prepare it for sending back to the client.

To avoid any conflicts with the MVC handler it's better to place EasyQuery middleware before it:

```
public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
       .   .   .   .   .   .
    
	app.UseEndpoints(endpoints => {
		app.MapEasyQuery(options => {
			options.Endpoint = "/api/easyquery";
			options.UseDbContext<AppDbContext>();
		});
		.   .   .   .
    }
}
```

The code above defines the following main settings:

1. The base endpoint is set to  `/api/easyquery`. It means that all requests from EasyQuery client-side widgets will be routed to endpoints started with this prefix (like `/api/easyquery/models/{modelId}` to load the model). Please note that this is the default value so you can omit this setting in your app.
2. We use our DbContext class to get the model and to execute the generated queries. 

So, the server-side setup is finished. Now we need to setup the client-side part. 

### Step 4: Add the page with the query building UI

To simplify this task EasyQuery includes a Razor UI library package (`Korzh.EasyQuery.RazorUI`) that contains several predefined pages which you can use in your projects. All those pages are accessible under `/EasyQuery` path. For example, there is an "advaced search" page which is available via `/EasyQuery/AdvancedSearch`.

Of course, it is possible to make your own page with another layout, style, and, possibly, some modifications in behavior. We will describe how to do it in other tutorials or you can [contact our support team](https://korzh.com/support) if you have any questions. 

## Done!

If everything was done right you can build and run your project. Then just open `/EasyQuery/AdvancedSearch` and enjoy the new functionality.

![eq-aspcore-razor](//easyquery/docs/images/eq-aspcore-razor.png "eq-aspcore-razor")
