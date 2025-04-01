---
title: Dynamic populating of value lists in WinForms or WPF editions
slug: how-to/version-5-x/dynamic-populating-value-list-winforms-wpf
sidebar:
  order: 100
---

## Problem

It's a very common situation when users define the query conditions they would like to select some values from the predefined list instead of typing those values "manually".

Sometimes such a list of values can depend on the other conditions in the same query. For example, the user can add a condition with a "City" attribute e.g. __City equals LA__. Of course we can define a list with all cities stored in our database, so the user can select one of them. However, if there is another condition in this query with "Country" attribute (e.g. __Country equals USA__) it would be more convenient to show only the cities that belong to already "selected" country instead of all cities from the DB.

## Solution

To implement such a functionality, we can define a "CUSTOM LIST" value editor for "City" attribute and populate the list of values on `ListRequest` event handler accoring to the other conditions in this query. 

Here is an example of the handler for the situation with "Customer" and "City" attributes described above (here we suppose that we defined a CUSTOM LIST value editor with "CityList" name for "Customer City attribute):

```c#

private void ListRequestHandler(object sender, ListRequestEventArgs e)
{
	string listName = e.ListName;
	if (listName == "SQL")
	{
		GetSqlList(e.SQL, e.ListItems);
	}
	else if (listName == "CityList")
	{
		var customerAttr = Query.Model.GetAttributeByID("Customer.Country", false);

		string country = customerAttr != null ? Query.GetOneValueForAttr(customerAttr) : null;

		e.ListItems.Clear();

		if (country == null || country == "USA") {
			e.ListItems.Add("Los Angeles", "LA");
			e.ListItems.Add("New York", "NY");
			e.ListItems.Add("Chicago", "Chicago");
		}
		if (country == null || country == "Canada") {
			e.ListItems.Add("Toronto", "Toronto");
			e.ListItems.Add("Montreal", "Montreal");
			e.ListItems.Add("Vancouver", "Vancouver");
		}
	}
}

//this method is needed for processing SQL LIST value editors
private void GetSqlList(string sql, ValueItemList items)
{
	CheckConnection();
	var resultDA = new SqlDataAdapter(sql, _connection);

	DataSet tempDS = new DataSet();
	try
	{
		resultDA.Fill(tempDS, "Result");

		StringWriter strWriter = new StringWriter();
		tempDS.WriteXml(strWriter);
		items.LoadFromXml(strWriter.ToString());
	}
	catch (Exception)
	{
		items.Clear();
	}
}
```




To register this handler you need to add the following call in the initialization part of our form (e.g. in the constructor).

For WPF:

```
AddHandler(ListXElement.ListRequestEvent, new ListXElement.ListRequestEventHandler(ListRequestHandler));
```


For Windows Forms:

```
QuqeryPanel1.ListRequest += ListRequestHandler;
```
