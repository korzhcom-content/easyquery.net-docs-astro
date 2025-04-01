---
title: Simple query over one table
slug: tutorials/common-sql-queries/query-over-one-table
sidebar:
  order: 100
---

Let’s suppose we need just a list of customers from one particular country (e.g. USA). Regarding SQL this query will look like:

```sql
SELECT * 
FROM Customers
WHERE Country = 'USA'
```

With EasyQuery this simple query becomes even simpler. Just click “Add new condition” link, select Customer | Country in a menu. Then click on the third element in new condition ([Select value]) and choose the USA from the drop-down list that appears. Check SQL statement that appeared in the bottom-left panel and click on “Execute” button to see the result of your query.

Here is EasyQuery example of simple SQL query over one table:

![Simple query over one table](https://files.aistant.com/korzh/easyquery-dotnet/images/query-example-01.png)
