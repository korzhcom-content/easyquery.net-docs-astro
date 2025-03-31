---
title: Hide some entities and/or attributes
slug: how-to/hide-entities-and-attributes
---

## Problem
Sometimes we need to hide certain entities and/or attributes from data model (for example for security reasons). There are several ways to limit the quantity of entities and attributes shown in Data Model, and here we explain how to implement it.

## Solution #0: Modify your model using Data Model Editor (DME)
In case your model is stored in some XML file you can just open it in DME and turn off `Use in result` and `Use in conditions` options for the entities and/or attributes you would like to hide. Here are the instructions:
 - Run DME
 - Open your model's XML file
 - Go to "Entities" tab
 - Select entity or attribute your would like to hide in the "Entities" tree view 
 - Uncheck `Use in result` and `Use in conditions` checkboxes for selected item in the right panel

## Solution #1: `Scan` method in `Entity` class

`Scan` method in `Entity` class works exactly as `RunThroughEntity` function. You can call that method for root entity of your model and pass a delegate which will be called for each sub-entity.

So you model loading code will be equal to the following:

```
model.LoadFromDBContext(YourDbContextObject); //here we can use any other way of model loading of course

model.EntityRoot.Scan(
    entity => {
        if (entity.Name == "User") {
            entity.Hide();
        }
    },
    attr => {
        if (attr.Id == "SomeTable.SomeField") {
            attr.Hide();
        }
});
```

You can use this approach in ASP.NET (Core) solutions as well. Just define a model tuner function on EasyQuery middleware (for ASP.NET Core) or EasyQueryApiController setup:

```
options.UseModelTuner(manager =>  {
    manager.Model.Scan(...);
});
```

## Solution #2: `Eq..` attributes for DbContext classes 

If you load data model right from DbContext, you can just add `EqEntity` and `EqEntityAttr` attributes in from of important class and property definitions. 
Here is an example:

```c#
  [EqEntity(false)]
  public class Customer {

  [EqEntityAttr(false)]
  public string Id { get; set; }
  
  . . . . . . 

```