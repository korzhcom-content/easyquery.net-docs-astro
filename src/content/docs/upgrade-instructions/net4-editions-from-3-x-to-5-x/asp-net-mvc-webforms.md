---
title: Upgrading to 5.x ASP.NET (MVC and WebForms) projects
slug: upgrade-instructions/net4-editions-from-3-x-to-5-x/asp-net-mvc-webforms
---

This tutorial describes how to upgrde your old ASP.NET MVC project with EasyQuery 3.x to EasyQuery version 5.2.0 (or higher).

> Please note. Version 5.2.0 of EasyQuery works only on .NET Framework 4.6.1 or higher. So, if your project targets a lower version of .NET Framework - you will need to update Target  Framework for your project first (right-click on the project in Solution Explorer, select Properties, then use "Target Framework" drop-down list on the Application tab). 

## Important notice!

EasyQuery 5.x does not include any WebForms controls anymore. The way we suggest to use it for WebForms application is actually almost the same except instead of Razor view you you use an .aspx page. So, the instructions below are the same for both types of the projects. Just apply all the operations described in Step #4 to your web form.


## Step 1: Update EasyQuery packages

1.1 Remove the references to all Korzh.EasyQuery.* assemblies you are using now.

1.2 Use NuGet Package Manager to install the following packages:

* `Korzh.EasyQuery.AspNet4` 
* `Korzh.EasyQuery.EntityFramewok6` - if you are using Entity Framework 6.x 
* `Korzh.EasyQuery.DataExport` - if you will need the data exporting functions
* `Korzh.EasyQuery.MsSqlGate` (or `.MySqlGate` or `.OdbcGate` depending on your DB) - if you need to load your model directly from DB connection.

## Step 2: Setup WebAPI controller

EasyQuery's server-side part is implemented as a WebAPI controller. So, if you don't use WebAPI in your web-application yet - you will need to add some NuGet packages to your project:

* `Microsoft.AspNet.WebApi.Core`
* `Microsoft.AspNet.WebApi.WebHost`

To simplify the task we prepare a base class for such controller from which you can derive your own one. 
All necessary endpoints (actions) are already defined and properly handled in that basic class, so, all you need to do, is to set some options in the overridden virtual method `ConfigureEasyQueryOptions`.

You can find and example of such controller in the Git repository with EasyQuery samples. This is the [controller for advanced search page](https://github.com/easyquery/Net4Samples/blob/master/EqAspNet4Demo/Controllers/EasyQuery/AdvancedSearchController.cs) and this is the [controller for ad-hoc reporting scenario](https://github.com/easyquery/Net4Samples/blob/master/EqAspNet4Demo/Controllers/EasyQuery/EasyReportController.cs)


One more thing. Since the routes for all controller actions are defined in the base class - you need to re-configure the WebAPI routing in your project to make it use the routing attributes from the base controller classes (because they are not taken into the account by default). You can do it in the  `App_start/WebApiConfig.cs` file:


```c#
public static class WebApiConfig
{
    public static void Register(HttpConfiguration config)
    {
        // Web API configuration and services

        // Web API routes
        config.MapHttpAttributeRoutes(new WebApiCustomDirectRouteProvider());
        
		.     .     .     .
    }
}

public class WebApiCustomDirectRouteProvider : DefaultDirectRouteProvider
{
	protected override IReadOnlyList<IDirectRouteFactory>
		GetActionRouteFactories(HttpActionDescriptor actionDescriptor)
	{
		// inherit route attributes decorated on base class controller's actions
		return actionDescriptor.GetCustomAttributes<IDirectRouteFactory>(inherit: true);
	}
}

```

> NB1:  The last solution with enabling the inheritance of the routing attributes works only with WebAPI version 2.2 or higher.  So, if your project uses an older versions of WebAPI packages - please upgrade them first.
 
> NB2: If you have several views with EasyQuery widgets in your application - you can create as many such WebAPI controllers as you need.

## Step 3/1: Update your Razor page <small>(for MVC projects)</small>

Finally, we need to make some modifications on our pages where we use EasyQuery scripts.
This section describe how to do it for MVC projects. Please skip it for Web Forms projects and proceed to Step 4/2 section below.

### 3.1 Update the scripts

The last step is to update your view file. First of all you need to replace EasyQuery styles and scripts you are using to the latest version (which is 5.1.8 at the moment of writing this tutorial). If you use them directly from our CDN - please used the following markup:

```
	 <!-- EasyQuery styles -->
    <link rel="stylesheet" href="https://cdn.korzh.com/eq/5.1.8/eq.core.min.css">
    <link rel="stylesheet" href="https://cdn.korzh.com/eq/5.1.8/eq.view.min.css">
	
	.     .      .      .
	
	 <!-- EasyQuery script -->
    <script src="https://cdn.korzh.com/eq/5.1.8/eq.all.min.js"></script>
```

Version 5.1.8 still requires JQuery and JQuery UI, so please check if these two libraries are included as well. Version 5.2.0 and higher of EasyQuery scripts will not need JQuery anymore, so you will be able to throw them away if they are not used in your own pages.

### 3.2 Rename CSS class names
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

### 3.3 Modify 'Export buttons' block 

If you have a `span` element with `ResultExportButtons` ID on your page -  need to change it to the following:
```
<span class="eqv-export-buttons">
    <a class="eqjs-export" href="javascript:void(0)" data-format="excel-html">Export to Excel</a>
    <a class="eqjs-export" href="javascript:void(0)" data-format="csv">Export to CSV</a>
</span>
```


### 3.4 Replace client-side initialization code
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


## Step 3/2: Update your Web Forms page <small>(for Web Forms projects)</small>

To update your Web Forms page  your will need to do the following 3 steps:

1. Add EasyQuery scripts and styles on your page. This operation is described in section 3.1 above.
2. Define some "slots" for EasyQuery widgets - the empty `div` elements where the widgets will be "injected" to during the page loading.
3. Add the initialization code.

The best way to apply all these steps - is to use [the page from our sample project](https://github.com/easyquery/Net4Samples/blob/master/EqWebFormsDemo/EasyQuery.aspx) as template and add to it your own controls.


## Done!

After the changes listed above your project must be successfully compiled and run with version 5.x of EasyQuery. 

Feel free to [contact us](https://korzh.com/support) if there are any troubles with the upgrade process.