---
title: Navigate through query conditions
slug: how-to/run-through-query-conditions
sidebar:
  order: 6
---

Sometimes you need to run through all conditions in your query to perform some operation for each condition or to find a particular one. 
Starting from version 5.4 of EasyQuery.NET you can use `Scan` function for that: 

```c#
    query.Root.Scan(condition => {
        //process only simple conditions (not groups)
	    if (!condition.IsGroup) {
		    //getting the "base" expression and attribute (the left part of the condition)
            var baseExpr = condition.BaseExpr;
            var baseAttr = condition.BaseAttr;

           //here we run through all other expressions in this condition (except the first one) and check their values
            for (int i = 1; i < condition.Expressions.Count; i++) {
                var expr = condition.Expressions[i];

				//special processing for sub-queries
                if (expr is QueryExpr queryExpr) {
                    queryExpr.Query.Root.Scan(subCond => {
                        if (!subCond.IsGroup) {
                            //do whatever you need with this sub-condition
                        }
                    });
                }
                else {
				    //here how we get the value for any other expression (except the sub-query)
                    var value = expr.Value;
                }
            }
        }
    });
```
