---
title: Building data model dynamically by information from a DataTable
slug: easyquery/docs/how-to/build-data-model-by-info-from-datatable
---


`DataModel` class has a special method `FillByDataTable()` which you can use to add a table, an entity and its attributes into your data model by some `DataTable` object. You can call it several times to add more tables and entities. After that, you will possibly need to add links between tables.

Here is an example which adds into data model all default operators, two tables (Customers and Orders), corresponding entities and a link between those tables: 

```
 //clear current model
  model.Clear();
 
  //add default operators
  model.AddDefaultOperators();
 
  //create necessary DataTable objects (here we suppose connection is an instance of some DbConnection descendant type)
  DataSet tempDS = new DataSet();
  OleDbDataAdapter custDA = new OleDbDataAdapter("SELECT * FROM CUSTOMERS", DbConnection);
 
  custDA.Fill(tempDS, "Customers");
  DataTable custTable = tempDS.Tables["Customers"];
 
  //add Customer table into data model. Correponding entity is also created (second parameter is true)
  model.FillByDataTable(custTable, true);
 
  OleDbDataAdapter ordDA = new OleDbDataAdapter("SELECT * FROM ORDERS", DbConnection);
 
  ordDA.Fill(tempDS, "Orders");
  DataTable ordTable = tempDS.Tables["Orders"];
 
  //add Orders table into data model.
  model.FillByDataTable(ordTable, true);
 
  //After that we need to add links between those tables:
  TableLink newLink = new TableLink();
  newLink.Table1 = model.Tables.FindByAlias("Customer");
  newLink.Table2 = model.Tables.FindByAlias("Orders");
  newLink.Type = TableLink.LinkType.Inner;
 
  TableLink.Condition newCond = new TableLink.Condition(newLink);
  newCond.Expr1 = "CustNo";
  newCond.Expr2 = "CustNo";
  newCond.Operator = "=";
  newLink.Conditions.Add(newCond);
 
  model.Links.Add(newLink);
```