---
title: Tables and links page
slug: data-model-editor/tables-links-page
---


Use this page to describe tables taking part in the data model.
The page consists of 2 main sections: list of tables on the left side and properties of selected table at the right (the second panel is empty when no table is selected).
The table properties panel is also divided into two panels: the properties themselves on the top and the list of table links at the bottom.

To select the table or link just click on it. Properties of the selected table will be shown in the right panel.
To add or delete tables use the corresponding menu items from “Tables” menu.

## Table properties

**Table alias** is an alias for the table in generated SQL statements (optional but needed if you link the table more than once on different conditions)
NOTE: any particular database table can be added to the data model several times with different aliases. It is necessary to eliminate the ambiguities when some two tables have several link paths from one to another. For more information see [Working with aliases](/https://korzh.com/easyquery/docs/data-model-editor/working-with-aliases).

**Table hint(s)** is intended to specify locking method used in MS SQL Server syntax (like NOLOCK, ROWLOCK or READCOMMITED). Please note: this options might not be applied to other database servers (like MySQL).

**Quote table name** check box means if the table name should be put in double quotes in SQL statements - it is useful for table names including spaces and national characters.

## Working with table links

To add a new link for selected table just click on Add button near the list of links. Specify link properties and conditions using [Edit link dialog](/https://korzh.com/easyquery/docs/data-model-editor/edit-link-dialog) and press OK. The new link will appear in the list.
To edit existing link - just select in the list and click on Edit button. Press OK when finish editing.
To remove some link - selected it and press Delete button.