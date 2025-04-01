---
title: Getting started with EasyQuery in ASP.NET Core + Angular project
slug: getting-started/asp-net-core/aspnet-core-angular
sidebar:
  order: 100
---

Here we describe how to add EasyQuery widgets to your ASP.NET Core + Angular project.  

## EasyQuery samples

> The easiest way to start getting acquainted with EasyQuery framework is to install and launch our demo projects available on [GitHub](https://github.com/easyquery/AspNetCoreSamples). You can clone that repository with samples, [download it](https://github.com/easyquery/AspNetCoreSamples/archive/master.zip) as a ZIP archive or even <button>[Open it in Visual Studio](//////////////git-client://clone?repo=https%3A%2F%2Fgithub.com%2Feasyquery%2FAspNetCoreSamples)</button> right away!


## Prerequisites

1. You have an ASP.NET Core (version 2.1+) project with Angular (6.0+) on the client-side. We suppose the project was created using a standard ASP.NET Core template (`dotnet new angular`) but it's not a requirement.
2.  Your application uses Entity Framework Core to work with the database. NB: Of course, it's possible to use EasyQuery without EF Core. We show this approach here just because it's the simplest way. For other options please read [Possible ways of data model creation and loading](///////////////easyquery/docs/tutorials/data-model-creation-loading) article. 


## Trial version registration (for new users)

To start using EasyQuery trial you need to [register and get your trial version keys](https://korzh.com/easyquery#get-started) first. It takes 1-2 minutes of your time. On registration you will get access to a special "Client's Area" of our web-site where you can see available licenses, get the keys, and submit a support request if necessary.  

## Server side changes

First, we are going to add EasyQuery to your ASP.NET Core backend project.

### Step 1: Add EasyQuery packages to your project

Since we have a standard ASP.NET Core project with EntityFramework Core for working with the database - then we will need the following 2 EasyQuery packages be added to your .csproj file:

* Korzh.EasyQuery.AspNetCore
* Korzh.EasyQuery.EntityFrameworkCore.Relational

> Hint: To add packages use NuGet Package Manager in Visual Studio (*Tools | NuGet Package Manager | "Manager NuGet Packages for Solution* menu item).

### Step 2: Add EasyQuery services and middleware

The next step will be to setup EasyQuery services and middleware. Here are the parts your will need to add to your Startup class.

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

Here we've added the service and set the default EasyQuery manager (the main "engine" which will process all request). Currently there are two possible options: `EasyQueryManagerSql` and `EasyQueryManagerLinq`.
In the code above we set the first one as the default.

Then we need to setup the middleware which will handle HTTP requests from the client-side, pass them to manager, take the result and prepare it for sending back to the client.
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


## Add EasyQuery view to your Angular app

### 1. Adding EasyQuery NPM packages

Here are the commands you need to run the following `npm install` comman in your `ClientApp` folder:

```
npm install "@easyquery/core" "@easyquery/ui" "@easyquery/enterprise"
```


Finally, you will need to modify your `angular.json` file to make Angular add EasyQuery `css` files to the styles bundle. 
You can do it by modifying `styles` section inside `projects > ProjectName > architect > build > options`:

```
"styles": [
	"node_modules/bootstrap/dist/css/bootstrap.min.css",
	"node_modules/@easyquery/ui/dist/assets/css/easyquery.css",
	"node_modules/@easyquery/ui/dist/assets/css/eq-icons-default.css",
	"node_modules/@easyquery/ui/dist/assets/css/eqview.css",
	"node_modules/@easyquery/ui/dist/assets/css/easychart.css",
	"src/styles.css"
],

```


### 2. Adding EasyQuery component

Create a new empty component `easyquery` in your webapp. You can do it manually or via CLI. For example:

```
ng g component easyquery --module=app
```

Of course you can use any possible name for this new component. We use `easyquery` here just as an example.

### 3. Setting the component's template

On the initialization EasyQuery view class (more on it later) will scan your page's DOM and insert EasyQuery widgets to the predefined "slots" - some `div` elements with special IDs.
Here are those IDs:
  - `QueryPanel` - for conditions widget
  - `ColumnsPanel` - for columns widget
  - `ResultPanel` - for result panel widget which will combine a grid to show the result set and the chart (if `showChart` option is turned on).

To simplify the task you can use the [default template from our sample project](https://github.com/easyquery/AspNetCoreSamples/blob/master/EqAngularDemo/ClientApp/src/app/easyquery/easyquery.component.html){target = _blank}


### 4. Setting the component's code

EasyQuery introduces the concept of a "view". "View" - is a set of different EasyQuery widgets assembled to work together on some web page.
There are several views available out-of-the-box. Here we are going to use the `AdvancedSearch` view. 

So, basically, all you need to do, is to create the instance of some view class in your `ngOnInit` event handler and initalialize it with some options. Here is an example how it may look like:

```
export class EasyQueryComponent implements OnInit {
   .   .   .   .   .   . 
 
	ngOnInit() {
		const options:EqViewOptions = {
			loadModelOnStart: true,
			defaultModelId: "MyModel",					
			broker: {
				 //not necessary, the same value will be used by default
				 endpoint: "/api/easyquery", 
			},
			widgets: {
				entitiesPanel: {
					//different EntitiesPanel widget options
				},
				columnsPanel: {
					//different ColumnsPanel widget options
				},
				queryPanel: {
					//different QueryPanel widget options
				},
			},
			result:{
				showChart: false
			}
		};

		let view = new AdvancedSearchView();
		view.getContext().useEnterprise("YourTrialKey");
		view.init(options);
	}  

	.   .   .   .   .   .   .
} 
```

As in case with the template - you can use [an example of EasyQuery component implementation](https://github.com/easyquery/AspNetCoreSamples/blob/master/EqAngularDemo/ClientApp/src/app/easyquery/easyquery.component.ts) from our sample project published on GitHub.

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

#### 5. Wrap it up

To make new component accessible you will also need to add a new item in routing in `app.module.ts`:

```
		.    .    .    .    .    .
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'easy-query', component: EasyqueryComponent },
    ])
		.    .    .    .    .    .
```

and add a link to a new page to nav-menu (`app/nav-menu/nav-menu.component.html`):

```
<li class="nav-item" [routerLinkActive]='["link-active"]'>
     <a class="nav-link text-dark" [routerLink]='["/easy-query"]'>Easy Query</a>
</li>
```

That's all. If everything was done right you will get something like the following in result:

![eq-aspcore-angular](https://files.aistant.com/korzh/easyquery-dotnet/images/eq-aspcore-angular.png "eq-aspcore-angular")
