---
title: Query with a subquery
slug: tutorials/common-sql-queries/query-with-a-subquery
sidebar:
  order: 100
---

<div class="row">
  <div class="col-md-12 c-content-media-1 krh-blogpost">
  
<p>Sometimes the query conditions are so complex that you can’t express them using plain WHERE clause with AND, OR and NOT. In this case, you need to use subqueries.</p>

<p>For instance, let’s calculate <b>total lifetime count of paid orders for those countries that have at least one paid order made in September of 2012.</b></p>

<p>Expected SQL:</p>

<pre><code class="sql">SELECT Cust.Country AS [Customer Country], COUNT(Ord.OrderID) AS [Order OrderID Count] 
FROM (Customers AS Cust
  RIGHT OUTER JOIN Orders AS Ord ON (Ord.CustomerID = Cust.CustomerID ))
WHERE
(
  Cust.Country IN
  (SELECT CustSQ1.Country 
  FROM (Customers AS CustSQ1
  RIGHT OUTER JOIN Orders AS OrdSQ1 ON (OrdSQ1.CustomerID = CustSQ1.CustomerID ))
  WHERE
  (
  OrdSQ1.OrderDate BETWEEN #2012-09-01# AND #2012-09-30# 
  AND OrdSQ1.Paid = true
  )
  ) 
  AND Ord.Paid = true
)
GROUP BY Cust.Country</code></pre>
<br>
<p>Here “those countries that have at least one paid order made in September of 2012” condition is implemented as sub-query.</p>

<p>First, add columns - click on “[Add column]” link, select “Customer | Country” menu item, then - [Add column] -> “Order | OrderID”.<br>
Now aggregate the OrderID column - click the Function button on the right side of the column and select “Count” menu item.</p>

<p>Add a condition with a subquery. Click “Add Condition”, select “Customer | Country” from the menu. Then change the operator - click on “is equal to” link and select “in subquery”. Then click “Edit subquery” link.</p>

<p>The sub-query editing dialog appears.</p>

<p>You need to select the single attribute of the same type as our “Customer | Country” attribute.</p>

<p>The “Conditions” area have the same user interface as regular EasyQuery. Here you add the following conditions:
</p>
<p>“Order | Date” -> select “custom period” operator -> set start and end date via date picker</p>

<p>“Order | Paid” -> select “is true”.</p>

<p>Click “OK” button to submit the sub-query.</p>

<p>At last, add “Order | Paid is true” condition to the main query.</p>

![EasyQuery example: using sub-query](/easyquery/docs/images/subquery.gif)

  </div>
 </div>
