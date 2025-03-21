---
title: Using parameters in query conditions
slug: easyquery/docs/how-to/parameters-in-query-conditions
---


EasyQuery has different scenarios how to create a parameterized query. Here you can find an explanation how to work with parameters:

## 1. BuildParamSQL

You can generate parameterized query using `BuildParamSQL` instead of standard `BuildSQL`.

Example:

```
var builder = new SqlQueryBuilder();
builder.BuildParamSQL();
```

There is also a possibility to get the list of all parameters (with their names and types) after calling `BuilderParamSQL` method using `Params` property of DbQuery class.

Here is an example of code which calls `BuildParamSQL` method and then navigates through all generated parameters:

```
var builder = new SqlQueryBuilder();
builder.BuildParamSQL();
foreach (var param in query.Params) {
    var paramId = param.ID; //parameter's name
    var paramType = param.DataType; //parameter's type
}
```

## 2. allowParameterization 

This method can be used with EasyQuery for ASP.NET edition and only on MVC projects. Since version 3.8.0 there is a new option in QueryPanel widget: `allowParameterization`. 

The default value for this option is 'false'. If it's set to 'true' you will see a new button in each condition which allows marking that condition as 'parameterized' - so all values in it will appear in result SQL as parameters.

To see how it works you can just add the following line in `easyQuerySettings` variable definition in our EqMvcDemoDB sample project:

```
window.easyQuerySettings = {
    serviceUrl:  "/EasyQuery",
     .     .     .     .     .     .            
    queryPanel: {
        allowParameterization: true, //<-----------------add this line
        .     .     .     .     .    .    .
     }
}
```