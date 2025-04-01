---
title: Upgrade instructions Version 7.0
slug: upgrade-instructions/version-7-0
sidebar:
  order: 100
---

Version 7.0 is a major update of EasyQuery that does not bring important new features but it includes a lot of refactoring and unification changes. 

Here we are going to describe the most important modifications that have to be made with your code to upgrade it to version 7.0 of EasyQuery

## 0. License keys

Since it's a major update you will need to get the new license keys from [Client's Area](https://korzh.com/account) and [apply them to your project(s)](///easyquery/docs/getting-started/product-key).


## 1. EasyQuery packages and scripts

This step is obvious. You just need to update the version of all EasyQuery packages (except `Korzh.EasyQuery.MsSqlGate`  - see the details below) to 7.0.x (whatever the latest version is there at the time of your reading). 

Additionally, you will need to change the version of the scripts on your pages as well. If you are using the scripts from our CDN, just replace `6.1.x` number in all URLs to EasyQuery's .js and .css files  to `7.0.1` (or, again, to the latest `7.0.x` that is avaialble).

For example:

```
    <link rel="stylesheet" href="https://cdn.korzh.com/eq/6.1.4/eq.core.min.css">
    <link rel="stylesheet" href="https://cdn.korzh.com/eq/6.1.4/eq.view.min.css">
     .     .     .     .    .
	  <script src="https://cdn.korzh.com/eq/6.1.4/eq.enterprise.min.js"></script>
```

should be changed to:

```
    <link rel="stylesheet" href="https://cdn.korzh.com/eq/7.0.1/eq.core.min.css">
    <link rel="stylesheet" href="https://cdn.korzh.com/eq/7.0.1/eq.view.min.css">
     .     .     .     .    .
	  <script src="https://cdn.korzh.com/eq/7.0.1/eq.enterprise.min.js"></script>
```


As for `Korzh.EasyQuery.MsSqlGate` package, it was renamed to `Korzh.EasyQuery.SqlServerGate`  (to prevent any confusion with `Korzh.EasyQuery.MySqlGate`). 
In accordance `SqlClientGate` was changed to `SqlServerGate`.

 Moreoover, new `Korzh.EasyQuery.SqlServerGate` package now reference `Microsoft.Data.SqlClient` instead of `System.Data.SqlClient` referenced earlier. So, it's better to change the package in your project accordingly. Here is a [post on Microsoft's devblogs](https://devblogs.microsoft.com/dotnet/introducing-the-new-microsoftdatasqlclient/) about replacing the old package with the new one.  

### EasyData library

From now on, EasyQuery is based on [EasyData](https://github.com/KorzhCom/EasyData) - an open-source library that provides basic classes and structures for managing database metadata.  

In the most cases, `EasyData.Core` package will be added automatically when you reference one of EasyQuery packages but in case of any trouble you can add it to your project explicitly.

## 2. Core EasyQuery classes

There are several small changes and renamings in the core EasyQuery classes. Mostly for unification purposes. Here are the most important:

- `ID` property was renamed to `Id` everywhere (for example, `Query.ID`  became `Query.Id`). Some classes still have the old `ID` property marked as obsolete, so it will be removed in the next update.

- All methods that had `ID` part in their names were renamed correspondingly (e.g. `Operators.FindByID(...)` -> `Operators.FindById(...)`)

- `EntityAttrProp` was removed. This enum was used in `FindAttribute` function to specify the part of the attribute (ID, caption or expression) we want to search by. Now there are just 3 separate functions: `FindAttributeById`, `FindAttributeByCaption`, and `FindAttributeByExpression`. You can also use just `FindAttribute`  and specify the filter delegate in its parameter.

- `Column` class was renamed to `QueryColumn` (to avoid any confusion with the columns in result sets)

- Correspondingly `ColumnsChangeEventArgs` was renamed to `QueryColumnChangeEventArgs` and `ColumnsChangingEventArgs` to `QueryColumnChangingEventArgs`


## 3. EasyQuery Middleware

### MapEasyQuery

EasyQuery middleware now totally supports [routing/endpoints subsystem](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-5.0) introduced in version 3.0 of ASP.NET Core. So, instead of calling `app.UseEasyQuery(...)` to attach EasyQuery middleware to the pipeline, you can now use `endpoints.MapEasyQuery(...)` extension method inside `app.UseEndpoints(...)` call. 

Here are examples:

Before EasyQuery 7.0:

```c#
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    .     .     .     .     
    app.UseEasyQuery(options => {
        .    .    .
    });
    .     .     .     .     
}
```


EasyQuery 7.0+

```c#
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    .     .     .     .     
    app.UseEndpoints(endpoints => {
        endpoints.MapEasyQuery(options => {
		    .    .    .
	    });
		
		.    .    .    .
    });
}
```

Both functions accepts a delegate with `EasyQueryOptions` parameter, so no changes here. You can simply copy/paste the code inside `UseEasyQuery(...)` call (with some exceptions listed below) to the new `MapEasyQuery(...)`.

The old approach (with `UseEasyQuery(...)`) still works but it's better to switch to the new one since `UseEasyQuery` extension function may become obsolete in the future releases.

### EasyQuery handlers and tuners

When we set different options for EasyQuery midlleware in `MapEasyQuery(...)` (or in `UseEasyQuery(...)`  previously) we can add some "tuners". A tuner is a function that is called before or after some operation (model or query loading, building query, fetching or exporting data, etc). In the previous version they all have different parameters depending on the type of tuner. Now the first (and only for most of them) parameter is a reference to the current `EasyQueryManager`. You can use that variable to get any information your need (model, query, query builder, etc).

Here are some examples:

#### Version 5.4.x

```
app.UseEasyQuery(options => {

   .   .    .   .

   options.UseModelTuner(model => {
        model.SortEntities();
    });

    // here we add our custom query store
    options.UseQueryStore(services => new ReportStore(services));
	
    options.UseQueryTuner(query => {
	     query.Description = "My wonderful query";
    });

	options.AddBuilderTuner(builder => {
		(builder as SqlQueryBuilder).Extras.SelectDistinct= true;
	});
});
```

#### Version 7.0 

```
app.UseEndpoints(endpoints => 
    .    .    .    .
    endpoints.MapEasyQuery(options => {
       .   .    .   .

		options.UseModelTuner(manager => {
			manager.Model.SortEntities();
		});

		// here we add our custom query store
		options.UseQueryStore(manager => new ReportStore(manager.Services));

		options.UseQueryTuner(manager => {
			 manager.Query.Description = "My wonderful query";
		});

		options.AddBuilderTuner(manager => {
			(manager.QueryBuilder as SqlQueryBuilder).Extras.SelectDistinct= true;
		});
	});
});
```

## Client-side code

In the most cases, your client-side code and markup will not need a lot of changes with version 7.0 of EasyQuery.JS. Here are the thins that require your attention:

### New license key

If the license key for EasyQuery.JS is hardcoded in the page's script as a parameter of  `useEnterprise(...)` call  (like `view.getContext().useEnterprise('YourEasyQueryJsKeyGoesHere')`) you will need to [get a new one for version 7.0](https://korzh.com/account) and replace it there.


### Setting EasyQuery middleware endpoint (!!!)

By default EasyQuery middleware is running on `/api/easyquery` endpoint. If you didn't change that, you don't need to do anything. 

However, if you used a custom endpoint for EasyQuery API you probably set it in the `endpoint` option of the `viewOptions` variable.
So, now it's necessary to move that setting in a separate call `view.getContext().useEndpoint('/some/new/endpoint')`. Example:

Before version 7.0:

```
var viewOptions = {
     .   .   .   .
	 endpoint: '/myapp/api/advanced-search',
     .   .   .   .
};

var view = easyquery.ui.AdvancedSearchView();
.   .   .   .
view.init(viewOptions);
```

Version 7.0+:

```
var viewOptions = {
     .   .   .   .
};

var view = easyquery.ui.AdvancedSearchView();
view.getContext().useEndpoint('/myapp/api/advanced-search');
.   .   .   .
view.init(viewOptions);
```

### HTML helpers

All EasyQuery HTML helpers used on Razor Pages or MVC View are considered as obsolete and replaced with corresponding tag helpers or simple HTML element with predefined IDs. Here is the list:

* `@Html.FilterBar()` should be replaced to just `<div id="FilterBar"></div>`
* `@Html.PageNavigator(Model)` with `<eq-page-navigator paging="@Model"/>`


## EasyQueryManager

This section is applicable only for those users who set up a custom `EasyQueryManager` class to amend some operations (like query loading or creating a `DbCommand` object).

EasyQueryManager now acts as one entry point for all main EasyQuery operations (model/query loading, building a query, fetching a piece of data, etc). Most of its methods does not have parameters now, all important objects (like Model, Query, QueryBuilder) are accessed via manager's properties. It's guaranteed that these object have a non-null value at any point of time.

In most of the cases (except maybe desktop or console applications) you will no need to call manager's methods and access its properties directly. However, in case you create you own custom manager, here is the list of its changes made in version 7.0:

- The parameters in EasyQueryManager's constructor changed their places. `EasyQueryOptions` parameter became the first one and `Services`  - the second because it can be omitted especially in desktop applications.

- all obsolete synchronious methods (like `GetModel`) were removed.

- `ClientOptions` became  `ClientData`

- `CreateQueryIfNotExistsAsync` method was removed since `manager.Query` propery is always not null. The Query object is created automatically when necessary.

- `TryLoadModelAsync` became `LoadModelAsync`

- instead of `GetQueryBuilderCore` we now have  `QueryBuilder` property and `CreateQueryBuilderCore` method.

- `GetQueryAsync` and  `GetQueryCoreAsync` became `LoadQueryAsync`

- `ExecuteQuery` and `ExecuteQueryCore` were renamed to `FetchDataAsync` and `FetchDataCoreAsync`. Both these methods return `Task<IEqResultSet>` object. 

- `ExportQueryResultAsync` became `ExportResultSetAsync` and it takes `IEqResultSet` returned by `FetchDataAsync` in the first parameter.


## WinForms and WPF editions

- `QueryPanel.EditModeKind` was renamed to `QueryPanelEditMode`

- `ColumnsPanel.EditModeKind` was renamed to `ColumnsPanelEditMode`
