---
title: Add a new aggregate function
slug: how-to/add-aggregate-function
---

## 1. Problem Overview

EasyQuery supports several aggregate functions (like SUM, COUNT, AVG, etc.) out-of-the-box. 
However, sometimes you may need to add some other aggregate function to your model and make it appear in visual controls/widget.

## 2. Solution

All aggregate functions available for end-users are stored in 

`AggrFunctions` list of DbModel class.

So, all you need to do is to add a new function to that list. Each function is an object of `AggrFunction` class and has the following main properties:

* **Id** - a unique identifier.

* **Caption** - a user-friendly name of the function which represents it in the drop-down list when the user selects the aggregate function.

* **SqlExpr** - defines the way how a function is used in result SQL statement. We can use `{expr}` variable to specify the function’s argument

* **DisplayFormat** - defines how the function is represented in columns row in ColumnsPanel control/widget. That part in double square brackets [[ … ]] is clickable - it will allow selecting another function (e.g. change it from SUM to COUNT).

## 3. Example

Here is an example of adding new aggregate function into model:

```c#
model.AggrFunctions.Add(new AggrFunction("MyFunc", "MyAggregate Function", "MYFUNC({expr1})", "[[My function]] of {attr1}"));
```