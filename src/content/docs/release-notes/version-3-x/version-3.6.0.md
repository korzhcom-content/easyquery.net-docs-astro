---
title: Version 3.6.0 release notes
slug: release-notes/version-3-x/version-3.6.0
---


Version 3.6.0 of EasyQuery adds a lot of new features, especially for ASP.NET MVC projects.
Here you will find a brief description of most important changes

## 1. FilterBar widget
FilterBar widget allows you to add a special filtering panel to your list (table) views. Here how it looks:
FilterBar: ad-hoc data filtering Click to enlarge
It's very easy to add FilterBar widget on your web page. We have created a unique HTML extension method for that:

```html
@Html.FilterBar()

  . . . . . . . . 

@section scripts {
  <script src="@Url.Content("~/Scripts/eq.all.min.js")" type="text/javascript"></script>
  <script src="@Url.Content("~/Scripts/eq.view.grid.js")" type="text/javascript"></script> 
}
```

To see how FilterBar works - open EqMvcDemoLinq sample project and open either Orders or Customers page there.

## 2. New JavaScrpt files for views

In addition to an eq.all.min.js file which contains the definition of primary EasyQuery.JS classes and UI widgets, we distribute few "view" scripts which allow you to define some basic functionality on your web-page quickly and easily. 
Before version 3.6.0 there was only one such script file: `eq.view.js`. Now we have 3 of them:

  * eq.view.basic.js - a default EasyQuery layout (it replaces eq.view.js from previous version)
  * eq.view.report.js - for ad-hoc reporting views
  * eq.view.grid.js - for a simple list (table) view with pagination and filtering (via FilterBar)


## 3. Pagination support in MVC edition
That was the most requested feature from our users. We didn't plan to implement this functionality since EasyQuery's main purpose - is to provide end-user with a friendly UI for data filtering or advanced search. However, developers want to get a complete solution which not only allows them to get some SQL or LINQ statement but also executes a generated query and shows the result set. 
That's why we add some basic functionality to support pagination on MVC views which use EasyQuery widgets. 
To see how it works - take a look at EqMvcDemoEF or EqMvcDemoLinq sample projects which are included in the distribution package.

## 4. New methods in Query and DataModel classes

If you create a database web-application, then most probably you have a few "List" views there where you need to display a list of model items. It's very likely that you also need to provide some search or filtering functionality on those views. To help you with these tasks new version of EasyQuery has two new methods in DataModel and Query classes:

  * DataModel.LoadFromType(Type type) - this method allows you to fill your DbModel object with the structure of some model class.
  * DynamicQuery(Query query) extension method allows filtering your list (IEnumerable or IQueryable) by conditions defined in Query object

Here is how it may work in your controller:
```c#
  public OrderController() {
  eqService = new EqServiceProviderDb();
 
  eqService.ModelLoader = (model, modelName) => {
  model.LoadFromType(typeof(Order));
  model.SortEntities();
  };
  
  }
  . . . . . . . .
 
  public ActionResult ApplyFilter(string queryJson, string optionsJson) {
  var query = eqService.LoadQueryDict(queryJson.ToDictionary());
 
  var list = db.Orders.DynamicQuery<order>(query);
  return View("_OrderListPartial", list);
  }
```

## 5. Upgrading from previous versions
All projects which use version 3.5.0 of EasyQuery will be compiled with version 3.6.0 without changes 
However, we suggest you consider the following recommendation to avoid any possible problems in future:

1) `eq.view.js` file is obsolete now. Use `eq.view.basic.js` instead.

2) If you take EasyQuery .js and .css files from our CDN - it's better to reference the files for exact version instead of using the ones in default catalog. For example, instead of the following script inclusions on your HTML page:
```html
<link href="http://cdn.korzh.com/eq/themes/default/easyquery.css" rel="stylesheet" type="text/css" media="screen" />
<link href="http://cdn.korzh.com/eq/themes/default/eqview.css" rel="stylesheet" type="text/css" />
```

use these ones:

```html
<link href="http://cdn.korzh.com/eq/3.6.0/themes/default/easyquery.css" rel="stylesheet" type="text/css" media="screen" />
<link href="http://cdn.korzh.com/eq/3.6.0/themes/default/eqview.css" rel="stylesheet" type="text/css" />
```
  

3) If you used the same layout as in our sample projects (EqMvcDemoDB and others) you would need to make a few modifications in your HTML and CSS files:

* Add container around a <div> element which acts as a placeholder for EntitiesPanel widget. So in result it will should the following way:

```html
<div class="entities-panel-container">
  <!-- EntitiesPanel widget placeholder -->
  <div id="EntitiesPanel"></div>
</div>
```

  * Use the same approach for ColumnsPanel and QueryPanel widgets:
```html
<div class="columns-panel-container">
  <!-- ColumnsPanel widget placeholder -->
  <div id="ColumnsPanel"></div>
</div>
. . . . . .
<div class="query-panel-container">
  <!-- QueryPanel widget placeholder -->
  <div id="QueryPanel"></div>
</div>
```

* Some CSS classes are marked as deprecated in new version. You need to change them in all elements where they used:
  * `condition-block` to `conditions-block` 
  * `condition-hr hr` to `conditions-hr hr`
  * `condition-title` to `conditions-title`
  

4) Add new `Korzh.EasyQuery.Mvc.NETXX` assembly into your project if you want to use some JSON serialization/deserialization extension methods and HTML helpers (like Html.FilterBar() and others)
  

5) Use controller classes defined in our sample project as the templates for your own controller classs (EasyQueryController or whatever name you use) which implements data filtering and/or advanced search functionality in your project. Here are the sample projects you can use:
  * EQMvcDemoDb - uses EasyQuery with direct connection to database and SQL query language.
  * EQMvcDemoEF - uses EasyQuery with EnityFramework and Entity SQL as query langauge.
  * EQMvcDemoLinq - uses EntityFramework and LINQ with the help of new methods: LoadFromType and DynamicQuery
  * EQMvcDemoDb - uses EasyQuery to implement a web-page with ad-hoc reporting.