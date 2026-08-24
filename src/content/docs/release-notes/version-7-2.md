---
title: Version 7.2 release notes
slug: release-notes/version-7-2
sidebar:
  order: 4
---

Version 7.2 is a minor update of EasyQuery.NET and EasyQuery.JS. 

Here is the list of the most important changes we want to focus your attention on.

### 1. .NET 6 support

In the previous version EntityFramework Core EasyQuery packages (Korzh.EasyQuery.EntityFrameworkCore.Relational and Korzh.EasyQuery.EntityFrameworkCore.Identity) didn't include .NET 6 in the list of target frameworks. Now they all target .NET 6 together with .NET 5, .NET Standard 2.0 and 2.1.

### 2. New date/time operators

From now on we add a bunch of new operators to any new data model. There 2 groups of them:

 * "Last N something" operators: `Last N hours`, `Last N days`, `Last N months` and `Last N years`.

 * `before a specia date` and `after a special date` operators. They work like usual `before` and `after` but the date on the right side can be chosen from a list of "special" dates like "Today", "First day of the month" or "First day of the year". These operators are very useful in scenarios with scheduled queries because the particular value of a special date is calculated at the moment when the query is executed.

### 3. AddDays, AddMonths, AddYears functions

It's possible now to use this functions in operator expressions. Here is an example for `Last N days` operator mentioned earlier:

```
{expr1} >= @{AddDays(${{Today}}, -{expr2})}@
```

Each function has the following template `@{FuncName(parameter1, parameter2)}@`. As a parameter you can use a condition expression like `{expr1}`, `{expr2}`, etc or a macro value (`${{Today}}`, `${{FirstDayOfMonth}}`, etc).


### 4. IEasyQueryConfigurator interface

Now you can move all configuration for EasyQuery middleware to a special class that implements this interface, register this class in DI and all EasyQuery settings will be applied automatically when needed. It's very useful when you have several EasyQuery endpoints with just a slightly different settings or you need to use the same EasyQuery configuration both in the middleware and some background service. 

Here is a quick guide on how to set up EasyQuery with IEasyQueryConfigurator:


Step 1: On DI setup:

```
services.AddEasyQuery<MyEasyQueryConfigurator>()
        .UseSqlManager()
        .AddDefaultExporters()
        .RegisterDbGate<SqlServerGate>();
```

Step 2: On EasyQuery middleware setup:

```
app.MapEasyQuery(); //that's right, no options here anymore
```

For applications that still use Startup.cs:

```
app.UseEndpoints(endpoints => {
    endpoints.MapEasyQuery();
    .    .    .    .
}
```

Step 3: MyEasyQueryConfigurator class:

```
public class MyEasyQueryConfigurator : IEasyQueryConfigurator
{
    private readonly IConfiguration _configuration;

    public AdvancedSearchConfigurator(IConfiguration configuration) 
    {
        _configuration = configuration;
    }

    public void Configure(EasyQueryOptions options) 
    {
        options.UseTimezoneOffset = true;
        options.ConnectionString = _configuration.GetConnectionString("DefaultConnection");
        options.UseDbConnection<SqlConnection>();

        options.UseDbConnectionModelLoader(loaderOptions => {
            .   .   .   .
        });

        options.UseQueryStore(_ => new FileQueryStore("App_Data"));

    }
}
```
