---
title: Getting started for ASP.NET Core + Vue project
slug: easyquery/docs/getting-started/asp-net-core/aspnet-core-vue
---


Here we describe how to add EasyQuery widgets to your ASP.NET Core + Vue.js project.  

## EasyQuery samples

> The easiest way to start getting acquainted with EasyQuery framework is to install and launch our demo projects available on [GitHub](https://github.com/easyquery/AspNetCoreSamples). You can clone that repository with samples, [download it](https://github.com/easyquery/AspNetCoreSamples/archive/master.zip) as a ZIP archive or even <button>[Open it in Visual Studio](/git-client://clone?repo=https%3A%2F%2Fgithub.com%2Feasyquery%2FAspNetCoreSamples)</button> right away!


## Prerequisites

1. You have an ASP.NET Core (version 2.1+) project with Vue.js (version 2.5.0 or higher) on the client-side. 
2. Your application uses Entity Framework Core to work with the database. NB: Of course, it's possible to use EasyQuery without EF Core. We show this approach here just because it's the simplest way. For other options please read [$$-Possible ways of data model creation and loading-$$](//$aid/eqdn-qe2307z0qdv3) article. 


## Trial version registration (for new users)

To start using EasyQuery trial you need to [register and get your trial version keys](https://korzh.com/easyquery#get-started) first. It takes 1-2 minutes of your time. On registration you will get access to a special "Client's Area" of our web-site where you can see available licenses, get the keys, and submit a support request if necessary.  

## Server-side changes

First, we are going to add EasyQuery to your ASP.NET Core backend project.

### 1: Add EasyQuery packages to your project

Since we have a standard ASP.NET Core project with EntityFramework Core for working with the database - then we will need the following 2 EasyQuery packages be added to your .csproj file:

* Korzh.EasyQuery.AspNetCore
* Korzh.EasyQuery.EntityFrameworkCore.Relational

> Hint: To add packages use NuGet Package Manager in Visual Studio (*Tools | NuGet Package Manager | "Manager NuGet Packages for Solution* menu item).

### 2: Add EasyQuery services and middleware

The next step will be to setup EasyQuery services and the middleware. Here are the parts your will need to add to your Startup class.

First of all, if you are using trial version, you need to set the trial version keys you got after the registration:

```
public Startup(IConfiguration configuration, IWebHostEnvironment env)
{
    Configuration = configuration;

    Korzh.EasyQuery.AspNetCore.License.Key = "YourEasyQueryNetTrialKey";
    Korzh.EasyQuery.AspNetCore.JSLicense.Key = "YourEasyQueryJsTrialKey";
}
```

> NB: You will replace these keys on the real (non-trial ones) after [purchasing the license](https://korzh.com/easyquery/licensing).

After that, add the inialization code for EasyQuery services in `ConfigServices` method:

```
public void ConfigureServices(IServiceCollection services)
{
    .    .    .    .   .   .
    services.AddEasyQuery()
        .UseSqlManager();
}
```

In addition to registering EasyQuery services in DI we have set the default EasyQuery manager (the main "engine" which will process all client-side requests). Currently there are two possible options: `EasyQueryManagerSql` and `EasyQueryManagerLinq`.

After that we need to set up the middleware which will handle HTTP requests from the client-side, pass them to manager, take the result and prepare it for sending back to the client.
To avoid any conflicts with MVC or SPA handlers we put EasyQuery middleware before them:

```
public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
    .   .   .   .   .   .

    app.UseEasyQuery(options => {
        options.Endpoint = "/api/easyquery";
        options.UseDbContext<AppDbContext>();
        options.UsePaging(25);
    });

    app.UseMvc(routes => {
	     .    .    .    .
    });

    app.UseSpa(spa => {
        .   .   .   .
    });
}
```

The code above defines the following main settings:

1. The endpoint is set to  `/api/easyquery`. This means that all requests from EasyQuery widgets will be started with this path (like `/api/easyquery/models/{modelId}` to load the model). Please note that this is the default value so you can omit this setting in your app.
2. We will use the DbContext class specified in `UseDbContext` call to get the model or to execute the generated queries. It's the fastest way to specify the model load and the connection to your DB. Otherwise you will need to set them separately via `UseModelLoader` or `UseDbConnection` extension functions.
3. The last `UsePaging` call turns on the paging and sets the page size.


So, server-side setup is finished. Now we need to configure EasyQuery on the client-side part of our project. 


## Add EasyQuery view to your Vue app

Now it's time to configure the client-side scripts and styles. 
Here we suppose that your Vue application is placed in `ClientApp` subfolder of your main project's folder.

### 1. Adding EasyQuery styles


If you want to use the default EasyQuery styles you will need to include EasyQuery CSS files right to the index HTML file of your client-side app: `ClientApp/public/index.html`. 

```html
<head>
    .    .    .    .    .    .
	
	<!-- EasyQuery CSS -->
    <link rel="stylesheet" href="https://cdn.korzh.com/eq/6.0.6/eq.core.min.css">
    <link rel="stylesheet" href="https://cdn.korzh.com/eq/6.0.6/eq.view.min.css">
</head>
```

### 2. Adding EasyQuery NPM packages

To install EasyQuery packages just open the console in your `ClientApp` folder and run the following command :

```
npm install "@easyquery/core" "@easyquery/ui" "@easyquery/enterprise"
```


### 3. Adding EasyQuery view

Here we are goint to add a new view (page) that will contain the EasyQuery "advanced search" functionality.

To do it - simply create an empty `.vue` file in `ClientApp/src/views` folder (let it be `EasyQuery.vue`). 
The template part for this new view should contain several "slots" for EasyQuery widgets - some `div` elements with special IDs.
Here are those IDs:
  - `QueryPanel` - for conditions widget
  - `ColumnsPanel` - for columns widget
  - `ResultPanel` - for result panel widget which will combine a grid to show the result set and the chart (if `showChart` option is turned on).

To simplify the task you can use the [EasyQuery.vue file from our sample project](https://github.com/easyquery/AspNetCoreSamples/blob/master/EqVueDemo/ClientApp/src/views/EasyQuery.vue){target = _blank}


### 4. Setting the component's code
EasyQuery introduces its own "view" concept. In EasyQuery's terms, "view" - is a set of different EasyQuery widgets assembled to work together on some web page.
There are several views available out-of-the-box. Here we are going to use the `AdvancedSearch` view. 

So, basically, all you need to do, is to create an instance of some EasyQuery view class during the initialization of your Vue component  and then call its `init` method.
Here is an example how it may look like:

```
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { EqViewOptions, AdvancedSearchView } from '@easyquery/ui';
    import { Message } from '@easyquery/core';

    @Component({})
    export default class EasyQueryView extends Vue 
	{
        private view = new AdvancedSearchView();

        private mounted() {
            const options: EqViewOptions = {
			   //setting some EasyQuery options here
            };

            this.view.init(options);
        }
    }
</script>
```

If you used the [EasyQuery.vue file from our sample project](https://github.com/easyquery/AspNetCoreSamples/blob/master/EqVueDemo/ClientApp/src/views/EasyQuery.vue){target = _blank} on the previous step - then it already contains this initialization part.

> **NB: Do not forget to add the import for enterprise functionality**
> 
> If you want to use EasyQuery.JS Enterprise, import  `@easyquery/enterprise` package:
> 
> ```typescript
> 
>     .   .   .   .   .   .   .
>     
>     import '@easyquery/enterprise'
>     
>     .   .   .   .   .   .   .
>     
> ```

### 5. Wrap it up

To make new component accessible you will also need to add a new item to the `routes` array in `/ClientApp/src/router.ts` module:

```
  routes: [
	  .    .    .    .    .    .
     {
       path: '/easy-query',
       name: 'easy-query',
       component: () => import(/* webpackChunkName: "easy-query" */ './views/EasyQuery.vue'),
     }
  ],
	.    .    .    .    .    .
```

and add a link to the new page to a navigation menu (`items` array  in `src/App.vue` file):

```
  private items = [
      .   .   .   .   .   .
      { title: 'EasyQuery', icon: 'search', link: '/easy-query' },
  ];
  ```

That's all. If everything was done right you will get something like the following in result:

![eq-aspcore-vue](/easyquery/docs/images/eq-aspcore-vue.png "eq-aspcore-vue")