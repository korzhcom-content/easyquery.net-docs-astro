---
title: Query with OR operators
slug: tutorials/common-sql-queries/query-with-or-operators
sidebar:
  order: 100
---

## Query description

Let's suppose we need to build a query where condition #1 OR condition #2 apply.

For example, we need to find all orders with products from category Beverages or Seafood.

## SQL

Here's how such a query would look like in SQL:

```sql
SELECT Ord.OrderDate AS "Order Date", Ord.Freight AS "Order Freight"
FROM ((Orders AS Ord
  INNER JOIN `Order Details` AS OrdDet ON (OrdDet.OrderID = Ord.OrderID ))
  INNER JOIN Products AS Prod ON (OrdDet.ProductID = Prod.ProductID ))
WHERE
(
  Prod.CategoryID = 1 OR
  Prod.CategoryID = 8 )

```
As you can see this relatively simple query requires a lot of SQL "coding". We have 3 different tables here, and 2 joins between those tables.

## EasyQuery

With EasyQuery this task will be much easier (sorry for the tautology).

You need to perform three simple steps:

 * In columns panel you add "Order Date" and "Order Freight" columns.
 * Then you change all element to any the root condition group in query panel. It must look like "...where any of the followings apply".
 * Finally you add two conditions into columns panel:

  1) Product Category is equal to Beverages
  2) Product Category is equal to Seafood

![Query with OR operators](/easyquery/docs/images/query-or-1.gif)

## Query 2

Now imagine we need to add another condition which will be mandatory: we need to list only paid orders. So the final query will have the following structure:

```sql
Order is paid AND
  (Product Category is Beverages OR Seafood)
```

## SQL 2

The SQL statement for this new query will be the following:

```sql
SELECT Ord.OrderDate AS "Order Date", Ord.Freight AS "Order Freight"
FROM ((Orders AS Ord
  INNER JOIN `Order Details` AS OrdDet ON (OrdDet.OrderID = Ord.OrderID ))
  INNER JOIN Products AS Prod ON (OrdDet.ProductID = Prod.ProductID ))
WHERE
(
  Ord.Paid = true AND (
  Prod.CategoryID = 1 OR
  Prod.CategoryID = 8 ) )
```

## EasyQuery 2

With EasyQuery components, it will take one additional step.

1) As in the previous case, you add "Order Date" and "Order Freight" columns.
2) In query panel add one condition: Order Paid is true.
3) Please note that you don't need to change all to any in this case.
4) After that press {+} button in the first row to add a new group of conditions after the first condition.
5) New condition group will automatically take any linking.
6) EasyQuery will automatically add a condition in the new group. Change the attribute in that condition to "Product Category" and select "Beverages" in the right part of the condition.
7) Add one more condition into the group. Use (+) button in the group row (but not in root row!) to do it. Select "Product Category" as an attribute and "Seafood" as a value for this condition.
  
Product Category is equal to Seafood

Finally you should see something like the following:

![Another query with OR operators](/easyquery/docs/images/query-or-2.gif)
