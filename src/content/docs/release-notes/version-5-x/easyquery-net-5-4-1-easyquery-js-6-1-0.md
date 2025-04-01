---
title: EasyQuery.NET 5.4.1 + EasyQuery.JS 6.1.0 release notes
slug: release-notes/version-5-x/easyquery-net-5-4-1-easyquery-js-6-1-0
sidebar:
  order: 100
---

## Overview

This is a minor update both for EasyQuery.NET and EasyQuery.JS, so it does not contain any breaking changes that require code modifications on your side besides the packages/scripts version upgrade (with one little exception, more about it later). 

However, there are some changes (like new grid widgets or new facets panel) that might make you want to modify your code because of the new functionality and new features they offer.

So, let's take a deeper look at the changes introduced in these updates. 

## 1. EasyQuery.JS 6.1.0

### 1.1 Data flow improvements

Before version 6.1.0 the data flow between client and server was more or less straightforward: client just asked for the necessary part of the result set, receive it from the server, and renders that part. It was not quite convenient especially when different visual controls (like data grid and chart) required a different set of data.  Now the whole process is more complex but also more effective. 

Here are the main differences:

 * New (lightweight) format of the dataset.     
 The same result set can take 30% less memory than the format used before. 

 * Eager data loading.     
 Now, the client-side code tends to "ask" for bigger portions of data in one request and handles all issues with paging itself. It allows us to decrease the number of HTTP requests to the server and SQL requests to the database. Moreover, this approach opens the way for new features like "infinite scroll" that we are going to implement in the next updates.

 * Paging settings were moved on the client-side.     
 This is a consequence of the previous change. The old setting like `UsePaging(XX)` on the server-side will still work but is considered obsolete now.

### 1.2 New grid widget

In version 6.1.0 we introduce a new grid widget (EasyGrid) that has a lot of improvements in comparison with the previous one. Here the most important ones:

 * Better UI.   
Even with the default styling new grid look nicer than the old one: fonts, colors, alternative row styles - all are here. 

 * Better performance    
It takes less time and memory for the new grid to render the same amount of data.

 * More options for customizations.    
 It's easier now to define the styles for different parts of the grid and to set custom styles for each column or even for a particular cell. You can place your own DOM elements (e.g. images) inside the grid body.


 * EasyGrid can be used separately.    
 The code of our new grid was moved to a separate NPM package (`@easydata/ui`) and so, can be used even without EasyQuery at all.
 
 
> __NB__: Here we have that little exception of that "no breaking changes" rule we mentioned at the beginning. If you use some handlers for the old grid widget (like `beforeTableRendering`, `formatColumnHeader`, or `formatGridCell`) - you will need to modify that logic to use the new handlers or column formatters. Please, [submit a support ticket](https://korzh.com/support) with the description of your case and we will help you with that change.


### 1.3 New widget: ResultFacetsPanel

This new widget allows us to define different views for your result set. Each such view (or "facet") is rendered as a separate tab in the result panel. There are 3 types of facets available now:

 * __Data table__. Just a tabular representation of the result set.

 * __Chart__.     
 There are several types of charts supported (Pie, Bar, Column chart, etc). Now it has more space and easier configuration. 
 Of course, with ResultFacetsPanel, it is possible to define several different charts for one result set.

 * __Pivot table__.  Allows to group and summarize the data. 


### 1.4 New packages: @easydata/core and @easydata/ui

Our new grid and some basic client-side utilities were moved to the separate free NPM packages: `@easydata/core` and `@easydate/ui`. We did that to make it possible to use those common functions and classes in other projects (not only with EasyQuery). If you use NPM to get necessary packages for your application (e.g. in case of Angular or React webapp), you will need to add these two packages to your `package.json` explicitly. 



 ## 2. EasyQuery for .NET (Core) 5.4.1
 
 The changes in .NET (Core) library are not so substantial. This update is more about supporting the new features on the client-side. It also contains a lot of small improvements and bug fixes.

### 2.1 EasyQuery.JS 6.1.0 support

As already said, our server-side API code (EasyQuery middleware for .NET Core and WebAPI controller for .NET 4.x) was updated to support the new data format and other changes in EasyQuery.JS 6.1.0

### 2.2 New endpoints for saving/loading queries to/from local files

Version 5.4.1 also includes a possibility to save/load queries to/from the files on the visitor's computer. 
To support this functionality we've added two new endpoints in the middleware and WebAPI controller.

### 2.3 New EasyQueryApiHandler class

All business logic provided by EasyQuery middleware in ASP.NET Core edition was moved to this new class. So, now it's possible to amend the middleware's behavior for some (or even all) EasyQuery API endpoints (like GetModel, GetQuery, ExecuteQuery, etc). You just need to create your own class inherited from `EasyQueryApiHandler` and override the neccessary methods there.


### 2.4 Saving extra (user's) data with query

Starting from EasyQuery.JS 6.1.0 you can attach some extra data to the query sent from the client-side. For example, you might want to add information about the period of time chosen on the client-side and that must be added as an extra condition to each query before its execution. To do it, just put the data you need into `Query.extraData` property on the client-side and it will be sent to the server and stored together with the query (both in XML or JSON formats) 


### 2.5 Fixes and small improvements

Refer to [changelog](//changelog) for more details
