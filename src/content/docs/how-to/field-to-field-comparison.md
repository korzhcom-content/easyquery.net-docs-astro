---
title: How to make a field to field comparison
slug: how-to/field-to-field-comparison
---


## Problem
Currently, EasyQuery allows you to build only one type of conditions by default: {SomeField} {Operator} {Constant value}. 
For example: `Customers.Birthday < '2000-01-01'`
However, sometimes you need to compare a field against another field in the same or another table of your DB. 
E.g. `License.ExpirationDate > Order.OrderDate`


## Solution
Each data model contains a lot of default operators (like "equals", "greater than", "less than", etc). But all of them allows you to compare some field against a constant value. However, it's quite easy to add a new operator which accept another entity attribute (field) in the right part of the condition.

Here are the instructions how to do it:

### 1) Open your model file

Run Data Model Editor utility (DME) and open your model (.xml) file (Model | Open… menu item).

### 2) Add new operator

Go to Operators tab and select “Operators | Add Operator” menu item. New operator with default ID “NewOp” will appear at the bottom of the list of operators.

![Data Model Editor - add new operator](https://files.aistant.com/korzh/easyquery-dotnet/images/dm-new-operator-01.png)

After that, we need to define all properties for a new operator.

### 3) Setting operator's properties

#### ID: "GreaterThanAttr"

This is mostly an internal property. EasyQuery will use to reference this operator in attributes and query conditions.

#### Caption: "Greater than another attribute"

This value will be shown to users in a drop-down list when they select operator

#### Display format: 
```
{expr1} [[is greater than]] {expr2}
```

This field defines how your operator (actually the whole condition with this operator) will look in a condition row in query panel. The part within [[ and ]] will be clickable.

#### Expression: 
```
{expr1} > {expr2}
```

The most important property for an operator. It defines the result expression which will come into generated SQL statement. {expr1} and {expr2} parts specify the operands. The first operand is always an attribute, second - some value entered by a user. In our case, it will be another entity attribute as well.

#### Applied types: 

Since this operator can be used with any types of data - we can check all options in “Applied types” field.

Here is how Operators tab in DME looks like after all changes described above:

![Data Model Editor - operator properties](https://files.aistant.com/korzh/easyquery-dotnet/images/dm-field-to-field-operator-02.png)

### 4) Setting operand's properties

Each operator has one or more operands. We have "default operand" item there. The options set for this item will be applied to all operands.  
The parameter we need to change here is Kind. By default, it's set to "Scalar" but we need to change it to "Attribute".

![Data Model Editor - operand properties](https://files.aistant.com/korzh/easyquery-dotnet/images/dm-field-to-field-operator-03.png)

### 5) Associate new operator with attribute(s)

Finally, we need to associate new operator with one or more attributes for which it may be used in query conditions. To do it:

* open “Entities” tab
* select necessary attribute
* open its “Operators” tab
* click on “Add” button, check new operator and click OK.

![Data Model Editor - associate operator with attributes](https://files.aistant.com/korzh/easyquery-dotnet/images/dm-field-to-field-operator-04.png)

### 6) Done!

Finally, save your model and run the project which uses this model to test new operator:

![Data Model Editor - new operator in the query panel](https://files.aistant.com/korzh/easyquery-dotnet/images/dm-field-to-field-operator-05.png)