---
title: Dynamically populate value lists by information from other conditions
slug: easyquery/docs/how-to/dynamically-populating-lists-mvc
---


## Problem
Suppose we have a database with `Customer` entity which has `Country` and `City` attributes. For both these attributes we define the value editors which return the lists of available values (countries and cities correspondingly). 

Now let's imagine the user adds a condition with the `Country` attribute e.g. `Country is USA`. After that they also add a condition with the `City` attribute. Obviously, while the `Country` is selected already we would like to see only the cities from that selected country.

## Solution
Hera the steps needed to implement such a functionality:

1. Define a value editor for the `City` attribute as `SQL LIST` with `Cities.@{{Customer.Country}}` list name (here `Customer.Country` is the ID of the `Country` attribute in the `Customer` entity). Here is now you can do it for a property in a model class:

```

public class Customer
{
    .    .    .    .
	
	[ListValueEditor(ListName = "Cities.{{Customer.Country}}")]
	public string City {get;set;}

    .    .    .    .
}
```

2. Add an SQL LIST value editor to your model. Let's name it "CitesSqlValueList") and then in a value list resolver modify its SQL according the currently selected country and get the list of values using `GetValueListAsync` method of `EasyQueryManager` class:

```
.    .    .    .
endpoints.MapEasyQuery(options => {
    .    .    .     .
    options.UseModelTuner(manager => {
        manager.Model.Editors.Add(new SqlListValueEditor("CitiesSqlValueList", ""));
	});

    options.AddValueListResolver(listOptions => {
        string listName = null;

        if (listOptions.Editor is CustomListValueEditor customListEditor) {
            listName = customListEditor.ListName;
        }
     
        if (listName != null && listname.StartsWith("Cities.")) {
             string countryCode = listname.Substring("Cities.".Length);
             var model = options.Manager.Model;
             var editor = model.Editors.FindById("CitiesSqlValueEditor");
             (editor as SqlListValueEditor).SQL = $"SELECT * FROM Cities WHERE Country = '{countryCode}'";
             return options.Manager.GetValueListAsync(modelId, "CitiesSqlValueEditor").Result;
        }
        return Enumerable.Empty<ListItem>();
    });
```

What's happening here?

The client-side script automatically recognizes the list names with a special parameter `{{Attribute ID}}` and replaces it with a particular value if there is a condition with this attribute in our query.
After that, you can get that value on the server side and use it to filter the result list.

In our example dynamically modify the SQL statement of another value editor and get the list of values from it but of course, you can take the values from whatever source you want and fill the result list manually.