---
title: Date/time values formatting
slug: how-to/date-time-formatting
sidebar:
  order: 26
---

While working with EasyQuery and Data Models, you will need to set up your own format of date & time. There are several types of formatting you may need: 

* date/time values in generated SQL
* date/time values in visual controls/widgets
* date/time values in the grid which displaying the result set on client’s side

Here we are going to take a look more closely at all these cases and provide code examples for each of them.

## 1. SQL 
There is `Formats` property in SqlQueryBuilder class which allows you to set up generated SQL, in which you can choose needed formats for date/time values via `Formats.DateFormat`, `Formats.TimeFormat` or `Formats.DateTimeFormat` sub-properties. 
In a case of MVC project - this property can be accessed through `Formats` of and using EqServiceProviderDb class.

So here are the code examples:

MVC:

```c#
public EasyQueryController() {
  eqService = new EqServiceProviderDb();
  
  . . . . . . . . 

  //setting default formats for some type of SQL Server
  eqService.Formats.SetDefaultFormats(FormatType.MsSqlServer);
  eqService.Formats.DateFormat = “MM/dd/yyyy”;
  eqService.Formats.TimeFormat = “HH:mm:ss”;
  eqService.Formats.DateTimeFormat = “MM/dd/yyyy HH:mm:ss”;
 
  . . . . . . . . 

}
```

For other editions:

```c#
. . . . . . . .
SqlQueryBuilder builder = new SqlQueryBuilder(query);
eqService.Formats.DateFormat = “yyyy-MM-dd”;
builder.BuildSQL();
. . . . . . . .
```

More information about SQL formats you can find in the following [article](//how-to/customizing-sql-query-formats)




## 2. Visual controls / Widgets

Date/time formatting in visual controls or widgets can differ in various editions of EasyQuery. 

### 2.1. ASP.NET MVC
Use `dateFormatValue` and `dateFormatDisplay` options of QueryPanel widgets.
You can find date/time formatting settings in this [article](//tutorials/how-to-set-up-javascript-widgets-mvc-version), items 2.1 and 2.2.

### 2.2. ASP.NET WebForms and WinForms
In these editions, you can use `Apperance.DateFormat` and `Appearance.TimeFormat` properties of QueryPanel control. The format of date+time values is set as a concatenation of these two formats. 
Example:
```c#
QueryPanel1.Appearance.DateFormat = "MM/dd/yyyy";
QueryPanel1.Appearance.TimeFormat = "HH:mm";
```

### 2.3. WPF and Silverlight
Both these editions do not have any additional options which would allow you to change date/time values format in visual controls. Instead, they use the formats defined in `CurrentCuluture` property for a current thread.
Here is how you can change current culture setting for your application:

 ```c#
//set current culture to Ukrainian
System.Threading.Thread.CurrentThread.CurrentCulture = new System.Globalization.CultureInfo("uk-UA");
```


## 3. Displaying date/time values in result grid

Although this part is not covered by EasyQuery components directly, we are often asked about formatting date/time values in the table or grid that display the result set you got after query execution. 
Here we collected the most useful recommendations on this topic: 

### 3.1. ASP.NET/MVC 
You can find date/time formatting settings in this [article](//tutorials/managing-result-grid-client-side) 

### 3.2. ASP.NET WebForms edition
Here we guess that you use GridView control to show the result set. In such case, you can use BoundField element together with its DataFormatString property for formatting date/time values.
For more information about BoundField, please read MSDN [article](https://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.boundfield.aspx)

Here is an example of defining date column with formatting:

```c#
<asp:BoundField DataField="OrderDate" HeaderText="Order Date" 
  DataFormatString="{0:MM/dd/yyyy hh:mm tt}" />
```

### 3.3 WinForms edition
You can use DefaultCellStyle.Format property for a particular column in your data grid:

```c#
dataGrid.Columns[2].DefaultCellStyle.Format = "MM/dd/yyyy HH:mm:ss";
```


### 3.4. WPF and Silverlight
In our examples, we use DataGrid control to show the result sets.
To set proper date/time format for DataGrid columns you can use AutoGeneratingColumn event handler:

```xml
<DataGrid AutoGeneratingColumn="OnAutoGeneratingColumn" ... />
```

And then in behind code do something like this:

```c#
private void OnAutoGeneratingColumn(object sender, DataGridAutoGeneratingColumnEventArgs e)
{
  if (e.PropertyType == typeof(System.DateTime))
  (e.Column as DataGridTextColumn).Binding.StringFormat = "dd/MM/yyyy";
}
```
