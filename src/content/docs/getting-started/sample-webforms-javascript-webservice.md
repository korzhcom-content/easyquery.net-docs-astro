---
title: EasyQuery ASP.NET - using jQuery widgets in a WebForms project
slug: getting-started/sample-webforms-javascript-webservice
---


While we have native WebForms controls which can be used in your project, sometimes it's more convenient to use our jQuery widgets even in WebForms project and set up a kind of “controller” for them on server-side using web-service. 

## 1. Create data model

Run Data Model Editor application in wizard mode (“Create Data Model” program icon) and follow the instructions to create a new data model for your database. You will define database tables you would like to use in your queries, links between them and entities with their attributes (mostly fields in added tables). When the model is created - save it to some file on your hard-drive (let it be model1.xml for example);

## 2. Add the references to EasyQuery libraries.

Then open your project and add the following assemblies to its References list:

* Korzh.EasyQuery.NET40
* Korzh.EasyQuery.Db.NET40
* Korzh.EasyQuery.Services.Db.NET40

We listed here the names of .NET 4.0 assemblies. Use the similar assemblies but with another “suffix” if you have another target platform. For example, the assemblies ending on ”.NET45” should be used for .NET 4.5 platform and so on.

## 3. Setup a web-service class

To handle AJAX requests from client-side controls (widgets) you need some web-service or controller on your server side. EasyQuery library contains EqServiceProviderDb class which allow you to define such service very easily and in the shortest time.

First of all, add a new WebService class into your project. Right-click on your project node in Solution Explorer, select “Add | New Item” and then choose “Web Service” from the item templates. Change the default name of new web-service to “EasyQueryWebService.asmx” and click Add button. Then open EasyQueryService.asmx.cs and copy the following default implementation: 

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data.OleDb;
 
using Korzh.EasyQuery.Db;
using Korzh.EasyQuery.Services;
using Korzh.EasyQuery.Services.Db;
using System.Web.Script.Serialization;
using System.Collections;
 
namespace WebDemoAjaxCS {
  /// <summary>
  /// Summary description for EasyQueryWebService
  /// </summary>
  [WebService(Namespace = "http://korzh.com/")]
  [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
  [System.ComponentModel.ToolboxItem(false)]
  [System.Web.Script.Services.ScriptService]
  public class EasyQueryWebService : System.Web.Services.WebService {
 
  private EqServiceProviderDb eqService;
 
  public EasyQueryWebService() {
  eqService = new EqServiceProviderDb();
  eqService.CustomListResolver = (listname) => {
  if (listname == "Regions") {
  return new List<ListItem> {
  new ListItem("CA","California"),
  new ListItem("OR","Oregon")
  };
  }
  return Enumerable.Empty<ListItem>();
  };
 
  //these two linese allows eqService object access Session to store the content of model and query between requests
  eqService.SessionGetter = key => Session[key];
  eqService.SessionSetter = (key, value) => Session[key] = value;
 
  //we will share Query object between this service and our .aspx page - so it's better to store it in session as well
  eqService.StoreQueryInSession = true;
 
  //Our demo project uses Access database - so we set an appropriate format here
  eqService.Formats.SetDefaultFormats(FormatType.MsAccess);
 
  //Make this property true if you use SqlServer and want to include schema name into generated SQL statements
  eqService.Formats.UseSchema = false;
 
  //Calculating the path to App_Data folder where our model file and our database (.mdb file) are stored
  string dataPath = System.Web.HttpContext.Current.Server.MapPath("~/App_Data");
  eqService.DataPath = dataPath;
 
  //Setting up the connection
  eqService.Connection = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" +
  System.IO.Path.Combine(dataPath, "Nwind.mdb") + ";Persist Security Info=False");
 
  }
 
  #region auxiliary functions
  /// <summary>
  /// Converts Dictionary object to JSON
  /// </summary>
  /// <param name="data">The dictionary.</param>
  /// <returns>The correctly formatted JSON string that represents this dictionary</returns>
  private string DictionaryToJson(IDictionary<string, object> dict) {
  return new JavaScriptSerializer().Serialize(dict);
  }
 
  /// <summary>
  /// Converts JSON string to Dictionary object.
  /// </summary>
  /// <param name="json">A JSON string.</param>
  /// <returns>New IDictionary object created by JSON string passed in parameter</returns>
  private IDictionary<string, object> JsonToDictionary(string json) {
  return new JavaScriptSerializer().Deserialize<IDictionary<string, object>>(json);
  }
 
  /// <summary>
  /// Converts IEnumerable object to JSON
  /// </summary>
  /// <param name="data">The IEnumerable object.</param>
  /// <returns>The correctly formatted JSON string that represents this list</returns>
  private string ListToJson(IEnumerable list) {
  return new JavaScriptSerializer().Serialize(list);
  }
 
  /// <summary>
  /// Flushes the content of the string passed in parameter into response stream
  /// </summary>
  /// <param name="s"></param>
  private void FlushResult(string s) {
  Context.Response.Write(s); 
  }
 
  /// <summary>
  /// Flushes the content of the IDictionary object passed in parameter into response stream.
  /// Before writing to response the dictionary is serialized into JSON string
  /// </summary>
  /// <param name="dict">The IDictionary object</param>
  private void FlushResult(IDictionary<string, object> dict) {
  Context.Response.Write(DictionaryToJson(dict));
  }
 
  /// <summary>
  /// Flushes the content of the IEnumerable object passed in parameter into response stream.
  /// Before writing to response the list is serialized into JSON string
  /// </summary>
  /// <param name="list">The IEnumerable object</param>
  private void FlushResult(IEnumerable list) {
  Context.Response.Write(ListToJson(list));
  }
 
  #endregion
 
 
  /// <summary>
  /// Gets the model by its name
  /// </summary>
  /// <param name="modelName">The name of requested model. 
  /// If null or empty this method returns current model object stored in Session
  /// </param>
  /// <returns></returns>
  [WebMethod(EnableSession=true)]
  public void GetModel(string modelName) {
  var model = eqService.GetModel(modelName);
  FlushResult(model.SaveToDictionary());
  }
 
  /// <summary>
  /// Gets the query by its name
  /// </summary>
  /// <param name="queryName">The name of the query. If null or empty this method returns current query object stored in Session</param>
  /// <returns></returns>
  [WebMethod(EnableSession = true)]
  public void GetQuery(string queryName) {
  var query = eqService.GetQuery(queryName);
  FlushResult(query.SaveToDictionary());
  }
 
  /// <summary>
  /// It's called when it's necessary to synchronize query on client side with its server-side copy.
  /// Additionally this action can be used to return a generated SQL statement (or several statements) as JSON string
  /// </summary>
  /// <param name="queryJson">The JSON representation of the query .</param>
  /// <param name="optionsJson">The additional parameters which can be passed to this method to adjust query statement generation.</param>
  /// <returns></returns>
  [WebMethod(EnableSession = true)]
  public void SyncQuery(string queryJson, string optionsJson) {
  IDictionary<string, object> queryDict = JsonToDictionary(queryJson);
  eqService.SyncQueryDict(queryDict);
 
  var statement = eqService.BuildQueryDict(queryDict, JsonToDictionary(optionsJson));
  Dictionary<string, object> dict = new Dictionary<string, object>();
  dict.Add("statement", statement);
  FlushResult(dict);
  }
 
 
  /// <summary>
  /// Saves the query.
  /// </summary>
  /// <param name="queryJson">The JSON representation of the query .</param>
  /// <param name="queryName">Query name.</param>
  /// <returns></returns>
  [WebMethod(EnableSession = true)]
  public void SaveQuery(string queryJson, string queryName) {
  eqService.SaveQueryDict(JsonToDictionary(queryJson), queryName);
  Dictionary<string, object> dict = new Dictionary<string, object>();
  dict.Add("result", "OK");
  FlushResult(dict);
  }
 
  /// <summary>
  /// This action returns a custom list by list name and/or SQL statement (for SQLLIST value editors).
  /// </summary>
  /// <param name="options">List request options - an instance of <see cref="ListRequestOptions"/> type.</param>
  /// <returns></returns>
  [WebMethod(EnableSession = true)]
  public void GetList(string listName, string sql) {
  ListRequestOptions options = new ListRequestOptions() { listName = listName, sql = sql };
  FlushResult(ListToJson(eqService.GetList(options)));
  //FlushResult("");
  }
 
 
  /// <summary>
  /// Executes the query passed as JSON string and returns the result record set (again as JSON).
  /// </summary>
  /// <param name="queryJson">The JSON representation of the query.</param>
  /// <param name="optionsJson">Different options in JSON format</param>
  /// <returns></returns>
  [WebMethod(EnableSession = true)]
  public void ExecuteQuery(string queryJson, string optionsJson) {
  var query = eqService.LoadQueryDict(JsonToDictionary(queryJson));
  var sql = eqService.BuildQuery(query, JsonToDictionary(optionsJson));
 
  var resultSet = eqService.GetDataSetBySql(sql);
  Session["EQ_LAST_RESULT_SET"] = resultSet;
 
  var resultSetDict = eqService.DataSetToDictionary(resultSet, JsonToDictionary(optionsJson));
 
  Dictionary<string, object> dict = new Dictionary<string, object>();
  dict.Add("statement", sql);
  dict.Add("resultSet", resultSetDict);
 
  FlushResult(dict);
  }
 
  }
 
}
```
Most of the methods of this class are self-explanatory. Public methods are “service methods” (or “actions” concerning MVC controllers). They process AJAX requests from JavaScript widgets and return necessary data in JSON format. As you can see, all “magic” happens inside EqServiceProviderDb instance. You can configure its behavior through different properties and events. All configuration work is performed in EasyQueryWebService constructor as you can see. 

## 4. Client-side scripts and CSS files

Now we move from server-side code to client-side. You should include the necessary scripts and CSS files to your page(s). First of all, we need jQuery, and jQuery UI scripts and CSS files since EasyQuery controls are implemented as jQuery widgets. Secondly, the EasyQuery script itself and corresponding CSS files. We suggest you use the scripts and CSS files from our CDN since it always contains the latest versions. You can find local copies of those files in \JS sub-folder of EasyQuery's installation folder. Additionally, you may need to define the easyQuerySettings global variable which contains different options and callbacks for EasyQuery widgets.

Here is an example of the main additions to your .aspx file
```
<head>
  . . . . . . . .
 
  <link href="http://cdn.korzh.com/eq/3.7.0/themes/default/easyquery.css" rel="stylesheet" type="text/css" media="screen" />
  <link href="http://cdn.korzh.com/eq/3.7.0/themes/default/eqview.css" rel="stylesheet" type="text/css" />
 
  <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
  <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
  <link href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css" />
  <script type="text/javascript" src="https://www.google.com/jsapi"></script>
 
  <!-- EasyQuery widgets settings -->
  <script type="text/javascript">
 
  // Load the Visualization API and the piechart package (not necessary in general case).
  //google.load('visualization', '1.0', { 'packages': ['corechart'] });
 
  // Set a callback to run when the Google Visualization API is loaded.
  //google.setOnLoadCallback(GoogleVisualizationLoaded);
 
  function GoogleVisualizationLoaded() {
  //Visualization loaded!!!
  }
 
 
  //Settings for EasyQuery widgets 
  window.easyQuerySettings = {
  serviceUrl: "/EasyQueryWebService.asmx",
  modelName: "NWindMDB",
  loadQueryOnStart: true,
  entitiesPanel: { showCheckboxes: true },
  columnsPanel: { allowAggrColumns: true, attrElementFormat: "{entity} {attr}", showColumnCaptions: true, adjustEntitiesMenuHeight: false },
  queryPanel: { alwaysShowButtonsInPredicates: false, adjustEntitiesMenuHeight: false, menuSearchBoxAfter: 20 },
  syncQueryOptions: {
  sqlOptions: { SelectDistinct: true }
  },
 
  listRequesHandler: function (params, onResult) {
  //listRequest event handler goes here
  }
 
  };
  </script>
  . . . . . . . .
</head>
<body>
  . . . . . . . . 
 
  <!--- place these scripts at the end of your page, before closing body tag -->
  <script src="http://cdn.korzh.com/eq/3.7.0/eq.all.min.js" type="text/javascript"></script>
  <script src="http://cdn.korzh.com/eq/3.7.0/eq.view.basic.js" type="text/javascript"></script>
</body>
```

## 5. Web-page code

Finally we need to define our visual widgets on the web-page and connect them with our server-side service. First of all we need to define the placeholders for our widgets into your .aspx file: 

```
<!--Placeholder for Entities panel -->
<div id="EntitiesPanel"></div>
. . . . . . . . . . 
<!--Placeholder for Columns panel -->
<div id="ColumnsPanel"></div>
. . . . . . . . . .
 
<!--Placeholder for Query (conditions) panel --> 
<div id="QueryPanel"></div>
```

 It's better to give them the same IDs as in the example above since in this case, they will be automatically accessible by EasyQuery's client-side scripts without additional configuration.

Usually, you need some default functionality to clear your current query, load/save and execute it. Our scripts have a default implementation for all these operations and to make them work - you just need to define the placeholders for corresponding buttons. 

```
<div id="ClearQueryButton" class="eqv-button clear-button">Clear query</div>
<div id="LoadQueryButton" class="eqv-button load-query-button">Load query</div>
<div id="SaveQueryButton" class="eqv-button save-query-button">Save query</div>
```

 As in a case of widget placeholders, you should define them with exactly the same IDs. The names of style classes can be different - the ones which are listed here are from our default style theme defined in an eqview.css file.

It will work out-of-box if you define the widget placeholders and buttons as it's described above. All the functions which control this default behavior are defined in an eq.view.js file which is distributed with full, unminified source code - so you can see how it works and change the way it works if necessary.

## 6. Sample project

You can download a sample project which implements all functionality described in this article directly from our [web-site](http://korzh.com/download/EqWebFormsDemo.zip).