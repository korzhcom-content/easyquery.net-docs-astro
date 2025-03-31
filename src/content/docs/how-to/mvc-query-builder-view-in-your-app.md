---
title: Add query builder page from our MVC sample project in your own app
slug: how-to/mvc-query-builder-view-in-your-app
---

## The problem

You would like to add into your project the same query builder page (or with some little modifications) as in our EQMvcDemoDB sample project.

## The solution

### 1) EasyQuery assemblies, controller, and view

First of all, you need the controller and view file which will give your users the access to query builder page.

* Copy `EQMvcDemoDB\Controllers\EasyQueryController.cs` file to `YourProject\Controllers\`
* Change the namespace in EasyQueryController.cs to the one used in your project (e.g. `MyCompany.MyApplication`)
* Copy `EQMvcDemoDB\Views\EasyQuery\EasyQuery.cshtml` file to `YourProject\Views\EasyQuery`
* Add both files it into your project 
* Copy `EQMvcDemoDB\App_Data\NWindSQL.xml` file to `YourProject\App_Data`. Create `App_Data` folder if necessary.
* Add `App_Data\NWindSQL.xml` into your project. Set it's “Build Action” property to “Content” and “Copy to Output Directory” to “Always”.
* Reference the following EasyQuery assemblies in your project:
   * Korzh.EasyQuery.NET45.dll
   * Korzh.EasyQuery.Db.NET45.dll
   * Korzh.EasyQuery.Mvc.NET45.dll

Try to build your project. Our demo uses SQL Server Compact database (it's more convenient DB type for distribution), so all references to SqlCe classes and namespaces might not be compiled in your project. Simply comment them for now - we will modify them later.   
Run your project and check if the new page can be opened by /EasyQuery URL. The page will look quite ugly (since we haven't added any CSS files and scripts yet), but it must be opened without errors.

### 2) Style and scripts for the new page

Now we need to brush up the style of our new page. We have created special CSS files with default styles for EasyQuery widgets and QueryBuilder page. You need to copy those file into your project's folder, include them into the project and then link to your view page. Additionally, you will need to add some JavaScript files. First of all, we need JQuery and JQuery-UI scripts. Secondly - `eq.all.min.js` file which contains all EasyQuery widgets and `eq.view.basic.js` which contains some basic view functionality (load/save/execute queries). 
So:

* Copy `easyquery.css` and `eqview.css` files from `EQMvcDemoDb\Content\` to `YourProject\Content\`
* Include these CSS files into your project.
* Copy `eq.all.min.js` and `eq.view.basic.js` file from `EQMvcDemoDB\Scripts` to `YourProject\Scripts` and include both these files to your project.
* Add jQuery and jQuery UI scripts to your new `EasyQuery.cshtml` view if those libraries are not included into your layout view yet.
* Link jQuery UI styles. Again, this step is not necessary if jQuery UI .css files are already linked in your layout view.

Here is an example how your new view file may look like after all these changes:

```html
     .    .    .    .    .    .    .    .    .
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min.js"></script>
 
  <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/themes/base/minified/jquery-ui.min.css" rel="stylesheet" type="text/css" />
   .    .    .    .    .    .    .
```
After that please try to open EasyQuery page once again. Now it must look much better but still does not provide any functionality since we haven't added any server-side code yet.

### 3) Updating EasyQuery controller, connecting to your DB
Currently, we use our demo model for NWind database - just to make sure that everything works as expected and we don't have any problem in our server-side code, view markup or scripts. Now it's time to make the final modifications and connect this new query builder page to your project's data.

But at first, we would like to make an overview of what happens "under the hood" when you open that page.
Your new "advanced search" page contains few JQuery UI widgets provided by EasyQuery script (eq.all.min.js): QueryPanel, ColumnsPanel and EntitiesPanel. Those widgets make AJAX calls to your server-side code to perform the following tasks:

* To get data model.
* To load/save queries.
* To build an SQL statement.
* To execute the generated SQL and get the result set.

All these actions are implemented in EasyQueryController class. The basic functionality is provided by the methods of the special `eqService` object of `EqServiceProviderDb` class. Each action method (like `GetModel`, `GetQuery`, `ExecuteQuery` and others) simply gets the request's parameters, pass them to the corresponding method of EqServiceProviderDb, pack the results into a proper format and returns them to the client.
So, in most cases, you will not need to modify any action method in EasyQueryController class. Instead, you will need to change some options of `eqService` to make it load your model, connect to your DB or to generate SQL statement with correct syntax.

So, here is what we are going to do:

 * First of all, you will need your data model. To create it - run Data Model Editor (installed with EasyQuery library), connect it to your DB and follow the instructions. After performing all these steps save your model into some file. Let's call this new model file `MyModel.xml`. For more information about creating a new model with Data Model Editor please read this [article](/getting-started/new-data-model).

 * Copy `MyModel.xml` into `App_Data` folder, add it to the project and set its “Build Action” and “Copy to Output Directory” properties to the same values as for NWindSQL.xml file from the previous step.

* Now you need to tell `eqService` how to load your data model instead of NWindSQL. You can use `DefaultModelName` property for that. Additionally, you will need to modify the connection string and the formats for generated SQL statements. Let's suppose you use MS SQL database. So the initialization part of EasyQueryController for your case will look this way:

```c#
private EqServiceProviderDb eqService;

public EasyReportController() {
    eqService = new EqServiceProviderDb();

    eqService.Paging.Enabled = true;
    eqService.DefaultModelName = "MyModel";

    eqService.StoreModelInSession = true;
    eqService.StoreQueryInSession = true;
            
    string connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;
    eqService.Connection = new SqlConnection(connectionString);

    //EqServiceProvider needs to know where to save/load queries to/from
    eqService.DataPath = System.Web.HttpContext.Current.Server.MapPath("~/App_Data");   

    //You can set DbConnection directly (without using ConfigurationManager)
    //eqService.Connection = new SqlConnection("Your connection string goes here");

    //to support saving/loading models and queries to/from Session 
    eqService.SessionGetter = key => Session[key];
    eqService.SessionSetter = (key, value) => Session[key] = value;

    .   .   .   .   .   .   .   .   .

    //other parts of EasyQueryController's constructor will be the same as in original file
```

That's all! Now your application has its own form for advanced search!

### 4) Alternative ways of model loading
If you use Entity Framework for working the DB - it's  necessary to create the model “manually” using Data Model Editor. EasyQuery allows you to load your model either from your `.edmx` file (in case of using DB-first approach) or from your DbContext object.
In both these cases, you will need to:
 *  reference `Korzh.EasyQuery.EF6.NET45` assembly in your project 
 *  define your own `ModelLoader` delegate handler in EasyQueryController's constructor and call model loading code there.   

Here are the examples:

Loading model from some .edmx file: 
```c#
public EasyReportController() {
    eqService = new EqServiceProviderDb();
    .    .    .    .    .    .    .    .    .
    
    eqService.ModelLoader = (model, modelName) => {
        string edmxFilePath = System.IO.Path.Combine(eqService.DataPath, "MyModel.edmx");
        model.LoadFromEdmx(edmxFilePath);   
     }; 

    .    .    .    .    .    .    .    .    .

```

Loading model from the DbContext: 
```c#
//loading from .edmx file
public EasyReportController() {
    eqService = new EqServiceProviderDb();
    .    .    .    .    .    .    .    .    .
    
    var context = new NorthwindDbContext();

    eqService.ModelLoader = (model, modelName) => {
        model.LoadFromDBContext(context);   
     }; 

    .    .    .    .    .    .    .    .    .

```