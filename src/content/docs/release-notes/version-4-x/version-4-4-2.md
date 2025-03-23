---
title: Version 4.4.2 release notes
slug: release-notes/version-4-x/version-4-4-2
---


## 1. Core library

* `UseParameters` options in EqServiceProvider class. Now you don't need to define your own `QueryBulider` handler. Just set `eqService.UseParameters = true` and all SQL statements will be generated with parameters. 
* Add parameter processing for the special date/time values (like `this month`, `previous year`, etc).
* Fixed: parameters didn't work in sub-queries
* Fixed: `previous month` filter did work for some dates in LINQ queries
* Fixed: `Query.Validate` method threw an exception in some cases

## 2. JavaScript
 
* Fixed: license cheking generated a console error if the model was not loaded yet