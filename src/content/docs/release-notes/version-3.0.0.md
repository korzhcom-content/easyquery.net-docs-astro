---
title: Version 3.0 release notes
slug: release-notes/version-3.0.0
---


## **New in version 3.0**

### 1. New structure of EasyQuery assemblies and namespaces

In version 3.0 we have removed all database-related functionality from the core classes in Korzh.EasyQuery namespace (like DataModel and Query). So now it's possible to use EasyQuery for querying not only databases but in general almost any type of data. As an example, you can see our new service [Advangle](/http://advangle.com) which allows you to build web-search queries for Google and Bing. Database-related implementation of the core classes was moved into another namespace: Korzh.EasyQuery.Db. Here you will find such classes as DbQuery (inherited from Query) and DbModel (inherited from DataModel). Use these classes to set up an old good SQL query builder in your application.

### 2. "Builder" classes

Query class (as well as its descendant DbQuery) does not implement any “SQL generation” functionality now. It just a container that holds the structure of the query (condition tree, a list of columns, etc.). To build an SQL statement, you need to use a special builder class (SqlQueryBuilder in this case). In general, you can use several different builders for the same query. We already have an implementation of builder class for SQL (SqlQueryBuilder) and plan to implement other classes for different query languages (like HQL, XQuery, etc.).

### 3. JavaScript UI library

For web applications, we created a JavaScript edition of our visual components (like QueryPanel or ColumnsPanel). They are implemented as JQuery widgets and can be used with any kind of back-ends (not only ASP.NET). As an example of such approach, we created MVC sample project which is available at http://demo.easyquerybuilder.com/asp-net-mvc/ and is also included in the installation package of EasyQuery for ASP.NET.