---
title: Upgrading to 5.x WinForms and WPF projects
slug: upgrade-instructions/net4-editions-from-3-x-to-5-x/winforms-and-wpf
sidebar:
  order: 100
---

This tutorial describes how to modify your old Windows Forms or WPF project with EasyQuery 3.x to upgrade to EasyQuery version 5.2.0 (or higher).

> Please note. Version 5.2.0 of EasyQuery works only on .NET Framework 4.6.1 or higher. So, if your project targets a lower version of .NET Framework - you will need to update Target  Framework for your project first (right-click on the project in Solution Explorer, select Properties, then use "Target Framework" drop-down list on the Application tab). 

## Step 1: Update EasyQuery packages

1.1 Remove the references to all Korzh.EasyQuery.* assemblies you are using now.

2.2 Use NuGet Package Manager to install the following packages:

* `Korzh.EasyQuery.WinForms` - for Windows Forms projects
* `Korzh.EasyQuery.Wpf` - for WPF projects
* `Korzh.EasyQuery.EntityFramewok6` - if you are using Entity Framework 6.x 
* `Korzh.EasyQuery.DataExport` - if you will need the data exporting functions
* `Korzh.EasyQuery.MsSqlGate` (or `.MySqlGate` or `.OdbcGate` depending on your DB) - if you need to load your model directly from DB connection.

## Step 2: Update your code

After udpating the packages you will need to make some modifications in your code. The best way to do it, is to try to build the project and the complier will show you all the place which require modifications.

### 1. Rename the namespace 
`Korzh.EasyQuery.WinControls` ->  `Korzh.EasyQuery.WinForms`
`Korzh.EasyQuery.WpfControls` ->  `Korzh.EasyQuery.Wpf`

### 2. Rename the class names

* `SortColumnsPanel` -> `SortingPanel`
*  `QueryColumnsPanel` -> `ColumnsPanel`

### 3. Rename/remove the properties

There some properties in EasyQuery components which are assigned during the initialization part. You will need either to rename them or to remove completely:

* `DbModel.ModelName` -> `DbModel.Name`
* `DbQuery.QueryName` -> `DbQuery.Name`
* `DbQuery.Formats.*` - remove them all (`Formats` property was moved to the `SqlQueryBuilder` class).
* `DbQuery.FilePath` - remove it.


### 4. Exporting functions

To update the exporting function you need to reference `Korzh.EasyQuery.DataExport` package in your project and add `Korzh.EasyQuery.Services` namespace to your module.

After that you just need to replace the code that make the exporting from something like:

```c#
if (saveFileDialog.ShowDialog(this) == DialogResult.OK) {
    StringBuilder sb = DbExport.ExportToExcelHtml(ResultDS, HtmlFormats.Default);
    File.WriteAllText(saveFileDialog.FileName, sb.ToString());
}
```

to 

```c#
if (saveFileDialog.ShowDialog(this) == DialogResult.OK) {
    var exporter = new ExcelHtmlDataExporter();
    using (var streamWriter = File.OpenWrite(saveFileDialog.FileName))
        exporter.Export(ResultDS.Tables[0].CreateDataReader(), streamWriter);
}
```

Of course, in case of exporting to CSV it will be `CsvDataExporter` instead of `ExcelHtmlDataExporter`.


## Done

That's all. If there any problems or questios regarding the upgrade - please post a [support request](https://korzh.com/support) on our website.
