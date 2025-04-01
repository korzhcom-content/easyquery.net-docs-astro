---
title: Getting started for ASP.NET WebForms
slug: getting-started/version-3-x/asp-net-webforms
sidebar:
  order: 100
---

> See also: [Getting started for ASP.NET MVC](///easyquery/docs/getting-started/asp-net-mvc)

&nbsp;             

To apply [EasyQuery ASP.NET](///easyquery#asp-net/) to your WebForms application please perform the following steps:

## 1. Create Data Model

Open “EasyQuery ASP.NET” folder on your desktop and run Data Model Editor (DME) application in wizard mode (“Create Data Model” program icon). Follow the instructions to create a new data model for your database.
You will need to add database tables (select the ones you allow your users to use in their queries), links between them and the entities with their attributes (usually they are added automatically when you add tables).
When the model is created - save it to App_Data folder of your project (let name it MyModel.xml for example).
For more information about data model and more detailed instructions on how to create it - please read:

1. [About data model](//fundamentals/data-model)
2. [Creating new data model using Data Model Editor](//getting-started/new-data-model)

## 2. Add the references to EasyQuery libraries

Then open your project and add the following assemblies to its References list:

  - Korzh.EasyQuery.NET40
  - Korzh.EasyQuery.Db.NET40
  - Korzh.EasyQuery.WebControls.NET40
  - Korzh.Utils.Db.NET40 (only if you need “Export to CSV/Excel” functionality in your project)

Of course .NET40 suffix here is for .NET 4.0 assemblies. Use assemblies with the suffix which corresponds to the version of target .NET framework for your project ((e.g. .NET35 - for .NET 3.5 or .NET45 - for .NET 4.5).

## 3. Initialize DbModel and DbQuery objects

To avoid creating of DbQuery and DbModel object on each post back we suggest to place them into Session variable.

Example: 

```
using Korzh.EasyQuery;
using Korzh.EasyQuery.Db;
using Korzh.EasyQuery.WebControls;
 
.  .  .  .  .  .  .  .  .  .
 
   protected void Page_Load(Object sender, EventArgs e) 
   { 
      DbQuery query = (DbQuery)Session["QUERY"];
      if (query == null) {  
          //we didn't open this page before
 
          string modelPath = this.MapPath("~/App_Data/MyModel.xml");
 
          Korzh.EasyQuery.DataModel model = new Korzh.EasyQuery.Db.DbModel(); 
          model.LoadFromFile(modelPath); 
 
          query = new Korzh.EasyQuery.Db.DbQuery(); 
          query.Model = model;
 
          query.Formats.SetDefaultFormats(FormatType.MsSqlServer); 
          Session["QUERY"] = query; 
      }
 
      .  .  .  .  .  .  .  .  .  .
   } 
```

## 4. Add QueryPanel and QueryColumnsPanel controls

Drop QueryPanel and QueryColumnsPanel controls on a web form. 

> NB:
You will need to add these controls to a Visual Studio toolbox if you have not done that before. 
To do it - just right-click on the Toolbox panel and select "Choose items..." menu. 
Then find and check all items with Korzh.EasyQuery.WebControls namespace in the dialog that appears (use sorting by namespaces to simplify this task).

You can also add EntitiesPanel and SortColumnsPanel controls as well but it's optional.

After that link, these controls to the DbQuery object created during the previous step. Here how your Page_Load method may look like after this step. 

```
 protected void Page_Load(Object sender, EventArgs e) 
   { 
      .  .  .  .  .  .  .  .  .  .  .
      //the code you've added on step 3
      .  .  .  .  .  .  .  .  .  .  .
 
      QueryPanel1.Query = query;
      QueryColumnsPanel1.Query = QueryPanel1.Query;
 
      //Only if you have placed EntitiesPanel and SortColumnsPanel on your form  
      EntitiesPanel1.Query = QueryPanel1.Query;
      SortColumnsPanel1.Query = QueryPanel1.Query;
   } 
```

Now the query panel is placed on your web page and ready for work. You can run your web page and try to add query conditions and result columns.

## 5. Add code which generates and executes SQL statement

When it's necessary to generate an SQL statement - create an instance of SqlQueryBuilder class and call its BuildSQL() method. Usually, this method is called on some user action (e.g. pressing “Build” button). After that read generated SQL from Result.SQL property of a SqlQueryBuild object.

Finally, you can pass the generated SQL statement to some DataSource (see ResultDS object below) for execution or use it in any other possible way.

Example: 

```
protected void BuildBtn_Click(object sender, EventArgs e) { 
    SqlQueryBuilder builder = new SqlQueryBuilder(QueryPanel1.Query as DbQuery);
    if (builder.CanBuild) {
        builder.BuildSQL();
        ResultDS.SelectCommand = builder.Result.SQL;  
        ResultDS.Select(DataSourceSelectArguments.Empty); //executes the query and shows result. 
    }
} 
```

Here is an example of `ResultDS` definition:

``` 
 <asp:AccessDataSource ID="ResultDS" runat="server" DataFile="~/App_Data/NWind.mdb"></asp:AccessDataSource>
```

Please note that the actual type of ResultDS component in your project will depend on database type you are using.
