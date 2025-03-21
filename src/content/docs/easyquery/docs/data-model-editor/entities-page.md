---
title: Entities page
slug: easyquery/docs/data-model-editor/entities-page
---


Entities are intended to hide data storage details from the end user. Instead of operating with tables, views and fields (such as Orders.CustNo, Customers.Addr1) user see some entities from the real world (Order, Customer, Vendor, etc.) and their attributes (Customer Name, Order Ship Date, Vendor Country, etc.).

For large data models, entities can be organized in a hierarchy for more easy manipulation.

There are two main types of entity attributes:

* Data Attribute - it totally corresponds to particular field in some database table (e.g. attribute Order Ship Date corresponds to database field Orders.ShipDate)

* Virtual Attribute - a calculated attribute which is defined by some expression containing several fields, operators (+, -, ||, etc.), constants and even functions or storage procedure calls

**Entities** tree holds a list of all defined entities and their attributes.

## Main operations

* To add a data attribute - select the entity node you would like to add it to and then choose Add Data Attribute item from “Entities” menu. Choose the table, its field in the dialog that appear and click OK button.

* To add a virtual (i.e., calculated) attribute, select the entity node you would like to add it to and choose ”Entities | Add Virtual Attribute” menu item.

* To delete an attribute or entity - select it and choose ”Entities | Delete selected item” menu item.

* To edit an attribute, select it in the tree and change its properties in the editor appearing in the dialog's right part.

* To move the attribute from one entity to another (or to change its appearance order within the entity) - just drag it to the appropriate place.

The attribute's property editor has General, Operators and Value Editors tabs described below.

## General tab

This tab contains the following input field and checkboxes:

* **Caption** field - a string meaning how the attribute name will be displayed for an end-user.

* **Expression** field - contains table and field names for data attributes and full SQL expression for virtual ones. For data attributes this field is read-only.

* **Used tables** panel - contains the list of all tables used in the selected attribute. For data attributes this field is read-only.

* **Data Type** and **Data Size** fields - contain a type of attribute and its size. These values are taken from corresponding field definition for data attributes and should be set manually by data model developer for virtual attributes. See Data types for details.

* **Use in conditions** checkbox allows specifying if this attribute can be used in query conditions. If this option is not checked - a user will not see this attribute in a drop-down list in query panel.

* **Use in result** checkbox allows specifying if this attribute can be used in result columns. If this option is not checked - a user will not see this attribute in a drop-down list in columns panel.

* **Use in sorting** checkbox allows specifying if the user can sort by this attribute.

* **Quote field name in SQL** check box means if the field name should be put in quotes in SQL statements. Useful for field names which include some reserved words. Field names with spaces will be quoted automatically.

* **Use alias** check box specifies if query builder will generate an alias for the result column where this attribute is used.

* **Description** field - allows associating some textual description with an attribute. Entered data can be accessed at run-time.

* **Custom Data** field - allows to associate any information with attribute. Entered data can be accessed at run-time.

## Operators tab

This tab holds list of all operations applicable to the attribute. Add or remove operations by corresponding buttons. Use Clear button to remove all operators from the list.

Use *Defaults* button to reset the list of operators for selected attribute to a default state. The default operator list contains most appropriate operators for attribute's data type.

See [Operators page](/data-model-editor/operators-page) for details about operators used in data models.

## Value Editors tab

This tab allows to define how a user will edit the parameters which the selected attribute is compared to in query conditions. To learn more about available editors see [Value Editors](/data-model-editor/value-editors) topic. To specify editor parameters click on “Settings…” button.