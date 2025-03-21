---
title: Introduction to value editors
slug: easyquery/docs/fundamentals/about-data-editors
---


Each condition in query consists of 3 parts: attribute (field), operator and values (one or more). By default when a user clicks on ”[enter value]” link in a condition he/she is presented with an edit box actually to type the value. EasyQuery allows you to assign a value editor for each attribute or operator in your model - so your users will be able to use other methods of entering values instead of just typing in a text box. For example, value editor allows you to define a list of available values - so your users will be able to select the value from a drop-down list. 

## 1. Value editor types

* __Auto__ (or no value editor defined) - EasyQuery will automatically use the most appropriate editor for that attribute.
* __Text editor__ - simple text box where a user can type needed value. It's possible to define the kind of entered values for pre-validation
* __Date/time editor__ - textbox combined with a date/time picker dialog
* __List of constants__ - you can define the list of available items, and a user will be able to select from that list when build query. Each item has 'id' and 'text' properties. The values of 'text' property will be shown to users in a drop-down list. The value of 'id' for selected item will be placed into generated SQL.
* __Custom list__ - works the similar way as previous but the list of elements is defined at run-time in ListRequest event handler according to list name (can be specified in data model via Data Model Editor).
* __SQL List__ - works the same way as “Custom list”. This value editor has special name “SQL” and can hold some SQL expression in additional property. ListRequest event handler is responsible for executing that SQL statement and returning the result list back to visual control (widget).
* __Custom__ - raises CustomValue event (in WinForms or WPF editions) or allows to define your own value editor in ASP.NET (Core). On this event (or with a custom editor), you can show some special dialog and return a pair “value - text”. 

## 2. How to define a value editor

You can define value editor for some attribute in your model using one of the following methods

### 2.1. Via the Data Model Editor (at design time)

  * Run Data Model Editor (DME)
  * Open your model XML file
  * Go to “Entities” tab and select the entity attribute for which you what to define an editor.
  * On the right panel for selected attribute open “Value Editors” tab
  * Select the type of editor from drop-down list
  * Press “Settings…” button to define additional parameters for selected editor.
  * Save your model and close DME

### 2.2. Using EasyQuery API (at run-time)

Here is an example how you can set a "Custom List" value editor for some attribute in your model (please do it when your model is loaded already):

```
//find entity attribute
EntityAttr attr = model.EntityRoot.FindAttribute(EntityAttrProp.Expression, "Customers.Country");
 
//create editor object
var editor = new CustomListValueEditor();
editor.ListName = "MyCustomList";
 
//assign new editor to attribute
attr.DefaultEditor = editor;
```

### 2.3. Using `EqEntityAttr` attribute 

In case you load your model from some Enity Framework's (Core) context, you can set the necessary value editor right in your model class using `EqEntityAttr` attribute. Here is an example:

```
    public class Customer
    {
        .    .    .    .    .

        [EqListValueEditor(listName: "CountryList")]
        public string Country { get; set; }
	}
```

So, the attribute above will set a "Custom list" editor with `CountryList` name for  `Country` property in `Customer` class.

## 3. Processing custom lists in ASP.NET (Core)

"Custom list" value editor raises an event which can be processed either on the client-side or on the server. 

### 3.1 Client-side handling 

To handle it on the client-side you need add a handler (a callback function) when define the options for your view (e.g. for `AdvancedSearchView`) 

```
let viewOptions = {
	loadModelOnStart: true,
	.   .   .   .   . 
	handlers: {
		listRequestHandler: function(params, onResult) {
			var processed = true;
			if (params.listName == "RegionList") {
				let query = this.getContext().getQuery();
				
				//if there is a condition with Customer Country 
				//we are trying to take the value of the 3d element of that condition
				let country = query.getOneValueForAttr("Customer.Country");
				let result = []
				if (country == "Canada" || !country) {
					list.push({ id: "BC", text: "British Columbia" });
					list.push({ id: "Quebec", text: "Quebec" });
				}
				if (country == "USA" || !country) {
					list.push({ id: "CA", text: "California" });
					list.push({ id: "CO", text: "Colorado" });
					list.push({ id: "OR", text: "Oregon" });
					list.push({ id: "WA", text: "Washington" });
				}
				onResult(result);
			}
			else {
				processed = false;
			}
			return processed;
		}
	},
	.    .    .    .    .
};

.    .    .    .
let view = new easyquery.ui.AdvancedSearchView();
.    .    .    .
view.init(viewOptions);	
```

The code above is quite straightforward and self-explanatory. The only note we should make is about the returned value. If it's `true` the list request is considered as `processed`, and no further actions are performed. Otherwise - EasyQuery.JS will initiate a `GetList`  request to the server passing the necessary parameters. So, in this case we came to the server-side processing of custom lists that we are going to discuss further:

### 3.2 Server-side handling

To process "GetList" request on the server-side we need to add a list request handler either in `ConfigureEasyQueryOptions` method of your Web API controller (for ASP.NET projects) or on EasyQuery middleware initialization (for ASP.NET Core). Here is an example for ASP.NET Core:

```
public void Configure() 
{
    .   .   .    .
	app.UseEasyQuery(options => {
	    .    .    .    .    .
		
		options.AddValueListResolver(listRequestOptions => {

			if (listRequestOptions.ListName == "RegionsList") {
				return new List<ListItem> {
						new ListItem("US", "USA", new List<ListItem> {
							new ListItem("CA", "California"),
							new ListItem("CO", "Colorado"),
							new ListItem("OR", "Oregon"),
							new ListItem("WA", "Washington")
						}),

						new ListItem("CA", "CANADA", new List<ListItem> {
							new ListItem("AB", "Alberta"),
							new ListItem("ON", "Ontario"),
							new ListItem("QC", "Québec")
						}),

					};
			}

			return null;
		});
}
```

in case of ASP.NET application you can add the same `AddValueListResolver` call in `ConfigureEasyQueryOptions` of your API controller.

As you can see, you can return not only a plain list but also a hierarchical structure. In this case, the client-side widgets will show a menu with 2 (or more) levels. 

## 4. Processing ListRequest event in other editions of EasyQuery

All other editions of EasyQuery (WinForms, WebForms, WPF or Silverlight) has `ListRequest` event in `QueryPanel` control which is raised when a user adds an attribute (or operator) with `Custom List` or `SQL list` value editor assigned to that attribute/operator. You need to handle that event and return the list of available values via event's parameters (according to a list name and/or SQL statement). Here is an example of such event handler: 

```
private void QPanel_ListRequest(object sender, ListRequestEventArgs e) {
	if (e.ListName == "RegionList") {
	  e.ListItems.Clear();
	  countryAttr = model.EntityRoot.FindAttribute(EntityAttrProp.Expression, "Customers.Country");
	  string country = query.GetOneValueForAttr(countryAttr);

	  if (country == "Canada") { 
		  e.ListItems.Add("British Columbia", "BC");
		  e.ListItems.Add("Quebec", "Quebec"); 
	  }
	  else if (country == "USA") {
		  e.ListItems.Add("California", "CA");
		  e.ListItems.Add("Colorado", "CO");
		  e.ListItems.Add("Oregon", "OR");
		  e.ListItems.Add("Washington", "WA");
	  }
	  else if (e.ListName == "YesNoList") {
		  e.ListItems.Add("Yes", "1");
		  e.ListItems.Add("No", "2");
	  }
	}
```

The example above is defined for WinForms edition but it will look very similar for other editions as well. First section of this handler processes the requests for “SQL List” value editors. We just execute SQL statement passed in event's parameter and return the result set (in a special format). All other `else if` sections return lists for particular lists according to the list names.

Please take a look at first `else if` section which populates items for “RegionList”. Here we show how you can filter the returned list according to the value specified for some other attribute. In this example we search our query for a condition like “Customer country is equal to {Some Country}”. If such condition is defined - we get the value (country code) from it and use that value as a filter for the list of regions. 

For more information about this approach please read: [Dynamically populating lists by information from other conditions (WinForms)](http://docs.korzh.com/easyquery/how-to/dynamically-populating-list-winforms)