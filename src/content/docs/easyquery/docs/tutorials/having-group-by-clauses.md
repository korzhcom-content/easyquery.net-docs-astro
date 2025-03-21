---
title: HAVING and GROUP BY clauses in generated query
slug: easyquery/docs/tutorials/having-group-by-clauses
---


1) When a user inserts some aggregate column into the query - EasyQuery automatically adds `GROUP BY` clause into the result SQL statement. To add an aggregate column - just insert a column into `QueryColumnsPanel` as usual, then click on the button near the newly added column and select “Aggregate” in the menu that appears.

2) To add `HAVING` clause into the resulting query you can do the following:
  
* Add special virtual attribute into your data model with expression `“Max(TableName.ExamDate)”`.
* Mark this new attribute as “Aggregate”.
* Assign to this attribute some operators (equals, less than, more than, etc.).
* Save your model.

Now when user add some condition with this new attribute - the condition will go into `HAVING` clause in the result SQL statement;