---
title: How to show descriptive texts in some column instead of numeric values
slug: how-to/descriptive-texts-in-column-instead-numeric-values
sidebar:
  order: 29
---

It's quite often you have some numeric field in your database table and the numbers stored there have some special meanings.
For example, your Status field and possible values for that field can be: 1 - New, 2 - Reviewed, 3 - In Progress, 4 - Resolved, 5 - Closed

For condition section, you can define a [value editor](/easyquery/docs/fundamentals/about-data-editors) which will show the list of available values as those descriptive meanings (New, Reviewed, ...).

However, when a user adds that field into Columns section of query - it will get only numeric values in a result. 
To get those descriptive meanings instead of numeric values, you need to define a virtual attribute with the expression like `CASE Status WHEN 1 THEN 'New' WHEN 2 ...` and then use that new attribute as a column in your queries.
You can set UseInResult to false for the first attribute (so make it not visible for columns panel) and set UseInConditions = false for the second (virtual) one - so it will not be able to use it in conditions.
Both attributes can have the same caption, so your users will consider them as one.

Here is more detailed description how to achieve needed result:

1) Run Data Model Editor and open your model there.

2) Go to "Entities" tab and select the entity where you would like to see new attribute (most probably it's the same entity where your ID attribute is placed).

3) Right-click on it and select "Add virtual attribute".

4) Set Caption property of new attribute to some user-friendly name (e.g. "Status")

5) Set expression of new attribute to something like 

  CASE Tickets.Status WHEN 1 THEN 'New' WHEN 2 THEN 'Reviewed' WHEN 3 THEN 'In Progress' WHEN 4 THEN 'Resolved' WHEN 5 THEN 'Closed' END

(Here we supposed that Status field belongs to Tickets table). 

6) Turn on "Use In Result" option and turn off "Use in conditions".

7) Save your model. 


Now when user adds new Status virtual attribute as a column - then he can see a descriptive meanings in result set for this column instead of numeric values.
