---
title: JavaScript widgets formats and settings (MVC version)
slug: tutorials/version-3-x-tutorials/javascript-widgets-settings-formats
sidebar:
  order: 6
---

Sometimes you may need to set up individual settings for EasyQuery JavaScript widgets. In this article, we describe the most common issues and give examples of code to implement.

## 1. ColumnsPanel options

The widget allows you to make some operations with a list of query result columns and manipulate with that list: add/remove a column, change its type, set column's sorting, etc.
All options of ColumnsPanel widgets can be set through `columnsPanel` property of `easyQuerySettings` global variable. Also, you can set options and call methods of ColumnsPanel in a usual for jQuery widgets way.

Here is an example how to set ColumnsPanel options when you initialize `easyQuerySettings` variable: 

```
window.easyQuerySettings = {
  serviceUrl: "/EasyQuery",
  modelName: "YourModelName", //put the name of your model here
  . . . . . . .
  columnsPanel: {
  allowAggrColumns: true,
  attrElementFormat: "{attr}", 
  showColumnCaptions: true,
  . . . . . .
  }
  . . . . . .
}
```
Some of the most popular ColumnsPanel options:

* 1.1 showColumnCaptions allows to turn on/off column titles. Gets or sets a value indicating whether columns panel must show an editable caption for each column (i.e. “SELECT ColumnName AS ColumnCaption…”).
* 1.2 showHeader is responsible for turning on/off header row. Gets or sets a value indicating whether columns panel must show a header at the top.
* 1.3 showAddRow is about turning on/off adding row. Gets or sets a value indicating whether columns panel must show a special [add column] link at the bottom. 

Other ColumnsPanel options listed [here](http://docs.korzh.com/easyquery/js/columnspanel-widget)

### Display format for columns 

To set up individual names or labels for columns in an MVC project you need to use `attrElementFormat` and `titleElementFormat'` options of QueryPanel and ColumnsPanel widgets. By default they are set to '{entity} {attr}'. You need to change them to just "{attr}".

Here is an example how to set ColumnsPanel options when you initialize `easyQuerySettings` variable: 

```
window.easyQuerySettings = {
  serviceUrl: "/EasyQuery",
  modelName: "YourModelName", //put the name of your model here
  . . . . . . .
  columnsPanel: {
  attrElementFormat: "{attr}", //set this to show only attribute`s name in Expression column, instead of [entity name] [attribute name] used by default
  titleElementFormat: "{attr}", //set this to show only attribute`s name in Title column, instead of [entity name] [attribute name] used by default
  . . . . . .
  }
  . . . . . .
}
```

## 2. QueryPanel options

You can use this widget for operations and manipulations with the list of query conditions: add a new condition or condition group, remove an existing condition, enable/disable conditions, etc. All options of QueryPanel widgets can be set through a queryPanel property of the easyQuerySettings global variable. Also, you can set options and call methods of QueryPanel in a usual for jQuery widgets way.

Here is an example how to set QueryPanel options when you initialize `easyQuerySettings` variable:

```
window.easyQuerySettings = {
  serviceUrl: "/EasyQuery",
  modelName: "YourModelName", //put the name of your model here
  . . . . . . .
  queryPanel: {
  showCheckBoxes: true,
  attrElementFormat: "{attr}",
  dateFormatValue: "mm/dd/yy",
  . . . . . .
  }
  . . . . . .
}
```

Some of the most popular QueryPanel options:

* 2.1 *dateFormatValue* is about changing formats of date/time values. This string represents the format of date values used in date/time picker widget. For a full list of the possible formats see documentation for JQuery UI Datepicker Widget http://api.jqueryui.com/datepicker/#utility-formatDate

* 2.2 *dateFormatDisplay* - allows specifying the format of date values used in condition rows (not during editing)

* 2.3 *showRootRow* and how to turn root row on/off. Gets or sets a value indicating whether query panel must show a root row which represents the main group of conditions.
* 2.4 *showAddRow* is about adding row on/ off. Gets or sets a value indicating whether query panel must show a special [add condition] link at the bottom.
* 2.5 *showConjunctions* or and/or Conjunctions on/off. If true QueryPanel widget will show conjunction elements (“and” or “or”) at the beginning of each condition.

Other QueryPanel options listed [here](http://docs.korzh.com/easyquery/js/querypanel-widget)


## 3. EntitiesPanel options

With this widget, one can add a column or columns to the ColumnsPanel and add a condition or conditions to QueryPanel. It also includes drag-and-drop support. 

Here is code example:

```
var EPDiv = $('#EntitiesPanel');
if (EPDiv.length &gt; 0) {
  EPDiv.EntitiesPanel({
  showAddColumnButton: false,
  showAttributes: { usedInConditions: true, usedInColumns: false, usedInSorting: false }
  });
}
```

Some of the most common options:

* 3.1. showToolbar. Gets or sets a value indicating whether entities panel should show a toolbar with buttons at the bottom.
* 3.2. queryPanelId. Gets or sets an ID of the query panel on the same page that will be used to add conditions too. 
* 3.3. columnsPanelId. Gets or sets an ID of the columns panel on the same page that will be used to add columns too.
* 3.4. clickableAttributes. Gets or sets a value defining what should happen when user clicks on the attribute node. Values:

```
0 - nothing happen. Default behaviour.
1 - attibute is added to conditions.
2 - attribute is added to columns.
```

“draggableAttributes” option should be set to “false” in order to get values 1 and 2 worked.

Other EntitiesPanel options listed [here](http://docs.korzh.com/easyquery/js/entitiespanel-widget)

## 4. ColumnsBar widget
