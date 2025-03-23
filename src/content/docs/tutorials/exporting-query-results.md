---
title: Exporting query results
slug: tutorials/exporting-query-results
---


## 1. Problem Overview

After building, executing and getting results from a query, users often may have a need to save their data in another format or transfer it for further processing to another program (e.g. Excel).

Though EasyQuery wasn’t created to implement these functions, we provide some simple functionality for exporting. 

## 2. Korzh.Utils.Db

Exporting functionality is provided by `Korzh.Utils.Db` unit which is available via corresponding assembly (e.g. `Korzh.Utils.Db.NET45.dll`). While this assembly is distributed with EasyQuery, it isn’t directly connected to other EasyQuery modules and can be used separately without any limits. 

The primary functions of this module are provided by the static class `DbExport`. Its functionality allows you to export data from `DataSet` or `DataTable` to CSV (comma-separated file) format or Excel-compatible (more about that later) HTML.

## 3. Examples

### 3.1. Exporting dataset to CSV stream with default formatting:

```c#
DbExport.ExportToCsv(dataset, outputStream, CsvFormats.Default);
```

### 3.2. Exporting DataTable object to CSV text writer with custom formatting:

```c#
var formats = new CsvFormats {
  Separator = ",",
  DateFormat = "yyyy-MM-dd",
  ShowColumnNames = true,
  QuoteAlways = true
};

DbExport.ExportToCsv(dataTable, textWriter, formats);
```

### 3.3. Exporting dataset to HTML stream with custom formatting:

```c# 
var formats = new HtmlFormats {
  DateFormat = "yyyy-MM-dd", //format for date values
  HeaderBgColor = "#555", //color of header's backgroud (dark-grey)
  HeaderFgColor = "#FFF", //color of header's text (white)
};
DbExport.ExportToExcelHtml(dataset, Response.Output, formats);
```

NB 1: Exporting dataset means that we will export the first DataTable in its Tables list.

NB 2: Although we usually return an .xls file in our demos - that is not a native Excel file actually. It's an HTML file which is specially structured to be imported by Excel as a nicely formatted spreadsheet. We give it .xls extension to make browser to pass it to Excel automatically. However, you may get a security warning from Excel because the format of the file (HTML) does not correspond to file extension (.xls).

## 4. DbExport API

### 4.1. DbExport class

All functions in this class are static

* **ExportToCsv(DataSet dataset, Stream stream)** : *bool*

Exports the content of some DataSet object to CSV file (referenced as a Stream object) with default formatting.
Returns true if export was successful, otherwise - false.

* **ExportToCsv(DataSet dataset, Stream stream, CsvFormats formats)**: *bool*

Exports the content of some DataSet object to CSV file with custom formatting.
Returns true if export was successful, otherwise - false

* **ExportToCsv(DataSet dataset, TextWriter writer, CsvFormats formats)**: *bool*

Changes the content of some DataSet object to CSV file.

* **ExportToCsv(DataTable table, Stream stream)**: *bool*

Transforms some DataTable object to CSV file.

* **ExportToCsv(DataTable table, Stream stream, CsvFormats formats)**: *bool*

Exports the content of some DataTable object to CSV file.

* **ExportToCsv(DataSet dataSet, CsvFormats formats)**: *StringBuilder*

Switches some DataSet object into CSV file.

* **ExportToCsv(DataView view, CsvFormats formats)**: *StringBuilder*

Exports data from DataView object into CSV file.

* **ExportToCsv(DataTable table, CsvFormats formats)**: *StringBuilder*

Changes data from a DataTable object into CSV file.

* **ExportToCsv(DataTable table, TextWriter writer, CsvFormats formats)**: *bool*

Exports data from a DataTable object into CSV file.

* **ExportToExcelHtml(DataSet dataset, TextWriter writer, HtmlFormats formats)**: *bool* 

Exports DataSet content to HTML prepared for using in Excel. 

* **ExportToExcelHtml(DataSet dataSet, HtmlFormats formats)**: *StringBuilder*

Transforms the content of some DataSet object into HTML formatted for using in Excel

* **ExportToExcelHtml(DataTable table, HtmlFormats formats)**: *StringBuilder*

Sets the content up of some DataTable object into HTML formatted for using in Excel 

* **ExportToExcelHtml(DataTable table, TextWriter writer, HtmlFormats formats)**: *bool* 

Exports DataTable content to HTML prepared for using in Excel.

### 4.2. CsvFormats class

There are different options of CsvFormats class which can be used to set up formatting of result CSV file: 

* **Separator**: *string*

Sets the separator. 


* **QuoteAlways**: *bool*

Creates a value indicating whether we should always put quotes around field values. If it's false - quotes will be added only if it's necessary. 


* **DateFormat**: *string*

Sets the format of date values. 

* **TimeFormat**: *string*

Defines the format of time values. 

* **CsvFormats**:

Initializes a new instance of the <see cref="CsvFormats"/> class. 

* **CsvFormats Default** = new CsvFormats

Creates the default formats.

### 4.3. HtmlFormats class 

This class allows defining different formats for result HTML files.


* **FontSize**: *int*

Sets the size of the font

* **FontFamily**: *string*

Sets the font family. 

* **TableBgColor**: *string*

Defines the color of the table debug

* **ThicknessOfBorder**: *int*

Sets the thickness of the border. 

* **TableBorderColor**: *string*

Defines the color of the table border.

* **ThowColumnNames**: *bool*

Sets a value indicating whether column names should be included into an export result.

* **HeaderBgColor**: *string*

Defines the color of the header bg. 

* **HeaderFgColor**: string

Changes the color of the header fg.

* **HeaderFontWeight**: *string*

Sets the header font weight.

* **FixHtmlTags**: *bool*.