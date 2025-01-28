---
title: Create a query with sub-query by code
slug: how-to/create-a-query-with-sub-query
---


Here is an example:

```c#
DbEntityAttr attr = (DbEntityAttr)model.EntityRoot.FindAttribute(EntityAttrProp.Expression, "Cust.Country");
 
//first we create a Query object that will represent a sub-query
Query subQuery = query.CreateSubQuery();
 
//add one column to it
DbColumn col1 = new DbColumn();
col1.Expr = new DbEntityAttrExpr(model, attr);
subQuery.Columns.Add(col1);
 
//and one condition
SimpleCondition subCond = subQuery.CreateSimpleCondition(model);
subCond = query.CreateSimpleCondition(model);
subCond.BaseExpr = new DbEntityAttrExpr(model, attr);
subCond.Operator = model.Operators.FindByID("StartsWith");
subCond.SetValueExpr(1, new ConstExpr(Korzh.EasyQuery.DataType.String, "U"));
subQuery.Root.Conditions.Add(subCond);
 
 
query.Clear();
 
//Then we add one condition with "in sub query" operator to the main query 
SimpleCondition cond = query.CreateSimpleCondition(model);
 
cond.BaseExpr = new DbEntityAttrExpr(model, attr);
cond.Operator = model.Operators.FindByID("InSubQuery");
 
//Second expression in condition is SubQueryExpr with an XML representation of sub query as a value
SubQueryExpr subQueryExpr = new SubQueryExpr(model);
subQueryExpr.Value = subQuery.SaveToString();
cond.SetValueExpr(1, subQueryExpr);
 
query.Root.Conditions.Add(cond);
```