---
title: Using EqMvcDemoEF sample with your own DB context
slug: getting-started/version-3-x/sample-mvc-entity-framework-new-dbcontext
sidebar:
  order: 5
---

Demo version of EasyQuery contains EqMvcDemoEF sample project which demonstrates how to use our library with Entity Framework (code first approach). This article contains a brief instruction how to modify that sample project to make it work with your own context class (instead of NorthwindContext class used in our sample).

## 1. Add your own DbContext class into the project

Current DBContext is placed in `Models\TestContext.cs` file. Remove that file from the project and add your own context class. Don't forget to change the namespace to `Korzh.EasyQuery.Mvc.Demo.Models` or add `using` for your own namespace into `EasyQueryController.cs` Let's suppose your context class is named `MyContext`

## 2. Modify Web.Config

EqMvcDemoEF uses SQL Server CE provider. If you plan to use another database type - you need to make modifications in `entityFramework` section of `Web.Config` file.

## 3. Changes EasyQueryController class

Finally, you need to modify the constructor of `EasyQueryController` class to make it work with your context instead of Northwind. Simply replace all inclusions of `NorthwindContext` with the name of your context class.

Here is how the modified constructor may look like (we guessed your context class is called `MyContext`): 

```
public EasyQueryController() {
    eqService = new EqServiceProviderDb();
    eqService.ModelLoader = (model, modelName) => {
        model.Clear();
        model.LoadFromDBContext(typeof(MyContext), DbContextOptions.IncludeComplexTypesInParentEntity);
 
    };
 
    eqService.Paging.Enabled = true;
 
    eqService.SessionGetter = key => Session[key];
    eqService.SessionSetter = (key, value) => Session[key] = value;
 
 
 
    var context = new MyContext();
    context.Database.Initialize(false);
 
    //For Entity SQL use the following settings for connection and formats
    var connection = ((System.Data.Entity.Infrastructure.IObjectContextAdapter)context).ObjectContext.Connection;
    eqService.Formats.SetDefaultFormats(FormatType.EntitySql);
 
    eqService.Connection = connection;
}
```
