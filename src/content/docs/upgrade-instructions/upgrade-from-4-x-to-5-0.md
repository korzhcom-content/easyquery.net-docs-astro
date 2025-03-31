---
title: Upgrading from version 4.x to 5.x
slug: upgrade-instructions/upgrade-from-4-x-to-5-0
---

## 1. Change the version of EasyQuery packages
The first step is rather simple. You just need  to replace the version number in all EasyQuery packages and to add the new ones if necessary.
You can do it using Manage Nuget Packages... window but in's quicker to simply change the version number right in .csproj file:

```
    <PackageReference Include="Korzh.EasyQuery" Version="5.1.0" />
    <PackageReference Include="Korzh.EasyQuery.Db" Version="5.1.0" />
    <PackageReference Include="Korzh.EasyQuery.AspNetCore" Version="5.1.0" />
    <PackageReference Include="Korzh.EasyQuery.DataExport" Version="5.1.0" />
```

Two notes here:
1. We don't need `Korzh.EasyQuery.Json` package anymore, so you can remove it.  
2. If you need data exporting functionality in your webapp - then replace `Korzh.DbExport` package with `Korzh.EasyQuery.DataExport` (with version 5.1.0).

If you try to build your project now - you will get a bunch of errors most probably in `EasyQueryController` class. You can simply remove this class or, better, comment it for now to have access to the controller's initialization code (we might need it later).

## 2. Add EasyQuery services to Startup.cs
The next step - is to add EasyQuery services registration code to `ConfigureServices` method of your `Startup.cs`. In most cases the following two lines are enough:
```
services.AddEasyQuery()
    .UseSqlManager();
```

If your project works with LINQ queries instead of SQL - then you need to replace `UseSqlManager` with `UseLinqManager` call.

Additionally, you may need data exporting functionality. In this case, you should also add `.AddDefaultExporters()` extension method call to that chain:

```
services.AddEasyQuery()
    .UseSqlManager()
    .AddDefaultExporters();
```

## 3. Setup EasyQuery middleware
In version 4.x all functionality of EasyQueryController we defined "manually" in the previous version is moved now to the special EasyQueryMiddeleware which you can add to the pipeline with `UseEasyQuery(...)` call.
The parameter of that call is a function where you can define all middleware settings.

If you have only one data model in your application and you loaded it from the file system (from App_Data folder) then you just need to specify the ID of your model - if no other model loaders defined EasyQuery by default will use `FileModelLoader` to find and load your model file.  
You also need to specify the DB connection resolver. The easiest way to do it - `UseDbConnection<>` extension function and `ConnectionString` property of  `EasyQueryOptions` class. So, your `UseEasyQuery` call in your `Startup.Configure` method will look like this:

```
public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) 
{
   .   .    .    .    .

    app.UseEasyQuery(options => {
        options.DefaultModelId = "NWindSQL";
        options.ConnectionString = Configuration.GetConnectionString("EqDemoDbMVC");
        options.UseDbConnection<SqlConnection>();
    });

    app.UseMvc();
		
		 .   .   .   .   .
}
```

As you can see we placed our middleware after all others middlewares but before MVC - to avoid any confusion with MVC controllers.
The default endpoint for all EasyQuery requests will be `/api/easyquery` but you can replace it with `Enpoint` property of `EasyQueryOptions` class:

```
app.UseEasyQuery(options => {
    options.Endpoint = "/api/2.0/my-special-path-to-easyquery-api";
       .   .    .    .    .
});
```

So far, so good. Now we need to make some changes in  the client-side code on our MVC view or Razor page.

## 4. Razor view modifications
Finally, we need to make some modifications on our pages where we use EasyQuery scripts.

### 4.1 Rename CSS class names
If you use our default `advanced search` view (`EasyQuery.cshtml`) or some elements from there - your will need to rename all CSS classes there.
Basically, you just add `eqv-` prefix to all CSS class names inroduced by EasyQuery. 
Here are the full list:

| Old CSS class | New CSS class |
|--- |---|
| `hr` | `eqv-hr`|
| `content` | `eqv-content`|
| `header-panel` | `eqv-header-panel` |
| `entities-hr` | `eqv-entities-hr` |
| `entities-title` | `eqv-entities-title` |
| `entities-panel-container` | `eqv-entities-panel-container` |
| `central-block` | `eqv-central-block` |
| `columns-block` | `eqv-columns-block` |
| `columns-hr` | `eqv-columns-hr` |
| `columns-title` | `eqv-columns-title` |
| `columns-panel-container` | `eqv-columns-panel-container` |
| `conditions-block` | `eqv-conditions-block` |
| `conditions-hr` | `eqv-conditions-hr` |
| `conditions-title` | `eqv-conditions-title` |
| `query-panel-container` | `eqv-query-panel-container` |
| `menu-block` | `eqv-menu-block` |
| `menu-hr` | `eqv-menu-hr` |
| `menu-title` | `eqv-menu-title` |
| `menu-content` | `eqv-menu-content` |
| `clear-button` | `eqv-clear-button` |
| `execute-button` | `eqv-execute-button` |
| `bottom-panel` | `eqv-bottom-panel` |
| `sql-panel` | `eqv-sql-panel-hr` |
| `sql-panel-hr` | `eqv-sql-panel-hr` |
| `sql-panel-title` | `eqv-sql-panel-title` |
| `sql-block` | `eqv-sql-block` |
| `result-panel` | `eqv-result-panel` |
| `result-panel-hr` | `eqv-result-panel-hr` |
| `result-panel-title` | `eqv-result-panel-title` |
| `result-panel-content` | `eqv-result-panel-content` |

### 4.2 Modify 'Export buttons' block 

If you have a `span` element with `ResultExportButtons` ID on your page -  need to change it to the following:
```
<span class="eqv-export-buttons">
    <a class="eqjs-export" href="javascript:void(0)" data-format="excel-html">Export to Excel</a>
    <a class="eqjs-export" href="javascript:void(0)" data-format="csv">Export to CSV</a>
</span>
```


### 4.3 Replace client-side initialization code
Finally, we need to modify the code which initializes our JS widgets.
Good news: all the settings you defined in `easyQuerySettings` global variable for the previous version are still relevant since the new components "understand" these settings as well.
The only thing you will need change (possible) is the value of `serviceUrl` option in that variable. If you didn't change default endpoint on the server-side then set it to `/api/easyquery`:

```
window.easyQuerySettings = {
    serviceUrl: '/api/easyquery',
    .    .    .    .    .     .
};
```

What you actually will need to add - is a small piece of code which creates an instance of some "view" class (EasyQuery 5.0 introduces the concept of `view` - a set of widgets that are working together on one page) and then calls its `init` method. Here is an example for "advanced search" view:

```
<script>
    window.addEventListener('load', () => {
        this.view = new easyquery.ui.AdvancedSearchViewJQuery();
        view.init();
    });
</script>
```



## Done!
So now your project that worked with EasyQuery 4.x must be compiled and run well with EasyQuery 5.0