---
title: Version 7.0 release notes
slug: release-notes/version-7-0
---


## Overview

Version 7.0 is a major update of both EasyQuery.NET and EasyQuery.JS. While there are plenty of important changes, don't expect a lot of new features in this release. Version 7.0 is more about code refactoring and unification of EasyQuery's APIs. 

Key points we tried to target in this release:

- To make EasyQuery flexible and open to any kind of customizations. With version 7.0, it's easier than ever before.

- To make it a good basis for any future extensions in data-management operations: reporting, dashboards, analytics, BI. 


A few words about the main changes in this release.

## EasyData library

EasyQuery is now based on [EasyData](/https://github.com/KorzhCom/EasyData) - an open-source library that provides basic classes and structures for managing database metadata.


## Why version 7.0?

We skipped version 6.x for EasyQuery.NET (the previous was 5.4.x) to sync it with the latest version number of EasyQuery.JS and so,  to make it clear that version 7.0 of the scripts requires version 7.0 of the server-side packages.


## EasyQuery REST API updates

The API endpoints for some actions were renamed in the new version. Mostly to better correspond to their meaning. For example, old `.../execute` action became `.../fetch` now. 
Of course, you will not notice these changes if you use EasyQuery both on the client-side and server-side of your application. Provided that they both have the same version 7.0.x

## Data display formatting

One of the most expected features implemented in 7.0 was an ability to set the formatting for the result set data. Now you can set up the formats for each entity attribute in you data model. 
If that attribute is used in a query column, its format will be applied to the result column as well.

To specify the format you can use the same format strings that is available for [String.Format function](/https://docs.microsoft.com/en-us/dotnet/api/system.string.format). For example, if you set it to `{0:D}` your data will be represented by a "short date" format if it's a date/time column or as a decimal number if this column contains numeric values.


## New exporters

The data exporting functionality is now provided by EasyData library and it supports the following formats out of the box:

-  CSV and HTML by `EasyData.Exporters.Default` package
-  PDF by `EasyData.Exporters.PdfSharp` package (the implementation is based on a popular PdfShar library)
-  Excel by `EasyData.Exporters.ClosedXML` package (the implementation is based on a popular ClosedXML library)

## EasyQueryManager changes

EasyQueryManager acts now as an entry point for all main EasyQuery operations (model/query loading, query building, data fetching, exporting, etc). Most of its methods does not have parameters now, all important objects (like Model, Query, QueryBuilder) are accessed via manager's properties. It's guaranteed that these object have a non-null value at any point of time. 

So, with version 7.0 the best approach will be to create an instance  of some  `EasyQueryManager` class descendant (for example, `EasyQueryManagerSql`) that is the most suitable for your scenario and use its methods and properties for all necessary operations.   

## Better internationalization in EasyQuery.JS

EasyQuery.JS now provides better means for all localization/internatiolization tasks like changing the locale settings (date/time, numeric formats, etc) and translating all text resources to another language.

## Refactorings, renamings, removing obsolete code

As we already mentioned at the beginning, EasyQuery 7.0 contains a lot of renames and changes in methods' signatures. They all were made to make our API more clear, simple and predictable. 
There are a lot of changes in `EasyQueryManager` class (we already mentioned them above) and EasyQuery middleware tuners and handlers (most of them use the same pattern now).

Additionally, there are plenty of changes in EasyQuery.JS base classes (Query, DataModel, etc) that simplify all kinds of manipulations with queries and models on the client-side.

For more information about all modifications and renames please refer to [Upgrade instructions for version 7.0](//$aid/eqdn-1n7jsnov2nnf).

## Better support for extensions and 3party libraries

WIth the new moduling structure of EasyQuery it's easier now to extend EasyQuery with your custom data processing classes or UI widgets. Almost each and any element of EasyQuery's UI can be replaced or adjusted. We already have examples of replacing our default data grid widget with a third-party one (for example, Ag-grid or Kendo grid). We believe that we will have more similar samples in the future. 

## Links

 -  [$$-Changelog-$$](//$aid/eqdn-id4za3lbv7bz)

 - [$$-Upgrade instructions: Version 7.0-$$](//$aid/eqdn-1n7jsnov2nnf)