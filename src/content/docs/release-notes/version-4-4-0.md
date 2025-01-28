---
title: Version 4.4.0 release notes
slug: release-notes/version-4-4-0
---


## 1. Core library

* .NET Core 2.1 support in the core library and samples.
* DbGate components update: using the latest version of connectors.
* `ReadOnly` property processing for the root predicate.
* `Ignore` option in `EqEntityAttribute`. It allows to exclude some properties from the data model. 
* Fixed: Wrong behviaour of `EqServiceProviderDb` when `LoadModelFromConnection` is set to `true`.

## 2. JavaScript
 
* Totally new (more convenient) UI for `FilterBar` widget. 
* A possibility to pass to `buildAndExecute` function only `queryId` and `modelId` instead of a full query object.
* `onError` event - how you can setup a special handler for errors.
* `onProcessStart` / `onProcessEnd` events which can be used to show a progress bar/spinner on long operations (like model loading).
* `refreshModelOnSync` option - now you can update your model during query synchronization.
* Fixed: the problem with sorting on "custom expression" columns.
* Fixed: wrong behavior of `Query.addSimpleCondition` method .