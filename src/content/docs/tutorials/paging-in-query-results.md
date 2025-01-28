---
title: Paging in query results
slug: tutorials/paging-in-query-results
---


## 1. Problem Overview
It is rather problematic and inconvenient to deal with huge data sets on the web-pages. To make it better you can use paging and divide your data into several pages.

Paging is partially available in EasyQuery, though it is not the basic functionality of our product. We added it to make work with queries more convenient for our users. 

Here you can find instructions how to implement paging in different types of projects.

## 2. Paging in MVC projects (JS grid)
EasyQuery functionality in MVC project is provided by special `EqServiceProviderDb` object usually created in controller’s constructor. To enable paging for returned results you just need to turn on its Paging.Enable property and then properly process and return current paging parameters in ExecuteQuery action:

```c#
public EasyQueryController() {
  eqService = new EqServiceProviderDb();

  eqService.Paging.Enabled = true;

  . . . . . . . .
}


. . . . . . . . .


public ActionResult ExecuteQuery(string queryJson, string optionsJson) {
  var query = eqService.LoadQueryDict(queryJson.ToDictionary());
  var optionsDict = optionsJson.ToDictionary();

  eqService.LoadOptionsDict(optionsDict); //add this line to process paging load paging parameters (page index in particular)

  var resultSet = eqService.ExecuteQuery(query, optionsDict);
  var resultSetDict = eqService.DataSetToDictionary(resultSet, optionsDict);

  Dictionary<string, object> dict = new Dictionary<string, object>();

  dict.Add("resultSet", resultSetDict);
  dict.Add("paging", eqService.Paging.SaveToDictionary()); //add this link to return paging page index and size in result JSON.

  return Json(dict);
}
```

Here is an example how the above code works in our [live demo](/http://demo.easyquerybuilder.com/adhoc-reporting).

## 3. Paging in MVC projects (Partial View)

Sometimes in MVC applications, it is easier to build result table with standard partial view approach and then send this fully-formed HTML to the client-side in response to AJAX request.

You can see how this method is used to render the list of Customers or Orders in our “data filtering” [live demo](/http://demo.easyquerybuilder.com/data-filtering/Order).

Here is code, which is used in that example:

```c#
//OrderController.cs
using Korzh.EasyQuery.Mvc;

. . . . . . . . . .

public ActionResult ApplyFilter(string queryJson, string optionsJson) {
  var query = eqService.LoadQueryDict(queryJson.ToDictionary());
  var lvo = optionsJson.ToListViewOptions();
  var list = dbContext.Orders.DynamicQuery<Order>(query, lvo.SortBy).ToPagedList(lvo.PageIndex, 20);

  return View("_OrderListPartial", list);

}

```

Here is how _OrderListPartial.cshtml make look like:

```html
@using Korzh.EasyQuery.Mvc

@model Korzh.EasyQuery.Services.IPagedList<Korzh.EasyQuery.Mvc.Demo.Models.Order>
@{
  Layout = null;
}

<table class="table">
  <tr>
  <th>
  Customer
  </th>
  <th>
  Order date
  </th>
  </tr>

@foreach (var item in Model) {
  <tr>
  <td>
  @item.Customer.Name
  </td>
  <td>
  @item.OrderDate.ToString()
  </td>
  </tr>
}

</table>

@Html.PageNavigator(Model)
```

The central paging “magic” occurs in `ToPagedList` extension method on the server-side and `PageNavigator` HTML helper.

## 4. Paging in WebForms projects

WebForms edition of EasyQuery does not support paging directly. 

However since usually, we use a standard GradView control to show query results - it is quite easy to setup paging and sorting functionality available there. Here is an [article](/https://docs.microsoft.com/en-us/aspnet/web-forms/overview/presenting-and-managing-data/model-binding/sorting-paging-and-filtering-data
) with detailed step-by-step description how to do it.

## 5. DB level paging

By default paging mechanism in EasyQuery still, retrieves the whole record set and just take necessary part of it to return to a client. Such approach reduces the amount of data transferred between client-side and server, but the load on database level stays the same. To reduce it as well - it's possible to use special SQL commands (like OFFSET ... FETCH). 
To turn this functionality on you need to set `Formats.SupportPaging` property of `EqServiceProviderDb` object in EasyQueryController's constructor:

```
eqService.Formats.SupportPaging = true;
```

NB: Currently this option works only on MS SQL Server 2012 or higher.