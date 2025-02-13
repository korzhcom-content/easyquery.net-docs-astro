---
title: Dynamically populate lists by information from other conditions — WebForms
slug: how-to/obsolete-tutorials/dynamically-populating-list-webforms
---


We will discuss this problem and its solution by example. Let's say the user can define a condition with city e.g. “City name is equal to LA”. But if the user has already selected a country (or a few countries) in one of their condition lists then the list of cities available for indicated condition must be filled with only the cities in the selected countries.

To implement such functionality you just need to check if the attribute our list depends on is already set in one of the conditions and get its value. We use ’GetOneValueForAttr()’ method to do it.

After that, we just use the value we got when populating our list.

So, here our code sample. 

```csharp
  protected void QueryPanel1_ListRequest(object sender,   Korzh.EasyQuery.WebControls.ListRequestEventArgs e) {
  EntityAttr countryAttr =
  query.Model.EntityRoot.FindAttribute(EntityAttrProp.Expression, "Customers.Country");
  if (e.ListName == "RegionList") {
  e.ListItems.Clear();
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
  }


```