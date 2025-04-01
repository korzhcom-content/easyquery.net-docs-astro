---
title: Build query by code on the client-side
slug: how-to/build-query-by-code-on-clientside
sidebar:
  order: 100
---

When you work with EasyQuery.JS to build a project (for example MVC-project) you work with two Query objects. First is on the server-side (it’s accessible by `GetQuery` method of `EqServiceProviderDb`) and other - on the client-side (you can get it using `EQ.client.getQuery()` function). 

Sometimes it’s necessary to add query columns and/or conditions by code. Here is [an article](//////////////how-to/add-columns-and-conditions-by-code) which describes how to do it with server-side query object. 

And here is an example of JavaScript code which adds a condition and two columns (one of them an aggregate one) into current query on client-side:

```js
var query = EQ.client.getQuery();
query.addSimpleCondition({ attr: "Customers.CompanyName", operator: "StartsWith", value: "A" });

query.addColumn({
  "caption": "Country",
  "sorting": "Ascending",
  "expr": {
  "typeName": "ENTATTR",
  "id": "Customers.Country"
  }
});

query.addColumn({
  "caption": "Orders total",
  "sorting": "None",
  "expr": {
  "func": "SUM",
  "typeName": "AGGRFUNC",
  "argument": {
  "typeName": "ENTATTR",
  "id": "Orders.Freight"
  }

  }
});
```
