---
title: Query with table joins
slug: tutorials/common-sql-queries/query-with-table-joins
sidebar:
  order: 100
---

Let’s make our example more interesting. Suppose we would like to see all orders for USA customers. For each order, we want to see the name of customer, order date and sum. All result rows must be sorted by the order date.

To get this data by SQL, we need to join two tables (Customers and Orders), list necessary columns in SELECT clause and add ORDER By clause:

```sql
SELECT Ord.OrderDate, Cust.CompanyName, Ord.Freight
FROM Customers AS Cust
  JOIN Orders AS Ord ON (Ord.CustomerID = Cust.CustomerID ))
WHERE
  Cust.Country = 'USA'
ORDER BY Ord.OrderDate
```

Here is the point where you can see how EasyQuery can simplify the process of query construction. All you need to do - is to add necessary columns into Columns panel and set the sorting order for Order date column. EasyQuery will take care of the rest: tables joins, correct aliases for tables and columns, etc.

So, just click on “[Add column]” link, select Order | Date from the menu. Then repeat this operation for Customer | Company Name and Order | Freight attributes. Finally, click on the first button in Order Date column row and select “Ascending” from the drop-down list.

Here is a screenshot what you will get in the result - an example of a query with a tables' join:

![Query with table joins](https://files.aistant.com/korzh/easyquery-dotnet/images/query-example-02.png)
