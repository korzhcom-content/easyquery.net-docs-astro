---
title: Version 4.4.1 release notes
slug: easyquery/docs/release-notes/version-4-x/version-4-4-1
---


## 1. Core library

* `FullTextSearchQuery` extension method now allows you to use `||` in a query text. Using `one || two` means that it will search for all records which contains `one` or `two` in some text field. 
* Fixed: `Display` attribute was not applied for navigation properties when the model was loaded via `LoadFromDbContext` method.
* Fixed: `Ignore` property of `EqEntityAttr` attribute was not applied correctly in some cases.

## 2. JavaScript
 
* Fixed: `EQ.client.loadQuery` worked incorrectly when the query ID was passed in the parameters.