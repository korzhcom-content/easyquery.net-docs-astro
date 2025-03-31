---
title: Create virtual (calculated) attribute in you model
slug: tutorials/add-virtual-attribute-in-model
---

## What are virtual attributes for?

There are 2 types of entity attributes in each data model:

* __data attributes__ are based on the corresponding fields (columns) in some database table. At the beginning, all attributes in your model are data attributes. They are created automatically by the meta-information of your database.
* __virtual attributes__ are actually a kind of calculated columns. For example, you can create a “Full name” attribute for your “Employee” entity and define its expression as `Employees.FirstName + ' ' + Employees.LastName`

The main advantage of a virtual attribute is that you users will not need to type full expression each time they would like to see such a column in a result set or to use that expression in a query condition. They just can select this attribute (either in columns or conditions) the same way as for any other entity attribute in your model. EasyQuery will do the rest automatically: it will add a necessary table(s) into the result SQL, join them with other tables used in that query and add the expression defined for this virtual attribute either to the SELECT or WHERE clause.

## How to add a virtual attribute?

The are 2 possible ways of creating a virtual attribute. If your model is created "manually" (with the help of Data Model Editor) you can add it there. Another way - is to add a new virtual attribute at run-time, using EasyQuery API. Let's look at both these ways.

### Adding a virtual attribute in DME

1) Run Data Model Editor and open your model there.

2) Go to the Entities tab and select the entity node where you would like to add a new virtual attribute.

3) Right-click on that node and select “Add virtual attribute” menu item.

4) Then you will need to define main properties of new attribute:

* Caption - it's a name with which this attribute will be presented to your end-users (when they select it in Columns or Conditions sections). Its “Full Name” in our example above.
* Expression - the exact SQL expression which is used in result SQL statement in the place of this attribute. It must include full field names include a table (like “Employees.FirstName” in our example).
* Used tables - it's the list of tables used in this attribute's expression. This list should be filled automatically, after you enter the expression. If not - add a table(s) manually used “Add” button.
* Data type - it's important to set a correct data type for a new attribute, so it will be correctly processed during SQL generation (quotes, formats, etc.).
* “Other options” section - it's the same as for data attribute. You can disable your new attribute for Conditions section (uncheck “Use in conditions” mark) or for Columns (“Use in result”). You can also mark it as “aggregate” - so EasyQuery will automatically add “GROUP BY” clause when this attribute is used in Columns section.
* Description - any text which describes your attribute. The value of this field can be shown as a tooltip when a user moves the mouse cursor over corresponding entity node in Entities Panel.

5) Finally, you need to define the list of operators which can be used with your attribute in conditions. Open “Operators” tab for your attribute (don't confuse it with global Operators tab - the one you need is inside “Entity/attribute properties” panel) and click on “Defaults” button to get a default list of operators suitable for this attribute. Of course, you can skip this step if you don't plan to use this attribute in conditions (“Use in conditions” option is turned off).

6) That's all. Save your model and tell your users about new attribute they can use in their queries.


### Adding a virtual attribute with code

Just use `AddEntityAttribute` method of Data Model class with `isVirtual` parameter set to `true`. Example:

```
var employeeEnt = manager.Model.FindEntity("Employee");
var attrDescriptor = new DbEntityAttrDescriptor(employeeEnt,
								EntityAttrKind.Virtual,
								"Employees.FirstName + ' ' + Employees.LastName");
attrDescriptor.Caption = "Full name";
var fullNameAttr = manager.Model.AddEntityAttr(attrDescriptor);
```

> __NB__: You data model must be loaded before calling `AddEntityAttr` method. Otherwise, it might not assign the new attribute with the tables used in its expression (which is necessary for query building later).
>