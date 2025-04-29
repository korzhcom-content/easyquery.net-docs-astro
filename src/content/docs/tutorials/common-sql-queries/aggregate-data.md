---
title: Aggregate data
slug: tutorials/common-sql-queries/aggregate-data
sidebar:
  order: 4
---

We often need not only to extract data from database but to calculate something - entire orders sum, average weight, count of participants, etc.

Let’s suppose we want to calculate total orders count. In SQL we use the COUNT function like this:

```sql
SELECT COUNT(Ord.OrderID) AS [Order Count] 
FROM Orders AS Ord
```

## Let’s do it using EasyQuery.

First, add a column - click on “[Add column]” link, select “Order | OrderID” menu item. Then click the Function button on the right side of the column and select “Count” menu item.

![Build query with aggregation](/easyquery/docs/images/aggregate-data-1.gif)

## Let’s complicate the task

Now our goal is to calculate the count of orders made during the current year and grouped by customer country.

Expected SQL:

```sql
SELECT Cust.Country AS [Customer Country], COUNT(Ord.OrderID) AS [Order OrderID Count] 
FROM (Customers AS Cust
  RIGHT OUTER JOIN Orders AS Ord ON (Ord.CustomerID = Cust.CustomerID ))
WHERE
(
  Ord.OrderDate >= #2014-01-01# )
GROUP BY Cust.Country
ORDER BY 1
```

You need some knowledge to generate it, right? But not with EasyQuery!

First, add a condition to set “during this year” restriction. Click “Add condition”, select “Order | Date” from menu. Then change the operator - click on “is equal to” link and select “after (special)”. At last, click on “Today” link and select “First day of the year”

Then add a new column “Customer | Country” as described above. Just to get more presentable result drag this column to the first place, then tell it to sort results by Country ascending (click the button with arrows on the left side of Country column and select “Ascending” menu item).

Voila!

Note, that you don’t need to think about columns to group by - all columns that are not aggregated are automatically used to group by them.

![Build more complex query with aggregation](/easyquery/docs/images/aggregate-data-2.gif)
