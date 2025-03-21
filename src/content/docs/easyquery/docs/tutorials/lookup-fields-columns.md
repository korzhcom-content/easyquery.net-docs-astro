---
title: Lookup fields and columns
slug: easyquery/docs/tutorials/lookup-fields-columns
---


## Problem
Consider a situation when you have two linked tables in your DB. The first table has a column which actually holds only the code of value stored in the second table.
For example, you have `Customers` with `CityID` column linked to `Cities` table which has two columns: `ID` and `Name`.

Obviously, you would like to show the name (not the code) of the city in your result set when it's necessary. 
In the same time, you would prefer to filter by city ID if it's possible - to prevent extra join to `Cities` table. It would be good also to allow your users to select the city from the list when they add such condition to query instead of making them enter city code or name "manually". 

## Solution
Here are the instructions how to deal with such situation in EasyQuery:

1) Let's guess you have already created your model and you have `Customer` entity with `CityID` attribute there.

2) To achieve our first goal (to make it possible to show city name in results), you can add `City` (or `City name`) attribute into `Customer` entity, and that new attribute should point to `Name` field of `Cities` table.
If you created a model from your DB, you possibly already have `City(s)` entity and `Name` attribute in it. So you can only move that `Name` attribute into `Customer` entity.

Additionally you need to turn off `Use in conditions` option (`attr.UseInCondition = false` if do it from code) - so it can be used in ColumnsPanel only.

3) Now you need to make it possible to filter by city ID in query conditions. Simply rename `CityID` attribute to just `City`, turn off its `Use in result` option (so it will not be able to use it as result column) and setup `SQL LIST` value editor for this attribute to show the list of all cities when this attribute is used in a query condition (you can read more about [value editors here](/fundamentals/about-data-editors)). 
 
So, now your users will be able to add conditions with `City` attribute and select a concrete city (by its name) from the drop-down list. In query panel such conditions will look like `Customer City is equal to London` but in result SQL it will be something like: `Customers.CityID = 234`

4) So far, so good. The only problem that may remain with such approach - is that EntitiesPanel will show you (and your users) two attributes named `City` under `Customer` entity. 

To fix this - you use `Lookup Attribute` field and simply link these two attributes to each other.
After that EntitiesPanel will show only one item named `City` but it will know what attribute to add if you add that item into Columns or into Conditions panel.