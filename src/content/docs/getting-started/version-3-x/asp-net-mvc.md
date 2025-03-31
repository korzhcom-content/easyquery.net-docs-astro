---
title: Getting started for EasyQuery ASP.NET MVC
slug: getting-started/version-3-x/asp-net-mvc
---

> See also: [Getting started for ASP.NET WebForms](//easyquery/docs/getting-started/asp-net-webforms)

&nbsp;             

To apply [EasyQuery ASP.NET](//easyquery#asp-net/) to your MVC web application please perform the following steps:

## 0. Install EasyQuery trial
Just open [EasyQuery webpage](https://korzh.com/easyquery), click on "Try it now" button and select the edition you need to download trial version. 
When the download is finished - run the setup file and follow the instructions.

## 1. Create data model

Open “EasyQuery ASP.NET” folder on your desktop and run Data Model Editor (DME) application in wizard mode (“Create Data Model” program icon). Follow the instructions to create a new data model for your database. You will need to add database tables (select the ones you allow your users to use in their queries), links between them and the entities with their attributes (usually they are added automatically when you add tables). When the model is created - save it to App_Data folder of your project (let name it MyModel.xml for example). For more information about data model and for more detailed instructions on how to create it - please read:

   1. [About Data Model](/fundamentals/data-model)

   2. [Creating new data model using Data Model Editor](/getting-started/new-data-model)

## 2. Add references to EasyQuery libraries.

Then open your project and add the following assemblies to References list:

  - Korzh.EasyQuery.NET45
  - Korzh.EasyQuery.Db.NET45
  - Korzh.EasyQuery.Services.Db.NET45

We listed here the names of .NET 4.5 assemblies. Use the similar assemblies but with another “suffix” if you have another target platform. For example, the assemblies ending on ”.NET40” should be used for .NET 4.0 platform and so on.

## 3. Setup MVC controller

To handle AJAX requests from client-side controls (widgets) you need some web-service or controller on your server side. EasyQuery library contains several ready-to-use controllers which you can copy into your project. The controller you need can be taken from one of the sample projects distributed with EasyQuery. Open “EasyQuery ASP.NET” folder on your desktop, then go to “Samples” folder and select one of the sample projects listed there:

  - EQMvcDemoDb - for the case when EasyQuery is used with direct database connection and SQL query language;
  - EQMvcDemoEF - EasyQuery with EnityFramework and Entity SQL as query language;
  - EQMvcDemoLinq - EntityFramework and LINQ

Then copy EasyQueryController.cs file from Controllers folder of selected demo project to your project's Controllers folder. You may need to change some settings in controller's constructor. All code there are well commented - so you can easily modify necessary parts. For example, you can change SqlServerCe connection used in our demo to SqlServer connection. To make this change you will need to modify 2 lines of code in an original class. First - in using section change 

```sql
using System.Data.SqlServerCe;
```
to 

```sql
using System.Data.SqlClient;
```
 Then change the connection initialization code in controller's constructor.

From: 

``` .   .   .   .   .   .
    eqService.Connection = new SqlCeConnection("Data Source=" + System.IO.Path.Combine(dataPath, "Northwind.sdf"));
```
to

``` .   .   .   .   .   .
    eqService.Connection = new SqlConnection("Your connection string goes here");
```

## 4. Client-side scripts and CSS files

Now we move from server-side code to client-side. Here is the full list of a section you will need to add to your web page to use EasyQuery widgets on it:

  - EasyQuery CSS files.
  - EasyQuery script files.
  - EasyQuery widgets settings script (if necessary).
  - Placeholders for EasyQuery widgets.

Here is an example of .chtml file with all these sections included: 

```html
.   .   .   .   .   .   .   .   .
 
    <!--EasyQuery CSS files -->
    <link href="~/Content/easyquery.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="~/Content/eqview.css" rel="stylesheet" type="text/css" />
 
    <!-- Second option: EasyQuery CSS files from CDN -->
<!--
    <link href="http://cdn.korzh.com/eq/3.8/themes/default/easyquery.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="http://cdn.korzh.com/eq/3.8/themes/default/eqview.css" rel="stylesheet" type="text/css" media="screen" />
-->
 
 
    <!-- EasyQuery widgets settings -->
    <script type="text/javascript">
 
        //Settings for EasyQuery widgets 
        window.easyQuerySettings = {
            serviceUrl: "/EasyQuery",
            modelName: "NWindSQL",
            entitiesPanel: { showCheckboxes: true },
            columnsPanel: { allowAggrColumns: true, attrElementFormat: "{entity} {attr}", showColumnCaptions: true, adjustEntitiesMenuHeight: false },
            queryPanel: { alwaysShowButtonsInPredicates: false, adjustEntitiesMenuHeight: false, menuSearchBoxAfter: 20 },
            syncQueryOptions: {
                sqlOptions: {SelectDistinct:true}
            },
 
            listRequesHandler: function (params, onResult) {
               //listRequest event handler goes here
            }
 
        };
 
	</script>
 
    .   .   .   .   .   .   .   .   .
 
        <!-- EntitiesPanel widget placeholder -->
        <div id="EntitiesPanel" class="entities-panel"></div>
 
    .   .   .   .   .   .   .   .   .
 
        <!-- ColumnsPanel widget placeholder -->
        <div id="ColumnsPanel" class="columns-panel"></div>
 
    .   .   .   .   .   .   .   .   .
 
        <!-- QueryPanel widget placeholder -->
        <div id="QueryPanel" class="query-panel"></div>
 
   <div id="footer">
        <div class="copyright">
            © Copyright 2006-2016. <a href="http://devtools.korzh.com/" target="_blank">Korzh.com</a>
        </div>
    </div>
</div>
 
 
<!-- jQuery and jQuery UI scripts --> 
<script src="http://code.jquery.com/jquery-2.1.1.js"></script> 
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
 
 
<!-- Google Visualization script (if you plan to use charts --> 
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
 
 
<!-- EasyQuery script files --> 
<script src="@Url.Content("~/Scripts/eq.all.min.js")" type="text/javascript"></script>
<script src="@Url.Content("~/Scripts/eq.view.basic.js")" type="text/javascript"></script>
 
<!-- Another option: use CDN versions of those files -->
<!--
    <script src="http://cdn.korzh.com/eq/3.8/eq.all.min.js" type="text/javascript"></script>
    <script src="http://cdn.korzh.com/eq/3.8/eq.view.basic.js" type="text/javascript"></script>
-->
 
 
<script type="text/javascript">
        // Load the Visualization API and the piechart package.
        google.charts.load('current', { 'packages': ['corechart'] }); 

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(GoogleVisualizationLoaded);

        function GoogleVisualizationLoaded() {
            //alert("Visualization loaded!!!");
        }
 
</script>
```
To avoid writing all necessary code from scratch you can use EasyQuery.cshtml view file from our sample project as a template and then just modify it according to your needs.