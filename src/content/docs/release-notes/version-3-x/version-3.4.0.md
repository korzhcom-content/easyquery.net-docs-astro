---
title: Version 3.4.0 release notes
slug: release-notes/version-3-x/version-3.4.0
---

Version 3.4 of EasyQuery ASP.NET contains several changes in JavaScript widgets and EasyQuery controller.

Here are the essential ones:

## 1. CDN for JavaScript and CSS files

Now you can get the latest versions of EasyQuery's JavaScript and CSS files from our CDN: 

```js
  <script src="http://cdn.korzh.com/eq/eq.all.min.js" type="text/javascript"></script>
  <script src="http://cdn.korzh.com/eq/eq.view.js" type="text/javascript"></script>
 
  <link href="http://cdn.korzh.com/eq/themes/default/easyquery.css" rel="stylesheet" type="text/css" />
  <link href="http://cdn.korzh.com/eq/themes/default/eqview.css" rel="stylesheet" type="text/css" />
```

## 2.Default "look and feel" for query builder view page

The new version includes eqview.css and eq.view.js files which define the default style and behavior of query builder page. The same as you can on our [live demo](http://demo.easyquerybuilder.com/asp-net-mvc/) page. Both files can be accessed through CDN (you can see the links above). To apply the default behavior, you need to do the following:

1. Set the default IDs (QueryPanel, ColumnsPanel, etc.) for EasyQuery widget placeholders and other elements of your “advanced search” view page. See an example below.

2. Call EQ.view.init() function on page initialization.

Example: 

```js
 . . . . .
  <script> 
  $(document).ready(function () {
 
  EQ.client.init({
  . . . . .
  });
  EQ.view.init();
  });
  </script> 
  . . . . .
<body>
  . . . . . .
  <!-- Entities panel placeholder -->
  <div id="EntitiesPanel"></div>
  . . . . .
  <!-- Columns panel placeholder -->
  <div id="ColumnsPanel"></div>
  . . . . . .
  <!-- Query panel placeholder -->
  <div id="QueryPanel"></div>
 
  . . . . . .
  <!-- Buttons (names are self-explanatory) -->
  <div id="ClearQueryButton" class="eqv-button clear-button">Clear query</div>
  <div id="LoadQueryButton" class="eqv-button load-query-button">Load query</div>
  <div id="SaveQueryButton" class="eqv-button save-query-button">Save query</div>
  <div id="ExecuteQueryButton" class="eqv-button execute-button">Execute</div> 
  . . . . . .
  <!-- A placeholder for SQL statement text. -->
  <div id="SqlPanel" class="sql-block"></div>
  . . . . . .
  <!-- Result panel. Grid and charts will be rendered here -->
  <div id="ResultPanel" class="result-panel-content">
  </div> 
 
</body>
```

Of course, you don't need to define all placeholders listed above. Any element can be omitted. EQ.view script will render the elements it can find and simply ignore all others.

## 3. Google Visualization library support

EasyQueryController class now returns result sets in JSON format compatible with [DataTable](https://developers.google.com/chart/interactive/docs/reference#DataTable) class from [Google Visualization library](https://developers.google.com/chart/interactive/docs/reference). It allows you easily connect the result sets returned by EasyQuery with [Google Charts](https://developers.google.com/chart/interactive/docs/gallery). You can see an example of such integration in our [live demo](http://demo.easyquerybuilder.com/asp-net-mvc/). To see a pie chart just add one string column (e.g. “Customer Company Name”) and one numeric column (Order Freight) and click on “Execute” button.

Please note: You don't need to include Google Visualization scripts just to render a result grid. The eq.view.js script contains code which implements such rendering. However, it will be more convenient and secure to use “native” DataTable components. And of course, such inclusion will allow you to draw charts for result data. 

```js
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
  . . . . . . . .
  <script type="text/javascript">
  // Load the Visualization API and the piechart package.
  google.load('visualization', '1.0', { 'packages': ['corechart'] });
 
  // Set a callback to run when the Google Visualization API is loaded.
  google.setOnLoadCallback(GoogleVisualizationLoaded);
 
  function GoogleVisualizationLoaded() {
  //Visualization loaded!
  }
 
  . . . . . . . .
  </script> 
```
Upgrading from previous versions

If your project uses version 3.3 (or less) of EasyQuery you need to make the following changes:

1. Include the latest versions of EasyQuery script files and CSS. Use our CDN as it mentioned in paragraph #1
2. Remove from your page's initialization part all JavaScript code which make AJAX calls for query building and execution and performs result grid rendering (if any). All these operations are implemented eq.view.js script now - so you need to replace all previous code by one call: EQ.view.init().
3. Change the IDs of placeholders for EasyQuery widgets and other page elements (Result panel, buttons, etc.) as it's described in paragraph #2 above.
4. (Optional) Add Google Visualization library to your page. Follow the instructions in paragraph #3 above.