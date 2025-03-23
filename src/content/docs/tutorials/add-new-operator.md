---
title: Adding a new operator to your data model
slug: tutorials/add-new-operator
---


Each data model contains a lot of default operators. However, sometimes you may need to add a new operator to your model.

Let's suppose we need “within last N days” operator that will be used with date/time fields. It will take a numeric operand (N) and returns true if specified date is within last N days starting from today.

Here we are going to describe how to add this new operator using Data Model Editor (if you store your model in an XML or JSON file) or with a code (for all other cases)

## 1. Using Data Model Editor


### 1.1 Open your model file

Run Data Model Editor utility (DME) and open your model (.xml) file (Model | Open… menu item).

### 1.2 Add a new operator

Go to Operators tab and select “Operators | Add Operator” menu item. New operator with default ID “NewOp” will appear at the bottom of the list of operators. 

![Data Model Editor - add new operator](/easyquery/docs/images/dm-new-operator-01.png)

After that, we need to define all properties for a new operator.

### 1.3 Setting operator's properties

#### ID: "DateWithinLastNDays"

This is mostly an internal property. EasyQuery will use to reference this operator in attributes and query conditions.

#### Caption: "Last N days"

This value will be shown to users in a drop-down list when they select operator

#### Display format: 

```
{expr1} [[is within last]] {expr2} days
```

This field defines how your operator (actually the whole condition with this operator) will look in a condition row in query panel. The part within [[ and ]] will be clickable.

#### Expression: 

```
{expr1} > DATEADD(day, -{expr2}, GETDATE())
```

The most important property for an operator. It defines the result expression which will come into generated SQL statement. {expr1} and {expr2} parts specify the operands. The first operand is always an attribute, second - some value entered by a user.

### Setting the applied types: "Date, DateTime"

Since this operator can be used only with Date and DateTime attributes - we uncheck all options in “Applied types” field except these two.

Here is how Operators tab in DME looks like after all changes described above: 

![Data Model Editor - operator properties](/easyquery/docs/images/dm-new-operator-02.png)

### 1.4 Setting operand's properties

Each operator has one or more operands. By default, all operands have the same kind and data type, but this preset can be changed. In our case, we need the second operand to be numeric (integer if more precisely) data type. To set it - just open “Operands” tab, select “Default operand” item in the list and choose “Int” in “Data type” combo box. All other operand properties let be left with their default values.

N.B.: By default “data type” property has “Auto” value. It means that this operand will have the same type as attribute selected for the left part of the condition. It's useful for operators which can be applied to attributes with different data types (e.g. “is equal to”). 

![Data Model Editor - operand properties](/easyquery/docs/images/dm-new-operator-03.png)

### 1.5 Associate the new operator with attribute(s)

Finally, we need to associate new operator with one or more attributes for which it may be used in query conditions. To do it:

* open “Entities” tab
* select necessary attribute
* open its “Operators” tab
* click on “Add” button, check new operator and click OK.

![Data Model Editor - associate operator with attributes](/easyquery/docs/images/dm-new-operator-04.png)

### Done!

Finally, save your model and run the project which uses this model to test new operator: 

![Data Model Editor - new operator in the query panel](/easyquery/docs/images/dm-new-operator-05.png)



## Adding a new operator using code

Here we suppose we have an access to DbModel object and the model is already loaded. In ASP.NET (Core) projects you  can use `UseModelTuner` call during EasyQuery middleware setup (inside `UseEasyQuery` call) for ASP.NET Core or inside `ConfigureEasyQueryOptions` in your WebAPI controller for ASP.NET 4:


```
options.UseModelTuner(model => {
  dbModel = model as DbModel;
  .   .   .   .
});
```


So, to add a new operator we can use `AddUpdateOperator` method of DbModel class:


```
    //adding a new operator to the data model
    var op = dbModel.AddUpdateOperator("DateWithinLastNDays", "Last N days", "{expr1} > DATEADD(day, -{expr2}, GETDATE())",
                            "{expr1} [[is within last]] {expr2} days", DataKind.Const, DataModel.TimeOperatorGroup);
							
	//setting the default operand						
    op.DefaultOperand.DataType = DataType.Int32;
	
    //assigning new opearator with all appropriate entity attributes
    model.AddOperatorToSuitedAttributes(op);
```