---
title: Version 4.1.0 release notes
slug: release-notes/version-4-x/version-4.1.0
---


## 1. Support for .NET Core 2.0 / .NET Standard 2.0

*  All EasyQuery assemblies target .NET Standard 1.5 (or lower) version - so they are fully compatible with .NET Standard 2.0. The exception is Korzh.EasyQuery.EntityFrameworkCore.Relational package which in the previous version (4.0) raised an error when used with Entity Framework Core 2.0. Version 4.1.0 of this package targets .NET Standard 2.0 and fixes that problem.

## 2. New package: Korzh.DbExport

*  This package contains some useful function for exporting data sets to CSV or HTML (Excel compatible) formats. You can use them in your MVC projects the same way as in version 3.x of the library.

## 3. DbGate packages

*  We added several DbGate packages (for MS SQL Server, My SQL, and Postgre SQL). You can use them to load your model directly from the DbConnection object (via FillByDbGate method) if you don't use Entity Framework Core in your project.

## 4. Core library 

*  There is a new possibility to mark any condition as "In Join", so that condition will be added into JOIN clause instead of WHERE. Also, you can mark any condition as "Parameterized", so the values in this condition will be placed into result SQL as parameters.

## 5. JavaScript widgets      

*  Now it is possible to turn on/off each widget separately thanks to the new configuration of buttons in QueryPanel widget. There is a new **SortingBar** widget, which allows defining the order of sorting columns.

## 6. Data Model Editor      

*  Now Data Model Editor saves its position on exit and restores on the next launch. Also, we'd like to note, that Data Model Editor now shows MS SQL as the default DB gate.  

## 7. Other editions of EasyQuery      

*  There is a significant update for the users of ASP.NET MVC projects: we improved EqServiceProvider, so now it's not necessary to use Session to store data in between the requests.
*  For WebForms users there is a new Refresh method and also a new property ShowCheckboxes in QueryPanel control. We also fixed DateTimePicker error for the values with time part.