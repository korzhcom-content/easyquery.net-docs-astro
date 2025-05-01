---
title: Edit link dialog
slug: data-model-editor/edit-link-dialog
sidebar:
  order: 4
---

In this dialog, you can define the following properties for some link between tables:

* **Table1** and **Table2** combo box - can be used to choose the linked tables.
* **Join type** group of radio buttons allows you to specify the type of join (inner, left outer, right outer or full join).
* **Join conditions** panel - allows you to specify the conditions of the link.

The “Join conditions” panel consists of two main parts. Firs part (at the top) is the list of conditions, second (at the bottom) contains different control which allows to define the new condition and add it to the list.

**Delete** button at the right of condition list deletes a selected condition. **Clear** button - clears all conditions completely.

To add a new condition, you need to do the following:

1) Select the type of each condition part (left and right)

2) Select table field (in case of “Field” type) or enter a constant expression (for “Constant” type) for each condition part

3) Select operator (”=” by default)

4) Press “Add Condition” button
