---
title: Value Editors
slug: data-model-editor/value-editors
sidebar:
  order: 7
---

Here you can find the full list of editors and choose any you need in your work with Data Model: 

* **Auto**: means that the most appropriate value editor will be used depending on entity attribute's data type and operator which applied in a condition. For example for date attribute - DataTime Picker control will be shown, for boolean one - the user will get an ability to select the value from the list of two items: False and True.

* **Text editor**: the values will be edited in usual text box field. You can specify default value and type of edited data for this editor.

* **Date/time editor**: query panel will show date/time picker control for elements with such value editor.

* **List of constants**: a user will be prompted to select one (or more in a case of using “is in list” operator) value from the list of available values. Values column stands for values accepted as the choice result (and inserted into SQL text); Text is similar to the text items displayed to a user in the pop-up list.

* **Custom list**: the same behavior as in the previous case but this editor does not allow you to enter the list itself. Instead, you can specify the name for this list and fill it at runtime in RequestList event handler of QueryPanel control.

* **SQL list**: Similar to previous two options, but the list of available values a by some SQL query to a database. The first column of the resulting recordset is interpreted as an actual value which will be used in result SQL statement and the second one is used as captions (the text shown to the user).

* **Custom**: The programmer should provide the value editor for this field manually using a special event in QueryPanel component. There is an auxiliary text field “Custom Data” where the developer can enter any textual information and get access to it at run-time through CustomData property of any condition object.
