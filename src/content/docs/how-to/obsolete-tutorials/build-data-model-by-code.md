---
title: Building data model dynamically using code (version 3.x)
slug: how-to/obsolete-tutorials/build-data-model-by-code
sidebar:
  order: 100
---

To accomplish the described task, we need to perform several steps in consecutive order. First, we should add the tables our model will be based on and links between those tables. Then we add entities and attributes and connect our attributes to the tables we added before.

In result of the execution of the code below, we will get a data model which consists of two tables (Customers and Orders), two entities which correspond to these tables and few attributes for each entity.

Below we suppose that we already have correctly initialized `DbModel` and `DbQuery` objects (referenced as “model” and “query” correspondingly).

```c#
  //clear current model
  model.Clear();
 
  //add default operators
  model.AddDefaultOperators();
 
  //add two tables
  DbTable table1 = new DbTable();
  table1.Name = "Customers";
  table1.Alias = "Cust";
 
  DbTable table2 = new DbTable();
  table2.Name = "Orders";
  table2.Alias = "Ord";
  model.Tables.Add(table1);
  model.Tables.Add(table2);
 
  //then we add a link between our tables
  TableLink link1 = new TableLink();
  link1.Table1 = table1;
  link1.Table2 = table2;
 
  //add a condition of linking (Cust.CustNo = Ord.CustNo)
  link1.AddCondition(LinkCondType.FieldField, "CustNo", "CustNo", "=");
  model.Links.Add(link1);
 
 
  //now we proceed with adding entities and their attributes
  Entity ent1 = model.CreateEntity();
  ent1.Name = "Customer";
 
  Entity ent2 = model.CreateEntity();
  ent2.Name = "Order";
 
  model.EntityRoot.SubEntities.Add(ent1);
  model.EntityRoot.SubEntities.Add(ent2);
 
  DbEntityAttr attr = new DbEntityAttr();
  attr.Caption = "Company Name";
  attr.Tables.Add(table1);
  attr.Expr = "CompanyName";
  attr.DataType = DataType.String;
  attr.Size = 50;
  attr.FillOperatorsWithDefaults(model);
  model.AssignEntityAttrID(attr);
  ent1.Attributes.Add(attr);
 
  attr = new DbEntityAttr();
  attr.Caption = "Company Address";
  attr.Tables.Add(table1);
  attr.Expr = "Address";
  attr.DataType = DataType.String;
  attr.Size = 80;
  attr.FillOperatorsWithDefaults(model);
  model.AssignEntityAttrID(attr);
  ent1.Attributes.Add(attr);
 
  attr = new DbEntityAttr();
  attr.Caption = "Country";
  attr.Tables.Add(table1);
  attr.Expr = "CountryID";
  attr.DataType = DataType.String;
  attr.Size = 3;
 
  //Assign SQLLIST value editor for Country attribute
  SqlListValueEditor sqlValueEditor = new SqlListValueEditor();
  sqlValueEditor.SQL = "SELECT CountryID, CountryName FROM Countries";
  attr.DefaultEditor = sqlValueEditor;
 
  attr.FillOperatorsWithDefaults(model);
  model.AssignEntityAttrID(attr);
  ent1.Attributes.Add(attr);
 
  attr = new DbEntityAttr();
  attr.Kind = EntAttrKind.Virtual;
  attr.Caption = "Full Region Code";
  attr.Tables.Add(table1);
  attr.UseInConditions = true;
  attr.Expr = "CountryID + ' ' + RegionCode";
  attr.Size = 40;
  attr.DataType = DataType.String;
 
  //Assign CUSTOMLIST value editor for Region attribute
  CustomListValueEditor regionValueEditor = new CustomListValueEditor();
  regionValueEditor.ListName = "RegionList";
  attr.DefaultEditor = regionValueEditor;
 
  attr.FillOperatorsWithDefaults(model);
  model.AssignEntityAttrID(attr);
  ent1.Attributes.Add(attr);
 
 
  attr = new DbEntityAttr();
  attr.Caption = "Order Date";
  attr.Tables.Add(table2);
  attr.Expr = "OrderDate";
  attr.DataType = DataType.Date;
  attr.FillOperatorsWithDefaults(model);
  model.AssignEntityAttrID(attr);
  ent2.Attributes.Add(attr);
 
  attr = new DbEntityAttr();
  attr.Caption = "Order Freight";
  attr.Tables.Add(table2);
  attr.Expr = "Freight";
  attr.DataType = DataType.Currency;
  attr.FillOperatorsWithDefaults(model);
  model.AssignEntityAttrID(attr);
  ent2.Attributes.Add(attr);
 
  attr = new DbEntityAttr();
  attr.Caption = "Shipping Address";
  attr.Tables.Add(table2);
  attr.Expr = "ShipAddress";
  attr.DataType = DataType.String;
  attr.FillOperatorsWithDefaults(model);
  model.AssignEntityAttrID(attr);
  ent2.Attributes.Add(attr);
 
 
  //Refresh all model-related information in visual controls
  QPanel.UpdateModelInfo();
  QCPanel.UpdateModelInfo();
 
 
  //Finally, try to build some query to check if our model is a correct
  query.Clear();
 
  //create one simple condition: Customer Address contains "str"
 
  //here we create condition object
  attr = (DbEntityAttr)model.EntityRoot.FindAttribute(EntityAttrProp.Expression, "Cust.Address");
  SimpleCondition cond = query.CreateSimpleCondition(model);
 
  cond = query.CreateSimpleCondition(model);
  cond.BaseExpr = new DbEntityAttrExpr(model, attr);
  cond.Operator = model.Operators.FindByID("Contains");
  cond.SetValueExpr(1, new ConstExpr(DataType.String, "str"));
  query.Root.Conditions.Add(cond);
 
  //build query to check if it works
  SqlQueryBuilder sqlBuilder = new SqlQueryBuilder(query);
  sqlBuilder.BuildSQL();
  MessageBox.Show(sqlBuilder.Result.SQL);
```
