---
title: Query saving and loading
slug: tutorials/query-saving-and-loading
sidebar:
  order: 100
---

## Overview

EasyQuery includes several different way of saving and loading the queries. Since the begining you can save your query in XML format using such methods of the `Query` class like `SaveToXmlString()`, `SaveToXmlStream()` or `SaveToXmlFile()`. In version 5.0 we inroduced an possibility to use JSON as alternative format for query storage as more compact and convenient. Moreover, JSON storage functional are asynchronous from the beginning: `SaveToJsonStringAsync()`, `SaveToJsonFileAsync()`, etc. 

To load a saved query you can use the corresponding methods: `LoadFromXmlFile()`, `LoadFromJsonFileAsync()`, etc.

Now, let's consider several different scenarios of query management in different types of applications.


## Desktop applications (WPF or Windows Forms)

Query saving and loading is a rather simple task for this type of projects. You simply call one of the `Save...` method when it's necessary to save the query and one of the `Load...` methods to load it back. 

The only requirement here is to have a valid model be assigned to the `Model` property of your Query object. By "valid" here we mean the data model must be loaded previously and be the same (or at least similar to) as the model used when the query was saved. 

So, here is an example of the whole process:

```
//to save your query to an XML file
query.SaveToXmlFile("MyQuery.xml");

.   .    .    .

//when it's necessary to get it back

//we need a valid model object first
var model = new DbModel();
model.LoadFromXmlFile("MyModel.xml");

//creating a new query associated with that model
var query = new DbQuery(model);

//loading the query
query.LoadFromXmlFile("MyQuery.xml");
```


## Web applications: ASP.NET, MVC, WebForms, Razor pages

The process is much more difficult in case of the web-applications. Of course, you can use the same `Save.../Load...` methods of the `Query` here. However, the intent for query saving or loading usually arises on the client-side and so we need some means to initiate the request there, pass it to the server, do the job and return the result back to the client.

So, let's first walk through the process in general and then we discuss both the client-side and the server-side parts separately.

1. As we mentioned above the process of saving or loading is initiated on the client-side by clicking on some button (selecting some item in the list)

2. The request is sent from the client (browser) to the sever-side (backend app).

3. The server-side code (either a EasyQuery middleware for ASP.NET Core projects or a WebAPI controller for ASP.NET MVC or WebForms) processes the requests and passes it to the EasyQueryManager instance (hereinafter - simply "manager") associated with that middleware or controller.

4. The manager uses a special "query store" object (an object that implements `IQueryStore` interface) for actual query saving or loading.

5. When the job is done, the manager passes the result back to the middleware or controler which "packs" the data in a JSON format and return it back to the client.

6. The EasyQuery.JS code gets the result and processes it: updates the client-side Query object and refreshes the widgets associated with it.

That's it. Now, as you know more about the whole process, let discuss how is it possible to amend it.

### Client-side part


#### Default buttons

Both main views available in EasyQuery.JS (`AdvancedSearchView` and `ReportView`) have a possibility to define special buttons which will initiate different operations with the current query (load, save, get the list of available queries, remove from the storage, etc). Here are the list of those default IDs:

- "ClearQueryButton" - for the DOM element (button) that clears the current query
- "NewQueryButton" - to create a new query
- "LoadQueryButton" - to load query from the storage
- "QueryListSelector" - for the selector which shows the list of available queries
- "SaveQueryButton" -  to save the current query to the storage
- "CopyQueryButton" - to duplicate the curent query with a new name
- "RemoveQueryButton" - to remove the current query from the storage

So, if you, for example, here is how you can define the button (link) that initiates query saving:

```
<a id="SaveQueryButton" href="#">Save query</a>
```

And here is an example how to define a button which will show the list of available queries:

```
<div class="eqv-dropdown-container">
   <a id="LoadQueryButton" class="eqv-button eqv-drop-button">Load <span style="float: right">▼</span></a>
   <div class="eqv-dropdown-content">
   </div>
</div>
```

#### EqContext functions

Obviously, all these operations can be initiated "manually" by calling different methods of [`EqContext` class](https://korzh.com/easyquery/javascript/docs/api-reference-6x/@easyquery/core-package/classes/eqcontext-class)

For example, here is a piece of code that initiates the query loading:

```
let view = window['AdvancedSearchView'];

let context = view.getContext();

context.loadQuery({
    queryId: 'MyQuery1',
    success: () => {
        context.refreshWidgets(WidgetGroup.Query); //to refresh all widgets that depends on query
    }
 });
 ```
 
 
 ### Server-side part
 
As we described at the beginng, the server-side part of EasyQuery library passes all query saving/loading requests to a special "query store" object. To register some query store you need to call `UseQueryStore` extension method on EasyQuery initialization (either inside `app.UseEasyQuery(...)` call for ASP.NET Core projects or inside `ConfigureEasyQueryOptions` for WebAPI controller in ASP.NET MVC or WebForms.
 
 Examples:
 
 > ASP.NET Core `Startup.Configure` method
 
 ```
 app.UseEasyQuery(options => {
     .    .    .    .
     options.UseQueryStore(services => new FileQueryStore("App_Data"));
 });
 ```
 
> ASP.NET WebApi controller
 
 ```
    public class AdvancedSearchController : EasyQueryApiController
    {
        protected override void ConfigureEasyQueryOptions(EasyQueryOptions options)
        {
            options.UseManager<MyEasyQueryManagerSql>();
			
			.    .    .    .   . 
            var path = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data");
            options.UseQueryStore((_) => new FileQueryStore(path));
        }
		
		.    .    .    .
	}
```

In both examples above we used `FileQueryStore` class defined in `Korzh.EasyQuery.Services` namespace. This class allows you to store queries as files in the specified directory (usually inside `App_Data` folder). 

Of course you can write your own "query store" class that will save your queries in your own SQL database or in a No-SQL DB or whatever else storage by your choice. The only requirement: this class must implement [`IQueryStore` interface](//api-reference-5x/korzh-easyquery-services-namespace/iquerystore-interface). When the class is defined, you need to register your store using `UseQuerStore` method as we showed above for `FileQueryStore` class. 

Here you can find [an example of a query store class (`ReportStore`)](https://github.com/easyquery/AspNetCoreSamples/blob/master/EqAspNetCoreDemo/Services/ReportStore.cs) that saves the queries (reports) to a database table via Entity Framerowk Core. You can use this class as a template for your own one.

## Questions? Suggestions?

Please [contact us](https://korzh.com/support)
