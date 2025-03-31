---
title: Adding columns and conditions with code
slug: how-to/add-columns-conditions-with-code
---

Here we suppose that our `Query` object is referenced as **query**


```csharp
private void AddColumnsAndConditionsByCode() 
{ 
    query.Clear();

    //add a simple column
    query.AddColumn(new ColumnDescriptor("Customers.CompanyName") {
       Caption = "Customer",
       Sorting = SortDirection.Ascending
    });
	
    //add an aggregate column
	query.AddColumn(new ColumnDescriptor("Orders.Freight", "SUM") {
       Caption = "Total Freight"
    });

    //add a simple condition
    query.Root.AddSimpleCondition("Customers.Country", "Equals", "USA");

    //here is one more example: how to add a group of conditions
    var group = query.AddConditionGroup();
    group.Linking = Condition.LinkType.Any;
    group.AddSimpleCondition("Customers.City", "Equal", "London");
    group.AddSimpleCondition("Customer.City", "Equal", "NewYork");

    //generate SQL statement
    var builder = new SqlQueryBuilder(query);
    builder.BuildSQL();
    string sql = builder.Result.SQL;
}
```