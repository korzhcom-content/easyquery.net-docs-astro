---
title: Connect to your database
slug: getting-started/from-sample-to-your-own-project/connect-to-your-database
---

:::note
All our sample projects work with Northwind demo database either via SQL Server or SQLite connection.
:::

Obviously, to test EasyQuery you may want to connect that sample to your own database and try build queries and reports against the data stored there.

There are 2 simple steps to achieve this goal:

## Step 1. Change the DbConnection

At first step we just need to change the database connection used by EasyQuery components.

This can be done in EasyQuery's initialization section (it’s inside `app.UseEasyQuery(...)` call for ASP.NET Core or in `ConfigureEasyQueryOptions` method of your API controller in ASP.NET projects):

```csharp
//it's better to take it from the configuration
options.ConnectionString = “Your connection string”; 
options.UseDbConnection<YourConnectionType>();
```

For example, in case of Postgre SQL this piece of code will look like:

```scharp
options.ConnectionString = Configuration.GetConnectionString("MyDatabase");
options.UseDbConnection<NpgsqlConnection>();
```

## Step 2. Change the data model

As you probably know, EasyQuery takes all meta-data from a special repository called “data model” (if not, please read [How it works](/fundamentals/how-it-works) and [Working with data models in EasyQuery](/tutorials/working-with-data-model) articles first).

In our sample projects we show different approaches of getting a data model. In some scenarios it's loaded from a pre-defined XML file created with Data Model Editor (DME) tool. In others, we get it directly from a DbContext or from database's meta-data. All these scenarios are described in great detail in [Working with data models in EasyQuery](/tutorials/working-with-data-model) article.

Whatever way you use you will need to change the model from our sample to your own data model.

So, there are 3 posible options:

### Option 1. Data model is stored as XML or JSON file

In this case you will need:

+ To [create your own data model](/tutorials/working-with-data-model) using DME
+ Place the created file to App_Data folder of your project. Let’s name that file MyModel.xml for example.
+ In ASP.NET (not Core) project you will need to include MyModel.xml into your project and set the “Build action” for that file to “Content” (otherwise it will not be included on project publishing).
+ Add the following piece of code to EasyQuery initialization section (it’s inside `app.UseEasyQuery(...)` call for ASP.NET Core or in `ConfigureEasyQueryOptions` method of your API controller in ASP.NET projects):

```csharp
options.UseDbModelLoader(_ => new FileModelLoader(“App_Data”));
```

### Option 2. Data model is taken from a DbContext

Here you just need to replace the DbContext from our sample with your own DbContext in UseDbContext call.

For ASP.NET Core:
```csharp
app.UseEasyQuery(options => {
     ...
     options.UseDbContext<YourDbContextClass>();
});
```

For ASP.NET:
```csharp
protected override void ConfigureEasyQueryOptions(EasyQueryOptions options)
{
    ...
    var dbContext = new YourDbContextClass();
    options.UseDbContext(dbContext);
}
```

### Option 3: Data model is taken directly from DB meta-data

In this case you just need to setup your DbConnection (see the first step) and use the `DbConnectionModelLoader` class:

```csharp
options.ConnectionString = “Your connection string”;
options.UseDbConnection<SqlConnection>();
options.UseDbConnectionModelLoader();
```

:::note
Please note that both UseDbContext and UseDbConnectionModelLoader methods can take an additional parameter (a delegate) that allows you to configure different loader’s options (for example, you can filter some tables).
:::

So, after finishing this step you will got a working sample project that uses your data model and connects to your database instead the demo DB used in the sample originally.

## Next step: copying the code from sample to your project

If you are satisifed of how the sample project works with your data you can copy the code and views that provide EasyQuery functionality to your own solution.

Here is [an article that describe how to do it](getting-started/from-sample-to-your-own-project/copying-the-easyquerys-code-from-sample-to-your-project).