---
title: Version 3.7.0 release notes
slug: release-notes/version-3.7.0
---


## 1. New functions in EQ.client namespace (for ASP.NET MVC projects)

We have added two new functions to the EQ.client namespace of EasyQuery.JS library: newQuery and removeQuery. Now (together with saveQuery/loadQuery functions available earlier) we have a full set of operations which allow you to manage the list of queries available for your end-users.
To see how all these functions work - take a look at [EasyReportDemo](/http://demo.easyquerybuilder.com/adhoc-reporting) sample project which is also available online.

## 2. Support for complex types LoadFromType and LinqQueryBuilder

Version 3.6.0 introduced new **FilterBar** widget which allows you quickly and easily build data filtering UI on your web-pages. Usually, FilterBar works together with the LoadFromType method of DbModel classes which helps to create data-model dynamically based on the structure of some model class.
You can test how this widget and new function work together in our **EqMvcDemoLinq** sample project (it's included into trial version and published as [live demo](/http://demo.easyquerybuilder.com/data-filtering/)).
Before version 3.7.0 users could create filters only by properties from the main class excluding all complex types and "navigation" properties. Now, there is no this restriction anymore. For example, in sample project mentioned above, you can filter the list of Orders by Product Name or Ship Address.

## 3. New properties and events in EqServiceProviderDb class

There are few improvements in EqServiceProviderDb class which help you to process client-side AJAX requests from EasyQuery widgets.

  - UserID property
  It allows you to separate queries for different users when the default query loading/saving mechanism (XML files) is used. In this case, EqServiceProvider saves queries for different users into different folders.
  - ContextType property and ContextGetter event
  
These two options allow simplifying the implementation of EasyQueryController in the case when you do search for some context class. Here is how your controller's actions may look like now: 

```js
public EasyQueryController() {
  eqService = new EqServiceProviderDb();
  . . . . . .
 
  eqService.ContextType = typeof(NorthwindContext);
  eqService.ContextGetter = () => new NorthwindContext();
}
 
. . . . . .
 
[HttpPost]
public ActionResult GetModel(string modelName) {
  var result = eqService.GetModel(modelName);
  return Json(result.SaveToDictionary());
}
 
. . . . . .
 
[HttpPost]
public ActionResult ExecuteQuery(string queryJson, string optionsJson) {
  var query = eqService.LoadQueryDict(queryJson.ToDictionary());
  var resultSet = eqService.ExecuteQuery(query, optionsJson.ToDictionary());
 
  . . . . . .
}
```
## 4. New options in EasyQuery widgets

  - EQ.client.locale
  Now you can set the region for resources used in EasyQuery widgets. For example, setting this option will make DatePicker widget to use some local resources instead of default ones.
  - formatColumnHeader and formatGridCell callbacks in ''easyQueryViewSettings''
  These two callback functions allow you to change the way the result set is rendered. For example, you can make some column to be rendered as hyperlink (see the code below)

Here is how you can set all options described above through easyQuerySettings variable: 

```js
<script> 
  window.easyQuerySettings = {
  serviceUrl: "/EasyQuery",
  loadDefaultModel: true,
  locale:"fr", //setting current locale to French
  . . . . . . . . .
  };
 
  window.easyQueryViewSettings = {
  
  formatColumnHeader: function(dataTable, colIndex, label) {
  var col = dataTable.getColumnProperties(colIndex);
  if (col.type == "numeric")
  label += " ##";
  return label;
  },
 
  formatGridCell: function (dataTable, rowIndex, colIndex, value) {
  var colId = dataTable.getColumnId(colIndex);
  var props = dataTable.getColumnProperties(colIndex);
  if (colId == "OrderID" || (props && props.table == "Orders" && props.field == "OrderID")) {
  linkToOrderPage = "/Order/" + value ;
  value = '<a href="' + linkToOrderPage + '" target="_blank">' + value + '</a>';
  }
  return value;
  }
  };
 
</script> 
```