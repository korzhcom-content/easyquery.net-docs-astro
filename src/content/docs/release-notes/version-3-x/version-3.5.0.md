---
title: Version 3.5.0 release notes
slug: release-notes/version-3-x/version-3.5.0
---

Version 3.5 of EasyQuery ASP.NET contains several essential changes, especially for MVC projects. 
Here are the most important ones: 

## 1. Zero-configuration approach 

```js
<script> 
  . . . . . . . . 
  $(document).ready(function () {
 
  EQ.client.init({
  //EasyQuery widgets settings
  });
  EQ.view.init();
  });
  . . . . . . . . 
</script> 
```
Now it's not necessary. You just need to include our script files anywhere in your page (but after inclusion of JQuery and JQuery UI, of course).
You can use the scripts from our CDN: 
```js
<script src="http://cdn.korzh.com/eq/eq.all.min.js" type="text/javascript"></script>
<script src="http://cdn.korzh.com/eq/eq.view.js" type="text/javascript"></script>
```
or local scripts: 
```js
<script src="@Url.Content("~/scripts/eq.all.min.js")" type="text/javascript"></script>
<script src="@Url.Content("~/scripts/eq.view.js")" type="text/javascript"></script>
```
 The code above will use default settings and will search for default placeholder IDs to setup EasyQuery widgets (such as "QueryPanel", "ColumnsPanel", etc.).
If you need to set some options, you may do it using old method (calling EQ.client.init function directly with necessary settings) or a new approach: through special global variable easyQuerySettings.

Example: 
```js
<script> 
  window.easyQuerySettings = {
  serviceUrl: "/EasyQuery",
  modelName: "NWindSQL",
  entitiesPanel: { showCheckboxes: true },
  columnsPanel: { allowAggrColumns: true, attrElementFormat: "{entity} {attr}", showColumnCaptions: true, adjustEntitiesMenuHeight: false },
  queryPanel: { alwaysShowButtonsInPredicates: false, adjustEntitiesMenuHeight: false, menuSearchBoxAfter: 20 },
  syncQueryOptions: {
  sqlOptions: {SelectDistinct:true}
  },
 
  listRequesHandler: function (params, onResult) {
  //your listRequest handler goes here
  }
 
  };
</script> 
 . . . . . . . . . . 
 
<!-- somewhere at the end of your page -->
<script src="@Url.Content("~/scripts/eq.all.min.js")" type="text/javascript"></script>
<script src="@Url.Content("~/scripts/eq.view.js")" type="text/javascript"></script>
```
## 2. New controller and EqServiceProviderDb class 
 Version 3.4 of EasyQuery includes a base implementation of MVC controller which processes all AJAX request from client-side: EqDbMvcController class. You was needed to inherit your own controller from that class and override some virtual methods to adjust its functionality to your needs. This approach worked well (and still do) however there were two main problems with it:

1. First of all, you don't have full control over controller's actions and the way they processed. Most of functionality was hidden inside EqDbMvcController class.

2. Second, you needed a special assembly (Korzh.EasyQuery.Mvc#) which provided you with necessary functionality. The problem was: that assembly could work only with a particular version of MVC. If you upgrade your project to newer MVC version - it becomes useless.

To avoid these problems in future, we introduced a new approach in version 3.5 of EasyQuery:

- Now you inherit your controller from Controller class (as usual) and should define all necessary actions (such as GetModel, GetQuery, SyncQuery, ExecuteQuery, etc.) in it.
- Your EasyQueryController (or whatever name it has) uses an instance of a special EqServiceProviderDb class which contains all functionality necessary in controller's actions. So, most of the actions now have just 1-2 lines of code: prepare data for EqServiceProvider, call its method and return the result in JSON format.

Of course you don't need to write that controller from scratch. We provide you with several ready-to-use templates which you can copy into your project and adjust if necessary.

Here is an example of a typical EasyQueryController implementation: 

```js
public class EasyQueryController : Controller {
 
  private EqServiceProviderDb eqService;
 
  public EasyQueryController() {
  eqService = new EqServiceProviderDb();
 
  eqService.SessionGetter = key => Session[key];
  eqService.SessionSetter = (key, value) => Session[key] = value;
 
  string dataPath = System.Web.HttpContext.Current.Server.MapPath("~/App_Data");
  eqService.DataPath = dataPath; 
  eqService.Connection = new SqlCeConnection("Data Source=" + System.IO.Path.Combine(dataPath, "Northwind.sdf"));
  }
 
  [HttpPost]
  public ActionResult GetModel(string modelName) {
  var result = eqService.GetModel(modelName);
  return Json(result.SaveToDictionary());
  }
 
  [HttpPost]
  public ActionResult GetList(ListRequestOptions options) {
  return Json(eqService.GetList(options));
  }
 
  [HttpPost]
  public ActionResult GetQuery(string queryName) {
  var query = eqService.GetQuery(queryName);
  return Json(query.SaveToDictionary());
  }
 
 
  [HttpPost]
  public ActionResult SaveQuery(string queryJson, string queryName) {
  eqService.QuerySaverDict(queryJson.ToDictionary(), queryName);
  Dictionary<string, object=""> dict = new Dictionary<string, object="">();
  dict.Add("result", "OK");
  return Json(dict);
  }
 
  [HttpPost]
  public ActionResult ExecuteQuery(string queryJson, string optionsJson) {
  var statement = eqService.GetSqlByQueryJson(queryJson.ToDictionary());
  var resultSet = eqService.GetDataSetBySql(statement);
  var resultSetDict = eqService.DataSetToDictionary(resultSet, optionsJson.ToDictionary());
  Dictionary<string, object=""> dict = new Dictionary<string, object="">();
  dict.Add("statement", statement);
  dict.Add("resultSet", resultSetDict);
  return Json(dict);
  }
 
  [HttpGet]
  public JsonResult GetQueryList(string modelName) {
  IEnumerable<listitem> queries = eqService.GetQueryList(modelName);
 
  return Json(queries, JsonRequestBehavior.AllowGet);
  }
 
  [HttpPost]
  public ActionResult SyncQuery(string queryJson, string optionsJson) {
  IDictionary<string, object=""> queryDict = queryJson.ToDictionary();
  eqService.SyncQueryDict(queryDict);
 
  var statement = eqService.BuildQueryDict(queryDict, optionsJson.ToDictionary());
  Dictionary<string, object=""> dict = new Dictionary<string, object="">();
  dict.Add("statement", statement);
  return Json(dict);
  }
 
  [HttpPost]
  public ActionResult ExecuteSql(string sql, string optionsJson) {
  return Json(eqService.ExecuteSql(sql, optionsJson.ToDictionary()));
  }
 
  }
 

```

## 3. SyncQuery action

Version 3.5 of EasyQuery introduces new default action in controller: SyncQuery. To some extent it replaces old BuildQuery action but additionally provides more flexibility. As the name says its main purpose to synchronize current state of query on client-side with its server-side copy which can be, for example, stored in Session.

But you can also use it to return some information to the client.
For example, using "statement" property of returned JSON object you can pass to the client a generated SQL statement.

## 4. New JavaScript classes Query and DataModel

Client-side code now have equivalents of DbQuery and DbModel classes used on server-side to perform all operations with query and model. For example, here is a piece of JavaScript code which adds a condition into your query: 

```js
$("#AddConditionButton").click(function () {
  var query = EQ.client.getQuery();
  query.addSimpleCondition({ attr: "Customers.CompanyName", operator: "StartsWith", value: "A" });
});
```
## 5. Upgrading from previous versions

Your code from version 3.4 of EasyQuery will still work in version 3.5 without any problem.
However, to get more flexibility and avoid any possible problems in future we suggest to make the following changes:

1. Move the commands which includes eq.all.min.js and eq.view.js files in your web-page to the end of the page's code (before closing >/body< tag).
2. Assign the object which defines widgets' settings to easyQuerySettings global variable (see example in paragraph #1).
3. Remove the code which performs explicit initialization of EasyQuery widgets (EQ.client.init(), EQ.view.init()) since they will be initialized automatically at the point of script inclusion.
4. Remove Korzh.EasyQuery.Mvc#.NET### assembly from your project and replace it by Korzh.EasyQuery.Services.Db.NET### 
5. Change your EasyQueryController class using one of our templates. The template you need can be taken from one of the sample projects distributed with EasyQuery:
  - EQMvcDemoDb - using EasyQuery with direct connection to database and SQL query language.
  - EQMvcDemoEF - using EasyQuery with EnityFramework and Entity SQL as query langauge.
  - EQMvcDemoLinq - EntityFramework and LINQ.