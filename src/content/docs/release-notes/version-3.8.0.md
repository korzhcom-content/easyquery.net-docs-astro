---
title: Version 3.8.0 release notes
slug: release-notes/version-3.8.0
---


## 1. New functions in EasyQuery (actual for all versions)

We've added support for parameters in virtual attribute expressions and also support for parameterized conditions. Read more about two methods of using parameters in query conditions in this [article](/how-to/parameters-in-query-conditions).

Beginning from the version EasyQuery 3.8.0 there is a possibility to set format of date values during exporting: CsvFormats.DateFormat, ExcelFormats.DateFormat.

Pay attention, that column data type information is added into DataTable JSON passed from server to client.

Also, we'd like to note, that ExcelFormats was renamed from Korzh.Utils.Db to **HtmlFormats**.

## 2. New options for JavaScript widgets

* All elements in EasyQuery widgets now have their IDs.
* New methods in Query object: `addSimpleCondition`, `removeColumns`, `addPredicate`. You can "process" events in Query object: they are fired on process start and finish, like model loading or adding a bunch of columns from Entities panel.
* New EasyChart widget.
* New options in EntitiesPanel widget: `autoClearSelection`, `syncWithColumns`.
* New options in QueryPanel widget: `yearRange`, `allowDragDrop`, `attrPlacement`, `sortEntities`. There is also new `allowParameterization` option in QueryPanel widget in JavaScript edition.
* New options in ColumnsPanel widget: `titleElementFormat` option.