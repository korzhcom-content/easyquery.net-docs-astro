---
title: Getting started for ASP.NET Core + MVC or Razor pages
slug: getting-started/asp-net-core/aspnet-core-razor
---


Here we describe how to add EasyQuery to your ASP.NET Core application with MVC or Razor Pages views.  


## EasyQuery samples
> The easiest way to start getting acquainted with EasyQuery framework is to install and launch our demo projects available on [GitHub](https://github.com/easyquery/AspNetCoreSamples). You can clone that repository with samples, [download it](https://github.com/easyquery/AspNetCoreSamples/archive/master.zip) as a ZIP archive or even <button>[Open it in Visual Studio](/git-client://clone?repo=https%3A%2F%2Fgithub.com%2Feasyquery%2FAspNetCoreSamples)</button> right away!


## Prerequisites
1. You have an ASP.NET Core version 2.1+ project with MVC views (or Razor pages) 
2. Your application uses Entity Framework Core to work with the database. NB: Of course, it's possible to use EasyQuery without EF Core. We show this approach here just because it's the simplest way. For other options please read [$$-Possible ways of data model creation and loading-$$](//$aid/eqdn-qe2307z0qdv3) article. 

## Step 0: Register your trial version
To start using EasyQuery trial you need to [register and get your trial version keys](https://korzh.com/easyquery#get-started) first. It takes 1-2 minutes of your time. On registration you will get access to a special "Client's Area" of our web-site where you can see available licenses, get the keys, and submit a support request if necessary.  


## Step 1: Add EasyQuery packages to your project

First, we are going to add EasyQuery to your ASP.NET Core backend project.

Since we have a standard ASP.NET Core project with EntityFramework Core - then we will need the following 3 EasyQuery packages be added to your project:

* Korzh.EasyQuery.AspNetCore
* Korzh.EasyQuery.EntityFrameworkCore.Relational
* Korzh.EasyQuery.RazorUI


The latest package is a Razor UI library which contains several ready-to-use page templates (partial views) that work with EasyQuery components.

> Hint: To add packages use NuGet Package Manager in Visual Studio (*Tools | NuGet Package Manager | "Manager NuGet Packages for Solution* menu item).


## Step 2: Add EasyQuery services and middleware

The next step will be to setup EasyQuery services and the middleware. Here are the parts your will need to add to your Startup class.

First of all, set the trial version keys you got on the Step 0:

```
public Startup(IConfiguration configuration, IWebHostEnvironment env)
{
    Configuration = configuration;

    Korzh.EasyQuery.AspNetCore.License.Key = "YourEasyQueryNetTrialKey";
    Korzh.EasyQuery.AspNetCore.JSLicense.Key = "YourEasyQueryJsTrialKey";
}
```

> You will replace these keys on the real (non-trial ones) after [purchasing the license](https://korzh.com/easyquery/licensing).


After that, initialize EasyQuery services in `ConfigServices` method:

```
public void ConfigureServices(IServiceCollection services)
{
    .    .    .    .   .   .
    services.AddEasyQuery()
        .UseSqlManager();
}
```

Here we've added the service and set the default EasyQuery manager (the main "engine" which will process all request). Currently there are two possible options: `EasyQueryManagerSql` and `EasyQueryManagerLinq`.
In the code above we set the first one as default.

Then we need to setup the middleware which will handle HTTP requests from the client-side, pass them to manager, take the result and prepare it for sending back to the client.
To avoid any conflicts with MVC we put EasyQuery middleware before it:

```
public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
       .   .   .   .   .   .
    app.UseEasyQuery(options => {
        options.Endpoint = "/api/easyquery";
        options.UseDbContext<AppDbContext>();
        options.UsePaging(25);
    });
    app.UseMvc();
}
```

The code above defines the following main settings:

1. The endpoint is set to  `/api/easyquery`. This means that all requests from EasyQuery widgets will be started with this path (like `/api/easyquery/models/{modelId}` to load the model). Please note that this is the default value so you can omit this setting in your app.
2. We will use the DbContext class specified in `UseDbContext` call to get the model or to execute the generated queries. It's the fastest way to specify the model loader and the connection to your DB. Otherwise you will need to set them separately via `UseModelLoader` or `UseDbConnection` extension functions. You can find examples in [this article](//$aid/eqdn-qe2307z0qdv3)
4. The last `UsePaging` call turns on the paging and sets the page size.

So, server-side setup is finished. Now we need to configure EasyQuery on the client-side part of our project. 


## Step 3: Add EasyQuery page 

There are 3 possible options to define the view:

### Option 1: Use one of the predefined pages from EasyQuery Razor UI library

So, to simplify the task of rendering an advanced search or data-filtering views EasyQuery includes a Razor UI library package (`Korzh.EasyQuery.RazorUI`) that contains several predefined views which you can use on your pages.
In the simplest case you can just add `Korzh.EasyQuery.RazorUI` package to your project and run your project. If everything is set up with the defaults, then right out-of-the-box you get access to an "advanced search" page via `/EasyQuery/AdvancedSearch`.

### Option 2: Use some partial view from the Razor UI library

Of course you may need to modify some view options or change the page styles. In this case you can use the partial view accessible via `EasyQuery/_AdvancedSearch`.  
All you need to do for that:
1. Reference `Korzh.EasyQuery.RazorUI` package in your project
2. Create a new page where you plan to provide an advanced search or adhoc reporting functionality. Let's suppose this new page will be accessible as `/CustomSearch`
3. Add the styles necessary to render EasyQuery components into `Styles` section:

```
@section Styles {
    <link rel="stylesheet" href="https://cdn.korzh.com/eq/6.0.9/eq.core.min.css">
    <link rel="stylesheet" href="https://cdn.korzh.com/eq/6.0.9/eq.view.min.css">
}
```

(don't forget to add `@RenderSection("Styles", false);` command to your `_Layout.cshtml` if you don't have such section yet)

5. Add the following tag which includes an  `_AdvancedSearch` partial view somewhere to your new page:
```
<partial name="EasyQuery/_AdvancedSearch" />
```

6. Add `Scripts` section to your page with all necessary libraries ( `eq.enterprise.min.js`) and  the code which will initalize the advanced search view ([more about EasyQuery views](//$aid/eqdn-xh1zzimpm6h4)) on your page:

```
@section Scripts {
    <!-- EasyQuery script -->
    <script src="https://cdn.korzh.com/eq/6.0.9/eq.enterprise.min.js"></script>

    <!-- EasyQuery view initialization -->
    <script>
        document.addEventListener('load', () => {
            //Options for AdvancedSearchView
            var options = {
                //the base URL where all requests are sent to 
                endpoint: '/api/easyquery',
                widgets: {
                    entitiesPanel: {
                        //EntityiesPanel options
                        showCheckboxes: true
                    },
                    columnsPanel: {
                        //ColumnsPanel options
                    },
                    queryPanel: {
                        //Querypanel options
                    },
                },
                result: {
                    //Don't show EasyChart
                    showChart: false,
                },
            };

            var view = new easyquery.ui.AdvancedSearchView();
            window['AdvancedSearchView'] = view; //to make possible to access it later

            //The following line is necessary when you use Enterprise edition of EasyQuery.JS
            //You don't need it if you included the Community (free) edition.
            //You can get the trial license key at  https://korzh.com/easyquery#get-started
            view.getContext().useEnterprise("YourTrialLicenseKey");
            view.init(options);
        });
    </script>
}
```


### Option 3: Define your own page

1. Add your own view or a Razor page (let's suppose it will be accessible by `/CustomSearch` path).

2. Reserve several "slots" (empty `div` elements) for EasyQuery widgets. Each slot must have a special ID to allow EasyQuery to find it:
    * EntitiesPanel - to show the content of your data model
    * ColumnsPanel - to show the panel that allows to edit the list of query column
    * QueryPanel - for the widget that allows to add and modify query conditions
    * ResultPanel - the panel where the query results will be rendered
    * StatementPanel - add it if you want to show the generated SQL statetement for your users

3. Add initialization script as it was described in Option 2 above.

With this approach you can create almost any possible layout and styling of your "advanced search / ad hoc reporting" page.
Please, [contact us](https://korzh.com/support) if you have any questions.


## Done!

Now if you run your project and open `/CustomSearch` page (or `/EasyQuery/AdvancedSearch` if you used the first option) - you will see the default EasyQuery page for advanced database search (like [this one](https://korzh.com/demo/easyquery-asp-net-core-razor/advanced-search))