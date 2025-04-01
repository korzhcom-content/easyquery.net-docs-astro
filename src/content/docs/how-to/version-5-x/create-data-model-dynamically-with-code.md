---
title: Creating data model dynamically with code
slug: how-to/version-5-x/create-data-model-dynamically-with-code
sidebar:
  order: 100
---

[Data Model](///easyquery/docs/fundamentals/data-model) object is an essential part of EasyQuery framework. Usually it's built automatically by DB metadata or DbContext object (in case if Entity Framework (Core) is used). It's also possible to define it "manually" using Data Model Editor utility. All these approaches are described in [Working with data models in EasyQuery](///easyquery/docs/getting-started/working-with-data-model) article.

However, sometimes you need to add some entities, entity attributes or operators to the existing model or to fill it from scratch using DB metadata information got from another source. 

In these cases, you can use EasyQuery API to build the model dynamically. To accomplish this task, we need to perform several steps in a consecutive order:

1. Firstly, we add the operators that can be used in query conditions. We can add the default list of operators by calling  `AddDefaultOperators` method of `DataModel` class 

2. Secondly, we should add the database tables and the links between those tables.

3. Finally, we add entities and entity attributes. Each entity attribute should be connected to one or more tables we added before.

Here is an example of creatin a small data model: two tables (Customers and Orders) with one link between them, 2 entities (Customer and Order correpondingly) and a few attributes in each entity.

Below we suppose that we already have a correctly initialized `DbModel` object (referenced as `model`).

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

var attr = model.AddEntityAttr(new DbEntityAttrDescriptor(ent1, "CompanyName", table1) { 
    Caption = "Company Name",
    DataType = DataType.String,
    Size = 50
});

attr = model.AddEntityAttr(new DbEntityAttrDescriptor(ent1, "Address", table1) {
    Caption = "Company Address",
    DataType = DataType.String,
    Size = 80
});


attr = model.AddEntityAttr(new DbEntityAttrDescriptor(ent1, "CountryID", table1) {
    Caption = "Country",
    DataType = DataType.String,
    Size = 3
});

//Assign SQLLIST value editor for Country attribute
string sql = "SELECT CountryID, CountryName FROM Countries";
SqlListValueEditor sqlValueEditor = new SqlListValueEditor("sql_list", sql);
attr.DefaultEditor = sqlValueEditor;


attr = model.AddEntityAttr(new DbEntityAttrDescriptor(ent1, EntityAttrKind.Virtual, 
                                            "CountryID + ' ' + RegionCode", table1) 
{
    Caption = "Full Region Code",
    DataType = DataType.String,
    Size = 40
});          

//Assign CUSTOMLIST value editor for Region attribute
CustomListValueEditor regionValueEditor = new CustomListValueEditor("region_list", "RegionList");
attr.DefaultEditor = regionValueEditor;

attr = model.AddEntityAttr(new DbEntityAttrDescriptor(ent2, "OrderDate", table2) {
    Caption = "Order Date",
    DataType = DataType.Date
});

// we can also use DbEntityAttrDescriptor constructor without parameters
attr = model.AddEntityAttr(new DbEntityAttrDescriptor {
    Parent = ent2, 
    Expression = "Freight",
    Table1 = table2,
    Caption = "Order Freight",
    DataType = DataType.Currency
});

attr = model.AddEntityAttr(new DbEntityAttrDescriptor {
    Parent = ent2,
    Expression = "ShipAddress", 
    Table1 = table2,
    Caption = "Shipping Address",
    DataType = DataType.String
});

//If we have a WinForms or WPF project 
//it's better to refresh visual controls
//(just remove the following two lines if it a ASP.NET (Core) project)
QPanel.UpdateModelInfo();
QCPanel.UpdateModelInfo();
```


Now if we fill our data model correctly, we can try to bulid a query and generate the SQL statement that represets it:

```
var query = model.CreateQuery();

//create a simple condition: Customer Address contains "str"
query.Root.AddSimpleCondition("Cust.Address", "Contains", "str");

//build query to check if it works
SqlQueryBuilder sqlBuilder = new SqlQueryBuilder(query);
sqlBuilder.Formats.SetDefaultFormats(FormatType.SqlServer);
sqlBuilder.BuildSQL();
var sqlStatement = sqlBuilder.Result.SQL;

```
