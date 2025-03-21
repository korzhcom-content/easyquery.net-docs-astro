---
title: Adhoc reporting page in your web application
slug: easyquery/docs/how-to/adhoc-reporting-in-your-webapp
---


## Problem

Let's suppose your boss (or your clients or some business needs) require(s) to implement some kind of reporting functionality in your ASP.NET (Core) application. 

Something similar to the [Ad-hoc reporting scenario](https://korzh.com/demo/easyquery-asp-net-core-razor/adhoc-reporting) available in EasyQuery's demo web-site or to our [Easy Report](https://easy.report) web service.   

![EasyReport](/easyquery/docs/images/easy-report.png "Easy Report")

 
## Solution
 
[EasyQuery](https://korzh.com/easyquery) to the rescue! This framework was specially designed to help you implement such scenarios.
 
The whole process will takes just a few minutes.

### Getting started

Please use one of the [Getting Started](/getting-started/asp-net-core) tutorials that is the most relevant to your situation. 




### Ad-hoc reporting page

For the Step 3 in the chosen tutorial we suggest to use the first option - a predefined page from our Razor UI library (`Korzh.EasyQuery.RazorUI`) at first. Just to test how everything works.

All those pages are accessible under `/EasyQuery` path by default. To get the page for ad-hoc reporting scenario please use `/EasyQuery/AdHocReporting`.

Of course, it is possible to make your own page with another layout, style, and, possibly, some modifications in behavior. We will describe how to do it in other tutorials or you can [contact our support team](https://korzh.com/support) if you have any questions. 

## Done!

If everything was done right you can build and run your project. Then just open `/EasyQuery/AdHocReporting` and enjoy the new functionality.

![Ad-hoc reporting](/easyquery/docs/images/eq-ui-all.png "Ad-hoc reporting")