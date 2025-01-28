---
title: Working with several data models
slug: tutorials/several-data-models
---


## Problem

All EasyQuery demos works with one data model (and one database which corresponds to that model). However, some application might work with several databases and switch between them at run-time.

The good news: starting from version 5.1.0 EasyQuery makes the task of switching between several data models quite simple. 

Here we are going to describe how to add a selector that switches between two data models on your view/page and then how to setup a custom "model loader" to handle `GetModel` requests propertly. 

## Step 1: modifying your view (page)

Let's suppose we have 2 databases: Northwind and Adventure Works and, correspondingly, two models which are saved as XML files in `App_Data` folder: `NWindSQL.xml` and  `AdventureWorksLT.xml`.

To make it possible to switch between these two models we need some selector element on our page. Here is an example of such element:

```
<select id="ChangeModelSelector">
    <option id="dmo-NWindSQL">NorthWind</option>
    <option id="dmo-AdventureWorksLT">Adventure Works</option>
</select>
```


Additionally, we need some JS code which will handle the changes in this selector. The best place to do it - right before the initialization of our view:

```
    var view = new easyquery.ui.AdvancedSearchViewJQuery();
    var context = view.getContext();

    var changeModelSelector = document.getElementById('ChangeModelSelector');

    context.addEventListener('ready', function() {
        var currentOption = document.getElementById('dmo-' + context.getModel().getId());
        if (currentOption) {
            currentOption.selected = true;
        }
    });
	
	changeModelSelector.addEventListener('change', function() {
        var selectedOptionId = changeModelSelector.options[changeModelSelector.selectedIndex].id;

        var modelId = selectedOptionId.substring(4);
        context.clearQuery();

        context.loadModel({ 'modelId': modelId });
    });
	
	var viewOptions = {
	   .   .   .   .   .
	};
	
	view.init(viewOptions);
```


## Step 2: Custom SqlManager

The `IModelLoader` assigned to your middleware will automatically process `GetModel` requests sent by the selector changes on the client side. The only problem here - is to switch the database connection accordingly the the switches between the models. Here is where a custom EasyQueryManager class come to help:

```
public class CustomEasyQueryManagerSql: EasyQueryManagerSql
{

    public CustomEasyQueryManagerSql(EasyQueryOptions options, IServiceProvider services)
        : base(options, services)
    {
    }

    protected override DbConnection GetConnectionCore()
    {
        var configuration = (IConfiguration)Services.GetService(typeof(IConfiguration));
        if (Model.Id == "NWindSQL") {
            return new SqlConnection(configuration.GetConnectionString("EqDemoDb"));
        }
        else if (Model.Id == "AdvantureWorksLT") {
            return new SqlConnection(configuration.GetConnectionString("AdvantureWorksLT"));
        }
        else
        {
            throw new EasyQueryManagerError("Unknown model: " + Model.Id);
        }
    }
}
```

Here we need to override only one method: `GetConnectionCore`. This methods returns a `DbConnection` object by model's ID. For the sake of simplisity we just select one of the 2 connections here. In the real-word applications you can implement more complex logic here. For example, it's possible to store the information about the models and correspoding connections in some DB.


## Step 3: Attach custom manager to the middleware

The final step - is to attach our custom EasyQueryManager class to our middleware. Here is how it looks:

```
app.UseEasyQuery(options =>
{
    options.DefaultModelId = "NWindSQL";
    options.UseManager<CustomEasyQueryManagerSql>();
    .    .    .    .    .    .
});
```

That's all. Now when the user selects an item in our model selector element on the client-side - our server-side code automatically loads the selected model and connects to a proper database (when necessary).